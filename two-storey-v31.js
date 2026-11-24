/* КАСКАД — отличающиеся объёмные решения для двухэтажных домов.
   Декоративная 3D-геометрия, не рабочая конструктивная документация. */
export function createTwoStoreyStyles(THREE,parent,{stone,brick,trim,wood,dark,glass}){
 const root=new THREE.Group();root.name='КАСКАД · двухэтажные архитектурные решения';parent.add(root);
 const groups=new Map(),ids=['twoClassic','twoBrick','twoColumns','twoModern','twoBalcony','twoTerrace','twoEstate','twoFamily'];
 const m=(g,w,h,d,x,y,z,mat)=>{
   const q=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
   q.position.set(x,y,z);q.castShadow=true;q.receiveShadow=true;g.add(q);return q;
 };
 const base=(g,x,z,w=1)=>{
  m(g,w,.20,.73,x,.45,z,stone);
  m(g,w+.10,.10,.80,x,.58,z,trim);
 };
 for(const id of ids){
  const g=new THREE.Group();g.name='Двухэтажный дом · '+id;root.add(g);groups.set(id,g);
  if(id==='twoClassic'){
   for(const x of [-5.9,5.9]){
    m(g,.33,5.90,.26,x,3.50,4.67,trim);
    m(g,.47,.24,.38,x,6.54,4.70,stone);
    base(g,x,4.91,.43);
   }
   m(g,12.7,.21,.38,0,3.73,4.67,stone);
   m(g,12.9,.19,.32,0,6.81,4.67,trim);
  }
  if(id==='twoBrick'){
   for(const x of [-5.95,5.95]){
    m(g,.64,5.94,.57,x,3.52,4.76,brick);
    base(g,x,4.87,.72);
    m(g,.78,.18,.64,x,6.62,4.80,stone);
   }
   m(g,12.75,.17,.38,0,3.75,4.76,stone);
  }
  if(id==='twoColumns'){
   m(g,12.3,.28,1.54,0,.42,5.06,stone); // continuous supported portico pad
   m(g,12.6,.25,1.54,0,6.45,5.05,stone);
   for(const x of [-5.80,5.80]){
    m(g,.30,5.65,.30,x,3.50,5.68,trim);
    m(g,.62,.15,.61,x,.66,5.68,stone);
    m(g,.58,.18,.61,x,6.27,5.68,stone);
   }
  }
  if(id==='twoModern'){
   for(const x of [-6.0,6.0])m(g,.33,6.18,.35,x,3.69,4.83,dark);
   for(const y of [3.79,6.63])m(g,12.6,.27,.30,0,y,4.78,dark);
   m(g,7.25,.08,.18,0,3.95,4.84,glass);
   m(g,5.4,.17,1.70,0,3.36,5.28,dark);
   for(const x of [-2.48,2.48]){
    m(g,.20,2.51,.20,x,1.80,5.87,dark);
    base(g,x,5.87,.35);
   }
  }
  if(id==='twoBalcony'){
   // Rear balcony: load-bearing slab, columns at ground, and a full perimeter rail.
   m(g,6.0,.23,2.03,0,3.93,-5.48,stone);
   for(const x of [-2.67,2.67]){
    m(g,.24,3.41,.24,x,2.16,-6.28,trim);
    base(g,x,-6.28,.42);
   }
   for(const x of [-2.85,2.85])m(g,.13,1.00,.13,x,4.56,-6.44,dark);
   for(let x=-2.78;x<=2.79;x+=.48)m(g,.08,.81,.10,x,4.49,-6.44,dark);
   m(g,5.85,.12,.16,0,5.04,-6.44,dark);
   // Balcony door has a frame, glass panel, mid-rail and handle.
   m(g,1.70,2.40,.13,0,5.10,-4.70,dark);
   m(g,1.52,2.22,.06,0,5.10,-4.80,glass);
   m(g,.065,2.18,.08,0,5.10,-4.85,dark);
   m(g,1.52,.065,.08,0,5.18,-4.85,dark);
   m(g,.09,.13,.11,.47,4.89,-4.88,stone);
  }
  if(id==='twoTerrace'){
   for(const x of [-5.62,5.62]){
    m(g,.28,5.85,.25,x,3.56,4.76,wood);
    m(g,.49,.15,.41,x,6.55,4.76,stone);
   }
   for(const y of [3.72,6.83])m(g,12.9,.16,.35,0,y,4.72,wood);
  }
  if(id==='twoEstate'){
   for(const x of [-6.10,6.10]){
    m(g,.48,6.16,.35,x,3.68,4.72,stone);
    m(g,.72,.19,.50,x,6.67,4.72,trim);
    base(g,x,4.83,.66);
   }
   m(g,12.90,.24,.55,0,6.87,4.82,stone);
   m(g,12.70,.22,.47,0,3.69,4.82,trim);
  }
  if(id==='twoFamily'){
   for(const x of [-5.94,5.94]){
    m(g,.29,5.9,.35,x,3.58,4.72,brick);
    m(g,.37,.15,.43,x,6.62,4.72,trim);
    base(g,x,4.86,.40);
   }
   m(g,12.60,.12,.29,0,3.72,4.75,stone);
  }
 }
 function setStyle(value){for(const [id,g] of groups)g.visible=id===value;}
 setStyle('none');
 return {root,groups,setStyle,ids};
}
