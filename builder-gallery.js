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
   houseStyle:document.getElementById('houseStyleSelect')
 };
 if(!root||Object.values(fields).some(x=>!x))return;
 const src='assets/3d/cards/';
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
 const data={
  presets:[
    {value:'classic',title:'Загородная классика',sub:'Колонны · карнизы · черепица',image:'preset_classic_v19',set:{facade:'brick',roof:'slate',roofColor:'graphite',houseStyle:'classic'}},
    {value:'italian',title:'Итальянский двор',sub:'Арки · терракота · тёплый кирпич',image:'preset_italian_v19',set:{facade:'tuscan',roof:'terracotta',roofColor:'terracotta',houseStyle:'italian'}},
    {value:'modern',title:'Современный дом',sub:'Стекло · козырёк · фальц',image:'preset_modern_v19',set:{facade:'stone',roof:'standingSeam',roofColor:'graphite',houseStyle:'modern'}},
    {value:'estate',title:'Усадьба',sub:'Парадные пилоны · карнизы',image:'preset_estate_v19',set:{facade:'gray',roof:'metalBurgundy',roofColor:'burgundy',houseStyle:'estate'}},
    {value:'kavkaz',title:'Кавказский стиль',sub:'Каменные арки · объёмная крыша',image:'preset_kavkaz_v19',set:{facade:'stone',roof:'metal3d',roofColor:'chocolate',houseStyle:'kavkaz'}},
    {value:'coastal',title:'Светлый минимализм',sub:'Деревянные ламели · лёгкий козырёк',image:'preset_coastal_v19',set:{facade:'plaster',roof:'metalModular',roofColor:'gray',houseStyle:'coastal'}},
    {value:'practical',title:'Практичный дом',sub:'Простой портик · профлист',image:'preset_practical_v19',set:{facade:'brick',roof:'profiled',roofColor:'green',houseStyle:'practical'}},
    {value:'craft',title:'Садовый особняк',sub:'Балки · ставни · пергола',image:'preset_craft_v19',set:{facade:'plaster',roof:'flexible',roofColor:'black',houseStyle:'craft'}}
  ],
  facade:[
    {value:'brick',title:'Красный кирпич',sub:'Классическая кладка',image:'facade_brick'},
    {value:'tuscan',title:'Тосканская кладка',sub:'Тёплая красно-песочная',image:'facade_tuscan'},
    {value:'stone',title:'Светлый камень',sub:'Светлая фактура',image:'facade_stone'},
    {value:'plaster',title:'Штукатурка',sub:'Тёплая светлая',image:'facade_plaster'},
    {value:'gray',title:'Серо-бежевый кирпич',sub:'Современная кладка',image:'facade_gray'}
  ],
  roof:[
    {value:'slate',title:'Тёмная черепица',sub:'Классическая',image:'roof_slate',defaultColor:'graphite'},
    {value:'terracotta',title:'Терракотовая',sub:'Черепица под керамику',image:'roof_terracotta',defaultColor:'terracotta'},
    {value:'graphite',title:'Графитовая черепица',sub:'Классическая',image:'roof_graphite',defaultColor:'graphite'},
    {value:'ceramic',title:'Керамическая',sub:'Объёмная поверхность',image:'roof_ceramic',defaultColor:'terracotta'},
    {value:'metalGraphite',title:'Металлочерепица',sub:'Классика · графит',image:'roof_metalGraphite',defaultColor:'graphite'},
    {value:'metalBurgundy',title:'Металлочерепица',sub:'Классика · бордо',image:'roof_metalBurgundy',defaultColor:'burgundy'},
    {value:'metal3d',title:'Металлочерепица 3D',sub:'Выраженная ступень',image:'roof_metal3d',defaultColor:'graphite'},
    {value:'metalModular',title:'Модульная',sub:'Крупные модули',image:'roof_metalModular',defaultColor:'chocolate'},
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
 let activeTab='facade';
 root.replaceChildren();
 const nav=document.createElement('div');nav.className='builder-gallery-tabs';
 nav.setAttribute('role','tablist');nav.setAttribute('aria-label','Галерея конструктора');
 root.append(nav);
 const cardList=document.createElement('div');cardList.className='builder-material-list';
 cardList.id='builderMaterialList';cardList.setAttribute('aria-label','Варианты материалов');
 root.append(cardList);
 const colorArea=document.createElement('div');colorArea.className='builder-colors';root.append(colorArea);
 const summary=document.createElement('p');summary.className='builder-choice-summary';summary.id='builderChoiceSummary';
 summary.setAttribute('aria-live','polite');root.append(summary);
 for(const t of tabs){
   const button=document.createElement('button');
   button.type='button';button.textContent=t.label;button.dataset.builderTab=t.key;
   button.setAttribute('role','tab');button.addEventListener('click',()=>{
     activeTab=t.key;render();
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
   render(true);
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
     b.title=opt.title;b.style.setProperty('--swatch',opt.color);
     b.setAttribute('aria-label',opt.title);b.setAttribute('aria-pressed',String(fields[key].value===opt.value));
     const dot=document.createElement('span');dot.className='builder-swatch-dot';
     const title=document.createElement('span');title.className='builder-swatch-name';title.textContent=opt.title;
     b.append(dot,title);
     b.addEventListener('click',()=>{
       if(fields[key].value!==opt.value){
         fields[key].value=opt.value;fields[key].dispatchEvent(new Event('change',{bubbles:true}));
       }
       render(true);
     });
     row.append(b);
   }
 }
 function render(keepScroll=false){
   const scroll=keepScroll?cardList.scrollLeft:0;
   for(const tab of nav.children)tab.setAttribute('aria-selected',String(tab.dataset.builderTab===activeTab));
   cardList.replaceChildren();
   for(const item of data[activeTab]){
     const button=document.createElement('button');button.type='button';button.className='builder-material-card';
     button.dataset.option=item.value;
     button.setAttribute('aria-pressed',String(selected(item)));
     button.setAttribute('aria-label',item.title+'. '+item.sub+'. Выбрать');
     const img=document.createElement('img');img.src=src+item.image+'.webp';img.alt='';img.loading='lazy';img.decoding='async';
     const title=document.createElement('strong');title.textContent=item.title;
     const caption=document.createElement('span');caption.textContent=item.sub;
     button.append(img,title,caption);
     button.addEventListener('click',()=>choose(item));
     cardList.append(button);
   }
   if(keepScroll)cardList.scrollLeft=scroll;
   palette();
   summary.textContent='Стиль: '+findName('presets',fields.houseStyle.value)+' · '+findName('facade',fields.facade.value)+' · '+
     findName('roof',fields.roof.value)+' ('+colorName(fields.roofColor.value)+') · '+
     findName('fence',fields.fence.value)+' ('+colorName(fields.fenceColor.value)+')';
 }
 for(const input of Object.values(fields))input.addEventListener('change',()=>render(true));
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