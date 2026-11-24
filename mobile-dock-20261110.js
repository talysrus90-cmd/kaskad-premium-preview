/* КАСКАД v29 — мобильные действия: настоящий переход в 3D-конструктор и заявка.
   Звонок временно скрыт по решению владельца. */
(function(){
 'use strict';
 if(document.getElementById('kaskadMobileDock'))return;
 const dock=document.createElement('nav');
 dock.id='kaskadMobileDock';
 dock.className='kaskad-mobile-dock';
 dock.setAttribute('aria-label','Быстрые действия');
 dock.innerHTML=
  '<button type="button" class="kaskad-dock-builder" data-kaskad-open-builder aria-label="Открыть настройки 3D-конструктора дома">'+
   '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.8" y="4" width="18.4" height="16" rx="2"/><path d="M12 4v16M8.5 11.5l-2.5 2.5 2.5 2.5m7-7 2.5 2.5-2.5 2.5"/></svg><span>Конструктор</span></button>'+
  '<button class="kaskad-dock-request" type="button" aria-label="Подготовить заявку">'+
   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8"/><path d="m10 15 9-9 2 2-9 9-3 1z"/></svg><span>Заявка</span></button>';
 document.body.appendChild(dock);
 dock.querySelector('.kaskad-dock-request').addEventListener('click',function(){
  const existing=document.querySelector('button.floating[data-open-request]')||
   document.querySelector('button[data-open-request]');
  existing?.click();
 });
})();
