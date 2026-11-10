/* КАСКАД · нижняя мобильная панель. Нет аналитики, форм и внешних запросов.
   Звонок копирует уже проверенный маршрут из шапки; call-routing.js
   обновляет все data-kaskad-call на устройствах Samsung и остальных. */
(function(){
  'use strict';
  if(document.getElementById('kaskadMobileDock'))return;
  var headerCall=document.querySelector('.nav-right a[data-kaskad-call]');
  var href=headerCall?headerCall.getAttribute('href'):'tel:+79284062212';
  var dock=document.createElement('nav');
  dock.id='kaskadMobileDock';
  dock.className='kaskad-mobile-dock';
  dock.setAttribute('aria-label','Быстрые действия');
  dock.innerHTML=
    '<a data-kaskad-call href="'+href+'" aria-label="Позвонить в Каскад">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l1.4 4.2-2 1.8a16 16 0 0 0 5.6 5.6l1.8-2L21 14v3.2c0 2-1.5 3.6-3.5 3.6A16.5 16.5 0 0 1 3.2 6.5C3.2 4.5 4.9 3 7 3Z"/></svg><span>Позвонить</span></a>'+
    '<a href="#calculator" aria-label="Перейти к калькулятору стоимости">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 7h8M8 11h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2"/></svg><span>Рассчитать</span></a>'+
    '<button class="kaskad-dock-request" type="button" aria-label="Подготовить заявку">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8"/><path d="m10 15 9-9 2 2-9 9-3 1z"/></svg><span>Заявка</span></button>';
  document.body.appendChild(dock);
  dock.querySelector('button').addEventListener('click',function(){
    var existing=document.querySelector('button.floating[data-open-request]')||
      document.querySelector('button[data-open-request]');
    if(existing)existing.click();
  });
})();
