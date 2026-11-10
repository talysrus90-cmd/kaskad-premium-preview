/* КАСКАД — передачи только выбранных 3D-материалов в существующую форму.
   Никаких персональных данных, внешних сервисов и автоматических отправок. */
(function(){
  'use strict';
  const iframe=document.querySelector('#interactive-home iframe');
  const valid={
    facade:{brick:'Красный кирпич',tuscan:'Тосканский кирпич',stone:'Светлый камень',plaster:'Штукатурка',gray:'Серо-бежевый кирпич'},
    roof:{slate:'Тёмная черепица',terracotta:'Терракотовая черепица',graphite:'Графитовая черепица',metalGraphite:'Металлочерепица — графит',metalBurgundy:'Металлочерепица — бордо'},
    fence:{iron:'Кованый забор',wood:'Деревянные ламели',stone:'Каменные секции',tuscan:'Кирпичный забор в итальянском стиле'}
  };
  function intake(config){
    if(!config||typeof config!=='object')return;
    for(const key of ['facade','roof','fence']){
      if(typeof config[key]!=='string'||!Object.hasOwn(valid[key],config[key]))return;
    }
    const service=document.getElementById('leadService');
    const comment=document.getElementById('leadComment');
    if(!service||!comment)return;
    service.value='Строительство дома, коттеджа или виллы';
    service.dispatchEvent(new Event('change',{bubbles:true}));
    const existing=comment.value.split('\n').filter(line=>!line.startsWith('3D-концепция КАСКАД:'));
    const line='3D-концепция КАСКАД: фасад — '+valid.facade[config.facade]+
      '; кровля — '+valid.roof[config.roof]+
      '; ограждение — '+valid.fence[config.fence]+
      '. Визуальная идея, без утверждённой цены или бренда материалов.';
    comment.value=[...existing,line].filter(Boolean).join('\n');
    comment.dispatchEvent(new Event('input',{bubbles:true}));
    // Existing history-aware request controller owns modal opening/closing.
    (document.querySelector('button.floating[data-open-request]')||
      document.querySelector('button[data-open-request]'))?.click();
  }
  window.addEventListener('message',function(event){
    if(event.origin!==location.origin || !iframe || event.source!==iframe.contentWindow)return;
    if(event.data?.type==='kaskad-3d-frame-height'){
      const raw=Number(event.data.height);
      if(Number.isFinite(raw)&&raw>=400&&raw<=1400){
        const height=Math.ceil(raw+2)+'px';
        if(iframe.style.height!==height)iframe.style.height=height;
      }
      return;
    }
    if(event.data?.type!=='kaskad-design-inquiry'||event.data?.version!==1)return;
    intake(event.data.config);
  });
  // Fullscreen 3D page may route to the main site with its selected material choices.
  const params=new URLSearchParams(location.search);
  if(params.has('facade')&&params.has('roof')&&params.has('fence')){
    window.addEventListener('load',()=>{
      intake({facade:params.get('facade'),roof:params.get('roof'),fence:params.get('fence')});
    },{once:true});
  }
})();