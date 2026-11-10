/* КАСКАД · перенос только выбранной конфигурации в заявку; без отправки персональных данных. */
(function(){
 'use strict';
 const iframe=document.querySelector('#interactive-home iframe');
 const valid={
  facade:{brick:'Красный кирпич',tuscan:'Тосканский кирпич',stone:'Светлый камень',plaster:'Светлая штукатурка',gray:'Серо-бежевый кирпич'},
  roof:{slate:'Тёмная черепица',terracotta:'Терракотовая черепица',graphite:'Графитовая черепица',ceramic:'Керамическая черепица',
    metalGraphite:'Металлочерепица — классика',metalBurgundy:'Металлочерепица — классика',
    metal3d:'Металлочерепица 3D',metalModular:'Модульная металлочерепица',
    standingSeam:'Фальцевая кровля',flexible:'Гибкая черепица',
    composite:'Композитная черепица',profiled:'Кровельный профлист'},
  fence:{iron:'Кованый металл',tuscan:'Высокий кирпичный забор',
    wood:'Деревянные ламели',stone:'Каменные секции',brickIron:'Кирпич с ковкой',
    louvers:'Забор-жалюзи',picket:'Евроштакетник',chess:'Штакетник шахматка',
    ranch:'Ранчо',profiled:'Сплошной профнастил',panel3d:'Панельный 3D-забор'},
  roofColor:{graphite:'Графит',chocolate:'Шоколад',burgundy:'Бордо',green:'Тёмно-зелёный',black:'Чёрный',gray:'Серый',terracotta:'Терракота',sand:'Песочный'},
  fenceColor:{graphite:'Графит',chocolate:'Шоколад',burgundy:'Бордо',green:'Тёмно-зелёный',black:'Чёрный',gray:'Серый',terracotta:'Терракота',sand:'Песочный'}
 };
 const fields=['facade','roof','fence','roofColor','fenceColor'];
 function intake(raw){
   if(!raw||typeof raw!=='object')return;
   const cfg={
     roofColor:'graphite',fenceColor:'graphite',...raw
   };
   for(const key of fields)if(typeof cfg[key]!=='string'||!Object.hasOwn(valid[key],cfg[key]))return;
   const service=document.getElementById('leadService');
   const comment=document.getElementById('leadComment');
   if(!service||!comment)return;
   service.value='Строительство дома, коттеджа или виллы';
   service.dispatchEvent(new Event('change',{bubbles:true}));
   const prior=comment.value.split('\n').filter(line=>!line.startsWith('3D-концепция КАСКАД:'));
   const text='3D-концепция КАСКАД: фасад — '+valid.facade[cfg.facade]+
     '; кровля — '+valid.roof[cfg.roof]+', цвет — '+valid.roofColor[cfg.roofColor]+
     '; забор — '+valid.fence[cfg.fence]+', цвет металлических деталей — '+valid.fenceColor[cfg.fenceColor]+
     '. Предварительная визуальная идея; тип, производитель, наличие, комплектация и стоимость уточняются по смете.';
   comment.value=[...prior,text].filter(Boolean).join('\n');
   comment.dispatchEvent(new Event('input',{bubbles:true}));
   (document.querySelector('button.floating[data-open-request]')||
     document.querySelector('button[data-open-request]'))?.click();
 }
 window.addEventListener('message',event=>{
   if(event.origin!==location.origin||!iframe||event.source!==iframe.contentWindow)return;
   if(event.data?.type==='kaskad-3d-frame-height'){
     const h=Number(event.data.height);
     if(Number.isFinite(h)&&h>=400&&h<=1600){
       const styleHeight=Math.ceil(h+2)+'px';
       if(iframe.style.height!==styleHeight)iframe.style.height=styleHeight;
     }
     return;
   }
   if(event.data?.type==='kaskad-design-inquiry'&&event.data?.version===1)intake(event.data.config);
 });
 const params=new URLSearchParams(location.search);
 if(['facade','roof','fence'].every(k=>params.has(k))){
   window.addEventListener('load',()=>intake(Object.fromEntries(fields.filter(k=>params.has(k)).map(k=>[k,params.get(k)]))),{once:true});
 }
})();