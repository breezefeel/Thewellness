/* 썸네일 만들기의 「내 사진」. 비공개 thumbs 버킷을 팀 로그인으로 고릅니다.
 * 고른 사진은 파일로 올린 배경과 같이 applyLibraryPhotoToThumbMaker_ 로 들어갑니다.
 */
(function(){
  var BUCKET = 'thumbs';
  var SIGN_SECONDS = 60 * 60;
  var SIGN_BATCH = 40;
  var signed = {};
  var rows = [];
  var activeFolder = null;
  var observer = null;
  var queue = [];
  var queueTimer = null;
  var queued = {};
  var busy = false;
  var scrollLocked = false;
  var client = null;

  function overlay(){ return document.getElementById('my-thumbs-overlay'); }
  function grid(){ return document.getElementById('my-thumbs-grid'); }
  function chips(){ return document.getElementById('my-thumbs-chips'); }
  function note(){ return document.getElementById('my-thumbs-note'); }
  function escapeText(value){
    if(typeof escapeHtml === 'function') return escapeHtml(value);
    return String(value == null ? '' : value).replace(/[&<>"]/g, function(ch){
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch];
    });
  }
  function folderLabel(folder){ return folder ? String(folder) : '기타'; }
  function showNote(text){
    var el = note();
    if(!el) return;
    el.hidden = !text;
    el.textContent = text || '';
  }
  function cellOf(path){
    return document.querySelector('.my-thumbs-cell[data-path="' + cssEscape(path) + '"]');
  }
  function paintThumb(path, url){
    var cell = cellOf(path);
    if(!cell || !url) return;
    var img = cell.querySelector('img');
    if(!img){
      img = document.createElement('img');
      img.alt = (cell.querySelector('em') || {}).textContent || '사진';
      img.loading = 'lazy';
      cell.insertBefore(img, cell.firstChild);
    }
    var ph = cell.querySelector('.my-thumbs-ph');
    if(ph) ph.remove();
    if(img.getAttribute('src') !== url) img.src = url;
  }
  function lockScroll(){
    if(scrollLocked || typeof lockBodyScroll_ !== 'function') return;
    lockBodyScroll_();
    scrollLocked = true;
  }
  function unlockScroll(){
    if(!scrollLocked || typeof unlockBodyScroll_ !== 'function') return;
    unlockBodyScroll_();
    scrollLocked = false;
  }
  function closePicker(){
    var el = overlay();
    if(el) el.classList.remove('open');
    if(observer){ observer.disconnect(); observer = null; }
    busy = false;
    unlockScroll();
  }
  function ensureDom(){
    if(overlay()) return;
    var root = document.createElement('div');
    root.id = 'my-thumbs-overlay';
    root.className = 'my-thumbs-overlay';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', '내 사진');
    root.innerHTML =
      '<div class="my-thumbs-sheet">' +
        '<div class="my-thumbs-hd"><strong>내 사진</strong><button type="button" id="my-thumbs-close">닫기</button></div>' +
        '<div class="my-thumbs-chips" id="my-thumbs-chips"></div>' +
        '<p class="my-thumbs-note" id="my-thumbs-note" hidden></p>' +
        '<div class="my-thumbs-grid" id="my-thumbs-grid"></div>' +
      '</div>';
    document.body.appendChild(root);
    root.addEventListener('click', function(ev){
      if(ev.target === root) closePicker();
    });
    document.getElementById('my-thumbs-close').addEventListener('click', closePicker);
  }
  function signedUrlOf(item){
    var hit = item && (item.signedUrl || item.signedURL || '');
    return hit || '';
  }
  function applySigned(batch){
    (batch || []).forEach(function(item){
      var path = item && item.path;
      var url = signedUrlOf(item);
      if(!path) return;
      delete queued[path];
      if(!url) return;
      signed[path] = { url: url, until: Date.now() + (SIGN_SECONDS - 600) * 1000 };
      paintThumb(path, url);
    });
  }
  function cssEscape(value){
    if(window.CSS && CSS.escape) return CSS.escape(value);
    return String(value).replace(/["\\]/g, '\\$&');
  }
  function flushQueue(){
    queueTimer = null;
    if(!client || !queue.length) return;
    var batch = queue.splice(0, SIGN_BATCH);
    if(queue.length) queueTimer = setTimeout(flushQueue, 40);
    var bucket = client.storage.from(BUCKET);
    var pending = (typeof bucket.createSignedUrls === 'function')
      ? bucket.createSignedUrls(batch, SIGN_SECONDS).then(function(res){
          if(res.error) throw new Error(res.error.message || '서명 주소를 만들지 못했어요.');
          return res.data || [];
        })
      : Promise.all(batch.map(function(path){
          return bucket.createSignedUrl(path, SIGN_SECONDS).then(function(res){
            return { path: path, signedUrl: res.data && (res.data.signedUrl || res.data.signedURL), error: res.error };
          });
        }));
    pending.then(applySigned).catch(function(){
      batch.forEach(function(path){ delete queued[path]; });
      showNote('미리보기 주소를 만들지 못했어요. 잠시 뒤 다시 열어 주세요.');
    });
  }
  function queueSign(path){
    var hit = signed[path];
    if(hit && hit.until > Date.now()){
      paintThumb(path, hit.url);
      return;
    }
    if(queued[path]) return;
    queued[path] = true;
    queue.push(path);
    if(!queueTimer) queueTimer = setTimeout(flushQueue, 40);
  }
  function watch(cell){
    var box = grid();
    if(!box || typeof IntersectionObserver !== 'function'){
      queueSign(cell.getAttribute('data-path'));
      return;
    }
    if(!observer){
      observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(!entry.isIntersecting) return;
          queueSign(entry.target.getAttribute('data-path'));
        });
      }, { root: box, rootMargin: '500px 0px' });
    }
    observer.observe(cell);
  }
  function choose(row){
    if(busy) return;
    var hit = signed[row.path];
    if(!hit || !hit.url){
      queueSign(row.path);
      showNote('미리보기를 불러오는 중이에요. 한 번만 더 눌러 주세요.');
      return;
    }
    if(typeof window.applyLibraryPhotoToThumbMaker_ !== 'function'){
      showNote('썸네일 만들기를 찾지 못했어요. 페이지를 새로고침해 주세요.');
      return;
    }
    busy = true;
    showNote('사진을 넣고 있어요.');
    fetch(hit.url).then(function(res){
      if(!res.ok) throw new Error('사진을 내려받지 못했어요.');
      return res.blob();
    }).then(function(blob){
      return new Promise(function(resolve, reject){
        var reader = new FileReader();
        reader.onload = function(){ resolve(String(reader.result || '')); };
        reader.onerror = function(){ reject(new Error('사진을 읽지 못했어요.')); };
        reader.readAsDataURL(blob);
      });
    }).then(function(dataUrl){
      return window.applyLibraryPhotoToThumbMaker_(dataUrl, row.name || '내 사진.jpg');
    }).then(function(){
      closePicker();
    }).catch(function(err){
      busy = false;
      showNote((err && err.message) || '사진을 넣지 못했어요.');
    });
  }
  function renderGrid(folder){
    var box = grid();
    if(!box) return;
    if(observer) observer.disconnect();
    observer = null;
    box.innerHTML = '';
    var list = rows.filter(function(row){ return (row.folder || '') === folder; });
    if(!list.length){
      showNote('이 폴더에 사진이 없어요.');
      return;
    }
    showNote('');
    list.forEach(function(row){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'my-thumbs-cell';
      btn.setAttribute('data-path', row.path);
      var ph = document.createElement('span');
      ph.className = 'my-thumbs-ph';
      var caption = document.createElement('em');
      caption.textContent = row.name || row.path;
      btn.appendChild(ph);
      btn.appendChild(caption);
      btn.addEventListener('click', function(){ choose(row); });
      box.appendChild(btn);
      watch(btn);
    });
  }
  function renderChips(){
    var box = chips();
    if(!box) return;
    var counts = {};
    rows.forEach(function(row){
      var key = row.folder || '';
      counts[key] = (counts[key] || 0) + 1;
    });
    var folders = Object.keys(counts).sort(function(a, b){
      return folderLabel(a).localeCompare(folderLabel(b), 'ko');
    });
    if(activeFolder == null || counts[activeFolder] == null) activeFolder = folders[0] || '';
    box.innerHTML = folders.map(function(folder){
      var on = folder === activeFolder ? ' on' : '';
      return '<button type="button" class="my-thumbs-chip' + on + '" data-folder="' + escapeText(folder) + '">' +
        escapeText(folderLabel(folder)) + ' ' + counts[folder] + '</button>';
    }).join('');
    box.querySelectorAll('.my-thumbs-chip').forEach(function(btn){
      btn.addEventListener('click', function(){
        activeFolder = btn.getAttribute('data-folder') || '';
        renderChips();
        renderGrid(activeFolder);
      });
    });
  }
  function loadRows(sb){
    var all = [];
    function page(from){
      return sb.from('thumb_index')
        .select('path,folder,name,width,height,bytes')
        .order('folder', { ascending: true })
        .order('name', { ascending: true })
        .range(from, from + 999)
        .then(function(res){
          if(res.error) throw new Error('사진 목록을 읽지 못했어요. 보관함 SQL을 실행했는지 확인해 주세요.');
          var chunk = res.data || [];
          all = all.concat(chunk);
          if(chunk.length === 1000) return page(from + 1000);
          return all;
        });
    }
    return page(0);
  }
  function openPicker(){
    ensureDom();
    var el = overlay();
    el.classList.add('open');
    lockScroll();
    var closeBtn = document.getElementById('my-thumbs-close');
    if(closeBtn) closeBtn.focus();
    rows = [];
    client = null;
    busy = false;
    showNote('사진을 불러오는 중이에요.');
    if(chips()) chips().innerHTML = '';
    if(grid()) grid().innerHTML = '';
    if(typeof PlannerSyncSupabase === 'undefined' || !PlannerSyncSupabase.configured || !PlannerSyncSupabase.configured()){
      showNote('Supabase 설정이 없어요.');
      return;
    }
    PlannerSyncSupabase.client().then(function(sb){
      client = sb;
      return loadRows(sb);
    }).then(function(list){
      if(!overlay() || !overlay().classList.contains('open')) return;
      rows = (list || []).filter(function(row){ return row && row.path; });
      if(!rows.length){
        showNote('올린 사진이 아직 없어요. PC 동기화가 끝나면 여기에 보입니다.');
        return;
      }
      renderChips();
      renderGrid(activeFolder);
    }).catch(function(err){
      var message = (err && err.message) || '';
      if(err && (err.authRequired || /로그인|auth/i.test(message))){
        showNote('로그인이 필요해요. 오른쪽 위 「동기화」에서 로그인한 뒤 다시 눌러 주세요.');
        return;
      }
      showNote(message || '사진을 불러오지 못했어요.');
    });
  }

  window.openMyThumbsPicker_ = openPicker;
  window.closeMyThumbsPicker_ = closePicker;
})();
