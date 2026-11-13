/* 생성 직후 확정적으로 고치는 규칙. 저장된 카드는 열 때 건드리지 않고, 생성·재생성 경로에서만 호출한다. */
var PlannerDraftPolish = (function(){
  var RED_FLAG = '이럴 땐 병원에 가 보세요';
  var SAFETY = '하다가 불편하면 바로 멈추세요';
  var THREAD_STOP = '멈춰';
  var BRANCH_BOTH = '약수역 3분 · 작전역 2분 · 1:1 예약제';
  var BRANCH_INCHEON = '작전역 2분 · 1:1 예약제';
  var CTA_DM = 'DM으로 지금 상태를 알려 주세요.';
  var CTA_TALKTALK = '톡톡으로 문의해 주세요.';
  var CTA_CHAT = '채팅으로 문의해 주세요.';
  var CTA_COURSE = '과정 신청은 글 끝의 신청 링크에서 이어집니다.';
  var CTA_COURSE_NEWS = '과정 신청으로 이어가 주세요.';
  var CTA_BOOK_BOTH = '네이버 예약에서 약수점·인천점 시간을 잡아 보세요.';
  var CTA_BOOK_INCHEON = '네이버 예약에서 인천점 시간을 잡아 보세요.';
  var CTA_BOOK_DOSU = '리얼무브먼트 평가가 필요하면 네이버 예약에서 약수점·인천점 시간을 잡아 보세요.';
  var PLACEHOLDER_BITS = [
    '카테고리·참고 자료 기반 흐름',
    '입력에 적힌 순서',
    '빠진 칸은 만들지 않음',
    '시제·의도를 유지',
    '문제·장면 제기',
    '핵심 전개',
    '원리·마무리'
  ];
  var BANNED_TAGS = { '도수치료': 1, '계양도수': 1, '약수역도수': 1, '자세교정': 1 };

  function catIdOf(opts){ return parseInt(opts && opts.catId, 10); }
  function isExpert(id){ return id === 3 || id === 4 || id === 5; }
  function isGeneral(id){ return id === 0 || id === 1 || id === 2; }
  function isMovementFace(id){ return id === 1 || id === 2; }

  function branchLine(catId){
    return catId === 2 ? BRANCH_INCHEON : BRANCH_BOTH;
  }
  function blogCtaLine(catId){
    if(isExpert(catId)) return CTA_COURSE;
    if(catId === 2) return CTA_BOOK_INCHEON;
    if(catId === 0) return CTA_BOOK_DOSU;
    if(catId === 1) return CTA_BOOK_BOTH;
    return '';
  }
  function newsCtaLine(catId, channel){
    if(isExpert(catId)) return CTA_COURSE_NEWS;
    if(channel === 'karrot') return CTA_CHAT;
    return CTA_TALKTALK;
  }

  function fixBrandSpacing(text){
    return String(text == null ? '' : text)
      .replace(/리\s*[:：]\s*얼\s*무브먼트/g, '리얼무브먼트')
      .replace(/리\s*[:：]\s*얼\s*페이스/g, '리얼페이스')
      .replace(/리얼\s+무브먼트/g, '리얼무브먼트')
      .replace(/리얼\s+페이스/g, '리얼페이스');
  }
  function fixManualSpelling(text){
    return String(text == null ? '' : text).replace(/메뉴얼/g, '매뉴얼');
  }
  function stripPointEmoji(text){
    return String(text == null ? '' : text).replace(/👉/g, '');
  }
  function fixMats(text){
    return String(text == null ? '' : text)
      .replace(/yoga\s*mat/gi, 'treatment bed')
      .replace(/매트(?!리스)/g, '침대');
  }
  function stripBareGyojung(text){
    return String(text == null ? '' : text).split('\n').map(function(line){
      if(/교정/.test(line) && !/(과정|학회)/.test(line)) return line.replace(/교정/g, '');
      return line;
    }).join('\n');
  }
  function replaceBannedTokens(text){
    return String(text == null ? '' : text)
      .replace(/한 번에/g, '나누어')
      .replace(/끝내기/g, '마무리')
      .replace(/페이스리프트/g, '얼굴 관리')
      .replace(/펴는/g, '이완하는')
      .replace(/완치/g, '변화')
      .replace(/더웰니스/g, '')
      .replace(/경락/g, '인디바');
  }
  function stripDosuClinicPhrases(text){
    return String(text == null ? '' : text)
      .replace(/도수치료에서는/g, '')
      .replace(/치료\s*방향/g, '');
  }
  function normStep(s){
    return String(s || '').replace(/\s+/g, '').replace(/^[0-9①②③④\.\)\s]+/, '').replace(/[.。]+$/g, '');
  }
  function stripFlowDirectives(text, steps){
    var stepNorms = (steps || []).map(normStep).filter(function(s){ return s && s.length > 6; });
    var paras = String(text == null ? '' : text).replace(/\r\n/g, '\n').split(/\n{2,}/);
    var kept = paras.map(function(para){
      var bits = para.split(/(?<=[.。!?])\s+|\n/);
      var next = bits.filter(function(bit){
        var raw = String(bit || '').trim();
        if(!raw) return false;
        var n = normStep(raw);
        var echoed = stepNorms.some(function(st){
          return n === st || (n.length > 8 && (st.indexOf(n) >= 0 || n.indexOf(st) >= 0));
        });
        if(echoed) return false;
        if(raw.length < 90 && /(짚는다|정리한다|밝힌다|제시한다)\s*[.。]?\s*$/.test(raw) && !/습니다|세요|해요/.test(raw)) return false;
        return true;
      });
      return next.join('\n').trim();
    }).filter(Boolean);
    return kept.join('\n\n');
  }
  function ensureBulletBlankLines(text){
    var lines = String(text == null ? '' : text).replace(/\r\n/g, '\n').split('\n');
    var out = [];
    lines.forEach(function(line){
      if(/^\s*•/.test(line)){
        var j = out.length - 1;
        while(j >= 0 && String(out[j]).trim() === '') j--;
        if(j >= 0 && /^\s*•/.test(out[j]) && String(out[out.length - 1]).trim() !== '') out.push('');
      }
      out.push(line);
    });
    return out.join('\n');
  }
  function polishExerciseBlocks(text){
    var src = String(text == null ? '' : text).replace(/\r\n/g, '\n');
    if(src.indexOf('【') < 0) return src;
    var parts = src.split(/(?=【[^】\n]{1,48}】)/);
    var head = [];
    var blocks = [];
    parts.forEach(function(part){
      if(part.indexOf('【') !== 0){ head.push(part); return; }
      var lines = part.split('\n').map(function(l){ return l.trim(); }).filter(Boolean);
      if(!lines.length) return;
      var title = lines[0];
      var rest = lines.slice(1);
      var timeIdx = -1;
      for(var i = 0; i < rest.length; i++){
        if(/^⏱/.test(rest[i]) || (rest[i].indexOf('⏱') >= 0 && rest[i].length < 48)){ timeIdx = i; break; }
      }
      if(timeIdx < 0){
        blocks.push(title + (rest.length ? '\n' + rest.join('\n') : ''));
        return;
      }
      var desc = rest.slice(0, timeIdx).join('\n').trim();
      var time = rest[timeIdx];
      var tip = rest.slice(timeIdx + 1).join('\n').trim();
      var block = title;
      if(desc) block += '\n' + desc + '\n';
      block += '\n' + time;
      if(tip) block += '\n' + tip;
      blocks.push(block);
    });
    if(!blocks.length) return src;
    var lead = head.join('').trim();
    return (lead ? lead + '\n\n' : '') + blocks.join('\n\n');
  }
  function applyCommonText(text, opts){
    var t = stripPointEmoji(text);
    t = fixManualSpelling(t);
    t = fixBrandSpacing(t);
    t = fixMats(t);
    t = stripBareGyojung(t);
    t = replaceBannedTokens(t);
    if(catIdOf(opts) === 0) t = stripDosuClinicPhrases(t);
    t = stripFlowDirectives(t, opts && opts.flowSteps);
    t = ensureBulletBlankLines(t);
    return t;
  }
  function dropLines(text, re){
    return String(text || '').replace(/\r\n/g, '\n').split('\n').filter(function(line){
      return !re.test(line);
    }).join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  function lineHasRedFlag(line){
    return /진료|적신호|병원에 가 보|병원 진료|병원부터|병원이 먼저/.test(String(line || ''));
  }
  function rewriteRedFlag(text, mode){
    var lines = String(text || '').replace(/\r\n/g, '\n').split('\n');
    var out = [];
    var saw = false;
    lines.forEach(function(line){
      if(!lineHasRedFlag(line)){ out.push(line); return; }
      saw = true;
      if(mode === 'keep') out.push(RED_FLAG);
    });
    if(mode === 'keep'){
      var folded = [];
      var placed = false;
      out.forEach(function(line){
        if(line.trim() === RED_FLAG){
          if(placed) return;
          placed = true;
        }
        folded.push(line);
      });
      if(saw && !placed) folded.push(RED_FLAG);
      return folded.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    }
    return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  function ensureEndingLine(text, line){
    var t = String(text || '').trim();
    if(!line) return t;
    if(t.indexOf(line) >= 0) return t;
    return (t ? t + '\n\n' : '') + line;
  }
  function stripUrls(text){
    return String(text || '').replace(/https?:\/\/\S+/gi, '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  function stripCtaLines(text){
    return dropLines(text, /온라인\s*문진|프로필\s*링크|DM으로 지금|톡톡으로 문의|채팅으로 문의|과정 신청은 글 끝|과정 신청으로 이어/);
  }
  function ensureOneLine(text, line){
    var t = stripCtaLines(text);
    if(!line) return t;
    if(t.indexOf(line) >= 0){
      var parts = t.split('\n').filter(function(row, idx, arr){
        if(row.trim() !== line) return true;
        return arr.findIndex(function(x){ return x.trim() === line; }) === idx;
      });
      return parts.join('\n').replace(/\n{3,}/g, '\n\n').trim();
    }
    return (t ? t + '\n\n' : '') + line;
  }
  function enforceBranchLine(text, catId){
    var exact = branchLine(catId);
    var t = String(text || '');
    t = t.replace(/약수역(?:에서)?\s*3분[\s\S]{0,40}?작전역(?:에서)?\s*2분[^\n]*/g, exact);
    t = t.replace(/작전역(?:에서)?\s*2분\s*[,，·]\s*1\s*:\s*1\s*예약제[^\n]*/g, catId === 2 ? BRANCH_INCHEON : BRANCH_BOTH);
    if(catId === 2){
      t = t.replace(/약수역\s*3분\s*·\s*작전역\s*2분\s*·\s*1:1\s*예약제/g, BRANCH_INCHEON);
      t = dropLines(t, /약수역/);
    }
    if(t.indexOf(exact) < 0) t = (t.trim() ? t.trim() + '\n\n' : '') + exact;
    var seen = false;
    t = t.split('\n').filter(function(line){
      if(line.trim() !== exact) return true;
      if(seen) return false;
      seen = true;
      return true;
    }).join('\n');
    return t.replace(/\n{3,}/g, '\n\n').trim();
  }
  function cleanTag(tag, catId){
    var t = fixBrandSpacing(fixManualSpelling(String(tag || ''))).replace(/^#+/, '').replace(/\s+/g, '').trim();
    if(!t) return '';
    if(BANNED_TAGS[t]) return '';
    if(/도수치료|계양도수|약수역도수|자세교정/.test(t)) return '';
    if(/교정/.test(t) && !/(과정|학회)/.test(t)) return '';
    if(catId === 2 && /약수/.test(t)) return '';
    return t;
  }
  function cleanTags(list, catId){
    var out = [];
    var seen = {};
    (list || []).forEach(function(tag){
      var t = cleanTag(tag, catId);
      if(!t || seen[t]) return;
      seen[t] = true;
      out.push(t);
    });
    return out;
  }
  function stockHookFrom(hook, source){
    var h = String(hook || '').trim();
    if(!/테크닉 문제가 아닐/.test(h)) return h;
    var next = String(source || '').split('\n').map(function(s){ return s.trim(); }).filter(Boolean)[0] || '';
    next = next.replace(/[🤲🙌✨]/g, '').trim();
    if(!next) return h;
    if(next.length > 48) next = next.slice(0, 48);
    if(next.indexOf('🤲') < 0) next += ' 🤲';
    return next;
  }
  function insertBeforeBranch(text, line){
    var t = String(text || '').trim();
    if(!line || t.indexOf(line) >= 0) return t;
    var bothAt = t.indexOf(BRANCH_BOTH);
    var inchAt = t.indexOf(BRANCH_INCHEON);
    var at = bothAt >= 0 ? bothAt : inchAt;
    if(at >= 0) return (t.slice(0, at).trim() + '\n\n' + line + '\n\n' + t.slice(at).trim()).replace(/\n{3,}/g, '\n\n');
    return t + '\n\n' + line;
  }

  function polishBlog(blog, opts){
    var id = catIdOf(opts);
    ['title', 'problem', 'selfCare', 'explanation', 'hook', 'draft', 'cta', 'outlineText', 'references'].forEach(function(k){
      if(typeof blog[k] === 'string') blog[k] = applyCommonText(blog[k], opts);
    });
    if(Array.isArray(blog.outline)){
      blog.outline = blog.outline.map(function(line){ return applyCommonText(line, opts); }).filter(Boolean);
    }
    if(isMovementFace(id) && typeof blog.selfCare === 'string'){
      blog.selfCare = polishExerciseBlocks(blog.selfCare);
    }
    if(isGeneral(id)){
      if(typeof blog.selfCare === 'string') blog.selfCare = ensureEndingLine(rewriteRedFlag(blog.selfCare, 'keep'), RED_FLAG);
      ['problem', 'explanation', 'hook', 'draft', 'cta'].forEach(function(k){
        if(typeof blog[k] === 'string') blog[k] = rewriteRedFlag(blog[k], 'drop');
      });
    } else {
      ['problem', 'selfCare', 'explanation', 'hook', 'draft', 'cta'].forEach(function(k){
        if(typeof blog[k] === 'string' && /진료/.test(blog[k])) blog[k] = rewriteRedFlag(blog[k], 'keep');
      });
    }
    var ctaLine = blogCtaLine(id);
    if(ctaLine && typeof blog.cta === 'string'){
      blog.cta = dropLines(stripUrls(blog.cta), /네이버 예약|온라인\s*문진|프로필\s*링크/);
      blog.cta = ensureOneLine(blog.cta, ctaLine);
    }
    if(opts.forceTitle && opts.draftTopic) blog.title = fixBrandSpacing(String(opts.draftTopic).trim());
    if(Array.isArray(blog.hashtags)) blog.hashtags = cleanTags(blog.hashtags, id);
    return blog;
  }
  function polishInsta(ig, opts){
    var id = catIdOf(opts);
    if(typeof ig.hook === 'string'){
      ig.hook = applyCommonText(ig.hook, opts);
      ig.hook = rewriteRedFlag(ig.hook, 'drop');
      if(isExpert(id)) ig.hook = stockHookFrom(ig.hook, opts.hookSource || opts.draftTopic || '');
    }
    if(typeof ig.caption === 'string'){
      ig.caption = applyCommonText(ig.caption, opts);
      ig.caption = rewriteRedFlag(ig.caption, 'drop');
      ig.caption = stripUrls(ig.caption);
      if(isGeneral(id)){
        ig.caption = stripCtaLines(ig.caption);
        ig.caption = insertBeforeBranch(ig.caption, SAFETY);
        ig.caption = enforceBranchLine(ig.caption, id);
        ig.caption = insertBeforeBranch(ig.caption, CTA_DM);
      } else {
        ig.caption = stripCtaLines(ig.caption);
      }
    }
    if(typeof ig.reelCaption === 'string') ig.reelCaption = rewriteRedFlag(applyCommonText(ig.reelCaption, opts), 'drop');
    if(Array.isArray(ig.hashtags)) ig.hashtags = cleanTags(ig.hashtags, id);
    return ig;
  }
  function polishThreads(th, opts){
    var id = catIdOf(opts);
    if(typeof th.body === 'string') th.body = rewriteRedFlag(stripUrls(applyCommonText(th.body, opts)), 'drop');
    if(typeof th.comment === 'string') th.comment = rewriteRedFlag(stripUrls(applyCommonText(th.comment, opts)), 'drop');
    if(isGeneral(id)){
      var blob = (th.body || '') + '\n' + (th.comment || '');
      if(blob.indexOf(THREAD_STOP) < 0){
        th.comment = ensureEndingLine(th.comment || '', THREAD_STOP);
      }
    }
    return th;
  }
  function polishNews(news, opts){
    var id = catIdOf(opts);
    ['naver', 'kakao', 'karrot'].forEach(function(ch){
      var item = news[ch];
      if(!item || typeof item !== 'object') return;
      ['title', 'body', 'cta'].forEach(function(k){
        if(typeof item[k] === 'string') item[k] = applyCommonText(item[k], opts);
      });
      item.title = stripUrls(rewriteRedFlag(item.title || '', 'drop'));
      item.body = stripUrls(rewriteRedFlag(item.body || '', 'drop'));
      item.body = stripCtaLines(item.body);
      if(isGeneral(id)){
        item.body = insertBeforeBranch(item.body, SAFETY);
        item.body = enforceBranchLine(item.body, id);
      }
      item.cta = newsCtaLine(id, ch);
    });
    return news;
  }
  function polishCommunity(block, opts){
    ['title', 'problem', 'selfCare', 'explanation'].forEach(function(k){
      if(typeof block[k] === 'string') block[k] = applyCommonText(block[k], opts);
    });
    return block;
  }
  function polishContent(content, opts){
    opts = opts || {};
    if(!content || typeof content !== 'object') return content;
    if(content.blog) polishBlog(content.blog, opts);
    if(content.insta) polishInsta(content.insta, opts);
    if(content.threads) polishThreads(content.threads, opts);
    if(content.news) polishNews(content.news, opts);
    if(content.community) polishCommunity(content.community, opts);
    return content;
  }
  function isPlaceholderFlow(flow){
    if(!flow) return true;
    var bits = [flow.angle].concat(flow.steps || []);
    var blob = bits.join('\n');
    var hits = PLACEHOLDER_BITS.filter(function(bit){ return blob.indexOf(bit) >= 0; });
    var title = String(flow.title || '').trim();
    if(/^글 흐름\s*\d+$/.test(title)) return true;
    var steps = flow.steps || [];
    if(steps.length && steps.every(function(step){
      var s = String(step || '').trim();
      return PLACEHOLDER_BITS.indexOf(s) >= 0 || /^이어서\s*\d+단계$/.test(s);
    })) return true;
    if(String(flow.angle || '').trim() === '카테고리·참고 자료 기반 흐름'){
      var stepHits = (flow.steps || []).filter(function(step){
        return PLACEHOLDER_BITS.indexOf(String(step || '').trim()) >= 0;
      });
      if(!flow.steps || !flow.steps.length || stepHits.length) return true;
    }
    return hits.length >= 2;
  }
  function resolveDraftTitle(input){
    input = input || {};
    var card = String(input.cardTitle || '').trim();
    var keyword = String(input.keywordLine || '').trim();
    var typed = (!card && keyword && keyword.indexOf('\n') < 0 && keyword.length <= 80) ? keyword : '';
    var confirmed = card || typed;
    var flowTitle = String(input.flowTitle || '').trim();
    var choice = input.choice === 'flow' ? 'flow' : (input.choice === 'card' ? 'card' : (confirmed ? 'card' : 'flow'));
    if(choice === 'card' && confirmed) return { topic: confirmed, locked: true, source: 'card' };
    if(flowTitle) return { topic: flowTitle, locked: true, source: 'flow' };
    return { topic: confirmed, locked: !!confirmed, source: confirmed ? 'card' : '' };
  }

  return {
    RED_FLAG: RED_FLAG,
    SAFETY: SAFETY,
    BRANCH_BOTH: BRANCH_BOTH,
    BRANCH_INCHEON: BRANCH_INCHEON,
    CTA_DM: CTA_DM,
    CTA_TALKTALK: CTA_TALKTALK,
    CTA_CHAT: CTA_CHAT,
    polishContent: polishContent,
    isPlaceholderFlow: isPlaceholderFlow,
    resolveDraftTitle: resolveDraftTitle,
    ensureBulletBlankLines: ensureBulletBlankLines,
    fixBrandSpacing: fixBrandSpacing,
    applyCommonText: applyCommonText
  };
})();
if(typeof module !== 'undefined' && module.exports){
  module.exports = PlannerDraftPolish;
}
