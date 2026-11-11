/* 금지어·주의어 목록 (한곳). planner-sync-rules / 자동 점검이 그대로 쓴다. */
var PlannerBannedWords = (function(){
  /** 본문에 쓰면 안 되는 말. 「교정」은 과정명·학회명에서만 예외. */
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
    // 소식 하위 키(newsNaver 등)도 소식으로 본다
    if(list.indexOf('news') >= 0 && /^news/i.test(ch)) return true;
    return false;
  }

  return {
    FORBIDDEN: FORBIDDEN,
    CAUTION: CAUTION,
    forbiddenList: forbiddenList,
    cautionList: cautionList,
    isBareGyojung: isBareGyojung,
    channelAllowsCaution: channelAllowsCaution
  };
})();
if(typeof module !== 'undefined' && module.exports){
  module.exports = PlannerBannedWords;
}
