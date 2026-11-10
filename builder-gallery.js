/* КАСКАД · мини-галерея материалов и готовых сочетаний для 3D.
   Никаких сторонних запросов, пользовательских трекеров или отправки ПДн.
   Материалы меняют существующие нативные select через change. */
(function(){
  'use strict';
  const root=document.getElementById('builderGallery');
  const facade=document.getElementById('facadeSelect');
  const roof=document.getElementById('roofSelect');
  const fence=document.getElementById('fenceSelect');
  if(!root||!facade||!roof||!fence)return;
  const matRoot='assets/3d/cards/';
  const categories=[
    {key:'presets',label:'Готовые образы'},
    {key:'facade',label:'Фасад'},
    {key:'roof',label:'Кровля'},
    {key:'fence',label:'Забор'}
  ];
  const data={
    presets:[
      {value:'classic',title:'Загородная классика',sub:'Красный кирпич · тёмная кровля',image:'preset_classic',set:['brick','slate','iron']},
      {value:'italian',title:'Итальянский двор',sub:'Терракота · кирпичная ограда',image:'preset_italian',set:['tuscan','terracotta','tuscan']},
      {value:'modern',title:'Современный дом',sub:'Светлый камень · металлочерепица',image:'preset_modern',set:['stone','metalGraphite','stone']},
      {value:'estate',title:'Усадьба',sub:'Бордовая кровля · тёплый кирпич',image:'preset_estate',set:['gray','metalBurgundy','tuscan']}
    ],
    facade:[
      {value:'brick',title:'Красный кирпич',sub:'Тёплая классика',image:'facade_brick'},
      {value:'tuscan',title:'Тосканский кирпич',sub:'Красно-песочная фактура',image:'facade_tuscan'},
      {value:'stone',title:'Светлый камень',sub:'Натуральный мотив',image:'facade_stone'},
      {value:'plaster',title:'Штукатурка',sub:'Светлый фасад',image:'facade_plaster'},
      {value:'gray',title:'Серо-бежевый кирпич',sub:'Современная кладка',image:'facade_gray'}
    ],
    roof:[
      {value:'slate',title:'Тёмная черепица',sub:'Классическая',image:'roof_slate'},
      {value:'terracotta',title:'Терракота',sub:'Керамический стиль',image:'roof_terracotta'},
      {value:'graphite',title:'Графитовая',sub:'Тёмная фактура',image:'roof_graphite'},
      {value:'metalGraphite',title:'Металлочерепица',sub:'Графит · профиль',image:'roof_metalGraphite'},
      {value:'metalBurgundy',title:'Металлочерепица',sub:'Бордо · профиль',image:'roof_metalBurgundy'}
    ],
    fence:[
      {value:'iron',title:'Кованый металл',sub:'Светопрозрачная ограда',image:'fence_iron'},
      {value:'wood',title:'Деревянные ламели',sub:'Тёплый современный стиль',image:'fence_wood'},
      {value:'stone',title:'Каменные секции',sub:'Низкая ограда',image:'fence_stone'},
      {value:'tuscan',title:'Итальянская кладка',sub:'Высокий кирпичный забор с воротами',image:'fence_tuscan'}
    ]
  };
  const selects={facade,roof,fence};
  let category='presets';
  root.replaceChildren();
  const tabs=document.createElement('div');
  tabs.className='builder-gallery-tabs';
  tabs.setAttribute('role','tablist');
  tabs.setAttribute('aria-label','Разделы конструктора');
  for(const option of categories){
    const b=document.createElement('button');
    b.type='button';b.textContent=option.label;b.dataset.builderTab=option.key;
    b.setAttribute('role','tab');b.setAttribute('aria-selected',String(option.key===category));
    b.addEventListener('click',()=>{category=option.key;render()});
    tabs.appendChild(b);
  }
  root.appendChild(tabs);
  const list=document.createElement('div');
  list.id='builderMaterialList';
  list.className='builder-material-list';
  list.setAttribute('role','group');
  list.setAttribute('aria-label','Варианты для выбора');
  root.appendChild(list);
  const summary=document.createElement('p');
  summary.className='builder-choice-summary';
  summary.id='builderChoiceSummary';
  summary.setAttribute('aria-live','polite');
  root.appendChild(summary);
  const label=(key,value)=>data[key].find(item=>item.value===value)?.title||value;
  function state(){return [facade.value,roof.value,fence.value]}
  function selectedOption(item){
    if(category==='presets')return state().every((v,i)=>item.set[i]===v);
    return selects[category].value===item.value;
  }
  function choose(item){
    if(category==='presets'){
      for(const [i,key] of ['facade','roof','fence'].entries()){
        const el=selects[key];
        if(el.value!==item.set[i]){el.value=item.set[i];el.dispatchEvent(new Event('change',{bubbles:true}))}
      }
    }else{
      const el=selects[category];
      if(el.value!==item.value){el.value=item.value;el.dispatchEvent(new Event('change',{bubbles:true}))}
    }
    render(true);
  }
  function render(keepScroll=false){
    const scroll=keepScroll?list.scrollLeft:0;
    for(const tab of tabs.children)tab.setAttribute('aria-selected',String(tab.dataset.builderTab===category));
    list.replaceChildren();
    for(const item of data[category]){
      const card=document.createElement('button');
      card.type='button';card.className='builder-material-card';
      card.dataset.option=item.value;
      card.setAttribute('aria-pressed',String(selectedOption(item)));
      card.setAttribute('aria-label',item.title+'. '+item.sub+'. Выбрать');
      const img=document.createElement('img');
      img.src=matRoot+item.image+'.webp';img.alt='';
      img.loading='lazy';img.decoding='async';
      const strong=document.createElement('strong');strong.textContent=item.title;
      const small=document.createElement('span');small.textContent=item.sub;
      card.append(img,strong,small);
      card.addEventListener('click',()=>choose(item));
      list.appendChild(card);
    }
    if(keepScroll)list.scrollLeft=scroll;
    else list.scrollLeft=0;
    summary.textContent='Выбрано: '+label('facade',facade.value)+' · '+label('roof',roof.value)+
      (roof.value==='metalGraphite'?' (графит)':roof.value==='metalBurgundy'?' (бордо)':'')+
      ' · '+label('fence',fence.value);
  }
  for(const select of [facade,roof,fence])select.addEventListener('change',()=>render(true));
  render();
  // The embedded scene must expose the whole gallery on small Redmi screens.
  // Send only its measured pixel height, never personal data.
  if(window.parent!==window&&'ResizeObserver' in window){
    let lastHeight=0;
    const reportHeight=()=>{
      const height=Math.ceil(Math.max(document.documentElement.scrollHeight,document.body.scrollHeight));
      if(Math.abs(height-lastHeight)>2){
        lastHeight=height;
        window.parent.postMessage({type:'kaskad-3d-frame-height',height},location.origin);
      }
    };
    new ResizeObserver(reportHeight).observe(document.body);
    window.addEventListener('load',reportHeight);
    document.fonts?.ready?.then(reportHeight).catch(()=>{});
    requestAnimationFrame(reportHeight);
  }
  const discuss=document.getElementById('builderDiscuss');
  discuss?.addEventListener('click',()=>{
    const config={facade:facade.value,roof:roof.value,fence:fence.value};
    if(window.parent!==window){
      window.parent.postMessage({type:'kaskad-design-inquiry',version:1,config},location.origin);
    }else{
      const params=new URLSearchParams(config);
      location.href='./?'+params.toString()+'#interactive-home';
    }
  });
})();