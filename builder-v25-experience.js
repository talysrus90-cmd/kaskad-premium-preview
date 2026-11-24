/* КАСКАД v25 — пошаговый 3D-конструктор, без регистрации и внешних запросов. */
(function(){
 'use strict';
 const root=document.getElementById('builderGallery');
 const nav=document.getElementById('builderStepNav');
 const controls=document.querySelector('aside.controls');
 const scroll=document.getElementById('builderV25Scroll');
 if(!root||!nav||!controls||!scroll)return;
 const stages=[
  {id:'presets',title:'Стиль дома',brief:'Выберите исходный архитектурный образ'},
  {id:'geometry',title:'Габариты',brief:'Площадь и форма крыши'},
  {id:'roof',title:'Кровля',brief:'Профиль металлочерепицы и цвет'},
  {id:'facade',title:'Фасад',brief:'Кирпич, камень или штукатурка'},
  {id:'openings',title:'Окна и двери',brief:'Цвет рам, стекла и входной двери'},
  {id:'site',title:'Участок',brief:'Забор, озеленение и бассейн'},
  {id:'summary',title:'Ваш вариант',brief:'Сохранение и обсуждение проекта'}
 ];
 const fieldIds=['houseStyleSelect','houseSizeSelect','roofShapeSelect','facadeSelect',
  'roofSelect','roofColorSelect','fenceSelect','fenceColorSelect','frameColorSelect',
  'doorColorSelect','glassTintSelect','landscapeSelect','poolToggle',
  'yardStyleSelect','parkingToggle','gazeboToggle','entranceStyleSelect'];
 const fields={};
 const geom=document.querySelector('.builder-geometry-strip');
 const advanced=document.getElementById('builderAdvanced');
 const note=document.querySelector('.controls>.builder-v25-scroll>.note');
 const group=document.createElement('div');
 group.id='builderV25Panels';
 group.innerHTML=`
  <section class="builder-v25-panel builder-v25-openings" id="builderOpenings" hidden aria-label="Окна, двери и парадный вход">
   <h3>Окна, двери и парадный вход</h3>
   <label class="builder-v25-control">Оформление главного входа
    <select id="entranceStyleSelect">
     <option value="simple">Лаконичный навес · две опоры</option>
     <option value="columns">Классический портик · колонны</option>
     <option value="timber">Деревянный навес · балки</option>
     <option value="modern">Современный портал · металл</option>
    </select>
   </label>
   <div class="builder-entrance-choices" id="builderEntranceChoices" aria-label="Варианты оформления входа"></div>
   <p>Изменения сразу отображаются на 3D-модели. Это варианты отделки, а не спецификация производителя.</p>
   <label class="builder-v25-control">Цвет оконных рам
    <select id="frameColorSelect">
     <option value="bronze">Бронза и тёмное дерево</option>
     <option value="graphite">Графитовый</option>
     <option value="white">Белый</option>
     <option value="wood">Орех, тёплое дерево</option>
    </select>
   </label>
   <label class="builder-v25-control">Стеклопакеты
    <select id="glassTintSelect">
     <option value="clear">Прозрачные</option>
     <option value="smoke">Лёгкая тонировка</option>
     <option value="blue">Холодное отражение</option>
    </select>
   </label>
   <label class="builder-v25-control">Цвет входной двери
    <select id="doorColorSelect">
     <option value="walnut">Тёмный орех</option>
     <option value="graphite">Графитовый</option>
     <option value="oak">Светлый дуб</option>
     <option value="white">Белый</option>
    </select>
   </label>
  </section>
  <section class="builder-v25-panel builder-v25-garden" id="builderGarden" hidden aria-label="Благоустройство участка">
   <h3>Благоустройство</h3>
   <label class="builder-v25-control">Озеленение участка
    <select id="landscapeSelect">
     <option value="lush">Сад с деревьями и кустарниками</option>
     <option value="modern">Современный, меньше растений</option>
     <option value="open">Открытый газон</option>
    </select>
   </label>
   <label class="builder-v25-control">Оформление парадного двора
    <select id="yardStyleSelect">
     <option value="family">Семейный — дорожка, цветник, парковка</option>
     <option value="classic">Классический — симметричные цветники</option>
     <option value="modern">Современный — плитка и кустарники</option>
     <option value="garden">Загородный сад — цветы и кустарники</option>
    </select>
   </label>
   <label class="builder-v25-checkbox"><input id="parkingToggle" type="checkbox" checked> Парковка с отдельными воротами</label>
   <label class="builder-v25-checkbox"><input id="gazeboToggle" type="checkbox"> Пергола / зона отдыха</label>
   <label class="builder-v25-checkbox"><input id="poolToggle" type="checkbox"> Бассейн на участке</label>
   <p>Главная дорожка соединяет калитку и вход. Парковка — справа, со своим въездом.</p>
  </section>
  <section class="builder-v25-panel" id="builderFinal" hidden aria-label="Итог выбранной комплектации">
   <h3>Ваш вариант дома</h3>
   <div class="builder-v25-summary" id="builderFinalSummary"></div>
   <button class="builder-v25-inline-btn" id="builderSave" type="button">Сохранить на этом устройстве</button>
   <button class="builder-v25-inline-btn" id="builderReset" type="button">Вернуть исходный вариант</button>
   <p class="builder-v25-disclaimer">Это визуальная концепция. Размеры, комплектация, цены и технические решения уточняются при проектировании и расчёте.</p>
   <p class="builder-v25-toast" id="builderSaveMessage" aria-live="polite"></p>
  </section>`;
 root.after(group);
 // Controls belong in the panel, never cover the 3D image.
 const facadeHelp=document.createElement('section');
 facadeHelp.className='builder-material-explainer';facadeHelp.hidden=true;
 facadeHelp.innerHTML='<h3>Материал и цвет фасада</h3><p>Выберите фактуру на карточке ниже. Дом изменится сразу. Листайте карточки влево или вправо.</p>';
 root.before(facadeHelp);
 const roofShapes=document.createElement('section');
 roofShapes.className='builder-v28-roof-forms';roofShapes.hidden=true;
 roofShapes.innerHTML='<h3>Форма кровли</h3><p>Сначала выберите конфигурацию крыши — затем профиль черепицы и цвет.</p>';
 const roofShapeButtons=document.createElement('div');roofShapeButtons.className='builder-v28-options';
 roofShapeButtons.setAttribute('role','group');roofShapeButtons.setAttribute('aria-label','Форма крыши');
 for(const [id,title,sub] of [['gable','Двухскатная','Два ската'],['hip','Четырёхскатная','Вальмовая'],['mansard','Мансардная','С окнами'],['flat','Плоская','Современная']]){
  const b=document.createElement('button');b.type='button';
  b.dataset.roofShape=id;b.innerHTML='<strong></strong><small></small>';
  b.firstChild.textContent=title;b.lastChild.textContent=sub;
  b.addEventListener('click',()=>{
   const select=document.getElementById('roofShapeSelect');
   select.value=id;select.dispatchEvent(new Event('change',{bubbles:true}));
   syncRoofForms();
  });
  roofShapeButtons.append(b);
 }
 roofShapes.append(roofShapeButtons);root.before(roofShapes);
 function syncRoofForms(){
  const current=document.getElementById('roofShapeSelect')?.value;
  for(const b of roofShapeButtons.children)b.setAttribute('aria-pressed',String(b.dataset.roofShape===current));
 }
 document.getElementById('roofShapeSelect')?.addEventListener('change',syncRoofForms);
 syncRoofForms();
 const entryButtons=document.getElementById('builderEntranceChoices');
 const entrySelect=document.getElementById('entranceStyleSelect');
 const entryLabels=[['simple','Навес','Две опоры'],['columns','Колонны','Классический портик'],['timber','Дерево','Балки и стойки'],['modern','Современный','Металл и камень']];
 for(const [key,title,sub] of entryLabels){
  const b=document.createElement('button');b.type='button';b.dataset.entryStyle=key;
  b.innerHTML='<strong></strong><small></small>';b.firstChild.textContent=title;b.lastChild.textContent=sub;
  b.addEventListener('click',()=>{entrySelect.value=key;entrySelect.dispatchEvent(new Event('change',{bubbles:true}))});
  entryButtons.append(b);
 }
 const syncEntrance=()=>{for(const b of entryButtons.children)b.setAttribute('aria-pressed',String(b.dataset.entryStyle===entrySelect.value))};
 entrySelect.addEventListener('change',syncEntrance);syncEntrance();
 for(const id of fieldIds)fields[id]=document.getElementById(id);
 const stepButtons=[];
 const quickStep=document.getElementById('builderQuickStep');
 let step=0;
 function name(id){const el=fields[id];return el?.selectedOptions?.[0]?.textContent?.trim()||
   (el?.checked?'Да':'Нет')||'—';}
 function summary(){
  const result=document.getElementById('builderFinalSummary');
  if(!result)return;
  const rows=[
   ['Архитектура',name('houseStyleSelect')],
   ['Площадь',name('houseSizeSelect')],
   ['Форма крыши',name('roofShapeSelect')],
   ['Покрытие',name('roofSelect')],
   ['Цвет крыши',name('roofColorSelect')],
   ['Фасад',name('facadeSelect')],
   ['Оконные рамы',name('frameColorSelect')],
   ['Стекло',name('glassTintSelect')],
   ['Дверь',name('doorColorSelect')],
   ['Входная группа',name('entranceStyleSelect')],
   ['Ограждение',name('fenceSelect')],
   ['Цвет забора',name('fenceColorSelect')],
   ['Озеленение',name('landscapeSelect')],
   ['Парадный двор',name('yardStyleSelect')],
   ['Парковка',fields.parkingToggle?.checked?'Есть':'Нет'],
   ['Беседка',fields.gazeboToggle?.checked?'Есть':'Нет'],
   ['Бассейн',fields.poolToggle?.checked?'Есть':'Без бассейна']
  ];
  result.replaceChildren(...rows.map(([label,value])=>{
   const p=document.createElement('p');
   const strong=document.createElement('strong');strong.textContent=label+': ';
   p.append(strong,document.createTextNode(value));
   return p;
  }));
 }
 function show(i,keepScroll=false){
  step=Math.max(0,Math.min(stages.length-1,i));
  const id=stages[step].id;
  if(quickStep)quickStep.value=String(step);
  stepButtons.forEach((b,n)=>{b.setAttribute('aria-current',n===step?'step':'false');
   b.setAttribute('aria-selected',String(n===step));});
  geom.hidden=id!=='geometry';
  const catalog=({presets:'presets',roof:'roof',facade:'facade',site:'fence'})[id];
  root.hidden=!catalog;
  facadeHelp.hidden=id!=='facade';
  roofShapes.hidden=id!=='roof';
  if(catalog)root.querySelector('.builder-gallery-tabs button[data-builder-tab="'+catalog+'"]')?.click();
  document.getElementById('builderOpenings').hidden=id!=='openings';
  document.getElementById('builderGarden').hidden=id!=='site';
  document.getElementById('builderFinal').hidden=id!=='summary';
  advanced.hidden=id!=='summary';
  if(note)note.hidden=id!=='summary';
  const prev=document.getElementById('builderPrev'),next=document.getElementById('builderNext');
  prev.disabled=step===0;
  next.textContent=step===stages.length-1?'Обсудить проект ↗':'Далее →';
  document.getElementById('builderStepLabel').textContent='Шаг '+(step+1)+' из '+stages.length;
  document.getElementById('builderStepTitle').textContent=stages[step].title;
  document.getElementById('builderProgress').style.width=((step+1)*100/stages.length)+'%';
  const intro=document.querySelector('.builder-v25-intro p');
  if(intro)intro.textContent=stages[step].brief+'. Изменения сразу видны на модели.';
  if(!keepScroll)scroll.scrollTo({top:0,behavior:'instant'});
  // On phones the 3D viewer is sticky and the page footer has a dock.
  // Reveal the actual choices when a step is tapped instead of leaving
  // the selected materials below the visible part of the iframe.
  if(step>0&&window.matchMedia('(max-width:730px)').matches){
   const target=({geometry:geom,roof:roofShapes,facade:facadeHelp,
     openings:document.getElementById('builderOpenings'),
     site:document.getElementById('builderGarden'),
     summary:document.getElementById('builderFinal')})[id];
   requestAnimationFrame(()=>{
    if(!target||target.hidden)return;
    const sticky=document.querySelector('.viewer-col');
    const top=target.getBoundingClientRect().top+window.scrollY-(sticky?.getBoundingClientRect().height||0)-7;
    if(top>window.scrollY+14)window.scrollTo({top:Math.max(0,top),behavior:'instant'});
   });
  }
  summary();
  window.dispatchEvent(new CustomEvent('kaskad:focus-view',{
    detail:{tab:({geometry:'presets',openings:'facade',site:'fence',summary:'presets'})[id]||id}}));
 }
 stages.forEach((s,i)=>{
  const b=document.createElement('button');b.type='button';
  b.innerHTML='<span class="number">'+(i+1)+'</span><span></span>';
  b.lastElementChild.textContent=s.title;
  b.addEventListener('click',()=>show(i));
  nav.append(b);stepButtons.push(b);
 });
 const defaults={
  houseStyleSelect:'family',houseSizeSelect:'150',roofShapeSelect:'hip',
  facadeSelect:'gray',roofSelect:'metalGraphite',roofColorSelect:'graphite',
  fenceSelect:'iron',fenceColorSelect:'graphite',frameColorSelect:'bronze',
  doorColorSelect:'walnut',glassTintSelect:'clear',landscapeSelect:'lush',poolToggle:false,
  entranceStyleSelect:'simple',
  yardStyleSelect:'family',parkingToggle:true,gazeboToggle:false
 };
 const storageKey='kaskad-v28-visual-selection';
 function apply(state){
  if(!state||typeof state!=='object')return;
  for(const [id,value] of Object.entries(defaults)){
   const el=fields[id];
   if(!el)continue;
   if(el.type==='checkbox'){el.checked=typeof state[id]==='boolean'?state[id]:value}
   else if([...el.options].some(o=>o.value===state[id]))el.value=state[id];
   else el.value=value;
   el.dispatchEvent(new Event('change',{bubbles:true}));
  }
  summary();
 }
 quickStep?.addEventListener('change',()=>show(Number(quickStep.value)));
 document.getElementById('builderPrev').addEventListener('click',()=>show(step-1));
 document.getElementById('builderNext').addEventListener('click',()=>{
  if(step<stages.length-1){show(step+1);return}
  const config={facade:fields.facadeSelect.value,roof:fields.roofSelect.value,
   fence:fields.fenceSelect.value,roofColor:fields.roofColorSelect.value,
   fenceColor:fields.fenceColorSelect.value,
   houseStyle:fields.houseStyleSelect.value,houseSize:fields.houseSizeSelect.value,
   roofShape:fields.roofShapeSelect.value,
   frameColor:fields.frameColorSelect.value,doorColor:fields.doorColorSelect.value,
   glassTint:fields.glassTintSelect.value,landscape:fields.landscapeSelect.value,
   entrance:fields.entranceStyleSelect.value,
   pool:fields.poolToggle.checked,
   yardStyle:fields.yardStyleSelect.value,parking:fields.parkingToggle.checked,
   gazebo:fields.gazeboToggle.checked};
  if(window.parent!==window){
   window.parent.postMessage({type:'kaskad-design-inquiry',version:1,config},location.origin);
  }else{
   const a=document.createElement('a');a.href='index.html#project-request';
   a.textContent='Перейти к заявке';a.className='builder-v25-inline-btn';
   document.getElementById('builderFinal').append(a);
  }
 });
 document.getElementById('builderSave').addEventListener('click',()=>{
  try{
   const data={};
   for(const id of fieldIds){const el=fields[id];data[id]=el.type==='checkbox'?el.checked:el.value;}
   localStorage.setItem(storageKey,JSON.stringify(data));
   document.getElementById('builderSaveMessage').textContent='Сохранено на этом устройстве.';
  }catch{document.getElementById('builderSaveMessage').textContent='Не удалось сохранить в этом браузере.'}
 });
 document.getElementById('builderReset').addEventListener('click',()=>{
  try{localStorage.removeItem(storageKey)}catch{}
  apply(defaults);
  document.getElementById('builderSaveMessage').textContent='Исходный вариант восстановлен.';
  show(0);
 });
 for(const id of fieldIds){fields[id]?.addEventListener('change',summary)}
 try{
  const previous=JSON.parse(localStorage.getItem(storageKey)||'null');
  if(previous)apply(previous);
 }catch{}
 show(0);
})();
