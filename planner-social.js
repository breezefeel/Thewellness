/* 인스타·쓰레드 「지금 올리기 · 예약하기」 + 이미지 탭 미디어(Supabase Storage)
 * - 미디어: social-media 버킷 drafts/<초안ID>/ — 이미지 탭에서 올리고, 썸네일 「저장하기」도 여기로
 * - 순서·커버는 같은 폴더의 _layout.json (파일 자체는 지우지 않음). 커버가 없으면 영상(mp4)이 아닌 첫 사진이 썸네일
 * - 게시: social_posts 표에 넣고 Edge Function social-publish 가 올린다. 예약은 1분마다 클라우드가 확인
 * - 게시는 @dr.park_dc.pt 하나로, 프로그램 계정은 공동작업자 (planner.js getInstagramCollabUsernameForCat_)
 * 설치: tools/social_setup.py · 표: planner-social.sql · 함수: supabase/functions/social-publish
 */
var PlannerSocial = (function(){
  var BUCKET = 'social-media';
  var cache = {};      // draftId → [{name, path, url, type, cover, thumb}]
  var postsCache = {}; // draftId → [social_posts rows]
  var layoutCache = {}; // draftId → { order: [name], cover: name } | null

  function client(){
    if(typeof PlannerSyncSupabase === 'undefined' || !PlannerSyncSupabase.configured()) return Promise.reject(new Error('Supabase 설정이 없어요.'));
    return PlannerSyncSupabase.client().catch(function(){
      throw new Error('팀 로그인이 필요해요. 오른쪽 위 「동기화」에서 로그인해 주세요.');
    });
  }
  function folder(draftId){ return 'drafts/' + String(draftId || 'none').replace(/[^A-Za-z0-9_-]/g, '_'); }
  function isVideoName(name, mime){ return /^video\//.test(mime || '') || /\.(mp4|mov|m4v|webm)$/i.test(name || ''); }
  function isMediaFileName(name){ return /\.(jpe?g|png|webp|gif|mp4|mov|m4v|webm)$/i.test(name || ''); }
  function layoutPath(draftId){ return folder(draftId) + '/_layout.json'; }

  /** 인스타 API는 JPEG만 받는다 → 이미지는 JPEG로 바꿔 올린다 (영상은 그대로) */
  function toJpeg(blob){
    if(/^image\/jpe?g$/i.test(blob.type || '')) return Promise.resolve(blob);
    return new Promise(function(resolve, reject){
      var url = URL.createObjectURL(blob);
      var img = new Image();
      img.onload = function(){
        var c = document.createElement('canvas');
        c.width = img.naturalWidth; c.height = img.naturalHeight;
        var g = c.getContext('2d');
        g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
        g.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        c.toBlob(function(b){ b ? resolve(b) : reject(new Error('JPEG 변환 실패')); }, 'image/jpeg', 0.92);
      };
      img.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('이미지를 읽지 못했어요 (HEIC는 사진 앱에서 JPEG로 내보내 주세요)')); };
      img.src = url;
    });
  }

  function readLayout(sb, draftId){
    return sb.storage.from(BUCKET).download(layoutPath(draftId)).then(function(res){
      if(!res || res.error || !res.data) return null;
      return res.data.text();
    }).then(function(text){
      if(!text) return null;
      try {
        var obj = JSON.parse(text);
        if(!obj || typeof obj !== 'object') return null;
        return {
          order: Array.isArray(obj.order) ? obj.order.map(String) : [],
          cover: typeof obj.cover === 'string' ? obj.cover : ''
        };
      } catch(e){ return null; }
    }).catch(function(){ return null; });
  }
  function writeLayout(draftId, names, cover){
    var body = JSON.stringify({ order: names, cover: cover || '' });
    var blob = new Blob([body], { type: 'application/json' });
    return client().then(function(sb){
      return sb.storage.from(BUCKET).upload(layoutPath(draftId), blob, { contentType: 'application/json', upsert: true });
    }).then(function(res){
      if(res && res.error) throw new Error(res.error.message);
    });
  }
  /** 저장해 둔 순서를 적용한다. 목록에 없는 이름은 버리고, 새로 생긴 파일은 뒤에 붙인다. */
  function orderMedia(files, layout){
    var byName = {};
    files.forEach(function(f){ byName[f.name] = f; });
    var used = {};
    var out = [];
    var order = layout && Array.isArray(layout.order) ? layout.order : null;
    if(order){
      order.forEach(function(name){
        if(byName[name] && !used[name]){ out.push(byName[name]); used[name] = 1; }
      });
    }
    files.slice().sort(function(a, b){ return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0); }).forEach(function(f){
      if(!used[f.name]) out.push(f);
    });
    var coverName = '';
    if(layout && layout.cover && byName[layout.cover] && byName[layout.cover].type !== 'VIDEO') coverName = layout.cover;
    var implicit = '';
    if(!coverName){
      for(var i = 0; i < out.length; i++){
        if(out[i].type !== 'VIDEO'){ implicit = out[i].name; break; }
      }
    }
    out.forEach(function(m){
      m.cover = !!(coverName && m.name === coverName);
      m.thumb = coverName ? m.name === coverName : m.name === implicit;
    });
    return out;
  }
  function listMedia(draftId){
    return client().then(function(sb){
      return sb.storage.from(BUCKET).list(folder(draftId), { limit: 100, sortBy: { column: 'name', order: 'asc' } }).then(function(res){
        if(res.error) throw new Error(res.error.message);
        var files = (res.data || []).filter(function(f){ return f && isMediaFileName(f.name); }).map(function(f){
          var path = folder(draftId) + '/' + f.name;
          return { name: f.name, path: path, url: sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl,
            type: isVideoName(f.name, f.metadata && f.metadata.mimetype) ? 'VIDEO' : 'IMAGE', cover: false, thumb: false };
        });
        return readLayout(sb, draftId).then(function(layout){
          layoutCache[draftId] = layout;
          var list = orderMedia(files, layout);
          cache[draftId] = list;
          return list;
        });
      });
    });
  }

  /** first: 피드 첫 장(썸네일)으로 맨 앞에 둔다 */
  function upload(draftId, blob, origName, opts){
    opts = opts || {};
    var video = isVideoName(origName, blob.type);
    return (video ? Promise.resolve(blob) : toJpeg(blob)).then(function(b){
      var ext = video ? ((String(origName).match(/\.(mp4|mov|m4v|webm)$/i) || [0, 'mp4'])[1].toLowerCase()) : 'jpg';
      var name = (opts.first ? '0_thumb_' : '1_') + Date.now() + '_' + Math.random().toString(36).slice(2, 6) + '.' + ext;
      return client().then(function(sb){
        return sb.storage.from(BUCKET).upload(folder(draftId) + '/' + name, b, { contentType: video ? (blob.type || 'video/mp4') : 'image/jpeg', upsert: false });
      }).then(function(res){
        if(res.error) throw new Error(res.error.message.indexOf('maximum allowed size') >= 0 ? '파일이 50MB를 넘어요. 영상은 압축해서 올려 주세요.' : res.error.message);
        return name;
      });
    });
  }
  function removeMedia(path){
    return client().then(function(sb){ return sb.storage.from(BUCKET).remove([path]); });
  }
  /** 썸네일 「저장하기」: 예전 썸네일을 지우고 새 썸네일을 첫 장으로 */
  function saveThumb(draftId, blob, name){
    return listMedia(draftId).then(function(list){
      var old = list.filter(function(m){ return /^0_thumb_/.test(m.name); }).map(function(m){ return m.path; });
      return old.length ? client().then(function(sb){ return sb.storage.from(BUCKET).remove(old); }) : null;
    }).then(function(){ return upload(draftId, blob, name, { first: true }); })
      .then(function(newName){
        return listMedia(draftId).then(function(list){
          var names = list.map(function(m){ return m.name; }).filter(function(n){ return n !== newName; });
          names.unshift(newName);
          var added = list.filter(function(m){ return m.name === newName; })[0];
          var cover = added && added.type !== 'VIDEO' ? newName : explicitCoverName(list.filter(function(m){ return m.name !== newName; }));
          return writeLayout(draftId, names, cover);
        });
      })
      .then(function(){ if(document.querySelector('[data-social-slot]')) hydrate(); });
  }

  function toast(msg, variant, ms){ if(typeof setAppToast === 'function') setAppToast(msg, { duration: ms || 3200, variant: variant || 'ok' }); }
  function esc(s){ return typeof escapeHtml === 'function' ? escapeHtml(s) : String(s); }
  function curDraft(){ return state.selectedId; }
  function curCat(){ return state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId); }

  // ── 화면 ─────────────────────────────────────────────
  function mediaBtn_(label, onclick, disabled){
    return '<button type="button" onclick="' + onclick + '"' + (disabled ? ' disabled' : '') +
      ' style="border:1px solid rgba(15,23,42,.16);background:#fff;border-radius:8px;font-size:12px;line-height:1.2;padding:6px 8px;min-height:32px;cursor:pointer' +
      (disabled ? ';opacity:.35' : '') + '">' + label + '</button>';
  }
  function mediaGridHTML(list, editable){
    if(!list.length) return '<div style="font-size:12px;opacity:.7;padding:6px 0">아직 올린 사진·영상이 없어요.</div>';
    return '<div style="display:flex;flex-direction:column;gap:8px;margin-top:8px">' + list.map(function(m, i){
      var thumb = m.type === 'VIDEO'
        ? '<video src="' + esc(m.url) + '#t=0.5" muted playsinline preload="metadata" style="width:100%;height:100%;object-fit:cover"></video><span style="position:absolute;left:4px;bottom:4px;font-size:10px;background:rgba(0,0,0,.6);color:#fff;border-radius:4px;padding:0 4px">릴스</span>'
        : '<img src="' + esc(m.url) + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover">';
      var badge = m.cover
        ? '<span style="position:absolute;left:4px;top:4px;font-size:10px;background:#0F766E;color:#fff;border-radius:4px;padding:0 4px">커버</span>'
        : (m.thumb ? '<span style="position:absolute;left:4px;top:4px;font-size:10px;background:#1e3a6e;color:#fff;border-radius:4px;padding:0 4px">썸네일</span>' : '');
      var tools = '';
      if(editable){
        tools = '<div style="display:flex;flex-wrap:wrap;gap:6px;flex:1;min-width:0">' +
          mediaBtn_('위로', 'PlannerSocial.move(' + i + ',-1)', i === 0) +
          mediaBtn_('아래로', 'PlannerSocial.move(' + i + ',1)', i === list.length - 1) +
          (m.type === 'VIDEO' ? '' : mediaBtn_(m.cover ? '커버 해제' : '커버로 지정', 'PlannerSocial.setCover(' + i + ')', false)) +
          mediaBtn_('받기', 'PlannerSocial.download(' + i + ')', false) +
          mediaBtn_('삭제', 'PlannerSocial.remove(' + i + ')', false) +
        '</div>';
      }
      return '<div style="display:flex;gap:8px;align-items:flex-start;width:100%">' +
        '<div style="position:relative;width:84px;height:105px;flex:0 0 auto;border-radius:8px;overflow:hidden;background:#eef2f7;border:1px solid rgba(15,23,42,.12)">' + thumb + badge + '</div>' +
        tools +
      '</div>';
    }).join('') + '</div>';
  }
  function postsHTML(rows){
    if(!rows || !rows.length) return '';
    var label = { queued: '올리는 중', publishing: '올리는 중', processing: '영상 처리 중', scheduled: '예약', published: '게시됨', failed: '실패', canceled: '취소됨' };
    return '<div style="margin-top:8px;font-size:12px;line-height:1.6">' + rows.map(function(r){
      var when = r.status === 'published' ? r.published_at : (r.scheduled_at || r.created_at);
      var t = when ? new Date(when).toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '';
      var link = r.result && r.result.permalink ? ' · <a href="' + esc(r.result.permalink) + '" target="_blank" rel="noopener">보기</a>' : '';
      var cancel = r.status === 'scheduled' ? ' · <button type="button" class="img-tool-copy-btn" style="padding:1px 8px" onclick="PlannerSocial.cancel(\'' + r.id + '\')">예약 취소</button>' : '';
      var err = r.status === 'failed' && r.error ? '<div style="color:#b91c1c">' + esc(r.error) + '</div>' : '';
      return '<div><b style="color:' + (r.status === 'failed' ? '#b91c1c' : (r.status === 'published' ? '#0F766E' : '#1e3a6e')) + '">' + (label[r.status] || r.status) + '</b> ' + esc(t) + link + cancel + err + '</div>';
    }).join('') + '</div>';
  }

  /** 시트 본문의 <div data-social-slot="images|insta|threads"> 를 채운다 */
  function hydrate(){
    var draftId = curDraft();
    var slots = document.querySelectorAll('[data-social-slot]');
    if(!draftId || !slots.length) return;
    slots.forEach(function(el){ el.innerHTML = '<div style="font-size:12px;opacity:.6">불러오는 중…</div>'; });
    listMedia(draftId).then(function(list){
      return loadPosts(draftId).then(function(rows){ paint(list, rows); });
    }).catch(function(err){
      paint([], []);
      document.querySelectorAll('[data-social-slot]').forEach(function(el){
        var note = document.createElement('div');
        note.style.cssText = 'font-size:12px;color:#b91c1c;margin-top:6px;line-height:1.5';
        note.textContent = err.message;
        el.appendChild(note);
      });
    });
  }
  function paint(list, rows){
    document.querySelectorAll('[data-social-slot]').forEach(function(el){
      var kind = el.getAttribute('data-social-slot');
      var mine = (rows || []).filter(function(r){ return kind === 'images' || r.platform === (kind === 'insta' ? 'instagram' : 'threads'); });
      if(kind === 'images'){
        el.innerHTML = '<div class="img-section-title"><span>인스타·쓰레드에 올릴 사진·릴스</span></div>' +
          '<p style="font-size:12px;color:#6B7280;margin:0 0 6px;line-height:1.55">여기 올린 파일이 인스타 탭 「지금 올리기·예약하기」에 그대로 쓰입니다. 순서는 <strong>위·아래</strong>로 바꿉니다. <strong>커버로 지정</strong>한 사진이 썸네일입니다. 지정하지 않으면 영상(mp4)이 아닌 첫 사진이 썸네일입니다. 사진은 JPEG로 바꿔 올리고, 영상은 50MB까지. 여러 장이면 캐러셀(최대 10장).</p>' +
          '<label class="thumb-maker-photo-btn" style="display:inline-block;cursor:pointer">사진·릴스 올리기<input type="file" accept="image/*,video/*" multiple style="display:none" onchange="PlannerSocial.onPick(this)"></label>' +
          mediaGridHTML(list, true);
      } else if(kind === 'insta'){
        el.innerHTML = '<div class="ops-kw-preview-head" style="margin-top:4px">올릴 사진·릴스 <span>' + list.length + '개 · 이미지 탭에서 바꿉니다</span></div>' + mediaGridHTML(list, false) + postsHTML(mine);
      } else {
        el.innerHTML = '<label style="display:inline-flex;gap:6px;align-items:center;font-size:12px;margin-top:4px"><input type="checkbox" id="social-threads-media"' + (list.length ? '' : ' disabled') + '> 이미지 탭 사진·영상도 같이 올리기 (' + list.length + '개)</label>' +
          '<div style="font-size:11.5px;opacity:.7;margin-top:2px">댓글 박스의 빈 줄마다 본문 아래 이어지는 댓글로 하나씩 올립니다.</div>' + postsHTML(mine);
      }
    });
  }
  function loadPosts(draftId){
    return client().then(function(sb){
      return sb.from('social_posts').select('id,platform,status,scheduled_at,published_at,created_at,result,error').eq('draft_id', draftId)
        .order('created_at', { ascending: false }).limit(10);
    }).then(function(res){
      postsCache[draftId] = (res && res.data) || [];
      return postsCache[draftId];
    }).catch(function(){ return []; });
  }

  function onPick(input){
    var files = Array.prototype.slice.call((input && input.files) || []);
    var draftId = curDraft();
    if(!files.length || !draftId) return;
    toast(files.length + '개 올리는 중…', 'ok', 2500);
    var chain = Promise.resolve();
    files.forEach(function(f){ chain = chain.then(function(){ return upload(draftId, f, f.name); }); });
    chain.then(function(){ toast('Supabase에 올렸어요 (' + files.length + '개)'); hydrate(); })
      .catch(function(err){ toast(err.message, 'err', 6000); hydrate(); });
    input.value = '';
  }
  function download(i){
    var m = (cache[curDraft()] || [])[i];
    if(!m) return;
    fetch(m.url).then(function(r){ return r.blob(); }).then(function(b){
      return typeof saveThumbMakerBlob_ === 'function' ? saveThumbMakerBlob_(b, m.name) : null;
    }).catch(function(err){ toast(err.message, 'err'); });
  }
  function explicitCoverName(list){
    var hit = (list || []).filter(function(m){ return m && m.cover; })[0];
    return hit ? hit.name : '';
  }
  function persistOrder(draftId, list, coverName){
    return writeLayout(draftId, list.map(function(m){ return m.name; }), coverName).then(function(){ return hydrate(); });
  }
  function move(i, dir){
    var draftId = curDraft();
    var list = (cache[draftId] || []).slice();
    var j = i + dir;
    if(!list[i] || j < 0 || j >= list.length) return;
    var tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
    persistOrder(draftId, list, explicitCoverName(list)).catch(function(err){ toast(err.message, 'err'); });
  }
  function setCover(i){
    var draftId = curDraft();
    var list = cache[draftId] || [];
    var m = list[i];
    if(!m || m.type === 'VIDEO') return;
    var cover = m.cover ? '' : m.name;
    persistOrder(draftId, list, cover).catch(function(err){ toast(err.message, 'err'); });
  }
  function remove(i){
    var draftId = curDraft();
    var list = (cache[draftId] || []).slice();
    var m = list[i];
    if(!m || !window.confirm('이 파일을 Supabase에서 지울까요?')) return;
    var next = list.filter(function(item){ return item && item.name !== m.name; });
    var cover = explicitCoverName(list) === m.name ? '' : explicitCoverName(list);
    removeMedia(m.path).then(function(){
      if(!layoutCache[draftId] && !cover) return hydrate();
      return persistOrder(draftId, next, cover);
    }).catch(function(err){ toast(err.message, 'err'); });
  }

  // ── 게시 ─────────────────────────────────────────────
  function buildPost(platform){
    var draftId = curDraft();
    var catId = curCat();
    var content = getDraftContent_(draftId);
    if(!content) throw new Error('초안이 없어요.');
    var tab = platform === 'instagram' ? 'insta' : 'threads';
    applySheetEditsForTab_(content, tab);
    persistDraftContent_(draftId, content);
    var media = (cache[draftId] || []).map(function(m){
      return { url: m.url, path: m.path, type: m.type, cover: !!m.thumb };
    });
    var cat = CATEGORIES[catId];
    var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });
    var row = { platform: platform, draft_id: draftId, cat_id: catId, topic: draft ? draft.topic : '' };
    if(platform === 'instagram'){
      if(!content.insta) throw new Error('인스타 캡션이 없어요.');
      if(!media.length) throw new Error('올릴 사진·릴스가 없어요. 이미지 탭에서 먼저 올려 주세요.');
      row.caption = getInstaFullPasteText_(content.insta, catId);
      row.media = media.slice(0, 10);
      var collab = String(getInstagramCollabUsernameForCat_(catId) || '').replace(/^@/, '').trim();
      row.collaborators = collab ? [collab] : [];
    } else {
      var th = content.threads;
      if(!th || !getThreadsBodyText_(th)) throw new Error('쓰레드 본문이 없어요.');
      row.caption = getThreadsBodyText_(th);
      row.reply_text = getThreadsCommentText_(th) || null;
      var withMedia = document.getElementById('social-threads-media');
      row.media = withMedia && withMedia.checked ? media.slice(0, 20) : [];
    }
    if(String(row.caption || '').length > 2200 && platform === 'instagram') throw new Error('인스타 캡션은 2,200자까지예요.');
    if(String(row.caption || '').length > 500 && platform === 'threads') throw new Error('쓰레드 본문은 500자까지예요. 나머지는 「댓글」로 옮겨 주세요.');
    return row;
  }

  function isAbortErr_(err){
    var name = err && err.name ? String(err.name) : '';
    var msg = String((err && err.message) || err || '');
    return name === 'AbortError' || /abort/i.test(msg);
  }
  function waitMs_(ms){
    return new Promise(function(resolve){ setTimeout(resolve, ms); });
  }
  function publishResultFromRow_(id, data){
    var result = (data && data.result) || {};
    if(data && data.status === 'published'){
      return { data: Object.assign({ id: id, status: 'published' }, result), error: null };
    }
    if(data && data.status === 'processing'){
      return { data: { id: id, status: 'processing' }, error: null };
    }
    if(data && data.status === 'failed'){
      return { data: { id: id, status: 'failed', error: data.error || '게시에 실패했어요.' }, error: null };
    }
    return null;
  }
  // 응답만 끊긴 경우 바로 다시 올리면 같은 글이 두 번 올라간다.
  // 이미 게시 중이면 결과만 확인하고, 아직 시작 전일 때만 한 번 더 요청한다.
  function recoverPublish_(sb, id, attempt, retried){
    return waitMs_(1500).then(function(){
      return sb.from('social_posts').select('status,result,error').eq('id', id).single();
    }).then(function(row){
      if(row && row.error){
        if(isAbortErr_(row.error) && attempt < 6) return recoverPublish_(sb, id, attempt + 1, retried);
        throw new Error(row.error.message || '게시 상태를 확인하지 못했어요.');
      }
      var data = row && row.data;
      var settled = publishResultFromRow_(id, data);
      if(settled) return settled;
      var st = data && data.status;
      if(st === 'publishing' && attempt < 6){
        return recoverPublish_(sb, id, attempt + 1, retried);
      }
      if((!st || st === 'queued') && !retried){
        return sb.functions.invoke('social-publish', { body: { action: 'publish', id: id } }).then(function(res){
          if(res && res.error && isAbortErr_(res.error)) return recoverPublish_(sb, id, attempt + 1, true);
          return res;
        }).catch(function(err){
          if(isAbortErr_(err)) return recoverPublish_(sb, id, attempt + 1, true);
          throw err;
        });
      }
      if(st === 'publishing'){
        throw new Error('아직 올리는 중이에요. 잠시 후 게시 목록을 확인해 주세요.');
      }
      throw new Error('게시 요청이 끊겼어요. 잠시 후 게시 목록을 확인해 주세요.');
    }).catch(function(err){
      if(isAbortErr_(err) && attempt < 6) return recoverPublish_(sb, id, attempt + 1, retried);
      throw err;
    });
  }
  function invokePublish_(sb, id){
    return sb.functions.invoke('social-publish', { body: { action: 'publish', id: id } }).then(function(res){
      if(res && res.error && isAbortErr_(res.error)) return recoverPublish_(sb, id, 0);
      return res;
    }).catch(function(err){
      if(isAbortErr_(err)) return recoverPublish_(sb, id, 0);
      throw err;
    });
  }
  function publishNow(platform){
    var row;
    try { row = buildPost(platform); } catch(e){ toast(e.message, 'err', 5000); return; }
    var label = platform === 'instagram' ? '인스타' : '쓰레드';
    if(!window.confirm(label + '에 지금 올릴까요?' + (platform === 'instagram' && row.collaborators.length ? '\n공동작업자: @' + row.collaborators.join(', @') : ''))) return;
    row.status = 'queued';
    row.scheduled_at = new Date().toISOString();
    setBusy(true, label + '에 올리는 중…', postEstimateSec(row));
    var sb;
    client().then(function(c){ sb = c; return sb.from('social_posts').insert(row).select('id').single(); })
      .then(function(res){
        if(res.error) throw new Error(res.error.message);
        return invokePublish_(sb, res.data.id);
      })
      .then(function(res){
        setBusy(false);
        if(res.error) throw new Error(res.error.message || '게시 요청 실패');
        var d = res.data || {};
        if(d.status === 'published'){
          markPublished(platform, d.permalink);
        } else if(d.status === 'processing'){
          toast('영상을 처리하고 있어요. 처리가 끝나면 1분 안에 자동으로 게시됩니다.', 'ok', 6000);
          hydrate();
        } else {
          throw new Error(d.error || '게시에 실패했어요.');
        }
      })
      .catch(function(err){ setBusy(false); toast(label + ' 게시 실패: ' + err.message, 'err', 9000); hydrate(); });
  }
  /** 게시 성공 → 기존 「발행완료」 처리(발행 기록·다음 채널 초안)를 복사·앱 이동 없이 실행 */
  function markPublished(platform, permalink){
    toast((platform === 'instagram' ? '인스타' : '쓰레드') + '에 올렸어요' + (permalink ? '\n' + permalink : ''), 'ok', 5000);
    if(typeof window.onSheetPublishComplete === 'function') window.onSheetPublishComplete({ viaApi: true });
  }

  function schedule(platform){
    var row;
    try { row = buildPost(platform); } catch(e){ toast(e.message, 'err', 5000); return; }
    var key = platform === 'instagram' ? 'insta' : 'threads';
    var label = platform === 'instagram' ? '인스타' : '쓰레드';
    var cached = (postsCache[curDraft()] || []).filter(function(r){ return r.platform === platform && r.status === 'scheduled'; })[0];
    var plan = typeof getChannelPlan_ === 'function' ? getChannelPlan_(curDraft(), key) : null;
    var postId = (cached && cached.id) || (plan && plan.postId) || '';
    var editing = !!postId || !!(plan && plan.at);
    var openPicker = typeof openOpsSchedulePicker_ === 'function' ? openOpsSchedulePicker_ : openSchedulePicker.bind(null, platform);
    if(typeof openOpsSchedulePicker_ !== 'function'){
      openSchedulePicker(platform, function(when){ saveSchedule(when, ''); });
      return;
    }
    openPicker({
      title: (editing ? label + ' 예약 수정' : label + ' 예약'),
      value: (cached && cached.scheduled_at) || (plan && plan.at) || '',
      editing: editing,
      hint: '그 시간이 지나면 1분 안에 클라우드가 올립니다. 날짜 칩에도 표시됩니다.',
      onOk: function(when){ saveSchedule(when, postId); }
    });
    function saveSchedule(when, id){
      var finish = function(savedId){
        if(typeof setChannelPlan_ === 'function') setChannelPlan_(curDraft(), curCat(), key, when.toISOString(), savedId || id || '');
        var btn = document.querySelector('[data-social-schedule]');
        if(btn && typeof opsPlanChipLabel_ === 'function') btn.textContent = opsPlanChipLabel_(when.toISOString()) + ' 수정';
        toast(label + ' 예약: ' + when.toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) +
          '\n컴퓨터가 꺼져 있어도 그 시간에 올라갑니다.', 'ok', 5000);
        if(platform === 'instagram' && typeof enqueueThreadsFromInsta_ === 'function'){
          var content = getDraftContent_(curDraft());
          var cat = CATEGORIES[curCat()];
          var draft = cat && cat.drafts.find(function(d){ return d.id === curDraft(); });
          if(content && content.insta && !(content.threads && getThreadsBodyText_(content.threads))){
            try { enqueueThreadsFromInsta_(curDraft(), curCat(), draft ? draft.topic : '', content.insta, { force: true }); } catch(eTh){}
          }
        }
        hydrate();
      };
      var write = {
        scheduled_at: when.toISOString(),
        caption: row.caption,
        reply_text: row.reply_text || null,
        media: row.media,
        collaborators: row.collaborators || []
      };
      client().then(function(sb){
        if(!id){
          row.status = 'scheduled';
          row.scheduled_at = when.toISOString();
          return sb.from('social_posts').insert(row).select('id').single();
        }
        return sb.from('social_posts').update(write).eq('id', id).eq('status', 'scheduled').select('id').maybeSingle();
      }).then(function(res){
        if(res.error) throw new Error(res.error.message);
        if(id && !res.data){
          row.status = 'scheduled';
          row.scheduled_at = when.toISOString();
          return client().then(function(sb){ return sb.from('social_posts').insert(row).select('id').single(); });
        }
        return res;
      }).then(function(res){
        if(!res) return;
        if(res.error) throw new Error(res.error.message);
        finish(res.data && res.data.id);
      }).catch(function(err){ toast('예약 실패: ' + err.message, 'err', 8000); });
    }
  }
  function cancel(id){
    if(!window.confirm('예약을 취소할까요?')) return;
    client().then(function(sb){ return sb.from('social_posts').update({ status: 'canceled' }).eq('id', id).eq('status', 'scheduled'); })
      .then(function(){ if(typeof clearChannelPlanByPostId_ === 'function') clearChannelPlanByPostId_(id); hydrate(); })
      .catch(function(err){ toast(err.message, 'err'); });
  }
  function openSchedulePicker(platform, done){
    var d = new Date(Date.now() + 60 * 60000);
    d.setMinutes(0, 0, 0);
    var pad = function(n){ return String(n).padStart(2, '0'); };
    var val = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    var wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(15,23,42,.45);display:flex;align-items:center;justify-content:center;padding:16px';
    wrap.innerHTML = '<div style="background:#fff;border-radius:14px;padding:16px;max-width:360px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.25)">' +
      '<div style="font-weight:700;margin-bottom:8px">' + (platform === 'instagram' ? '인스타' : '쓰레드') + ' 예약</div>' +
      '<input type="datetime-local" value="' + val + '" style="width:100%;font:inherit;padding:8px;border-radius:8px;border:1px solid #cbd5e1">' +
      '<div style="font-size:12px;opacity:.7;margin-top:6px">그 시간이 지나면 1분 안에 클라우드가 올립니다.</div>' +
      '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px"><button type="button" class="ops-kw-btn" data-x>취소</button><button type="button" class="ops-kw-btn ops-kw-btn-primary" data-ok>예약하기</button></div></div>';
    document.body.appendChild(wrap);
    wrap.querySelector('[data-x]').onclick = function(){ wrap.remove(); };
    wrap.querySelector('[data-ok]').onclick = function(){
      var when = new Date(wrap.querySelector('input').value);
      if(isNaN(when.getTime()) || when.getTime() < Date.now() + 60000){ toast('지금보다 1분 이상 뒤로 골라 주세요.', 'err'); return; }
      wrap.remove();
      done(when);
    };
  }
  var postTick = null;
  function stopPostTick(){
    if(postTick){ clearInterval(postTick); postTick = null; }
  }
  function postEstimateSec(row){
    var media = row.media || [];
    var video = media.some(function(m){ return m.type === 'VIDEO' || /^video\//i.test(String(m.type || '')); });
    if(video) return 90;
    if(media.length > 1) return 45;
    if(media.length) return 30;
    var parts = String(row.reply_text || '').split(/\n\s*\n/).filter(function(s){ return String(s).trim(); }).length;
    return Math.min(90, 15 + Math.max(1, parts) * 6);
  }
  function setBusy(on, text, estimateSec){
    document.querySelectorAll('.sheet-actions [data-social-btn]').forEach(function(b){ b.disabled = !!on; });
    stopPostTick();
    if(!on) return;
    var sec = estimateSec || 60;
    var started = Date.now();
    var dur = typeof opsFmtDur_ === 'function' ? opsFmtDur_ : function(n){ return n + '초'; };
    function paint(){
      var left = sec - Math.floor((Date.now() - started) / 1000);
      var msg = left > 0
        ? text + '\n예상 ' + dur(sec) + ' · 남은 시간 ' + dur(left)
        : text + '\n예상 ' + dur(sec) + '을 넘겼습니다. 아직 올리는 중입니다.';
      toast(msg, 'ok', 0);
    }
    paint();
    postTick = setInterval(paint, 1000);
  }

  function scheduleButtonLabel_(platform){
    var key = platform === 'instagram' ? 'insta' : 'threads';
    var plan = typeof getChannelPlan_ === 'function' ? getChannelPlan_(curDraft(), key) : null;
    if(!plan || !plan.at) return '예약하기';
    var when = new Date(plan.at);
    if(isNaN(when.getTime())) return '예약하기';
    var pub = state.published && state.published[curDraft()];
    if(pub && pub.tabPublished && pub.tabPublished[key]) return '예약하기';
    return (typeof opsPlanChipLabel_ === 'function' ? opsPlanChipLabel_(plan.at) : '') + ' 수정';
  }
  function actionsHTML(tab){
    var platform = tab === 'insta' ? 'instagram' : 'threads';
    return '<button type="button" class="btn-sheet-close-action" onclick="onSheetPublishComplete()" title="앱에서 직접 올렸을 때: 저장·복사하고 발행 기록만 남깁니다">직접 올림</button>' +
      '<button type="button" class="btn-save-draft" data-social-btn data-social-schedule onclick="PlannerSocial.schedule(\'' + platform + '\')">' + esc(scheduleButtonLabel_(platform)) + '</button>' +
      '<button type="button" class="btn-pub" data-social-btn onclick="PlannerSocial.publishNow(\'' + platform + '\')">지금 올리기</button>';
  }

  /** 예약 게시가 클라우드에서 올라간 뒤 → 플래너 발행 기록(tabPublished)에 반영 (기기마다 열 때 한 번) */
  function syncPublished(){
    if(typeof PlannerSyncSupabase === 'undefined' || !PlannerSyncSupabase.configured()) return;
    var since = new Date(Date.now() - 30 * 86400000).toISOString();
    PlannerSyncSupabase.client().then(function(sb){
      return sb.from('social_posts').select('draft_id,cat_id,platform,published_at').eq('status', 'published').gte('published_at', since).limit(200);
    }).then(function(res){
      var changed = 0;
      ((res && res.data) || []).forEach(function(r){
        if(!r.draft_id) return;
        var key = r.platform === 'instagram' ? 'insta' : 'threads';
        var pub = state.published && state.published[r.draft_id];
        if(pub && pub.tabPublished && pub.tabPublished[key]) return;
        try {
          commitSheetTabPublish_(r.draft_id, r.cat_id != null ? r.cat_id : getCatIdFromDraftId_(r.draft_id), key, { skipDom: true, at: r.published_at });
          changed++;
        } catch(e){}
      });
      if(changed){
        try { renderTabs(); renderMain(); } catch(e2){}
        toast('예약으로 올라간 게시물 ' + changed + '건을 발행완료로 표시했어요.', 'ok', 3500);
      }
    }).catch(function(){});
    PlannerSyncSupabase.client().then(function(sb){
      return sb.from('social_posts').select('id,draft_id,cat_id,platform,scheduled_at,topic').eq('status', 'scheduled').gte('scheduled_at', new Date().toISOString()).limit(200);
    }).then(function(res){
      var rows = (res && res.data) || [];
      var touched = false;
      rows.forEach(function(r){
        if(!r.draft_id || !r.scheduled_at || typeof setChannelPlan_ !== 'function') return;
        var key = r.platform === 'instagram' ? 'insta' : 'threads';
        var pub = state.published && state.published[r.draft_id];
        if(pub && pub.tabPublished && pub.tabPublished[key]) return;
        var cur = pub && pub.channelPlan && pub.channelPlan[key];
        if(cur && cur.postId === r.id && cur.at && new Date(cur.at).getTime() === new Date(r.scheduled_at).getTime()) return;
        setChannelPlan_(r.draft_id, r.cat_id, key, r.scheduled_at, r.id);
        if(r.topic && state.published[r.draft_id] && !state.published[r.draft_id].topic) state.published[r.draft_id].topic = r.topic;
        touched = true;
      });
      if(touched && typeof paintOpsPlanStrip_ === 'function') paintOpsPlanStrip_();
    }).catch(function(){});
  }
  setTimeout(syncPublished, 6000);

  return { hydrate: hydrate, onPick: onPick, download: download, remove: remove, move: move, setCover: setCover,
    publishNow: publishNow, schedule: schedule, cancel: cancel, actionsHTML: actionsHTML, upload: upload,
    saveThumb: saveThumb, syncPublished: syncPublished };
})();
window.PlannerSocial = PlannerSocial;
