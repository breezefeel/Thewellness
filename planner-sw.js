/* 플래너 알림 클릭 시 초안 화면으로 바로 열기 (탭이 없을 때) */
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
        if (c.url && /플래너\.html/i.test(c.url)) {
          return c.focus().then(function () {
            if ('navigate' in c) return c.navigate(c.url.split('#')[0] + hash);
            return c;
          });
        }
      }
      var base = self.registration.scope || './';
      var target = base.replace(/\/?$/, '/') + '플래너.html' + hash;
      return clients.openWindow(target);
    })
  );
});
