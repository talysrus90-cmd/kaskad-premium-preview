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
  {id:'openings',title:'Вход и окна',brief:'Выберите входную группу, цвет рам, стекло и дверь — всё меняется в 3D'},
  {id:'fence',title:'Забор',brief:'Ограждение, ворота и цвет'},
  {id:'site',title:'Участок',brief:'Дорожка, парковка, клумбы и бассейн'},
  {id:'summary',title:'Итог',brief:'Сохраните или обсудите ваш вариант'}
 ];
 const fieldIds=['houseStyleSelect','houseSizeSelect','roofShapeSelect','facadeSelect',
  'roofSelect','roofColorSelect','fenceSelect','fenceColorSelect','frameColorSelect',
  'doorColorSelect','glassTintSelect','landscapeSelect','poolToggle',
  'yardStyleSelect','parkingToggle','gazeboToggle','terraceToggle','entranceStyleSelect','plinthSelect','verandaSelect','blindAreaType','blindAreaColor','blindAreaWidth','blindAreaContour',
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
   <h3>Парадный вход</h3>
   <p class="builder-entry-explainer">Четыре конструкции крыльца. Нажмите на вариант — навес, опоры и площадка изменятся на доме.</p>
   <label class="builder-v25-control">Оформление главного входа
    <select id="entranceStyleSelect">
     <option value="simple">Лаконичный навес · две опоры</option>
     <option value="columns">Классический портик · колонны</option>
     <option value="timber">Деревянный навес · балки</option>
     <option value="modern">Современный портал · металл</option>
    </select>
   </label>
   <div class="builder-entrance-choices" id="builderEntranceChoices" aria-label="Варианты оформления входа"></div>
   <p id="builderEntranceStatus" class="builder-entrance-status" role="status" aria-live="polite"></p>
   <h3 class="builder-window-heading">Окна и входная дверь</h3>
   <p>Цвет рам, оттенок стекла и входная дверь меняются отдельно от выбранного крыльца.</p>
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
   <h3>Ваш земельный участок</h3>
   <p class="builder-plot-lead">Укажите реальные стороны земли, а затем передвиньте дом пальцем.</p>
   <label class="builder-range-label" for="plotWidthSlider">Ширина участка по улице <output id="plotWidthValue">20 м</output></label>
   <input id="plotWidthSlider" type="range" min="10" max="60" step="0.5" value="20" aria-label="Ширина участка вдоль улицы в метрах">
   <label class="builder-range-label" for="plotLengthSlider">Глубина участка <output id="plotLengthValue">30 м</output></label>
   <input id="plotLengthSlider" type="range" min="10" max="70" step="0.5" value="30" aria-label="Глубина участка от улицы до дальнего забора в метрах">
   <p class="builder-plot-area">Площадь: <strong id="plotAreaValue">6 соток</strong></p>
   <p id="plotDimensions" class="builder-plot-dimensions" aria-live="polite"></p>
   <div class="builder-plot-plan" id="builderPlotPlan" aria-label="Масштабный план земельного участка; перетащите дом для размещения">
     <div class="builder-plot-house" id="builderPlotHouse" role="img" aria-label="Дом, вид сверху, перетащите для изменения положения"><svg viewBox="0 0 110 100" aria-hidden="true" focusable="false"><path d="M9 38L55 10L101 38L101 83L9 83Z" fill="#e1d2ba"/><path d="M4 42L55 4L106 42L55 76Z" fill="#52666f"/><path d="M4 42L55 76L55 89L4 54Z" fill="#344852"/><path d="M106 42L55 76L55 89L106 54Z" fill="#405860"/><path d="M15 62H31V76H15Z" fill="#88b1ba"/><path d="M79 62H95V76H79Z" fill="#88b1ba"/></svg><span id="builderPlotHouseLabel">10 × 10 м</span></div>
     <span class="builder-plot-front">Улица / фасад</span>
   </div>
   <p id="plotFitNote" class="builder-plot-note" role="status"></p>
   <p class="builder-plot-disclaimer">Эскизная прямоугольная схема без учёта границ по кадастру, обязательных отступов и подъездов. Положение дома на плане не переносит дорожки и забор 3D-демонстрации.</p>
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
    <input id="terraceToggle" type="checkbox" hidden>
    <label class="builder-v25-control">Веранда
      <select id="verandaSelect"><option value="none">Без веранды</option><option value="open">Открытая</option><option value="covered">Крытая</option><option value="columns">С колоннами</option><option value="modern">Современная</option><option value="garden">Со стороны сада</option></select>
    </label>
    <p id="siteCompatibilityNote" role="status" aria-live="polite"></p>
    <section class="builder-addon-picks" aria-label="Дополнительные архитектурные решения">
      <h3>Гараж и навес</h3>
      <p>Гараж и навес пока доступны как готовые архитектурные варианты: выбор изменит тип дома, но сохранит материалы фасада.</p>
      <div class="builder-addon-grid">
       <button type="button" class="builder-addon-button" data-addon-style="krasnodarTwo" data-addon-roof="gable"><strong>Гаражное крыло</strong><small>2 этажа · встроенный гараж</small></button>
       <button type="button" class="builder-addon-button" data-addon-style="bungalow" data-addon-roof="hip"><strong>Навес для авто</strong><small>1 этаж · крытая парковка</small></button>
       <button type="button" class="builder-addon-button" data-addon-style="twoBalcony" data-addon-roof="gable"><strong>Дом с балконом</strong><small>2 этажа · балкон</small></button>
       <button type="button" class="builder-addon-button" data-addon-veranda="covered"><strong>Крытая веранда</strong><small>Меняет только веранду</small></button>
      </div>
      <p id="builderAddonStatus" role="status" aria-live="polite"></p>
    </section>
    <label class="builder-v25-control">Отмостка — материал
      <select id="blindAreaType"><option value="concrete">Бетонная</option><option value="tile">Плитка</option><option value="pavers">Брусчатка</option><option value="stone">Камень</option><option value="wide">Широкая декоративная</option><option value="none">Без отмостки (эскиз)</option></select>
    </label>
    <label class="builder-v25-control">Цвет отмостки
      <select id="blindAreaColor"><option value="graphite">Графит</option><option value="gray">Серый</option><option value="brown">Серо-коричневый</option><option value="sand">Песочный</option></select>
    </label>
    <label class="builder-v25-control">Ширина отмостки
      <select id="blindAreaWidth"><option value="0.6">0,6 м</option><option value="0.8">0,8 м</option><option value="0.9" selected>0,9 м</option><option value="1.2">1,2 м</option><option value="1.5">1,5 м</option></select>
    </label>
    <label class="builder-v25-control">Контур отмостки
      <select id="blindAreaContour"><option value="all">Вокруг дома</option><option value="front">Только спереди (демо)</option><option value="rear">Только сзади (демо)</option></select>
    </label>
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
 // Blind-area prototype is hidden until it receives a quality architectural finish.
 const disabledBlindArea=document.getElementById('blindAreaType');
 if(disabledBlindArea){disabledBlindArea.value='none';
  ['blindAreaType','blindAreaColor','blindAreaWidth','blindAreaContour'].forEach(id=>
   document.getElementById(id)?.closest('label')?.setAttribute('hidden',''));
 }
 // Controls belong in the panel, never cover the 3D image.
 const facadeHelp=document.createElement('section');
 facadeHelp.className='builder-material-explainer';facadeHelp.hidden=true;
 facadeHelp.innerHTML='<h3>Материал и цвет фасада</h3><p>Выберите фактуру на карточке ниже. Дом изменится сразу.</p><label class="builder-v25-control">Отделка цоколя<select id="plinthSelect"><option value="graphite">Практичный графит (по умолчанию)</option><option value="stone">Природный камень</option><option value="brick">Облицовочный кирпич</option><option value="tile">Тёмная фасадная плитка</option><option value="dagestan">Дагестанский камень</option><option value="decorative">Тёмный декоративный камень</option><option value="taupe">Серо-коричневый камень</option><option value="none">Без декоративной облицовки</option></select></label>';
 root.after(facadeHelp);
 // Plinth stays independent of the facade, but uses compact visual choices
 // rather than an unexplained dropdown with long labels.
 const plinthSelect=document.getElementById('plinthSelect');
 const plinthChoices=document.createElement('details');
 plinthChoices.className='builder-plinth-choices';
 const plinthHead=document.createElement('summary');
 plinthHead.textContent='Цоколь · практичный графит';
 plinthChoices.append(plinthHead);
 const plinthGrid=document.createElement('div');plinthGrid.className='builder-plinth-grid';plinthChoices.append(plinthGrid);
 const plinthImages={graphite:'brickGraphite',stone:'stone',brick:'brick',tile:'gray',dagestan:'stone',
  decorative:'klinker',taupe:'gray',none:'plasterWhite'};
 for(const option of plinthSelect.options){
  const button=document.createElement('button');button.type='button';
  button.className='builder-plinth-button';button.dataset.plinth=option.value;
  const image=document.createElement('img');
  image.src='assets/3d/cards/material_'+plinthImages[option.value]+'_v37.webp';
  image.alt='';image.loading='lazy';image.width=32;image.height=32;
  const caption=document.createElement('span');caption.textContent=option.textContent.replace(' (по умолчанию)','');
  button.append(image,caption);
  button.addEventListener('click',()=>{
   plinthSelect.value=option.value;plinthSelect.dispatchEvent(new Event('change',{bubbles:true}));
  });
  plinthGrid.append(button);
 }
 const updatePlinthButtons=()=>{
  const current=[...plinthSelect.options].find(o=>o.value===plinthSelect.value);
  plinthHead.textContent='Цоколь · '+(current?.textContent||'Выбрать').replace(' (по умолчанию)','');
  plinthGrid.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.plinth===plinthSelect.value)));
 };
 plinthSelect.addEventListener('change',updatePlinthButtons);updatePlinthButtons();
 // The canonical select remains in the DOM for persistence and 3D updates.
 facadeHelp.querySelector('label').hidden=true;
 facadeHelp.querySelector('h3').hidden=true;
 facadeHelp.querySelector('p').hidden=true;
 facadeHelp.append(plinthChoices);
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
 const entryLabels=[
  ['simple','Классический навес','Две стройные опоры'],
  ['columns','Парадный портик','Две массивные колонны'],
  ['timber','Деревянный вход','Балки, стойки и стропила'],
  ['modern','Современный портал','Симметричный металл и камень']
 ];
 // Simple architectural silhouettes help users compare the entry structures.
 // These are controls, not misleading full-house pictures.
 const entrySvg={
  simple:'<path d="M4 14H60M10 19H54M17 19V53M47 19V53M12 53H52" stroke-width="3"/>',
  columns:'<path d="M4 16H60M8 20H56M12 25H52M16 25V53M23 25V53M41 25V53M48 25V53M12 54H52" stroke-width="3.8"/>',
  timber:'<path d="M4 14H60M10 18H54M16 19V53M48 19V53M16 30L27 19M48 30L37 19M12 54H52" stroke-width="3.4"/>',
  modern:'<path d="M4 15H60V21H4zM13 21V53M51 21V53M11 53H53M17 30H47" stroke-width="3.8"/>'
 };
 for(const [key,title,sub] of entryLabels){
  const b=document.createElement('button');b.type='button';b.dataset.entryStyle=key;
  b.className='builder-entry-option';
  b.innerHTML='<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="square">'+entrySvg[key]+'</svg><strong></strong><small></small>';
  b.querySelector('strong').textContent=title;b.querySelector('small').textContent=sub;
  b.addEventListener('click',()=>{
    entrySelect.value=key;entrySelect.dispatchEvent(new Event('change',{bubbles:true}));
    window.dispatchEvent(new CustomEvent('kaskad:focus-view',{detail:{tab:'facade'}}));
  });
  entryButtons.append(b);
 }
 const entryStatus=document.getElementById('builderEntranceStatus');
 const syncEntrance=()=>{
  for(const b of entryButtons.children)b.setAttribute('aria-pressed',String(b.dataset.entryStyle===entrySelect.value));
  entryStatus.textContent='На модели выбран: '+(entryLabels.find(x=>x[0]===entrySelect.value)?.slice(1).join(' · ')||'Навес');
 };
 entrySelect.addEventListener('change',syncEntrance);syncEntrance();
 for(const id of fieldIds)fields[id]=document.getElementById(id);
 const stepButtons=[];
 const quickStep=document.getElementById('builderQuickStep');
 // Users often scroll directly to the embedded configurator without using
 // the site CTA. Announce real interactions so Android Back has a safe
 // same-page history entry even in that case. Do not record each slider tick.
 let engagementAnnounced=false;
 const announceEngagement=()=>{
  if(engagementAnnounced||window.parent===window)return;
  engagementAnnounced=true;
  window.parent.postMessage({type:'kaskad-builder-engaged',version:1},location.origin);
 };
 document.addEventListener('click',event=>{
  if(!event.isTrusted)return;
  if(event.target.closest('button,input,select,label,.builder-material-card'))announceEngagement();
 },{capture:true});
 document.addEventListener('pointerdown',event=>{
  if(!event.isTrusted)return;
  if(event.target.matches('canvas,input[type=range]'))announceEngagement();
 },{capture:true,passive:true});
 const quickTabs=document.getElementById('builderQuickTabs');
 const widthInput=document.getElementById('houseWidthInput');
 const lengthInput=document.getElementById('houseLengthInput');
 const floorsSelect=document.getElementById('houseFloorsSelect');
 const sizeText=document.getElementById('builderSizeResult');
 const widthSlider=document.getElementById('houseWidthSlider');
 const lengthSlider=document.getElementById('houseLengthSlider');
 const sizeButtons=[...document.querySelectorAll('[data-home-size]')];
 const floorButtons=[...document.querySelectorAll('[data-home-floors]')];
 let step=0;
 let stageScrollToken=0;
 const sizeClamp=(v,min,max)=>Math.max(min,Math.min(max,Math.round(Number(v)*2)/2));
 const sizeValues=()=>({
   width:sizeClamp(widthInput.value||10,5,14),
   length:sizeClamp(lengthInput.value||10,8,18),
   floors:floorsSelect.value
 });
 function syncDimensions(){
  const {width,length,floors}=sizeValues();
  if(widthSlider){widthSlider.value=String(width);document.getElementById('houseWidthValue').textContent=width+' м'}
  if(lengthSlider){lengthSlider.value=String(length);document.getElementById('houseLengthValue').textContent=length+' м'}
  const sceneHouse=document.getElementById('sceneHouseDimensions');
  if(sceneHouse)sceneHouse.textContent='Дом '+width+' × '+length+' м';
  const footprint=Math.round(width*length*100)/100;
  const mansardAboveTwo=(document.getElementById('houseStyleSelect')?.value||'').startsWith('twoMansard');
  const floorLabel=mansardAboveTwo?'2 этажа + мансарда':{one:'1 этаж',mansard:'1 этаж + мансарда',two:'2 этажа'}[floors];
  const info=width+' × '+length+' м · '+footprint+' м² · '+floorLabel;
  sizeText.textContent=info+(floors==='two'?' · суммарно до '+footprint*2+' м²':'');
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
  if(typeof renderPlot==='function')renderPlot();
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
 for(const [slider,el] of [[widthSlider,widthInput],[lengthSlider,lengthInput]]){
  slider?.addEventListener('input',()=>{el.value=slider.value;syncDimensions();summary()});
  slider?.addEventListener('change',()=>{el.dispatchEvent(new Event('change',{bubbles:true}))});
 }
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
  const compatible=floor==='two'?['classic','twoClassic','twoBrick','twoColumns','twoModern','twoBalcony','twoTerrace','twoEstate','twoFamily','twoMansard','twoMansardBrick','twoMansardColumns','krasnodarTwo','southernVillaTwo','caucasusGalleryTwo','modernOffsetTwo']:
    floor==='mansard'?['mansardHome','gableAttic','mansardBrick','mansardEstate']:null;
  const nextStyle=floor==='two'?'classic':floor==='mansard'?'mansardHome':'family';
  if(compatible?!compatible.includes(style.value):['classic','twoClassic','twoBrick','twoColumns','twoModern','twoBalcony','twoTerrace','twoEstate','twoFamily','twoMansard','twoMansardBrick','twoMansardColumns','krasnodarTwo','southernVillaTwo','caucasusGalleryTwo','modernOffsetTwo','mansardHome','gableAttic','mansardBrick','mansardEstate'].includes(style.value)){
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
  const inferred=['classic','twoClassic','twoBrick','twoColumns','twoModern','twoBalcony','twoTerrace','twoEstate','twoFamily','twoMansard','twoMansardBrick','twoMansardColumns','krasnodarTwo','southernVillaTwo','caucasusGalleryTwo','modernOffsetTwo'].includes(style)?'two':
   ['mansardHome','gableAttic','mansardBrick','mansardEstate'].includes(style)?'mansard':'one';
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
 // Access existing 3D architecture, not decorative or fake toggles.
 const addonStatus=document.getElementById('builderAddonStatus');
 const addonButtons=[...document.querySelectorAll('.builder-addon-button')];
 const syncAddons=()=>addonButtons.forEach(b=>{
  const matches=b.dataset.addonStyle
   ?fields.houseStyleSelect.value===b.dataset.addonStyle
   :fields.verandaSelect.value===b.dataset.addonVeranda;
  b.setAttribute('aria-pressed',String(matches));
 });
 for(const b of addonButtons)b.addEventListener('click',()=>{
  if(b.dataset.addonStyle){
   const choice=b.dataset.addonStyle;
   if(![...fields.houseStyleSelect.options].some(o=>o.value===choice))return;
   fields.houseStyleSelect.value=choice;
   fields.houseStyleSelect.dispatchEvent(new Event('change',{bubbles:true}));
   fields.roofShapeSelect.value=b.dataset.addonRoof;
   fields.roofShapeSelect.dispatchEvent(new Event('change',{bubbles:true}));
   if(!fields.parkingToggle.checked){
    fields.parkingToggle.checked=true;
    fields.parkingToggle.dispatchEvent(new Event('change',{bubbles:true}));
   }
   addonStatus.textContent='Модель дома изменена: '+b.querySelector('strong').textContent+'. Фасад и отделку можно выбрать отдельно.';
  }else if(b.dataset.addonVeranda){
   // Two-balcony architecture uses the rear veranda zone: select a compatible
   // two-floor house instead of falsely claiming a veranda was added.
   let changedStyle=false;
   if(fields.houseStyleSelect.value==='twoBalcony'){
    fields.houseStyleSelect.value='twoTerrace';
    fields.houseStyleSelect.dispatchEvent(new Event('change',{bubbles:true}));
    fields.roofShapeSelect.value='hip';
    fields.roofShapeSelect.dispatchEvent(new Event('change',{bubbles:true}));
    changedStyle=true;
   }
   fields.verandaSelect.value=b.dataset.addonVeranda;
   fields.verandaSelect.dispatchEvent(new Event('change',{bubbles:true}));
   addonStatus.textContent=changedStyle
    ?'Выбран совместимый двухэтажный дом: вместо заднего балкона установлена крытая веранда.'
    :'Крытая веранда добавлена к выбранному дому.';
  }
  syncAddons();
 });
 for(const el of [fields.houseStyleSelect,fields.verandaSelect])
  el.addEventListener('change',syncAddons);
 syncAddons();
 function name(id){const el=fields[id];return el?.selectedOptions?.[0]?.textContent?.trim()||
   (el?.checked?'Да':'Нет')||'—';}
 const plotWidth=document.getElementById('plotWidthSlider');
 const plotLength=document.getElementById('plotLengthSlider');
 const plotPlan=document.getElementById('builderPlotPlan');
 const plotHouse=document.getElementById('builderPlotHouse');
 let plotX=.5,plotZ=.58;
 function plotGeometry(){
  const width=Math.max(10,Math.min(60,Number(plotWidth.value)||20));
  const depth=Math.max(10,Math.min(70,Number(plotLength.value)||30));
  return {width,depth,area:width*depth};
 }
 function renderPlot(){
  const {width,depth,area}=plotGeometry();
  const house=sizeValues();
  const roomX=Math.max(0,width-house.width);
  const roomZ=Math.max(0,depth-house.length);
  const fits=width>=house.width&&depth>=house.length;
  const px=Math.max(0,Math.min(roomX,plotX*roomX));
  const pz=Math.max(0,Math.min(roomZ,plotZ*roomZ));
  const box=plotPlan.getBoundingClientRect();
  const maxPx=box.width||300,maxPz=box.height||210;
  plotPlan.style.width=(Math.min(100,100*width/depth)).toFixed(2)+'%';
  plotPlan.style.aspectRatio=String(width/depth);
  plotHouse.style.width=(house.width/width*100)+'%';
  plotHouse.style.height=(house.length/depth*100)+'%';
  plotHouse.style.left=(px/width*100)+'%';
  plotHouse.style.top=(pz/depth*100)+'%';
  plotHouse.style.borderColor=fits?'#d6e0d2':'#e58b7c';
  document.getElementById('builderPlotHouseLabel').textContent=house.width+' × '+house.length+' м';
  const sotka=(area/100).toLocaleString('ru-RU',{maximumFractionDigits:2});
  document.getElementById('plotAreaValue').textContent=sotka+' соток';
  document.getElementById('plotWidthValue').textContent=width+' м';
  document.getElementById('plotLengthValue').textContent=depth+' м';
  const scenePlot=document.getElementById('scenePlotDimensions');
  if(scenePlot)scenePlot.textContent='Участок '+width+' × '+depth+' м';
  document.getElementById('plotDimensions').textContent='Участок '+width.toFixed(1)+' × '+depth.toFixed(1)+' м · '+area.toFixed(0)+' м²';
  const coverage=house.width*house.length/area*100;
  const percent=coverage.toFixed(1).replace('.',',');
  document.getElementById('plotFitNote').textContent=(fits?'Дом помещается по геометрии':'Дом не помещается в пределах выбранного прямоугольника')+
    ' · занято '+percent+'% участка · свободно '+Math.max(0,area-house.width*house.length).toFixed(0)+' м²'+
    (fits?' · положение дома можно менять на плане':' · увеличьте участок или уменьшите дом');
  window.dispatchEvent(new CustomEvent('kaskad:plot-changed',
   {detail:{width,depth,area,houseX:px,houseZ:pz,houseWidth:house.width,houseLength:house.length,fits}}));
 }
 for(const slider of [plotWidth,plotLength])slider.addEventListener('input',()=>{renderPlot();summary()});
 window.addEventListener('kaskad:plot-move',event=>{
  const {houseX,houseZ}=event.detail||{};
  const {width,depth}=plotGeometry(),house=sizeValues();
  if(!Number.isFinite(houseX)||!Number.isFinite(houseZ))return;
  plotX=(width>house.width)?Math.max(0,Math.min(1,houseX/(width-house.width))):0;
  plotZ=(depth>house.length)?Math.max(0,Math.min(1,houseZ/(depth-house.length))):0;
  renderPlot();
 });
 const movePlot=e=>{
  if(e.cancelable)e.preventDefault();
  const rect=plotPlan.getBoundingClientRect();
  const {width,depth}=plotGeometry(),house=sizeValues();
  const x=(e.clientX-rect.left)/rect.width*width-house.width/2;
  const z=(e.clientY-rect.top)/rect.height*depth-house.length/2;
  plotX=(width>house.width)?Math.max(0,Math.min(1,x/(width-house.width))):0;
  plotZ=(depth>house.length)?Math.max(0,Math.min(1,z/(depth-house.length))):0;
  renderPlot();
 };
 plotPlan.addEventListener('pointerdown',e=>{plotPlan.setPointerCapture(e.pointerId);movePlot(e)});
 plotPlan.addEventListener('pointermove',e=>{if(plotPlan.hasPointerCapture(e.pointerId))movePlot(e)});
 window.addEventListener('resize',renderPlot);
 function summary(){
  const result=document.getElementById('builderFinalSummary');
  if(!result)return;
  const dims=sizeValues();
  const rows=[
   ['Архитектура',name('houseStyleSelect')],
   ['Размеры',dims.width+' × '+dims.length+' м'],
   ['Пятно застройки',(dims.width*dims.length)+' м²'],
   ['Участок',(plotGeometry().area/100).toLocaleString('ru-RU',{maximumFractionDigits:2})+' сот.'],
   ['Этажность',(fields.houseStyleSelect.value.startsWith('twoMansard')?'2 этажа + мансарда':({one:'1 этаж',mansard:'1 + мансарда',two:'2 этажа'})[dims.floors])],
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
   ['Веранда',name('verandaSelect')],
   ['Отмостка',name('blindAreaType')+', '+name('blindAreaWidth')+', '+name('blindAreaColor')],
   ['Бассейн',fields.poolToggle?.checked?'Есть':'Без бассейна']
  ];
  result.replaceChildren(...rows.filter(([label])=>label!=='Отмостка').map(([label,value])=>{
   const p=document.createElement('p');
   const strong=document.createElement('strong');strong.textContent=label+': ';
   p.append(strong,document.createTextNode(value));
   return p;
  }));
 }
 function show(i,keepScroll=false){
  // Invalidate a previous frame's scheduled scroll when the user rapidly
  // switches tabs: otherwise the previous stage can steal the scroll.
  const thisScroll=++stageScrollToken;
  step=Math.max(0,Math.min(stages.length-1,i));
  const id=stages[step].id;
  if(quickStep)quickStep.value=String(step);
  quickTabs?.querySelectorAll('[data-builder-step]').forEach(b=>{
   b.setAttribute('aria-selected',String(Number(b.dataset.builderStep)===step));
  });
  stepButtons.forEach((b,n)=>{b.setAttribute('aria-current',n===step?'step':'false');
   b.setAttribute('aria-selected',String(n===step));});
  geom.hidden=id!=='geometry';
  const scenePlotBadge=document.getElementById('scenePlotDimensions');
  if(scenePlotBadge)scenePlotBadge.hidden=id!=='site';
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
  window.dispatchEvent(new CustomEvent('kaskad:site-preview',{detail:{active:id==='site'}}));
  if(id==='site')renderPlot();
  const prev=document.getElementById('builderPrev'),next=document.getElementById('builderNext');
  prev.disabled=step===0;
  next.textContent=step===stages.length-1?'Обсудить проект ↗':'Далее →';
  document.getElementById('builderStepLabel').textContent='Шаг '+(step+1)+' из '+stages.length;
  document.getElementById('builderStepTitle').textContent=stages[step].title;
  document.getElementById('builderProgress').style.width=((step+1)*100/stages.length)+'%';
  const intro=document.querySelector('.builder-v25-intro p');
  if(intro)intro.textContent=stages[step].brief+'. Изменения сразу видны на модели.';
  if(!keepScroll && !window.matchMedia('(max-width:730px)').matches){
   scroll.scrollTo({top:0,behavior:'instant'});
   controls.scrollTo({top:0,behavior:'instant'});
  }
  // On phones the 3D viewer is sticky and the page footer has a dock.
  // Reveal the actual choices when a step is tapped instead of leaving
  // the selected materials below the visible part of the iframe.
  if(window.matchMedia('(max-width:730px)').matches){
   const target=({presets:root.querySelector('.builder-category-filter'),geometry:geom,roof:roofShapes,facade:root.querySelector('.builder-material-list'),
     fence:root.querySelector('.builder-material-list'),
     openings:document.getElementById('builderOpenings'),
     site:document.getElementById('builderGarden'),
     summary:document.getElementById('builderFinal')})[id];
   requestAnimationFrame(()=>requestAnimationFrame(()=>{
    if(thisScroll!==stageScrollToken||!target||!target.isConnected||!target.getClientRects().length)return;
    const top=target.getBoundingClientRect().top-controls.getBoundingClientRect().top+controls.scrollTop-7;
    controls.scrollTo({top:Math.max(0,top),behavior:'instant'});
   }));
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
  houseStyleSelect:'twoBrick',houseSizeSelect:'200',roofShapeSelect:'gable',
  houseWidthInput:'10',houseLengthInput:'10',houseFloorsSelect:'two',
  plotWidthSlider:'20',plotLengthSlider:'30',
  facadeSelect:'brick',roofSelect:'metalGraphite',roofColorSelect:'graphite',
  fenceSelect:'iron',fenceColorSelect:'graphite',frameColorSelect:'bronze',
  doorColorSelect:'walnut',glassTintSelect:'clear',landscapeSelect:'lush',poolToggle:false,
  entranceStyleSelect:'simple',
  yardStyleSelect:'family',parkingToggle:true,gazeboToggle:false,
  terraceToggle:false,plinthSelect:'graphite',verandaSelect:'none',
   blindAreaType:'concrete',blindAreaColor:'graphite',
   blindAreaWidth:'0.9',blindAreaContour:'all'
 };
 const storageKey='kaskad-v51-exterior-selection';
 function apply(state){
  if(!state||typeof state!=='object')return;
   if(state.terraceToggle===true&&!state.verandaSelect)state={...state,verandaSelect:'open',terraceToggle:false};
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
  plotX=Number.isFinite(Number(state.plotX))?Math.max(0,Math.min(1,Number(state.plotX))):.5;
  plotZ=Number.isFinite(Number(state.plotZ))?Math.max(0,Math.min(1,Number(state.plotZ))):.58;
  for(const [el,key] of [[plotWidth,'plotWidthSlider'],[plotLength,'plotLengthSlider']]){
   const value=Number(state[key]);
   if(Number.isFinite(value)&&value>=Number(el.min)&&value<=Number(el.max))el.value=String(value);
  }
  syncDimensions();renderPlot();summary();
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
     ({geometry:geom,roof:roofShapes,facade:root.querySelector('.builder-material-card'),
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
 function collectConfig(){
  return {facade:fields.facadeSelect.value,roof:fields.roofSelect.value,
   fence:fields.fenceSelect.value,roofColor:fields.roofColorSelect.value,
   fenceColor:fields.fenceColorSelect.value,
   houseStyle:fields.houseStyleSelect.value,houseSize:fields.houseSizeSelect.value,
   houseWidth:fields.houseWidthInput.value,houseLength:fields.houseLengthInput.value,
   houseFloors:fields.houseFloorsSelect.value,plotWidth:plotWidth.value,plotLength:plotLength.value,
   plotSotkas:(plotGeometry().area/100).toFixed(2),plotPositionX:plotX.toFixed(3),plotPositionZ:plotZ.toFixed(3),
   roofShape:fields.roofShapeSelect.value,
   frameColor:fields.frameColorSelect.value,doorColor:fields.doorColorSelect.value,
   glassTint:fields.glassTintSelect.value,landscape:fields.landscapeSelect.value,
   entrance:fields.entranceStyleSelect.value,
   pool:fields.poolToggle.checked,
   yardStyle:fields.yardStyleSelect.value,parking:fields.parkingToggle.checked,
   gazebo:fields.gazeboToggle.checked,terrace:fields.terraceToggle.checked,
   veranda:fields.verandaSelect.value,blindArea:fields.blindAreaType.value,
   blindAreaColor:fields.blindAreaColor.value,blindAreaWidth:fields.blindAreaWidth.value,
   blindAreaContour:fields.blindAreaContour.value,
   plinth:fields.plinthSelect.value};
 }
 function openInquiry(){
  const config=collectConfig();
  closeRequestMenu();
  if(window.parent!==window){
   window.parent.postMessage({type:'kaskad-design-inquiry',version:1,config},location.origin);
  }else{
   const a=document.createElement('a');a.href='index.html#project-request';
   a.textContent='Перейти к заявке';a.className='builder-v25-inline-btn';
   document.getElementById('builderFinal').append(a);
  }
 }
 document.getElementById('builderNext').addEventListener('click',()=>{
  if(step<stages.length-1){show(step+1);return}
  openInquiry();
 });
 const requestButton=document.getElementById('sceneRequestButton');
 const requestMenu=document.getElementById('sceneRequestMenu');
 const requestStatus=document.getElementById('sceneRequestStatus');
 function closeRequestMenu(){
   requestMenu.hidden=true;requestButton?.setAttribute('aria-expanded','false');
 }
 requestButton?.addEventListener('click',()=>{
   requestMenu.hidden=!requestMenu.hidden;
   requestButton.setAttribute('aria-expanded',String(!requestMenu.hidden));
 });
 document.addEventListener('click',event=>{
   if(requestMenu.hidden||!event.isTrusted||requestMenu.contains(event.target)||event.target===requestButton)return;
   closeRequestMenu();
 });
 document.addEventListener('keydown',event=>{
   if(event.key==='Escape'&&!requestMenu.hidden){closeRequestMenu();requestButton.focus()}
 });
 const selectedName=id=>{
   const control=document.getElementById(id);
   return control?.selectedOptions?.[0]?.textContent?.trim()||control?.value||'Не указано';
 };
 const readableConfig=()=>{
   const config=collectConfig();
   const lines=[
     'КАСКАД — ваша предварительная конфигурация дома',
     'Дата: '+new Date().toLocaleDateString('ru-RU'),
     '',
     'Архитектура: '+selectedName('houseStyleSelect'),
     'Размеры дома: '+config.houseWidth+' × '+config.houseLength+' м',
     'Пятно застройки: '+(Number(config.houseWidth)*Number(config.houseLength)).toFixed(1)+' м²',
     'Этажность: '+selectedName('houseFloorsSelect'),
     'Кровля: '+selectedName('roofShapeSelect')+', '+selectedName('roofSelect'),
     'Цвет кровли: '+selectedName('roofColorSelect'),
     'Фасад: '+selectedName('facadeSelect'),
     'Цоколь: '+selectedName('plinthSelect'),
     'Окна: '+selectedName('frameColorSelect')+'; стекло: '+selectedName('glassTintSelect'),
     'Вход: '+selectedName('entranceStyleSelect')+'; дверь: '+selectedName('doorColorSelect'),
     'Забор: '+selectedName('fenceSelect')+'; цвет: '+selectedName('fenceColorSelect'),
     'Участок: '+config.plotWidth+' × '+config.plotLength+' м ('+config.plotSotkas+' сот.)',
     'Озеленение: '+selectedName('landscapeSelect')+'; двор: '+selectedName('yardStyleSelect'),
     'Веранда: '+selectedName('verandaSelect'),
     'Бассейн: '+(config.pool?'да':'нет')+'; парковка: '+(config.parking?'да':'нет')+
       '; пергола: '+(config.gazebo?'да':'нет'),
     '',
     'Визуальный эскиз. Не является рабочим проектом, сметой или публичной офертой.',
     'Сайт: '+new URL('index.html',document.baseURI).href
   ];
   return lines.join('\\n').replace(/\\n/g,'\n');
 };
 document.getElementById('sceneRequestDownload')?.addEventListener('click',()=>{
   const body=readableConfig();
   const url=URL.createObjectURL(new Blob(['\\uFEFF'.replace('\\uFEFF','\uFEFF')+body],{type:'text/plain;charset=utf-8'}));
   const a=document.createElement('a');
   a.href=url;a.download='KASKAD-dom-'+collectConfig().houseWidth+'x'+collectConfig().houseLength+'.txt';
   document.body.append(a);a.click();a.remove();
   setTimeout(()=>URL.revokeObjectURL(url),1500);
   requestStatus.textContent='Конфигурация подготовлена для скачивания.';
 });
 document.getElementById('sceneRequestShare')?.addEventListener('click',async()=>{
   const text=readableConfig();
   if(navigator.share){
     try{
       await navigator.share({title:'Мой проект дома КАСКАД',text});
       requestStatus.textContent='Выберите приложение для отправки.';
     }catch(e){
       if(e.name!=='AbortError')requestStatus.textContent='Не удалось поделиться. Попробуйте скачать файл.';
     }
     return;
   }
   try{
     await navigator.clipboard.writeText(text);
     requestStatus.textContent='Текст скопирован. Можно вставить в сообщение.';
   }catch{
     requestStatus.textContent='Поделиться не удалось. Воспользуйтесь скачиванием.';
   }
 });
 document.getElementById('sceneRequestSend')?.addEventListener('click',openInquiry);
 document.getElementById('builderSave').addEventListener('click',()=>{
  try{
   const data={};
   for(const id of fieldIds){const el=fields[id];data[id]=el.type==='checkbox'?el.checked:el.value;}
   data.plotWidthSlider=plotWidth.value;data.plotLengthSlider=plotLength.value;
   data.plotX=plotX;data.plotZ=plotZ;
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
  if(previous){
    if(previous.facadeSelect==='planken')previous.facadeSelect='plaster';
    apply(previous);
  }
 }catch{}
 syncDimensions();renderPlot();
 show(0);
})();
