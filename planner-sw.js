/* 플래너 알림 클릭 → https://breezefeel.github.io/Thewellness/ 에서 초안 바로 열기 */
var PLANNER_PUBLIC_BASE = 'https://breezefeel.github.io/Thewellness/';
var PLANNER_IMAGE_CACHE = 'planner-image-cache-v2';
var PLANNER_RUNTIME_CACHE = 'planner-runtime-cache-v2';
var IMAGE_FALLBACK_PATH = 'assets/image-fallback.svg';
var IMAGE_FALLBACK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#EEF2FF"/><stop offset="1" stop-color="#F8F7F4"/></linearGradient></defs><rect width="640" height="420" rx="36" fill="url(#g)"/><g fill="none" stroke="#94A3B8" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><rect x="190" y="120" width="260" height="180" rx="22"/><path d="M225 260l62-62 47 47 31-31 50 50"/><circle cx="378" cy="166" r="20"/></g><text x="320" y="344" fill="#64748B" font-family="Arial, sans-serif" font-size="26" font-weight="700" text-anchor="middle">Image unavailable</text></svg>';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(PLANNER_RUNTIME_CACHE).then(function (cache) {
      return cache.addAll([IMAGE_FALLBACK_PATH]).catch(function () {});
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (key) {
        return /^planner-(image|runtime)-cache-/.test(key) && key !== PLANNER_IMAGE_CACHE && key !== PLANNER_RUNTIME_CACHE;
      }).map(function (key) {
        return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function isImageRequest(request) {
  if (request.destination === 'image') return true;
  try {
    var path = new URL(request.url).pathname;
    return /\.(png|jpe?g|gif|webp|avif|svg)(\?.*)?$/i.test(path);
  } catch (e) {
    return false;
  }
}

function inlineImageFallbackResponse() {
  return new Response(IMAGE_FALLBACK_SVG, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml;charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function imageFallbackResponse() {
  return caches.open(PLANNER_RUNTIME_CACHE).then(function (cache) {
    return cache.match(IMAGE_FALLBACK_PATH).then(function (cached) {
      if (cached) return cached;
      return fetch(IMAGE_FALLBACK_PATH).then(function (response) {
        if (cacheableResponse(response)) cache.put(IMAGE_FALLBACK_PATH, response.clone()).catch(function () {});
        return response;
      }).catch(function () {
        return inlineImageFallbackResponse();
      });
    });
  });
}

function cacheableResponse(response) {
  return response && (response.ok || response.type === 'opaque');
}

function respondWithCachedImage(request) {
  return caches.open(PLANNER_IMAGE_CACHE).then(function (cache) {
    return cache.match(request, { ignoreVary: true }).then(function (cached) {
      var network = fetch(request).then(function (response) {
        if (cacheableResponse(response)) {
          cache.put(request, response.clone()).catch(function () {});
        }
        return response;
      });
      if (cached) {
        network.catch(function () {});
        return cached;
      }
      return network.catch(function () {
        return imageFallbackResponse();
      });
    });
  });
}

function respondWithRuntimeCache(request) {
  return fetch(request).then(function (response) {
    if (cacheableResponse(response)) {
      caches.open(PLANNER_RUNTIME_CACHE).then(function (cache) {
        return cache.put(request, response.clone()).catch(function () {});
      }).catch(function () {});
    }
    return response;
  }).catch(function () {
    return caches.open(PLANNER_RUNTIME_CACHE).then(function (cache) {
      return cache.match(request).then(function (cached) {
        return cached || Response.error();
      });
    });
  });
}

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (!request || request.method !== 'GET') return;
  if (isImageRequest(request)) {
    event.respondWith(respondWithCachedImage(request));
    return;
  }
  try {
    var url = new URL(request.url);
    if (url.origin === self.location.origin && /\/(index\.html)?$|\/planner-sw\.js$/.test(url.pathname)) {
      event.respondWith(respondWithRuntimeCache(request));
    }
  } catch (e) {}
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var data = (event.notification && event.notification.data) || {};
  var draftId = data.draftId || '';
  var catId = data.catId != null ? String(data.catId) : '';
  if (!draftId || catId === '') return;
  var hash = '#open/' + encodeURIComponent(draftId) + '/' + catId;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        if (c.url && /\/Thewellness\//i.test(c.url)) {
          return c.focus().then(function () {
            if ('navigate' in c) return c.navigate(c.url.split('#')[0] + hash);
            return c;
          });
        }
      }
      var base = (self.registration.scope || PLANNER_PUBLIC_BASE).replace(/\/?$/, '/');
      return clients.openWindow(base + hash);
    })
  );
});
