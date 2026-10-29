/* 저장은 이 기기 카드를 바탕으로 한다.
 * 직접 비우지 않은 빈 칸만 서버 값으로 채운다.
 * 본문 칸 목록 밖이 바뀌면 칸 패치 대신 카드 전체를 보낸다.
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
  function pathEdited(editedSet, path){
    if(!path) return false;
    if(editedSet[path]) return true;
    var parts = String(path).split('.');
    var acc = '';
    for(var i = 0; i < parts.length; i++){
      acc = acc ? (acc + '.' + parts[i]) : parts[i];
      if(editedSet[acc]) return true;
    }
    return false;
  }
  function fillEmptyFromServer(localNode, serverNode, editedSet, clearedSet, prefix){
    if(pathEdited(editedSet, prefix) || pathEdited(clearedSet, prefix)) return clone(localNode);
    if(Array.isArray(serverNode) || Array.isArray(localNode)){
      if(!filled(localNode) && filled(serverNode)) return clone(serverNode);
      return clone(localNode);
    }
    if(!serverNode || typeof serverNode !== 'object'){
      if(!filled(localNode) && filled(serverNode)) return clone(serverNode);
      return clone(localNode);
    }
    var out = (localNode && typeof localNode === 'object' && !Array.isArray(localNode)) ? clone(localNode) : {};
    Object.keys(serverNode).forEach(function(k){
      var child = prefix ? (prefix + '.' + k) : k;
      var localChild = (localNode && typeof localNode === 'object') ? localNode[k] : undefined;
      if(pathEdited(editedSet, child) || pathEdited(clearedSet, child)){
        if(localChild !== undefined) out[k] = clone(localChild);
        else delete out[k];
        return;
      }
      if(serverNode[k] && typeof serverNode[k] === 'object' && !Array.isArray(serverNode[k])){
        out[k] = fillEmptyFromServer(localChild, serverNode[k], editedSet, clearedSet, child);
        return;
      }
      if(!filled(localChild) && filled(serverNode[k])) out[k] = clone(serverNode[k]);
      else if(localChild !== undefined) out[k] = clone(localChild);
    });
    if(localNode && typeof localNode === 'object' && !Array.isArray(localNode)){
      Object.keys(localNode).forEach(function(k){
        if(!Object.prototype.hasOwnProperty.call(serverNode, k)) out[k] = clone(localNode[k]);
      });
    }
    return out;
  }
  function isTabPath(path, key){
    var rel = path;
    if(String(key).indexOf('published:') === 0 && rel.indexOf('content.') === 0) rel = rel.slice('content.'.length);
    return allPaths().indexOf(rel) >= 0;
  }
  function omitTabPaths(node, prefix, key){
    if(Array.isArray(node)) return clone(node);
    if(!node || typeof node !== 'object') return node;
    var out = {};
    Object.keys(node).forEach(function(k){
      var child = prefix ? (prefix + '.' + k) : k;
      if(isTabPath(child, key)) return;
      var next = omitTabPaths(node[k], child, key);
      if(next && typeof next === 'object' && !Array.isArray(next) && !Object.keys(next).length) return;
      if(next !== undefined) out[k] = next;
    });
    return out;
  }
  function withoutTabPaths(entity, key){
    if(!entity || typeof entity !== 'object') return entity;
    return omitTabPaths(entity, '', key);
  }
  function outsideTabPathsChanged(baseEntity, mergedEntity, key){
    if(!baseEntity || typeof baseEntity !== 'object') return true;
    return !same(withoutTabPaths(baseEntity, key), withoutTabPaths(mergedEntity, key));
  }
  function changedPaths(baseEntity, localEntity, key, edited, cleared){
    var base = contentOf(baseEntity, key) || {};
    var local = contentOf(localEntity, key) || {};
    var editedMap = {};
    var clearedMap = {};
    (edited || []).forEach(function(p){ editedMap[p] = true; });
    (cleared || []).forEach(function(p){ clearedMap[p] = true; });
    var paths = [];
    allPaths().forEach(function(p){
      var b = getPath(base, p);
      var l = getPath(local, p);
      if(same(b, l)) return;
      if(editedMap[p] || clearedMap[p] || filled(l)) paths.push(p);
    });
    return paths;
  }
  function entityPathSet(list, key){
    var root = String(key).indexOf('published:') === 0 ? 'content.' : '';
    var set = {};
    (list || []).forEach(function(p){
      if(!p) return;
      if(root && /^(tabPublished|finalTexts|savedAt|channelPlan|date|promptData|catId|topic)(\.|$)/.test(p)) set[p] = true;
      else set[root + p] = true;
    });
    return set;
  }
  function mergeChangedOntoBase(baseEntity, localEntity, key, edited, cleared){
    if(!localEntity || typeof localEntity !== 'object') return localEntity;
    if(!baseEntity || typeof baseEntity !== 'object') return clone(localEntity);
    return fillEmptyFromServer(localEntity, baseEntity, entityPathSet(edited, key), entityPathSet(cleared, key), '');
  }
  function buildFieldPatch(baseEntity, mergedEntity, key, cleared){
    if(outsideTabPathsChanged(baseEntity, mergedEntity, key)) return null;
    var paths = changedPaths(baseEntity, mergedEntity, key, allPaths(), cleared);
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
  function rememberPatchedBase(baseEntity, patch){
    var out = clone(baseEntity);
    if(!out || typeof out !== 'object' || Array.isArray(out)) out = {};
    (patch && patch.paths || []).forEach(function(p){
      if(!patch.set || !Object.prototype.hasOwnProperty.call(patch.set, p)) return;
      setPath(out, p, clone(patch.set[p]));
    });
    return out;
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
    ['blog', 'insta', 'threads', 'thread', 'community', 'news'].forEach(function(k){
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
  function clearedPathsBetween(before, after, prefix){
    var out = [];
    function walk(b, a, path){
      if(Array.isArray(b) || Array.isArray(a)){
        if(path && filled(b) && !filled(a)) out.push(path);
        return;
      }
      if(b && typeof b === 'object'){
        if(!a || typeof a !== 'object'){
          if(path && filled(b)) out.push(path);
          return;
        }
        Object.keys(b).forEach(function(k){
          walk(b[k], a[k], path ? path + '.' + k : k);
        });
        return;
      }
      if(path && filled(b) && !filled(a)) out.push(path);
    }
    walk(before, after, prefix || '');
    return out;
  }
  function describeDiff(localEntity, remoteEntity, key, onlyPaths){
    var allow = null;
    if(onlyPaths && onlyPaths.length){
      allow = {};
      onlyPaths.forEach(function(p){
        var rel = String(p || '');
        if(String(key).indexOf('published:') === 0 && rel.indexOf('content.') === 0) rel = rel.slice('content.'.length);
        allow[rel] = true;
        allow[String(p || '')] = true;
      });
    }
    return changedPaths(remoteEntity, localEntity, key, allPaths()).filter(function(p){
      return !allow || allow[p];
    }).map(function(p){
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
    rememberPatchedBase: rememberPatchedBase,
    outsideTabPathsChanged: outsideTabPathsChanged,
    keepEditingFields: keepEditingFields,
    historySnapshot: historySnapshot,
    splitThreadComment: splitThreadComment,
    describeDiff: describeDiff,
    clearedPathsBetween: clearedPathsBetween,
    threadBodyHits: threadBodyHits,
    publishedTouchedOn: publishedTouchedOn
  };
})();
