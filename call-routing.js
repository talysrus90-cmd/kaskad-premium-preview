/* КАСКАД — Android/Chrome: explicitly request ACTION_DIAL, not generic ACTION_VIEW.
   No tracking, device identifiers, cookies or network requests.
   Outside Chromium Android (or in embedded WebViews) keep native tel: links.
   Browser may still enforce confirmation; never attempt ACTION_CALL. */
(function(){
  'use strict';
  var ua=navigator.userAgent||'';
  var chromiumAndroid=/Android/i.test(ua)&&/Chrome\/\d+/i.test(ua)&&
    !/(?:\bwv\b|SamsungBrowser|EdgA|OPR\/|Firefox|FxiOS|FBAN|FBAV|Instagram)/i.test(ua);
  if(!chromiumAndroid)return;
  var phone='tel:+79284062212';
  var fallback=new URL('call.html',document.currentScript&&document.currentScript.src||document.baseURI);
  var intent='intent:+79284062212#Intent;scheme=tel;action=android.intent.action.DIAL;'+
    'S.browser_fallback_url='+encodeURIComponent(fallback.href)+';end';
  function route(){
    document.querySelectorAll('a[href="tel:+79284062212"]').forEach(function(a){
      a.href=intent;
      a.dataset.callRoute='android-dial';
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',route,{once:true});
  else route();
})();