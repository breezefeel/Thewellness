/* 금지어·주의어 목록 (한곳). planner-sync-rules / planner-import / 자동 점검이 그대로 쓴다. */
var PlannerBannedWords = (function(){
  /** 본문에 쓰면 안 되는 말. 「교정」은 과정명·학회명에서만 예외(아래 isBareGyojung). */
  var FORBIDDEN = Object.freeze([
    '한 번에',
    '끝내기',
    '페이스리프트',
    '펴는',
    '완치',
    '진료',
    '더웰니스',
    '경락'
  ]);
  /** 별칭 — 호출부·문서에서 FORBID 로 참조 */
  var FORBID = FORBIDDEN;
  /**
   * 주의(caution)만. 오류(forbidden)가 아니다.
   * 광고·소식 칸에서만 본다.
   */
  var CAUTION = Object.freeze([
    { word: '치료', channels: ['news', 'ads'] }
  ]);

  function forbiddenList(){
    return FORBIDDEN.slice();
  }
  function cautionList(){
    return CAUTION.map(function(row){
      return { word: row.word, channels: (row.channels || []).slice() };
    });
  }
  /** 「교정」이 과정·학회 밖이면 true */
  function isBareGyojung(line){
    var s = String(line == null ? '' : line);
    return /교정/.test(s) && !/(과정|학회)/.test(s);
  }
  function channelAllowsCaution(channel, entry){
    var ch = String(channel || '');
    var list = (entry && entry.channels) || [];
    if(!list.length) return false;
    if(list.indexOf(ch) >= 0) return true;
    if(list.indexOf('news') >= 0 && /^news/i.test(ch)) return true;
    return false;
  }
  /** 텍스트에서 걸린 금지어 목록(교정 포함). import·점검 공통. */
  function findHits(text){
    var t = String(text == null ? '' : text);
    var found = [];
    var seen = {};
    function push(w){
      if(!w || seen[w]) return;
      seen[w] = true;
      found.push(w);
    }
    if(isBareGyojung(t)) push('교정');
    FORBIDDEN.forEach(function(w){
      if(t.indexOf(w) >= 0) push(w);
    });
    return found;
  }

  return {
    FORBIDDEN: FORBIDDEN,
    FORBID: FORBID,
    CAUTION: CAUTION,
    forbiddenList: forbiddenList,
    cautionList: cautionList,
    isBareGyojung: isBareGyojung,
    channelAllowsCaution: channelAllowsCaution,
    findHits: findHits
  };
})();
if(typeof module !== 'undefined' && module.exports){
  module.exports = PlannerBannedWords;
}
