/* 브랜딩 플래너 — Service Worker (알림·딥링크·정적 캐시) */
var PLANNER_CACHE = 'planner-static-v86';
var PLANNER_ASSETS = [
  './planner.css',
  './planner.js',
  './ops-naver-kw-seed.js'
];

function isPlannerStaticRequest(url){
  if(!url || url.origin !== self.location.origin) return false;
  var path = url.pathname || '';
  return /\/(planner\.(css|js)|ops-naver-kw-seed\.js)$/.test(path);
}

self.addEventListener('install', function(event){
  // addAll 로 planner.js(1MB)를 설치 시점에 또 받으면 첫 접속이 2배로 느려짐
  // → 설치는 즉시 끝내고, 실제 요청 때 cache-first 로 채움
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
  var url = new URL(event.request.url);
  if(!isPlannerStaticRequest(url)) return;
  // cache-first: 캐시 있으면 즉시, 없으면 1회 네트워크 후 캐시
  event.respondWith(
    caches.match(event.request).then(function(cached){
      if(cached){
        // 백그라운드 갱신 (실패해도 무시)
        fetch(event.request).then(function(res){
          if(res && res.status === 200 && res.type !== 'opaque'){
            var copy = res.clone();
            caches.open(PLANNER_CACHE).then(function(cache){ cache.put(event.request, copy); });
          }
        }).catch(function(){});
        return cached;
      }
      return fetch(event.request).then(function(res){
        if(res && res.status === 200 && res.type !== 'opaque'){
          var copy = res.clone();
          caches.open(PLANNER_CACHE).then(function(cache){ cache.put(event.request, copy); });
        }
        return res;
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
