/* 브랜딩 플래너 — Service Worker (알림·딥링크·정적 캐시) */
var PLANNER_CACHE = 'planner-static-v164';

function isPlannerStaticRequest(url){
  if(!url || url.origin !== self.location.origin) return false;
  var path = url.pathname || '';
  return /\/(planner\.(css|js)|ops-naver-kw-seed\.js)(\?.*)?$/.test(path);
}

function isPlannerJsRequest(url){
  if(!url || url.origin !== self.location.origin) return false;
  return /\/planner\.js(\?.*)?$/.test(url.pathname || '');
}

function fetchWithTimeout(request, ms){
  return new Promise(function(resolve, reject){
    var done = false;
    var timer = setTimeout(function(){
      if(done) return;
      done = true;
      reject(new Error('sw-fetch-timeout'));
    }, ms);
    fetch(request).then(function(res){
      if(done) return;
      done = true;
      clearTimeout(timer);
      resolve(res);
    }).catch(function(err){
      if(done) return;
      done = true;
      clearTimeout(timer);
      reject(err);
    });
  });
}

function cacheCopy_(request, res){
  if(res && res.status === 200 && res.type !== 'opaque'){
    var copy = res.clone();
    caches.open(PLANNER_CACHE).then(function(cache){ cache.put(request, copy); });
  }
  return res;
}

self.addEventListener('install', function(event){
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== PLANNER_CACHE && /^planner-static-v/.test(k); }).map(function(k){
        return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event){
  if(event.request.method !== 'GET') return;
  if(event.request.mode === 'navigate') return;
  var dest = event.request.destination;
  if(dest === 'document' || dest === 'iframe' || dest === 'embed') return;

  var url;
  try { url = new URL(event.request.url); } catch(e){ return; }
  if(!isPlannerStaticRequest(url)) return;

  if(isPlannerJsRequest(url)){
    event.respondWith(
      fetchWithTimeout(event.request, 8000).then(function(res){
        return cacheCopy_(event.request, res);
      }).catch(function(){
        return caches.match(event.request).then(function(cached){
          return cached || fetch(event.request).then(function(res){
            return cacheCopy_(event.request, res);
          });
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function(cached){
      var networkPromise = fetchWithTimeout(event.request, 8000).then(function(res){
        return cacheCopy_(event.request, res);
      });
      if(cached){
        networkPromise.catch(function(){});
        return cached;
      }
      return networkPromise.catch(function(){
        return caches.match(event.request).then(function(again){
          return again || Response.error();
        });
      });
    })
  );
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  var data = event.notification.data || {};
  var draftId = data.draftId != null ? String(data.draftId) : '';
  var catId = data.catId != null ? String(data.catId) : '0';
  var targetHash = draftId ? ('#open/' + encodeURIComponent(draftId) + '/' + catId) : '';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list){
      for(var i = 0; i < list.length; i++){
        var client = list[i];
        if('focus' in client){
          client.focus();
          if(targetHash && 'navigate' in client){
            try {
              var base = new URL(client.url);
              return client.navigate(base.pathname + base.search + targetHash);
            } catch(e){
              return client.navigate(client.url.split('#')[0] + targetHash);
            }
          }
          return;
        }
      }
      if(targetHash && self.registration.scope){
        return self.clients.openWindow(self.registration.scope.replace(/\/$/, '') + targetHash);
      }
    })
  );
});
