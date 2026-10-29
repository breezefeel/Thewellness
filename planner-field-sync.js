/* 카드 저장은 바뀐 칸만 서버에 있던 값 위에 얹는다.
 * 빈 칸으로 서버의 다른 칸을 지우지 않는다. 검토 중 카드의 본문 키는 대기열에서 빼는 판단은 planner.js가 한다.
 */
var PlannerFieldSync = (function(){
  var TAB_PATHS = {
    blog: ['blog.title', 'blog.problem', 'blog.selfCare', 'blog.explanation', 'blog.hook', 'blog.draft', 'blog.cta', 'blog.outline', 'blog.hashtags'],
    insta: ['insta.hook', 'insta.caption', 'insta.hashtags'],
    threads: ['threads.body', 'threads.comment'],
    images: ['images.gptVisuals'],
    thread: ['thread.topicTitle', 'thread.summary'],
    community: ['community.title', 'community.problem', 'community.selfCare', 'community.explanation', 'community.empathy', 'community.empathyLead'],
    news: ['news.naver.title', 'news.naver.body', 'news.naver.cta', 'news.kakao.title', 'news.kakao.body', 'news.kakao.cta', 'news.karrot.title', 'news.karrot.body', 'news.karrot.cta']
  };

  function allPaths(){
    var out = ['reelFile'];
    Object.keys(TAB_PATHS).forEach(function(tab){
      TAB_PATHS[tab].forEach(function(p){ out.push(p); });
    });
    return out;
  }
  function clone(v){
    if(v == null || typeof v !== 'object') return v;
    try { return JSON.parse(JSON.stringify(v)); } catch(e){ return v; }
  }
  function getPath(obj, path){
    var cur = obj;
    var parts = String(path || '').split('.');
    for(var i = 0; i < parts.length; i++){
      if(cur == null || typeof cur !== 'object') return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }
  function setPath(obj, path, value){
    var parts = String(path || '').split('.');
    var cur = obj;
    for(var i = 0; i < parts.length - 1; i++){
      if(!cur[parts[i]] || typeof cur[parts[i]] !== 'object') cur[parts[i]] = {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = value;
  }
  function filled(v){
    if(v == null) return false;
    if(typeof v === 'string') return v.trim().length > 0;
    if(Array.isArray(v)) return v.length > 0;
    if(typeof v === 'object') return Object.keys(v).some(function(k){ return filled(v[k]); });
    return true;
  }
  function same(a, b){
    try { return JSON.stringify(a) === JSON.stringify(b); } catch(e){ return a === b; }
  }
  function contentOf(entity, key){
    if(!entity || typeof entity !== 'object') return null;
    if(String(key).indexOf('published:') === 0 && entity.content && typeof entity.content === 'object') return entity.content;
    return entity;
  }
  function changedPaths(baseEntity, localEntity, key, edited){
    var base = contentOf(baseEntity, key) || {};
    var local = contentOf(localEntity, key) || {};
    var editedMap = {};
    (edited || []).forEach(function(p){ editedMap[p] = true; });
    var paths = [];
    allPaths().forEach(function(p){
      var b = getPath(base, p);
      var l = getPath(local, p);
      if(same(b, l)) return;
      if(editedMap[p] || filled(l)) paths.push(p);
    });
    return paths;
  }
  function mergeChangedOntoBase(baseEntity, localEntity, key, edited){
    if(!baseEntity || typeof baseEntity !== 'object') return localEntity;
    var out = clone(baseEntity);
    var baseContent = contentOf(out, key);
    var localContent = contentOf(localEntity, key);
    if(!baseContent || !localContent) return localEntity;
    changedPaths(baseEntity, localEntity, key, edited).forEach(function(p){
      setPath(baseContent, p, clone(getPath(localContent, p)));
    });
    return out;
  }
  function buildFieldPatch(baseEntity, mergedEntity, key){
    var paths = changedPaths(baseEntity, mergedEntity, key, allPaths());
    if(!paths.length) return null;
    var wrapped = String(key).indexOf('published:') === 0 && baseEntity && baseEntity.content;
    var set = {};
    var base = {};
    var list = [];
    paths.forEach(function(p){
      var full = (wrapped ? 'content.' : '') + p;
      list.push(full);
      set[full] = clone(getPath(contentOf(mergedEntity, key), p));
      base[full] = clone(getPath(contentOf(baseEntity, key), p));
    });
    return { _fieldPatch: true, paths: list, set: set, base: base };
  }
  function keepEditingFields(localEntity, remoteEntity, key, edited){
    if(!localEntity || !remoteEntity || !edited || !edited.length) return remoteEntity;
    var out = clone(remoteEntity);
    var localContent = contentOf(localEntity, key);
    var remoteContent = contentOf(out, key);
    if(!localContent || !remoteContent) return remoteEntity;
    edited.forEach(function(p){
      if(getPath(localContent, p) === undefined) return;
      setPath(remoteContent, p, clone(getPath(localContent, p)));
    });
    return out;
  }
  function historySnapshot(content){
    var body = {};
    ['blog', 'insta', 'threads', 'thread', 'community', 'news', 'reelFile'].forEach(function(k){
      if(content && content[k] != null) body[k] = clone(content[k]);
    });
    var fp = '';
    try { fp = JSON.stringify(body); } catch(e){ fp = String(Date.now()); }
    body.at = new Date().toISOString();
    body.fp = fp;
    return body;
  }
  function splitThreadComment(body, comment){
    body = String(body || '');
    comment = String(comment || '');
    var mark = body.search(/\n*\[댓글/);
    if(mark < 0) return { body: body.trim(), comment: comment.trim(), merged: false };
    var head = body.slice(0, mark).trim();
    var tail = body.slice(mark).replace(/^\n*\[댓글[^\]]*\]\s*/, '').trim();
    if(!comment.trim() && tail) comment = tail;
    return { body: head, comment: comment.trim(), merged: true };
  }
  function brief(v){
    var s = typeof v === 'string' ? v : (v == null ? '' : JSON.stringify(v));
    s = String(s || '').replace(/\s+/g, ' ').trim();
    return s.length > 80 ? s.slice(0, 80) + '…' : s;
  }
  function describeDiff(localEntity, remoteEntity, key){
    return changedPaths(remoteEntity, localEntity, key, allPaths()).map(function(p){
      return {
        path: p,
        local: brief(getPath(contentOf(localEntity, key) || {}, p)),
        remote: brief(getPath(contentOf(remoteEntity, key) || {}, p))
      };
    });
  }
  function threadBodyHits(published, generated){
    var hits = [];
    function look(map, bucket){
      Object.keys(map || {}).forEach(function(id){
        var row = map[id];
        var content = row && row.content && typeof row.content === 'object' ? row.content : row;
        var body = content && content.threads && content.threads.body;
        if(body && /\[댓글/.test(String(body))) hits.push({ id: id, bucket: bucket, chars: String(body).length });
      });
    }
    look(published, 'published');
    look(generated, 'generated');
    return hits;
  }
  function publishedTouchedOn(categories, day){
    var hits = [];
    (categories || []).forEach(function(cat, catId){
      (cat && cat.drafts || []).forEach(function(d){
        if(!d) return;
        var at = String(d.updatedAt || d.activityAt || '');
        if(at.slice(0, 10) !== day) return;
        var channels = Array.isArray(d.publishedChannels) ? d.publishedChannels : [];
        if(!channels.length) return;
        hits.push({ id: d.id, topic: String(d.topic || ''), at: at, catId: catId, channels: channels.slice() });
      });
    });
    return hits;
  }
  return {
    pathsForTab: function(tab){ return (TAB_PATHS[tab] || []).slice(); },
    changedPaths: changedPaths,
    mergeChangedOntoBase: mergeChangedOntoBase,
    buildFieldPatch: buildFieldPatch,
    keepEditingFields: keepEditingFields,
    historySnapshot: historySnapshot,
    splitThreadComment: splitThreadComment,
    describeDiff: describeDiff,
    threadBodyHits: threadBodyHits,
    publishedTouchedOn: publishedTouchedOn
  };
})();
