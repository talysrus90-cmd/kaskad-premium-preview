/* КАСКАД · перенос только выбранной конфигурации в заявку; без отправки персональных данных. */
(function(){
 'use strict';
 const iframe=document.querySelector('#interactive-home iframe');
 const valid={
  facade:{brick:'Красный облицовочный кирпич',brickBeige:'Бежевый кирпич',brickWhite:'Белый кирпич',klinker:'Клинкер шоколад',brickGraphite:'Графитовый кирпич',gray:'Серо-бежевый кирпич',tuscan:'Кирпич ручной формовки',plasterWhite:'Белая фасадная штукатурка',plasterSand:'Песочная штукатурка',venetian:'Фактура под венецианскую штукатурку',stone:'Светлый камень',planken:'Деревянный планкен',plaster:'Тёплая штукатурка'},
  roof:{slate:'Тёмная черепица',terracotta:'Терракотовая черепица',graphite:'Графитовая черепица',ceramic:'Керамическая черепица',
    metalGraphite:'Металлочерепица — классика',metalBurgundy:'Металлочерепица — классика',
    metal3d:'Металлочерепица 3D',metalModular:'Симметричная металлочерепица',metalTramontana:'Рельефная металлочерепица',
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
 const optional={
  houseStyle:{family:'Одноэтажный семейный',mansardHome:'Мансарда с люкарнами',gableAttic:'Мансарда с окнами во фронтоне',cottage:'Кирпичный одноэтажный коттедж',country:'Одноэтажный светлый',nordic:'Скандинавский дом',chalet:'Шале с террасой',barnhouse:'Барнхаус',modernOne:'Современный панорамный',minimal:'Светлый минимализм',estateOne:'Классическая усадьба',kavkaz:'Кавказский стиль',terrace:'Дом с садовой террасой',bungalow:'Дом с навесом для авто',italian:'Итальянский дворик',coastal:'Светлая вилла',practical:'Практичный кирпичный',craft:'Садовый дом',classic:'Двухэтажный коттедж'},
  houseSize:{150:'150 м²',180:'180 м²',220:'220 м²',260:'260 м²',300:'300 м²',350:'350 м²'},
  roofShape:{gable:'Двухскатная',hip:'Четырёхскатная',flat:'Плоская',mansard:'Мансардная'},
  frameColor:{bronze:'Бронза',graphite:'Графит',white:'Белый',wood:'Тёплый орех'},
  doorColor:{walnut:'Тёмный орех',graphite:'Графит',oak:'Светлый дуб',white:'Белый'},
  glassTint:{clear:'Прозрачное',smoke:'Тонированное',blue:'Холодное голубое'},
  landscape:{lush:'Сад с деревьями',modern:'Современное озеленение',open:'Открытый газон'},
  yardStyle:{family:'Семейный двор',classic:'Симметричные цветники',modern:'Современный двор',garden:'Загородный сад'},
  entrance:{simple:'Лаконичный навес',columns:'Классический портик с колоннами',timber:'Деревянный навес',modern:'Современный вход'}
 };
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
   const extra=Object.entries(optional).filter(([key,values])=>
     typeof cfg[key]==='string'&&Object.hasOwn(values,cfg[key]))
     .map(([key,values])=>({houseStyle:'Стиль',houseSize:'Площадь',roofShape:'Форма крыши',frameColor:'Рамы',doorColor:'Дверь',glassTint:'Стекло',landscape:'Участок',yardStyle:'Благоустройство',entrance:'Парадный вход'}[key]+' — '+values[cfg[key]]));
   if(typeof cfg.pool==='boolean')extra.push('Бассейн — '+(cfg.pool?'есть':'нет'));
   if(typeof cfg.parking==='boolean')extra.push('Парковка — '+(cfg.parking?'есть':'нет'));
   if(typeof cfg.gazebo==='boolean')extra.push('Пергола — '+(cfg.gazebo?'есть':'нет'));
   const text='3D-концепция КАСКАД: фасад — '+valid.facade[cfg.facade]+
     '; кровля — '+valid.roof[cfg.roof]+', цвет — '+valid.roofColor[cfg.roofColor]+
     '; забор — '+valid.fence[cfg.fence]+', цвет металлических деталей — '+valid.fenceColor[cfg.fenceColor]+
     (extra.length?'; '+extra.join('; '):'')+
     '. Предварительная визуальная идея; тип, производитель, наличие, комплектация и стоимость уточняются по смете.';
   comment.value=[...prior,text].filter(Boolean).join('\n');
   comment.dispatchEvent(new Event('input',{bubbles:true}));
   (document.querySelector('button.floating[data-open-request]')||
     document.querySelector('button[data-open-request]'))?.click();
 }
 window.addEventListener('message',event=>{
   if(event.origin!==location.origin||!iframe||event.source!==iframe.contentWindow)return;
   if(event.data?.type==='kaskad-3d-frame-height'){
     // v25: the desktop iframe has a fixed responsive height; the sidebar
     // scrolls independently. Never enlarge the iframe to its content height.
     return;
   }
   if(event.data?.type==='kaskad-design-inquiry'&&event.data?.version===1)intake(event.data.config);
 });
 const params=new URLSearchParams(location.search);
 if(['facade','roof','fence'].every(k=>params.has(k))){
   window.addEventListener('load',()=>intake(Object.fromEntries(fields.filter(k=>params.has(k)).map(k=>[k,params.get(k)]))),{once:true});
 }
})();