/* КАСКАД · каталог российских типов ограждений/кровли. Все карточки — выбор 3D-геометрии.
   Названия — обобщённые категории, не фирменные изделия и не реальные цены. */
(function(){
 'use strict';
 const root=document.getElementById('builderGallery');
 const fields={
   facade:document.getElementById('facadeSelect'),
   roof:document.getElementById('roofSelect'),
   fence:document.getElementById('fenceSelect'),
   roofColor:document.getElementById('roofColorSelect'),
   fenceColor:document.getElementById('fenceColorSelect'),
   houseStyle:document.getElementById('houseStyleSelect'),
   houseSize:document.getElementById('houseSizeSelect'),
   roofShape:document.getElementById('roofShapeSelect')
 };
 if(!root||Object.values(fields).some(x=>!x))return;
 const src='assets/3d/cards/';
 // Every architectural variant is backed by a distinct 3D geometry configuration.

 const colors=[
   {value:'graphite',title:'Графит',color:'#52595e'},
   {value:'chocolate',title:'Шоколад',color:'#594438'},
   {value:'burgundy',title:'Бордо',color:'#873c48'},
   {value:'green',title:'Тёмно-зелёный',color:'#426047'},
   {value:'black',title:'Чёрный',color:'#252b30'},
   {value:'gray',title:'Серый',color:'#898f93'},
   {value:'terracotta',title:'Терракота',color:'#bd7254'},
   {value:'sand',title:'Песочный',color:'#beb3a0'}
 ];
 const tabs=[
   {key:'facade',label:'Фасад'},
   {key:'roof',label:'Кровля'},
   {key:'fence',label:'Забор'},
   {key:'presets',label:'Стили домов'}
 ];
 // Retain genuinely different massing / entry / roof families in the main
 // catalog. Colour-only doubles belong in the Facade tab, not in Styles.
 // An architecture card must change more than the facade or roof colour.
 // The three courtyard/wing plans below are separate modelled floorplates.
 const cardPriority=[
   // Featured: user's chosen red brick two-storey model.
   'twoBrick','twoClassic','twoColumns','twoModern','twoBalcony','twoTerrace',
   'krasnodarTwo','southernVillaTwo','caucasusGalleryTwo','modernOffsetTwo',
   // Distinct one-storey floorplans, roofs, porches and additions.
   'brickOne','farmhouseOne','gardenOne','courtyardL','atriumU','crossGableT',
   'modernOne','chalet','bungalow','estateOne','kavkaz',
   // One full floor plus an attic.
   'mansardBrick','mansardEstate','mansardHome','gableAttic',
   // Two full floors plus an attic.
   'twoMansardBrick','twoMansardColumns','twoMansard'
 ];
 const visibleArchitecture=new Set(cardPriority);
 const data={
  presets:[
    {value:"southernVillaTwo",title:"Южная усадьба · колонны и балкон",sub:"2 этажа · парадный вход и боковые крылья",image:"preset_southernVillaTwo_v46",category:"Двухэтажные",set:{houseStyle:"southernVillaTwo",roofShape:"hip"}},
    {value:"krasnodarTwo",title:"Кубанский семейный · гаражное крыло",sub:"2 этажа · гараж в одноэтажной пристройке",image:"preset_krasnodarTwo_v46",category:"Двухэтажные",set:{houseStyle:"krasnodarTwo",roofShape:"gable"}},
    {value:"caucasusGalleryTwo",title:"Кавказский коттедж · угловая галерея",sub:"2 этажа · Г-образный дом и крытая галерея",image:"preset_caucasusGalleryTwo_v46",category:"Двухэтажные",set:{houseStyle:"caucasusGalleryTwo",roofShape:"hip"}},
    {value:"modernOffsetTwo",title:"Современный коттедж · два смещённых крыла",sub:"2 этажа · асимметричные объёмы и плоская кровля",image:"preset_modernOffsetTwo_v46",category:"Двухэтажные",set:{houseStyle:"modernOffsetTwo",roofShape:"flat"}},
    {value:"courtyardL",title:"Г-образный дом с внутренним двориком",sub:"1 этаж · два крыла · защищённая терраса",image:"preset_courtyardL_v45",category:"Одноэтажные",set:{houseStyle:"courtyardL",roofShape:"gable"}},
    {value:"atriumU",title:"Дом с П-образным двором",sub:"1 этаж · три крыла · приватный двор",image:"preset_atriumU_v45",category:"Одноэтажные",set:{houseStyle:"atriumU",roofShape:"hip"}},
    {value:"crossGableT",title:"Дом с поперечным крылом",sub:"1 этаж · Т-образный план · поперечная кровля",image:"preset_crossGableT_v45",category:"Одноэтажные",set:{houseStyle:"crossGableT",roofShape:"gable"}},
    {value:"farmhouseOne",title:"Семейный с широким крыльцом",sub:"1 этаж",image:"preset_farmhouseOne_v32",category:"Одноэтажные",set:{facade:"plaster",roof:"metalGraphite",roofColor:"chocolate",houseStyle:"farmhouseOne",houseSize:"150",roofShape:"gable"}},
    {value:"brickOne",title:"Кирпичный с парадным входом",sub:"1 этаж",image:"preset_brickOne_v32",category:"Одноэтажные",set:{facade:"brick",roof:"metal3d",roofColor:"graphite",houseStyle:"brickOne",houseSize:"150",roofShape:"hip"}},
    {value:"gardenOne",title:"Загородный с деревянными элементами",sub:"1 этаж",image:"preset_gardenOne_v32",category:"Одноэтажные",set:{facade:"stone",roof:"metalGraphite",roofColor:"chocolate",houseStyle:"gardenOne",houseSize:"150",roofShape:"gable"}},
    {value:"mansardBrick",title:"Мансарда · кирпич и фронтон",sub:"1 этаж + мансарда",image:"preset_mansardBrick_v32",category:"Одноэтажные с мансардой",set:{facade:"brick",roof:"metal3d",roofColor:"graphite",houseStyle:"mansardBrick",houseSize:"180",roofShape:"mansard"}},
    {value:"mansardEstate",title:"Мансарда · загородная усадьба",sub:"1 этаж + мансарда",image:"preset_mansardEstate_v32",category:"Одноэтажные с мансардой",set:{facade:"tuscan",roof:"metalGraphite",roofColor:"terracotta",houseStyle:"mansardEstate",houseSize:"180",roofShape:"mansard"}},
    {value:"twoMansard",title:"Двухэтажный с жилой мансардой",sub:"2 этажа + мансарда",image:"preset_twoMansard_v32",category:"Двухэтажные с мансардой",set:{facade:"gray",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoMansard",houseSize:"300",roofShape:"mansard"}},
    {value:"twoMansardBrick",title:"Кирпичный двухэтажный с мансардой",sub:"2 этажа + мансарда",image:"preset_twoMansardBrick_v32",category:"Двухэтажные с мансардой",set:{facade:"brick",roof:"metal3d",roofColor:"graphite",houseStyle:"twoMansardBrick",houseSize:"320",roofShape:"mansard"}},
    {value:"twoMansardColumns",title:"Двухэтажный с колоннами и мансардой",sub:"2 этажа + мансарда",image:"preset_twoMansardColumns_v32",category:"Двухэтажные с мансардой",set:{facade:"stone",roof:"metalGraphite",roofColor:"terracotta",houseStyle:"twoMansardColumns",houseSize:"350",roofShape:"mansard"}},
    {value:"family",title:"Семейный · один этаж",sub:"1 этаж · 150 м²",image:"preset_family_v27",category:"Одноэтажные",set:{facade:"gray",roof:"metalGraphite",roofColor:"graphite",houseStyle:"family",houseSize:"150",roofShape:"hip"}},
    {value:"mansardHome",title:"Мансарда с фасадными люкарнами",sub:"1 этаж + мансарда · 180 м²",image:"preset_mansardHome_v27",category:"Одноэтажные с мансардой",set:{facade:"plaster",roof:"metalGraphite",roofColor:"graphite",houseStyle:"mansardHome",houseSize:"180",roofShape:"mansard"}},
    {value:"gableAttic",title:"Мансарда с окнами во фронтоне",sub:"1 этаж + мансарда · 180 м²",image:"preset_gableAttic_v27",category:"Одноэтажные с мансардой",set:{facade:"brick",roof:"metal3d",roofColor:"graphite",houseStyle:"gableAttic",houseSize:"180",roofShape:"gable"}},
    {value:"cottage",title:"Кирпичный коттедж",sub:"1 этаж · 150 м²",image:"preset_cottage_v27",category:"Одноэтажные",set:{facade:"brick",roof:"metal3d",roofColor:"graphite",houseStyle:"cottage",houseSize:"150",roofShape:"gable"}},
    {value:"country",title:"Светлый загородный",sub:"1 этаж · 180 м²",image:"preset_country_v27",category:"Одноэтажные",set:{facade:"stone",roof:"metalGraphite",roofColor:"graphite",houseStyle:"country",houseSize:"180",roofShape:"hip"}},
    {value:"nordic",title:"Скандинавский дом",sub:"Одноэтажный дом · 150 м²",image:"preset_nordic_v27",category:"Одноэтажные",set:{facade:"plaster",roof:"metal3d",roofColor:"graphite",houseStyle:"nordic",houseSize:"150",roofShape:"gable"}},
    {value:"chalet",title:"Шале с террасой",sub:"Загородный дом · 180 м²",image:"preset_chalet_v27",category:"Одноэтажные",set:{facade:"stone",roof:"metal3d",roofColor:"chocolate",houseStyle:"chalet",houseSize:"180",roofShape:"gable"}},
    {value:"barnhouse",title:"Барнхаус",sub:"Одноэтажный дом · 150 м²",image:"preset_barnhouse_v27",category:"Одноэтажные",set:{facade:"gray",roof:"metal3d",roofColor:"graphite",houseStyle:"barnhouse",houseSize:"150",roofShape:"gable"}},
    {value:"modernOne",title:"Современный с панорамными окнами",sub:"Одноэтажный дом · 180 м²",image:"preset_modernOne_v27",category:"Одноэтажные",set:{facade:"plaster",roof:"standingSeam",roofColor:"graphite",houseStyle:"modernOne",houseSize:"180",roofShape:"flat"}},
    {value:"minimal",title:"Светлый минимализм",sub:"Одноэтажный дом · 150 м²",image:"preset_minimal_v27",category:"Одноэтажные",set:{facade:"plaster",roof:"standingSeam",roofColor:"graphite",houseStyle:"minimal",houseSize:"150",roofShape:"flat"}},
    {value:"estateOne",title:"Классическая усадьба",sub:"Загородный дом · 220 м²",image:"preset_estateOne_v27",category:"Одноэтажные",set:{facade:"tuscan",roof:"metalGraphite",roofColor:"terracotta",houseStyle:"estateOne",houseSize:"220",roofShape:"hip"}},
    {value:"kavkaz",title:"Кавказский стиль",sub:"Загородный дом · 220 м²",image:"preset_kavkaz_v27",category:"Одноэтажные",set:{facade:"stone",roof:"metalGraphite",roofColor:"graphite",houseStyle:"kavkaz",houseSize:"220",roofShape:"hip"}},
    {value:"terrace",title:"Дом с садовой террасой",sub:"1 этаж · 180 м²",image:"preset_terrace_v27",category:"Одноэтажные",set:{facade:"plaster",roof:"metalGraphite",roofColor:"graphite",houseStyle:"terrace",houseSize:"180",roofShape:"hip"}},
    {value:"bungalow",title:"Семейный с навесом для авто",sub:"1 этаж · 180 м²",image:"preset_bungalow_v27",category:"Одноэтажные",set:{facade:"gray",roof:"metalGraphite",roofColor:"graphite",houseStyle:"bungalow",houseSize:"180",roofShape:"hip"}},
    {value:"italian",title:"Итальянский дворик",sub:"Загородный дом · 220 м²",image:"preset_italian_v27",category:"Одноэтажные",set:{facade:"tuscan",roof:"metalGraphite",roofColor:"terracotta",houseStyle:"italian",houseSize:"220",roofShape:"hip"}},
    {value:"coastal",title:"Светлая загородная вилла",sub:"Одноэтажный дом · 180 м²",image:"preset_coastal_v27",category:"Одноэтажные",set:{facade:"plaster",roof:"standingSeam",roofColor:"graphite",houseStyle:"coastal",houseSize:"180",roofShape:"flat"}},
    {value:"practical",title:"Практичный кирпичный",sub:"1 этаж · 150 м²",image:"preset_practical_v27",category:"Одноэтажные",set:{facade:"brick",roof:"metal3d",roofColor:"graphite",houseStyle:"practical",houseSize:"150",roofShape:"gable"}},
    {value:"craft",title:"Садовый дом",sub:"1 этаж · 150 м²",image:"preset_craft_v27",category:"Одноэтажные",set:{facade:"plaster",roof:"metal3d",roofColor:"graphite",houseStyle:"craft",houseSize:"150",roofShape:"gable"}},
    {value:"classic",title:"Двухэтажный коттедж",sub:"2 этажа · 220 м²",image:"preset_classic_v27",category:"Двухэтажные",set:{facade:"tuscan",roof:"metalGraphite",roofColor:"graphite",houseStyle:"classic",houseSize:"220",roofShape:"hip"}},
    {value:"twoClassic",title:"Классический коттедж · 2 этажа",sub:"2 этажа · настройка размеров",image:"preset_twoClassic_v31",category:"Двухэтажные",set:{facade:"gray",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoClassic",houseSize:"220",roofShape:"hip"}},
    {value:"twoBrick",title:"Кирпичный дом · 2 этажа",sub:"2 этажа · настройка размеров",image:"preset_twoBrick_v31",category:"Двухэтажные",set:{facade:"brick",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoBrick",houseSize:"220",roofShape:"gable"}},
    {value:"twoColumns",title:"Парадный дом с колоннами",sub:"2 этажа · настройка размеров",image:"preset_twoColumns_v31",category:"Двухэтажные",set:{facade:"stone",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoColumns",houseSize:"220",roofShape:"hip"}},
    {value:"twoModern",title:"Современный двухэтажный",sub:"2 этажа · настройка размеров",image:"preset_twoModern_v31",category:"Двухэтажные",set:{facade:"plaster",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoModern",houseSize:"220",roofShape:"flat"}},
    {value:"twoBalcony",title:"Двухэтажный с балконом",sub:"2 этажа · настройка размеров",image:"preset_twoBalcony_v31",category:"Двухэтажные",set:{facade:"gray",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoBalcony",houseSize:"220",roofShape:"gable"}},
    {value:"twoTerrace",title:"Двухэтажный с верандой",sub:"2 этажа · настройка размеров",image:"preset_twoTerrace_v31",category:"Двухэтажные",set:{facade:"stone",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoTerrace",houseSize:"220",roofShape:"hip"}},
    {value:"twoEstate",title:"Усадебный двухэтажный",sub:"2 этажа · настройка размеров",image:"preset_twoEstate_v31",category:"Двухэтажные",set:{facade:"tuscan",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoEstate",houseSize:"220",roofShape:"hip"}},
    {value:"twoFamily",title:"Компактный семейный · 2 этажа",sub:"2 этажа · настройка размеров",image:"preset_twoFamily_v31",category:"Двухэтажные",set:{facade:"brick",roof:"metalGraphite",roofColor:"graphite",houseStyle:"twoFamily",houseSize:"220",roofShape:"gable"}}
  ],
  facade:[
    {value:'brick',title:'Красный облицовочный кирпич',sub:'Классическая кладка',image:'facade_brick_v28'},
    {value:'brickBeige',title:'Бежевый кирпич',sub:'Светлый тёплый оттенок',image:'facade_brickBeige_v28'},
    {value:'brickWhite',title:'Белый кирпич',sub:'Светлая кладка',image:'facade_brickWhite_v28'},
    {value:'klinker',title:'Клинкер · шоколад',sub:'Тёмный кирпич с рельефом',image:'facade_klinker_v28'},
    {value:'brickGraphite',title:'Графитовый кирпич',sub:'Современный графит',image:'facade_brickGraphite_v28'},
    {value:'gray',title:'Серо-бежевый кирпич',sub:'Спокойная светлая кладка',image:'facade_gray_v28'},
    {value:'tuscan',title:'Кирпич ручной формовки',sub:'Живая фактура · тёплая кладка',image:'facade_tuscan_v28'},
    {value:'plasterWhite',title:'Белая фасадная штукатурка',sub:'Мелкая фактура',image:'facade_plasterWhite_v28'},
    {value:'plasterSand',title:'Песочная штукатурка',sub:'Декоративная текстура',image:'facade_plasterSand_v28'},
    {value:'venetian',title:'Фактура под венецианскую',sub:'Декоративный эффект · нужна система для фасадов',image:'facade_venetian_v28'},
    {value:'stone',title:'Натуральный камень · светлый',sub:'Каменная облицовка — концепт',image:'facade_stone_v28'},
    {value:'plaster',title:'Тёплая штукатурка',sub:'Нейтральная поверхность',image:'facade_plaster_v28'}
  ],
  roof:[
    {value:'slate',title:'Тёмная черепица',sub:'Классическая',image:'roof_slate',defaultColor:'graphite'},
    {value:'terracotta',title:'Терракотовая',sub:'Черепица под керамику',image:'roof_terracotta',defaultColor:'terracotta'},
    {value:'graphite',title:'Графитовая черепица',sub:'Классическая',image:'roof_graphite',defaultColor:'graphite'},
    {value:'ceramic',title:'Керамическая',sub:'Объёмная поверхность',image:'roof_ceramic',defaultColor:'terracotta'},
    {value:'metalGraphite',title:'Классическая волна',sub:'Волна · шаг 350 мм',image:'roof_metalGraphite_v25',defaultColor:'graphite'},
    {value:'metal3d',title:'Высокий рельеф',sub:'Глубокая волна и ступень',image:'roof_metal3d_v25',defaultColor:'graphite'},
    {value:'metalModular',title:'Симметричный профиль',sub:'Чёткая геометрия волны',image:'roof_metalModular_v25',defaultColor:'chocolate'},
    {value:'metalTramontana',title:'Рельефная волна',sub:'Объёмная штамповка',image:'roof_metalTramontana_v25',defaultColor:'green'},
    {value:'standingSeam',title:'Фальцевая',sub:'Продольные фальцы',image:'roof_standingSeam',defaultColor:'graphite'},
    {value:'flexible',title:'Гибкая черепица',sub:'Мягкая кровля',image:'roof_flexible',defaultColor:'black'},
    {value:'composite',title:'Композитная',sub:'Рельефная',image:'roof_composite',defaultColor:'chocolate'},
    {value:'profiled',title:'Кровельный профлист',sub:'Частые волны',image:'roof_profiled',defaultColor:'gray'}
  ],
  fence:[
    {value:'iron',title:'Кованый металл',sub:'Светопрозрачный',image:'fence_iron'},
    {value:'tuscan',title:'Высокий кирпичный',sub:'Итальянский стиль · ворота',image:'fence_tuscan'},
    {value:'brickIron',title:'Кирпич + ковка',sub:'Столбы и металл',image:'fence_brickIron'},
    {value:'louvers',title:'Забор-жалюзи',sub:'Наклонные ламели',image:'fence_louvers'},
    {value:'picket',title:'Евроштакетник',sub:'Вертикальные планки',image:'fence_picket'},
    {value:'chess',title:'Шахматка',sub:'Двусторонние планки',image:'fence_chess'},
    {value:'ranch',title:'Ранчо',sub:'Широкие горизонтальные',image:'fence_ranch'},
    {value:'profiled',title:'Профнастил',sub:'Сплошная ограда',image:'fence_profiled'},
    {value:'panel3d',title:'Панельный 3D',sub:'Сварная сетка',image:'fence_panel3d'},
    {value:'stone',title:'Каменные секции',sub:'Массивные',image:'fence_stone'},
    {value:'wood',title:'Деревянные ламели',sub:'Горизонтальная обшивка',image:'fence_wood'}
  ]
 };
 // Display only genuinely distinct 3D architecture. Keep roof/facade colours
 // in their own tabs, and never expose duplicate cards through the select.
 data.presets=data.presets
   .filter(item=>visibleArchitecture.has(item.value))
   .sort((a,b)=>cardPriority.indexOf(a.value)-cardPriority.indexOf(b.value));
 const removedPlanken=fields.facade.querySelector('option[value="planken"]');
 if(removedPlanken)removedPlanken.remove();
 if(!fields.facade.value)fields.facade.value='plaster';
 let activeTab='facade';
 root.replaceChildren();
 const nav=document.createElement('div');nav.className='builder-gallery-tabs';
 nav.setAttribute('role','tablist');nav.setAttribute('aria-label','Галерея конструктора');
 root.append(nav);
 const cardList=document.createElement('div');cardList.className='builder-material-list';
 cardList.id='builderMaterialList';cardList.setAttribute('aria-label','Варианты материалов');
 root.append(cardList);
 const filter=document.createElement('select');filter.id='houseCategoryFilter';
 filter.setAttribute('aria-label','Категория дома');
 filter.className='builder-category-filter';
 for(const category of ['Все дома','Одноэтажные','Одноэтажные с мансардой','Двухэтажные','Двухэтажные с мансардой']){
   const option=document.createElement('option');option.value=category==='Все дома'?'all':category;
   option.textContent=category==='Все дома'?'Все дома ('+data.presets.length+')':category+' ('+data.presets.filter(item=>item.category===category).length+')';filter.append(option);
 }
 nav.after(filter);
 const families=document.createElement('div');families.className='builder-family-chips';
 families.setAttribute('role','group');families.setAttribute('aria-label','Выбор этажности дома');
 filter.after(families);
 const familyLabels=[
  ['all','Все'],['Одноэтажные','1 этаж'],
  ['Одноэтажные с мансардой','1 + мансарда'],
  ['Двухэтажные','2 этажа'],
  ['Двухэтажные с мансардой','2 + мансарда']
 ];
 for(const [value,label] of familyLabels){
  const b=document.createElement('button');b.type='button';b.dataset.category=value;
  b.textContent=label;b.title=value==='all'?'Все дома':value;
  b.addEventListener('click',()=>{
   if(filter.value===value)return;
   filter.value=value;render();
  });
  families.append(b);
 }
 filter.addEventListener('change',()=>render());
 // Sync the complete style library with the accessible select fallback.
 const chosen=fields.houseStyle.value;
 fields.houseStyle.replaceChildren(...data.presets.map(v=>new Option(v.title,v.value)));
 fields.houseStyle.value=data.presets.some(x=>x.value===chosen)?chosen:'twoBrick';
 const colorArea=document.createElement('div');colorArea.className='builder-colors';root.append(colorArea);
 const summary=document.createElement('p');summary.className='builder-choice-summary';summary.id='builderChoiceSummary';
 summary.setAttribute('aria-live','polite');root.append(summary);
 for(const t of tabs){
   const button=document.createElement('button');
   button.type='button';button.textContent=t.label;button.dataset.builderTab=t.key;
   button.setAttribute('role','tab');button.addEventListener('click',()=>{
     // Reopening the same step must not discard and reload every image.
     if(activeTab!==t.key || !cardList.childElementCount){
       activeTab=t.key;render();
     }else syncSelection();
     window.dispatchEvent(new CustomEvent('kaskad:focus-view',{detail:{tab:activeTab}}));
   });
   nav.appendChild(button);
 }
 const findName=(key,val)=>data[key].find(x=>x.value===val)?.title||val;
 const colorName=(val)=>colors.find(x=>x.value===val)?.title||val;
 const choices=()=>Object.values(fields).map(el=>el.value);
 const selected=(item)=>activeTab==='presets'?fields.houseStyle.value===item.value:fields[activeTab].value===item.value;
 function choose(item){
   if(activeTab==='presets'){
     // Stage all fields first. A style is a new architectural design,
     // not another fence variant; apply the complete look atomically.
     const touched=[];
     // Architectural styles deliberately NEVER modify the separately selected
     // fence or its color. Otherwise Styles duplicates the Fence controls.
     for(const [key,value] of Object.entries(item.set)){
       // Architectural selection does not recolour a chosen facade or roof.
       // Only footprint/story geometry and the compatible roof shape change.
       if(key!=='houseStyle'&&key!=='roofShape')continue;
       const input=fields[key];
       if(input&&input.value!==value){input.value=value;touched.push(input)}
     }
     for(const input of touched)input.dispatchEvent(new Event('change',{bubbles:true}));
   }else{
     const input=fields[activeTab];
     if(input.value!==item.value){input.value=item.value;input.dispatchEvent(new Event('change',{bubbles:true}))}
     if(activeTab==='roof'&&item.defaultColor&&fields.roofColor.value!==item.defaultColor){
       fields.roofColor.value=item.defaultColor;fields.roofColor.dispatchEvent(new Event('change',{bubbles:true}));
     }
   }
   syncSelection();
 }
 function palette(){
   colorArea.replaceChildren();
   if(!['roof','fence'].includes(activeTab)){colorArea.hidden=true;return}
   colorArea.hidden=false;
   const key=activeTab==='roof'?'roofColor':'fenceColor';
   const caption=document.createElement('strong');caption.textContent=activeTab==='roof'?'Цвет кровли':'Цвет металлических элементов';
   colorArea.append(caption);
   const row=document.createElement('div');row.className='builder-swatch-row';
   row.setAttribute('role','group');row.setAttribute('aria-label',caption.textContent);
   colorArea.append(row);
   for(const opt of colors){
     const b=document.createElement('button');b.type='button';b.className='builder-swatch';
     b.title=opt.title;b.dataset.color=opt.value;b.style.setProperty('--swatch',opt.color);
     b.setAttribute('aria-label',opt.title);b.setAttribute('aria-pressed',String(fields[key].value===opt.value));
     const dot=document.createElement('span');dot.className='builder-swatch-dot';
     const title=document.createElement('span');title.className='builder-swatch-name';title.textContent=opt.title;
     b.append(dot,title);
     b.addEventListener('click',()=>{
       if(fields[key].value!==opt.value){
         fields[key].value=opt.value;fields[key].dispatchEvent(new Event('change',{bubbles:true}));
       }
       syncSelection();
     });
     row.append(b);
   }
 }
 function render(keepScroll=false){
   root.dataset.activeMaterial=activeTab;
   const scroll=keepScroll?cardList.scrollLeft:0;
   for(const tab of nav.children)tab.setAttribute('aria-selected',String(tab.dataset.builderTab===activeTab));
   cardList.replaceChildren();
   filter.hidden=activeTab!=='presets';
   families.hidden=activeTab!=='presets';
   for(const b of families.children)
    b.setAttribute('aria-pressed',String(b.dataset.category===filter.value));
   const distinctiveProjects=data.presets;
   const items=activeTab==='presets'?
     (filter.value==='all'?distinctiveProjects:distinctiveProjects.filter(item=>item.category===filter.value)):
     data[activeTab];
   for(const item of items){
     const button=document.createElement('button');button.type='button';button.className='builder-material-card';
     button.dataset.option=item.value;
     if(activeTab==='facade')button.classList.add('builder-facade-choice');
     if(activeTab==='fence')button.classList.add('builder-fence-choice');
     button.setAttribute('aria-pressed',String(selected(item)));
     button.setAttribute('aria-label',item.title+'. '+item.sub+'. Выбрать');
     const img=document.createElement('img');img.src=activeTab==='facade'?src+'material_'+item.value+'_v37.webp':activeTab==='fence'?src+'fence_sample_'+item.value+'_v42.webp':src+item.image+'.webp';img.alt='';img.loading='lazy';img.decoding='async';
     const title=document.createElement('strong');title.textContent=item.title;
     const caption=document.createElement('span');
     caption.textContent=activeTab==='presets'?(item.sub+' · размеры и материалы настраиваются отдельно'):item.sub;
     if(activeTab==='facade'){
       img.loading='eager';img.fetchPriority='low';img.width=64;img.height=64;
       button.append(img,title);
     }else if(activeTab==='fence'){
       img.width=176;img.height=76;
       // The full fence set is only a few dozen kilobytes; load it eagerly
       // to avoid missing previews during a quick tab switch on mobile.
       img.loading='eager';
       button.append(img,title);
     }else button.append(img,title,caption);
     button.addEventListener('click',()=>choose(item));
     cardList.append(button);
   }
   if(keepScroll)cardList.scrollLeft=scroll;
   palette();
   syncSelection();
 }
 // Update only selection indicators and the accessible summary when a
 // material changes. Destroying/recreating thumbnails on every click
 // caused loading flashes and unnecessary decodes on Android.
 function syncSelection(){
   for(const button of cardList.querySelectorAll('.builder-material-card')){
     button.setAttribute('aria-pressed',String(
       activeTab==='presets'?fields.houseStyle.value===button.dataset.option:
       fields[activeTab]?.value===button.dataset.option));
   }
   const colorKey=activeTab==='roof'?'roofColor':activeTab==='fence'?'fenceColor':null;
   if(colorKey){
     for(const swatch of colorArea.querySelectorAll('.builder-swatch')){
       swatch.setAttribute('aria-pressed',String(fields[colorKey].value===swatch.dataset.color));
     }
   }
   const width=Number(document.getElementById('houseWidthInput')?.value)||10;
   const length=Number(document.getElementById('houseLengthInput')?.value)||10;
   const floors=document.getElementById('houseFloorsSelect')?.value||'one';
   summary.textContent=width+' × '+length+' м · '+({one:'1 этаж',mansard:'1 + мансарда',two:'2 этажа'}[floors])+' · '+({gable:'Двухскатная',hip:'Четырёхскатная',flat:'Плоская',mansard:'Мансардная'}[fields.roofShape.value]||'Крыша')+' · '+findName('presets',fields.houseStyle.value)+' · '+findName('facade',fields.facade.value)+' · '+
     findName('roof',fields.roof.value)+' ('+colorName(fields.roofColor.value)+') · '+
     findName('fence',fields.fence.value)+' ('+colorName(fields.fenceColor.value)+')';
 }
 for(const input of Object.values(fields))input.addEventListener('change',syncSelection);
 for(const id of ['houseWidthInput','houseLengthInput','houseFloorsSelect']){
  document.getElementById(id)?.addEventListener('change',syncSelection);
 }
 render();
 // Embedded mobile: keep every row reachable rather than clipping within iframe.
 if(window.parent!==window&&'ResizeObserver' in window){
   let lastHeight=0;
   const fit=()=>{
     // Use actual content rather than document.scrollHeight (which cannot shrink
     // below a previously expanded iframe viewport).
     const frameContent=document.querySelector('main.embed')||document.querySelector('main');
     const height=Math.ceil(frameContent?.getBoundingClientRect().height||document.body.scrollHeight);
     if(Math.abs(lastHeight-height)>2){
       lastHeight=height;
       window.parent.postMessage({type:'kaskad-3d-frame-height',height},location.origin);
     }
   };
   new ResizeObserver(fit).observe(document.querySelector('main.embed')||document.body);
   window.addEventListener('load',fit);
   document.fonts?.ready?.then(fit).catch(()=>{});
   requestAnimationFrame(fit);
 }

})();