/* КАСКАД — разрешение звонка на Samsung.
   Проверено владельцем: ссылка ACTION_DIAL с пакетом Samsung открыла штатную
   звонилку без системного выбора банка. Ни один вызов не инициируется автоматически.
   Для iPhone, не-Chromium и распознанных не-Samsung остаётся tel: .
   Нет трекеров, внешних запросов, сохранения данных или обработчиков click. */
(function () {
  'use strict';
  var TEL = 'tel:+79284062212';
  var INTENT = 'intent:+79284062212#Intent;scheme=tel;action=android.intent.action.DIAL;package=com.samsung.android.dialer;S.browser_fallback_url=' +
    encodeURIComponent('https://talysrus90-cmd.github.io/kaskad-premium-preview/call.html?unsupported=1') + ';end';
  var ua = navigator.userAgent || '';
  var android = /Android/i.test(ua);
  var chromium = /Chrome\/\d+|SamsungBrowser\/\d+|EdgA\/\d+/i.test(ua) &&
    !/Firefox\/|FxiOS\/|OPR\/|UCBrowser\//i.test(ua);
  var samsungUA = /SM-[A-Z0-9]+|SAMSUNG|SamsungBrowser/i.test(ua);
  var otherUA = /Pixel|Redmi|POCO|Xiaomi|OnePlus|motorola|HUAWEI|HONOR|realme/i.test(ua);

  function update(useSamsungDialer) {
    document.querySelectorAll('a[data-kaskad-call],a[href="tel:+79284062212"],a[href^="intent:+79284062212#Intent;"]').forEach(function (a) {
      a.setAttribute('href', useSamsungDialer ? INTENT : TEL);
      a.dataset.callRoute = useSamsungDialer ? 'samsung-action-dial' : 'native-tel';
    });
  }

  function start() {
    if (!android || !chromium) { update(false); return; }
    if (samsungUA) update(true);
    else if (otherUA) update(false);
    // Android Chrome reduces the model in its ordinary User-Agent to "K".
    // Ask the browser for its locally held device model; nothing is transmitted.
    var data = navigator.userAgentData;
    if (data && typeof data.getHighEntropyValues === 'function') {
      data.getHighEntropyValues(['model']).then(function (info) {
        var model = String(info && info.model || '');
        if (/^SM-[A-Z0-9]+|Samsung|Galaxy/i.test(model)) update(true);
        else if (model) update(false);
        // Unknown model: keep the direct Samsung link in the header (proved
        // functional on the owner's Android); other tel links remain compatible.
      }).catch(function () {
        if (otherUA && !samsungUA) update(false);
      });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();