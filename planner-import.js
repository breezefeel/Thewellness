/* 원고 가져오기 — DOM 없이 파싱·검증·묶음만 담당 */
var PlannerImport = (function(){
  var PROGRAMS = [
    { catId: 0, label: '도수치료', keys: ['도수치료'] },
    { catId: 1, label: '리얼 무브먼트', keys: ['리얼무브먼트', '리얼 무브먼트', 'realmovement'] },
    { catId: 2, label: '리얼 페이스', keys: ['리얼페이스', '리얼 페이스'] },
    { catId: 3, label: 'CMT', keys: ['cmt', 'cmt과정', 'cmt전문가교육'] },
    { catId: 4, label: 'IFC', keys: ['ifc', 'ifc과정', 'ifc얼굴교육'] },
    { catId: 5, label: 'Re:Al', keys: ['re:al', 'real', '리얼움직임', '리얼움직임과정', 're:al움직임', 're:al움직임과정'] },
    { catId: 7, label: '기타', keys: ['기타', '생활건강'] }
  ];
  var CHANNELS = {
    blog: 'blog',
    '블로그': 'blog',
    instagram: 'instagram',
    insta: 'instagram',
    '인스타': 'instagram',
    '인스타그램': 'instagram',
    threads: 'threads',
    thread: 'threads',
    '쓰레드': 'threads',
    '스레드': 'threads',
    sonsik: 'sonsik',
    news: 'sonsik',
    '소식': 'sonsik'
  };
  var CHANNEL_LABEL = { blog: '블로그', instagram: '인스타', threads: '쓰레드', sonsik: '소식' };
  var BANNED = ['교정', '한 번에', '끝내기', '페이스리프트', '펴는', '완치'];

  function norm(s){
    return String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
  }
  function keyOf(s){
    return norm(s).replace(/\s+/g, '').toLowerCase();
  }
  function dupKey(topic, channel, title){
    return keyOf(topic) + '\n' + channel + '\n' + keyOf(title);
  }
  function asArray(value){
    if(Array.isArray(value)) return value;
    if(value && typeof value === 'object'){
      if(Array.isArray(value.posts)) return value.posts;
      if(Array.isArray(value.drafts)) return value.drafts;
      if(value.topic || value.channel || value.title) return [value];
    }
    return null;
  }
  function parseJsonSlice(slice){
    try { return { ok: true, value: JSON.parse(slice) }; }
    catch(e){ return { ok: false, error: (e && e.message) || 'JSON 오류' }; }
  }
  function parse(text){
    var raw = String(text || '').replace(/^\uFEFF/, '').trim();
    if(!raw) return { ok: false, posts: [], error: '붙여 넣은 내용이 비어 있습니다.' };
    var direct = parseJsonSlice(raw);
    var posts = direct.ok ? asArray(direct.value) : null;
    if(!posts){
      var re = /```(?:json|markdown)?[ \t]*\r?\n?([\s\S]*?)```/gi;
      var match;
      var fenceError = '';
      while((match = re.exec(raw))){
        var parsed = parseJsonSlice(String(match[1] || '').trim());
        if(!parsed.ok){ fenceError = parsed.error; continue; }
        posts = asArray(parsed.value);
        if(posts) break;
      }
      if(!posts){
        return { ok: false, posts: [], error: direct.ok ? '글 배열을 찾지 못했습니다.' : ('JSON을 읽지 못했습니다. ' + (fenceError || direct.error || '')) };
      }
    }
    return { ok: true, posts: posts, error: '' };
  }
  function matchProgram(raw){
    var k = keyOf(raw);
    if(!k) return null;
    for(var i = 0; i < PROGRAMS.length; i++){
      var aliases = PROGRAMS[i].keys;
      for(var a = 0; a < aliases.length; a++){
        if(keyOf(aliases[a]) === k) return PROGRAMS[i];
      }
    }
    return null;
  }
  function matchChannel(raw){
    var k = keyOf(raw);
    if(!k) return '';
    return CHANNELS[k] || '';
  }
  function newsSlot(account){
    var text = norm(account);
    if(!text) return { slot: 'naver', recognized: false };
    if(/카카오|kakao/i.test(text)) return { slot: 'kakao', recognized: true };
    if(/당근|karrot/i.test(text)) return { slot: 'karrot', recognized: true };
    if(/네이버|플레이스|naver|smartplace/i.test(text)) return { slot: 'naver', recognized: true };
    return { slot: 'naver', recognized: false };
  }
  function linkList(raw){
    if(raw == null || raw === '') return [];
    if(Array.isArray(raw)) return raw.map(norm).filter(Boolean);
    if(typeof raw === 'string') return raw.split(/[\s,]+/).map(norm).filter(Boolean);
    return null;
  }
  function collabList(raw){
    if(raw == null || raw === '') return { handles: [], bad: [] };
    var parts = null;
    if(Array.isArray(raw)) parts = raw;
    else if(typeof raw === 'string') parts = raw.split(/[\s,]+/);
    else return null;
    var handles = [];
    var seen = {};
    var bad = [];
    parts.forEach(function(part){
      var handle = norm(part).replace(/^@+/, '');
      if(!handle) return;
      if(!/^[A-Za-z0-9._]{1,30}$/.test(handle)){
        bad.push(handle);
        return;
      }
      var key = handle.toLowerCase();
      if(seen[key]) return;
      seen[key] = true;
      handles.push(handle);
    });
    return { handles: handles, bad: bad };
  }
  function validDate(value){
    var s = norm(value);
    var m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(!m) return false;
    var y = parseInt(m[1], 10);
    var mo = parseInt(m[2], 10);
    var d = parseInt(m[3], 10);
    var dt = new Date(y, mo - 1, d);
    return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
  }
  function bannedWords(text){
    var found = [];
    BANNED.forEach(function(word){
      if(text.indexOf(word) >= 0) found.push(word);
    });
    return found;
  }
  function inspectOne(raw, index){
    var item = {
      index: index,
      ok: true,
      status: 'ready',
      errors: [],
      warnings: [],
      topic: '',
      program: '',
      programLabel: '',
      catId: null,
      channel: '',
      channelLabel: '',
      account: '',
      newsSlot: '',
      title: '',
      body: '',
      hookType: '',
      sourceLinks: [],
      collab: [],
      scheduledDate: ''
    };
    if(!raw || typeof raw !== 'object' || Array.isArray(raw)){
      item.ok = false;
      item.status = 'error';
      item.errors.push('글 형식이 올바르지 않습니다.');
      return item;
    }
    item.topic = norm(raw.topic);
    item.program = norm(raw.program);
    item.account = norm(raw.account);
    item.title = norm(raw.title);
    item.body = norm(raw.body);
    item.hookType = norm(raw.hookType);
    var program = matchProgram(item.program);
    if(!item.topic) item.errors.push('주제가 없습니다.');
    if(!item.program) item.errors.push('프로그램이 없습니다.');
    else if(!program) item.errors.push('프로그램을 알지 못합니다. 도수치료, 리얼 무브먼트, 리얼 페이스, CMT, IFC, Re:Al, 기타 중 하나여야 합니다.');
    else {
      item.catId = program.catId;
      item.programLabel = program.label;
    }
    var channel = matchChannel(raw.channel);
    if(!norm(raw.channel)) item.errors.push('채널이 없습니다.');
    else if(!channel) item.errors.push('채널은 blog, instagram, threads, sonsik 중 하나여야 합니다.');
    else {
      item.channel = channel;
      item.channelLabel = CHANNEL_LABEL[channel] || channel;
    }
    if(!item.title) item.errors.push('제목이 없습니다.');
    if(!item.body) item.errors.push('본문이 없습니다.');
    var links = linkList(raw.sourceLinks);
    if(links == null) item.errors.push('sourceLinks는 주소 배열이어야 합니다.');
    else item.sourceLinks = links;
    var collab = collabList(raw.collab);
    if(collab == null) item.errors.push('collab는 인스타 계정 배열이어야 합니다.');
    else {
      item.collab = collab.handles;
      if(collab.bad.length) item.warnings.push('콜라보 계정 형식이 아니어서 뺐습니다: ' + collab.bad.join(', '));
    }
    if(raw.scheduledDate != null && norm(raw.scheduledDate)){
      if(!validDate(raw.scheduledDate)) item.errors.push('scheduledDate는 YYYY-MM-DD 여야 합니다.');
      else item.scheduledDate = norm(raw.scheduledDate);
    }
    if(item.channel === 'sonsik'){
      var slot = newsSlot(item.account);
      item.newsSlot = slot.slot;
      if(!item.account) item.warnings.push('소식 계정이 없어 네이버 칸에 넣습니다.');
      else if(!slot.recognized) item.warnings.push('계정 이름을 소식 칸으로 읽지 못해 네이버 칸에 넣고, 계정은 메모에 남깁니다.');
    } else if(!item.account){
      item.warnings.push('계정이 비어 있습니다.');
    }
    if(!item.hookType) item.warnings.push('훅 유형이 없습니다.');
    if(!item.sourceLinks.length && links != null) item.warnings.push('출처 링크가 없습니다.');
    var hits = bannedWords([item.topic, item.title, item.body, item.hookType, item.account].join('\n'));
    if(hits.length) item.warnings.push('금지어: ' + hits.join(', '));
    if(item.errors.length){
      item.ok = false;
      item.status = 'error';
    } else if(item.warnings.length){
      item.status = 'warning';
    }
    return item;
  }
  function inspect(posts, existing){
    var seen = {};
    var occupied = {};
    (existing || []).forEach(function(row){
      if(!row) return;
      var topic = norm(row.topic);
      var slots = row.slots || {};
      Object.keys(slots).forEach(function(slot){
        var value = slots[slot];
        if(value == null || value === false) return;
        var channel = slot.indexOf('sonsik:') === 0 ? 'sonsik' : slot;
        var title = value === true ? '' : norm(value);
        if(title) seen[dupKey(topic, channel, title)] = 'existing';
        occupied[String(row.catId) + '\n' + keyOf(topic) + '\n' + slot] = title;
      });
    });
    var items = (posts || []).map(inspectOne);
    items.forEach(function(item){
      if(!item.ok) return;
      var dk = dupKey(item.topic, item.channel, item.title);
      if(seen[dk]){
        item.ok = false;
        item.status = 'duplicate';
        item.errors.push(seen[dk] === 'existing'
          ? '이미 같은 주제·채널·제목이 있어 건너뜁니다.'
          : '파일 안에서 같은 주제·채널·제목이 앞에 있어 건너뜁니다.');
        return;
      }
      seen[dk] = 'file';
      var slotId = item.channel === 'sonsik' ? ('sonsik:' + item.newsSlot) : item.channel;
      var occKey = String(item.catId) + '\n' + keyOf(item.topic) + '\n' + slotId;
      if(Object.prototype.hasOwnProperty.call(occupied, occKey) && keyOf(occupied[occKey]) !== keyOf(item.title)){
        item.ok = false;
        item.status = 'duplicate';
        item.errors.push('이 주제의 ' + item.channelLabel + ' 칸에 이미 다른 글이 있어 건너뜁니다.');
        return;
      }
      occupied[occKey] = item.title;
    });
    var groups = [];
    var groupMap = {};
    items.forEach(function(item){
      var gk = item.catId == null ? ('missing-' + item.index) : (String(item.catId) + '\n' + keyOf(item.topic));
      if(!groupMap[gk]){
        groupMap[gk] = {
          key: gk,
          catId: item.catId,
          programLabel: item.programLabel || '프로그램 없음',
          topic: item.topic || '(주제 없음)',
          items: []
        };
        groups.push(groupMap[gk]);
      }
      groupMap[gk].items.push(item.index);
    });
    return { items: items, groups: groups };
  }
  function batch(items, selected){
    var want = {};
    (selected || []).forEach(function(index){ want[index] = true; });
    var skipped = [];
    var drafts = [];
    var draftMap = {};
    (items || []).forEach(function(item){
      if(!item) return;
      var chosen = !!want[item.index];
      if(!item.ok || !chosen){
        if(!item.ok){
          skipped.push({
            index: item.index,
            topic: item.topic,
            title: item.title,
            channel: item.channel,
            reason: (item.errors && item.errors[0]) || '가져올 수 없습니다.'
          });
        }
        return;
      }
      var gk = String(item.catId) + '\n' + keyOf(item.topic);
      if(!draftMap[gk]){
        draftMap[gk] = {
          catId: item.catId,
          topic: item.topic,
          programLabel: item.programLabel,
          date: '',
          pieces: []
        };
        drafts.push(draftMap[gk]);
      }
      var group = draftMap[gk];
      if(item.scheduledDate && (!group.date || item.scheduledDate < group.date)) group.date = item.scheduledDate;
      group.pieces.push({
        channel: item.channel,
        newsSlot: item.newsSlot,
        title: item.title,
        body: item.body,
        hookType: item.hookType,
        account: item.account,
        sourceLinks: item.sourceLinks.slice(),
        collab: item.collab.slice(),
        scheduledDate: item.scheduledDate
      });
    });
    return { drafts: drafts, skipped: skipped };
  }

  return {
    PROGRAMS: PROGRAMS,
    BANNED_WORDS: BANNED.slice(),
    parse: parse,
    inspect: inspect,
    batch: batch
  };
})();
