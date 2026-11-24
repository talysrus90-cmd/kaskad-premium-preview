/* КАСКАД v27 — конструктивно различающиеся архитектурные решения
   для малоэтажного дома. Все объёмы являются авторскими концептами. */
export const HOME_VARIANTS=[
 {id:'family',name:'Семейный · один этаж',group:'Одноэтажные',shape:'hip',area:150,facade:'gray'},
 {id:'mansardHome',name:'Мансарда с фасадными люкарнами',group:'Мансардные',shape:'mansard',area:180,facade:'plaster'},
 {id:'gableAttic',name:'Мансарда с окнами во фронтоне',group:'Мансардные',shape:'gable',area:180,facade:'brick'},
 {id:'cottage',name:'Кирпичный коттедж',group:'Одноэтажные',shape:'gable',area:150,facade:'brick'},
 {id:'country',name:'Светлый загородный',group:'Одноэтажные',shape:'hip',area:180,facade:'stone'},
 {id:'nordic',name:'Скандинавский дом',group:'Современные',shape:'gable',area:150,facade:'plaster'},
 {id:'chalet',name:'Шале с террасой',group:'Классические',shape:'gable',area:180,facade:'stone'},
 {id:'barnhouse',name:'Барнхаус',group:'Современные',shape:'gable',area:150,facade:'gray'},
 {id:'modernOne',name:'Современный с панорамными окнами',group:'Современные',shape:'flat',area:180,facade:'plaster'},
 {id:'minimal',name:'Светлый минимализм',group:'Современные',shape:'flat',area:150,facade:'plaster'},
 {id:'estateOne',name:'Классическая усадьба',group:'Классические',shape:'hip',area:220,facade:'tuscan'},
 {id:'kavkaz',name:'Кавказский стиль',group:'Классические',shape:'hip',area:220,facade:'stone'},
 {id:'terrace',name:'Дом с садовой террасой',group:'Одноэтажные',shape:'hip',area:180,facade:'plaster'},
 {id:'bungalow',name:'Семейный с навесом для авто',group:'Одноэтажные',shape:'hip',area:180,facade:'gray'},
 {id:'italian',name:'Итальянский дворик',group:'Классические',shape:'hip',area:220,facade:'tuscan'},
 {id:'coastal',name:'Светлая загородная вилла',group:'Современные',shape:'flat',area:180,facade:'plaster'},
 {id:'practical',name:'Практичный кирпичный',group:'Одноэтажные',shape:'gable',area:150,facade:'brick'},
 {id:'craft',name:'Садовый дом',group:'Одноэтажные',shape:'gable',area:150,facade:'plaster'},
 {id:'classic',name:'Двухэтажный коттедж',group:'Двухэтажные',shape:'hip',area:220,facade:'tuscan'},
 {id:'twoClassic',name:'Классический двухэтажный коттедж',group:'Двухэтажные',shape:'hip',area:220,facade:'gray'},
 {id:'twoBrick',name:'Кирпичный двухэтажный',group:'Двухэтажные',shape:'gable',area:240,facade:'brick'},
 {id:'twoColumns',name:'Двухэтажный с колоннами',group:'Двухэтажные',shape:'hip',area:280,facade:'stone'},
 {id:'twoModern',name:'Современный двухэтажный',group:'Двухэтажные',shape:'flat',area:240,facade:'plaster'},
 {id:'twoBalcony',name:'Двухэтажный с балконом',group:'Двухэтажные',shape:'gable',area:240,facade:'gray'},
 {id:'twoTerrace',name:'Двухэтажный с верандой',group:'Двухэтажные',shape:'hip',area:230,facade:'stone'},
 {id:'twoEstate',name:'Двухэтажная усадьба',group:'Двухэтажные',shape:'hip',area:280,facade:'tuscan'},
 {id:'twoFamily',name:'Компактный двухэтажный семейный',group:'Двухэтажные',shape:'gable',area:180,facade:'brick'}
];
export function createHouseVariations(THREE,base,{stone,trim,windowFrame,glass,wood,dark}){
 const groups=new Map();
 const cube=(parent,w,h,depth,x,y,z,mat=trim)=>{
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,depth),mat);
  mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
 };
 const pillar=(g,x,z,height=2.5,mat=trim,size=.19)=>{
  cube(g,size,height,size,x,.50+height/2,z,mat);
  cube(g,size+.13,.11,size+.13,x,.51,z,stone);
  cube(g,size+.12,.11,size+.12,x,.50+height+.08,z,stone);
 };
 const slab=(g,x,z,w,depth,top=3.0,mat=trim)=>{
  cube(g,w,.19,depth,x,top,z,mat);
  cube(g,w+.11,.055,depth+.12,x,top+.12,z,dark);
 };
 const rowSlats=(g,xmin,xmax,z,ymin,ymax,mat=wood,step=.28)=>{
  for(let x=xmin;x<=xmax;x+=step)cube(g,.095,ymax-ymin,.10,x,(ymax+ymin)/2,z,mat);
 };
 const fenestration=(g,x,y,z,w,h)=>{
  cube(g,w+.16,h+.18,.11,x,y,z,trim);
  cube(g,w,h,.055,x,y,z+.09,windowFrame);
  cube(g,w-.18,h-.18,.03,x,y,z+.14,glass);
  cube(g,.055,h,.06,x,y,z+.185,windowFrame);
  cube(g,w,.055,.06,x,y,z+.185,windowFrame);
 };
 const details=(id)=>{
  if(groups.has(id))return groups.get(id);
  const g=new THREE.Group();g.name='Авторская архитектура · '+id;base.add(g);groups.set(id,g);
  switch(id){
   case 'cottage':
    cube(g,.66,3.1,.65,4.5,4.37,-2.5,stone);cube(g,.94,.16,.94,4.5,6.0,-2.5,dark);
    for(const x of [-5.9,5.9])cube(g,.24,3.0,.4,x,2.02,4.8,trim);
    break;
   case 'country':
    for(const x of [-4.7,4.7])pillar(g,x,5.9,2.18,wood,.22);
    slab(g,0,5.35,10.3,1.3,2.94,wood);
    break;
   case 'nordic':
    rowSlats(g,-6.05,-4.8,4.78,.62,3.40,wood,.23);
    rowSlats(g,4.8,6.05,4.78,.62,3.40,wood,.23);
    for(const x of [-5.4,5.4])cube(g,.18,2.9,.23,x,2.04,4.72,dark);
    break;
   case 'chalet':
    slab(g,0,5.8,11.0,2.45,3.37,wood);
    for(const x of [-5.1,0,5.1])pillar(g,x,6.74,2.72,wood,.25);
    for(const x of [-4.8,-2.4,2.4,4.8])cube(g,.14,1.18,.18,x,1.28,6.80,wood);
    break;
   case 'barnhouse':
    for(const x of [-5.95,5.95])cube(g,.23,3.12,.18,x,2.05,4.73,dark);
    fenestration(g,-3.8,2.0,4.83,2.55,2.48);
    fenestration(g,3.8,2.0,4.83,2.55,2.48);
    rowSlats(g,-1.36,-.95,4.82,2.95,3.52,wood,.15);
    break;
   case 'modernOne':
    slab(g,0,5.56,9.7,1.7,3.51,dark);
    fenestration(g,-4.0,1.99,4.92,3.02,2.35);
    fenestration(g,4.0,1.99,4.92,3.02,2.35);
    cube(g,2.2,3.02,.30,-5.7,2.04,4.73,stone);
    break;
   case 'minimal':
    cube(g,3.38,3.18,.54,-4.7,2.03,4.72,stone);
    cube(g,3.15,.22,2.44,0,3.28,5.43,dark);
    for(const x of [-1.25,1.25])pillar(g,x,6.15,2.66,trim,.14);
    break;
   case 'estateOne':
    slab(g,0,5.68,7.0,1.94,3.48,stone);
    for(const x of [-3.0,-1.90,1.90,3.0])pillar(g,x,6.54,2.84,trim,.19);
    cube(g,7.1,.26,.56,0,3.69,5.67,trim);
    break;
   case 'kavkaz':
    for(const x of [-3.0,3.0])pillar(g,x,6.50,2.79,stone,.30);
    slab(g,0,5.55,6.7,2.13,3.53,stone);
    rowSlats(g,-6.1,-5.05,4.80,1.1,3.52,wood,.17);
    rowSlats(g,5.05,6.1,4.80,1.1,3.52,wood,.17);
    break;
   case 'terrace':
    // Rear patio: four posts and genuine overhead rafters.
    cube(g,9.25,.13,3.2,0,.42,-6.0,stone);
    for(const x of [-4.1,4.1])for(const z of [-4.78,-7.25])pillar(g,x,z,2.5,wood,.20);
    for(let x=-4.10;x<=4.11;x+=.52)cube(g,.15,.12,3.0,x,3.05,-6.0,wood);
    break;
   case 'bungalow':
    // Parking canopy is supported, not a floating slab.
    cube(g,4.75,.14,6.7,9.13,.18,1.35,stone);
    slab(g,9.13,1.35,4.95,7.00,3.17,dark);
    for(const x of [6.95,11.24])for(const z of [-1.85,4.35])pillar(g,x,z,2.61,trim,.24);
    break;
   case 'italian':
    for(const x of [-3.25,3.25])pillar(g,x,6.32,2.36,stone,.24);
    slab(g,0,5.75,7.10,1.45,3.06,wood);
    cube(g,2.8,.56,.23,0,3.38,4.86,stone);
    break;
   case 'coastal':
    slab(g,0,5.75,11.05,2.18,3.3,trim);
    rowSlats(g,4.7,6.25,4.75,.67,3.44,wood,.19);
    fenestration(g,-3.9,2.0,4.93,3.0,2.10);
    break;
   case 'practical':
    cube(g,4.9,.19,1.4,0,3.13,5.15,dark);
    for(const x of [-2.1,2.1])pillar(g,x,5.78,2.47,trim,.18);
    cube(g,.69,2.86,.75,5.0,4.25,-2.5,stone);
    break;
   case 'craft':
    slab(g,0,5.44,8.65,1.82,3.08,wood);
    for(const x of [-3.91,-2.2,2.2,3.91])pillar(g,x,6.28,2.49,wood,.18);
    rowSlats(g,-6.1,-5.05,4.83,.87,3.41,wood,.24);
    break;
   default:break;
  }
  return g;
 };
 function setStyle(key){
  for(const [id,g] of groups)g.visible=id===key;
  if(key!=='family'&&key!=='mansardHome'&&key!=='classic')details(key).visible=true;
 }
 return {setStyle,groups,list:HOME_VARIANTS};
}
