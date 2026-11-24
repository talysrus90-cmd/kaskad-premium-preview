/* КАСКАД v25 — пошаговый 3D-конструктор, без регистрации и внешних запросов. */
(function(){
 'use strict';
 const root=document.getElementById('builderGallery');
 const nav=document.getElementById('builderStepNav');
 const controls=document.querySelector('aside.controls');
 const scroll=document.getElementById('builderV25Scroll');
 if(!root||!nav||!controls||!scroll)return;
 const stages=[
  {id:'presets',title:'Стиль',brief:'Выберите архитектуру, которую хотите изменить'},
  {id:'geometry',title:'Размер',brief:'Укажите ширину, длину и этажность дома'},
  {id:'facade',title:'Фасад',brief:'Облицовочный кирпич, штукатурка, камень или дерево'},
  {id:'roof',title:'Кровля',brief:'Форма крыши, металлочерепица, профиль и цвет'},
  {id:'openings',title:'Окна и вход',brief:'Окна, двери, колонны и главный вход'},
  {id:'fence',title:'Забор',brief:'Ограждение, ворота и цвет'},
  {id:'site',title:'Участок',brief:'Дорожка, парковка, клумбы и бассейн'},
  {id:'summary',title:'Итог',brief:'Сохраните или обсудите ваш вариант'}
 ];
 const fieldIds=['houseStyleSelect','houseSizeSelect','roofShapeSelect','facadeSelect',
  'roofSelect','roofColorSelect','fenceSelect','fenceColorSelect','frameColorSelect',
  'doorColorSelect','glassTintSelect','landscapeSelect','poolToggle',
  'yardStyleSelect','parkingToggle','gazeboToggle','terraceToggle','entranceStyleSelect','plinthSelect',
  'houseWidthInput','houseLengthInput','houseFloorsSelect'];
 const fields={};
 const geom=document.querySelector('.builder-geometry-strip');
 // On a phone, floor type must be immediately visible, not hidden after
 // two rows of size presets and numeric inputs.
 const floorPanel=geom.querySelector('.builder-floor-panel');
 if(floorPanel)geom.querySelector('.builder-size-presets')?.before(floorPanel);
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
   <label class="builder-v25-checkbox"><input id="terraceToggle" type="checkbox"> Терраса у дома со стороны сада</label>
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
 facadeHelp.innerHTML='<h3>Материал и цвет фасада</h3><p>Выберите фактуру на карточке ниже. Дом изменится сразу.</p><label class="builder-v25-control">Отделка цоколя<select id="plinthSelect"><option value="stone">Светлый камень</option><option value="graphite">Тёмный графит</option><option value="light">Светлая штукатурка</option><option value="brick">Кирпичная облицовка</option><option value="none">Без декоративной облицовки</option></select></label>';
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
 const quickTabs=document.getElementById('builderQuickTabs');
 const widthInput=document.getElementById('houseWidthInput');
 const lengthInput=document.getElementById('houseLengthInput');
 const floorsSelect=document.getElementById('houseFloorsSelect');
 const sizeText=document.getElementById('builderSizeResult');
 const sizeButtons=[...document.querySelectorAll('[data-home-size]')];
 const floorButtons=[...document.querySelectorAll('[data-home-floors]')];
 let step=0;
 const sizeClamp=(v,min,max)=>Math.max(min,Math.min(max,Math.round(Number(v)*2)/2));
 const sizeValues=()=>({
   width:sizeClamp(widthInput.value||10,5,14),
   length:sizeClamp(lengthInput.value||10,8,18),
   floors:floorsSelect.value
 });
 function syncDimensions(){
  const {width,length,floors}=sizeValues();
  const footprint=Math.round(width*length*100)/100;
  const floorLabel={one:'1 этаж',mansard:'1 этаж + мансарда',two:'2 этажа'}[floors];
  const info=width+' × '+length+' м · пятно '+footprint+' м² · '+floorLabel;
  sizeText.textContent=info+(floors==='two'?' · суммарно до '+footprint*2+' м² (до вычета стен и лестниц)':'');
  sizeButtons.forEach(b=>b.setAttribute('aria-pressed',
   String(b.dataset.homeSize===String(width)+'x'+String(length))));
  floorButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.homeFloors===floors)));
  const area=Math.round(footprint*(floors==='two'?2:1));
  const old=document.getElementById('houseSizeSelect');
  if(old){
   if(![...old.options].some(o=>o.value===String(area))){
    const option=new Option('≈ '+area+' м²',String(area));option.dataset.dynamicSize='true';
    old.querySelectorAll('option[data-dynamic-size]').forEach(el=>el.remove());
    old.append(option);
   }
   old.value=String(area);
   old.dispatchEvent(new Event('change',{bubbles:true}));
  }
  window.dispatchEvent(new CustomEvent('kaskad:dimensions-changed',
   {detail:{width,length,floors,footprint}}));
 }
 for(const btn of sizeButtons)btn.addEventListener('click',()=>{
  const [w,l]=btn.dataset.homeSize.split('x').map(Number);
  widthInput.value=String(w);lengthInput.value=String(l);
  syncDimensions();summary();
 });
 for(const btn of floorButtons)btn.addEventListener('click',()=>{
  floorsSelect.value=btn.dataset.homeFloors;
  floorsSelect.dispatchEvent(new Event('change',{bubbles:true}));
 });
 for(const el of [widthInput,lengthInput]){
  el.addEventListener('input',()=>{
   const n=Number(el.value);
   if(Number.isFinite(n)&&n>=Number(el.min)&&n<=Number(el.max)){syncDimensions();summary();}
  });
  el.addEventListener('change',()=>{
   el.value=String(sizeClamp(el.value||el.defaultValue,Number(el.min),Number(el.max)));
   syncDimensions();summary();
  });
 }
 floorsSelect.addEventListener('change',()=>{
  const floor=floorsSelect.value,style=document.getElementById('houseStyleSelect'),
   roof=document.getElementById('roofShapeSelect');
  const compatible=floor==='two'?['classic']:
    floor==='mansard'?['mansardHome','gableAttic']:null;
  const nextStyle=floor==='two'?'classic':floor==='mansard'?'mansardHome':'family';
  if(compatible?!compatible.includes(style.value):['classic','mansardHome','gableAttic'].includes(style.value)){
   style.value=nextStyle;style.dispatchEvent(new Event('change',{bubbles:true}));
  }
  if(floor==='mansard'&&roof.value!=='mansard'){
    roof.value='mansard';roof.dispatchEvent(new Event('change',{bubbles:true}));
  }else if(floor!=='mansard'&&roof.value==='mansard'){
    roof.value='hip';roof.dispatchEvent(new Event('change',{bubbles:true}));
  }
  syncDimensions();summary();
 });
 document.getElementById('houseStyleSelect')?.addEventListener('change',()=>{
  const style=document.getElementById('houseStyleSelect').value;
  const inferred=style==='classic'?'two':
   ['mansardHome','gableAttic'].includes(style)?'mansard':'one';
  if(floorsSelect.value!==inferred){floorsSelect.value=inferred;syncDimensions();summary()}
 });
 function renderQuickStages(){
  quickStep.replaceChildren();
  quickTabs?.replaceChildren();
  stages.forEach((item,i)=>{
   const option=new Option((i+1)+' · '+item.title,String(i));quickStep.append(option);
   if(!quickTabs)return;
   const b=document.createElement('button');b.type='button';
   b.dataset.builderStep=String(i);b.textContent=item.title;
   b.setAttribute('aria-selected',String(i===step));
   b.addEventListener('click',()=>show(i));
   quickTabs.append(b);
  });
 }
 renderQuickStages();
 function name(id){const el=fields[id];return el?.selectedOptions?.[0]?.textContent?.trim()||
   (el?.checked?'Да':'Нет')||'—';}
 function summary(){
  const result=document.getElementById('builderFinalSummary');
  if(!result)return;
  const dims=sizeValues();
  const rows=[
   ['Архитектура',name('houseStyleSelect')],
   ['Размеры',dims.width+' × '+dims.length+' м'],
   ['Пятно застройки',(dims.width*dims.length)+' м²'],
   ['Этажность',({one:'1 этаж',mansard:'1 + мансарда',two:'2 этажа'})[dims.floors]],
   ['Форма крыши',name('roofShapeSelect')],
   ['Покрытие',name('roofSelect')],
   ['Цвет крыши',name('roofColorSelect')],
   ['Фасад',name('facadeSelect')],
   ['Цоколь',name('plinthSelect')],
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
   ['Терраса',fields.terraceToggle?.checked?'Есть':'Нет'],
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
  quickTabs?.querySelectorAll('[data-builder-step]').forEach(b=>{
   b.setAttribute('aria-selected',String(Number(b.dataset.builderStep)===step));
  });
  stepButtons.forEach((b,n)=>{b.setAttribute('aria-current',n===step?'step':'false');
   b.setAttribute('aria-selected',String(n===step));});
  geom.hidden=id!=='geometry';
  const catalog=({presets:'presets',roof:'roof',facade:'facade',fence:'fence'})[id];
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
  if(!keepScroll){scroll.scrollTo({top:0,behavior:'instant'});controls.scrollTo({top:0,behavior:'instant'});}
  // On phones the 3D viewer is sticky and the page footer has a dock.
  // Reveal the actual choices when a step is tapped instead of leaving
  // the selected materials below the visible part of the iframe.
  if(window.matchMedia('(max-width:730px)').matches){
   const target=({presets:root.querySelector('.builder-category-filter'),geometry:geom,roof:roofShapes,facade:facadeHelp,
     fence:root.querySelector('.builder-material-card'),
     openings:document.getElementById('builderOpenings'),
     site:document.getElementById('builderGarden'),
     summary:document.getElementById('builderFinal')})[id];
   requestAnimationFrame(()=>{
    if(!target||target.hidden)return;
    const top=target.getBoundingClientRect().top-controls.getBoundingClientRect().top+controls.scrollTop-7;
    controls.scrollTo({top:Math.max(0,top),behavior:'instant'});
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
  houseStyleSelect:'family',houseSizeSelect:'100',roofShapeSelect:'hip',
  houseWidthInput:'10',houseLengthInput:'10',houseFloorsSelect:'one',
  facadeSelect:'gray',roofSelect:'metalGraphite',roofColorSelect:'graphite',
  fenceSelect:'iron',fenceColorSelect:'graphite',frameColorSelect:'bronze',
  doorColorSelect:'walnut',glassTintSelect:'clear',landscapeSelect:'lush',poolToggle:false,
  entranceStyleSelect:'simple',
  yardStyleSelect:'family',parkingToggle:true,gazeboToggle:false,
  terraceToggle:false,plinthSelect:'stone'
 };
 const storageKey='kaskad-v30-exterior-selection';
 function apply(state){
  if(!state||typeof state!=='object')return;
  for(const [id,value] of Object.entries(defaults)){
   const el=fields[id];
   if(!el)continue;
   if(el.type==='checkbox'){el.checked=typeof state[id]==='boolean'?state[id]:value}
   else if(el.type==='number'){
    const raw=Number(state[id]);
    el.value=String(Number.isFinite(raw)?sizeClamp(raw,Number(el.min),Number(el.max)):Number(value));
   }
   else if([...el.options].some(o=>o.value===state[id]))el.value=state[id];
   else el.value=value;
   el.dispatchEvent(new Event('change',{bubbles:true}));
  }
  syncDimensions();summary();
 }
 quickStep?.addEventListener('change',()=>show(Number(quickStep.value)));
 // Trusted opener from parent: the mobile bottom button must reveal actual
 // house/material cards, not merely scroll to the 3D image. Repeated clicks
 // reopen the chooser even if the URL is already #interactive-home.
 window.addEventListener('message',event=>{
  if(window.parent===window||event.source!==window.parent||event.origin!==location.origin)return;
  if(event.data?.type!=='kaskad-builder-open'||event.data?.version!==1)return;
  const wanted=Number(event.data.step);
  const nextStage=Number.isInteger(wanted)?Math.max(0,Math.min(stages.length-1,wanted)):0;
  show(nextStage,true);
  requestAnimationFrame(()=>{
   const target=nextStage===0?
     root.querySelector('.builder-category-filter')||root.querySelector('.builder-material-card'):
     ({geometry:geom,roof:roofShapes,facade:facadeHelp,
       fence:root.querySelector('.builder-material-card'),
       openings:document.getElementById('builderOpenings'),
       site:document.getElementById('builderGarden'),
       summary:document.getElementById('builderFinal')})[stages[nextStage].id];
   if(target&&!target.hidden){
    const offset=target.getBoundingClientRect().top-controls.getBoundingClientRect().top+controls.scrollTop-7;
    controls.scrollTo({top:Math.max(0,offset),behavior:'instant'});
   }
   window.parent.postMessage({type:'kaskad-builder-opened',version:1,
      stage:nextStage,choices:root.querySelectorAll('.builder-material-card').length},location.origin);
  });
 });
 document.getElementById('builderPrev').addEventListener('click',()=>show(step-1));
 document.getElementById('builderNext').addEventListener('click',()=>{
  if(step<stages.length-1){show(step+1);return}
  const config={facade:fields.facadeSelect.value,roof:fields.roofSelect.value,
   fence:fields.fenceSelect.value,roofColor:fields.roofColorSelect.value,
   fenceColor:fields.fenceColorSelect.value,
   houseStyle:fields.houseStyleSelect.value,houseSize:fields.houseSizeSelect.value,
   houseWidth:fields.houseWidthInput.value,houseLength:fields.houseLengthInput.value,
   houseFloors:fields.houseFloorsSelect.value,
   roofShape:fields.roofShapeSelect.value,
   frameColor:fields.frameColorSelect.value,doorColor:fields.doorColorSelect.value,
   glassTint:fields.glassTintSelect.value,landscape:fields.landscapeSelect.value,
   entrance:fields.entranceStyleSelect.value,
   pool:fields.poolToggle.checked,
   yardStyle:fields.yardStyleSelect.value,parking:fields.parkingToggle.checked,
   gazebo:fields.gazeboToggle.checked,terrace:fields.terraceToggle.checked,
   plinth:fields.plinthSelect.value};
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
 syncDimensions();
 show(0);
})();
