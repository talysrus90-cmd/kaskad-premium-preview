/* КАСКАД: lightweight real-time interior material and room demo.
   The rooms are conceptual finish showrooms, not an as-built layout. */
export function createInteriorTour(THREE,scene){
  const root=new THREE.Group();root.name='КАСКАД · 3D интерьер, концепты отделки';
  root.visible=false;scene.add(root);
  const mat=(color,roughness=.76,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
  const wall=mat('#ede9df',.94),back=mat('#dfd6c7',.94),ceiling=mat('#f6f2e9',.94),
    skirting=mat('#fffdf8',.73),lightwood=mat('#b68e66',.67),
    oak=mat('#806449',.62),darkwood=mat('#4e423b',.66),gold=mat('#c4a170',.38,{metalness:.54}),
    metal=mat('#444b4c',.43,{metalness:.65}),cream=mat('#eee8d9',.92),
    ceramic=mat('#ebeae6',.36),stone=mat('#b9b3a8',.53),
    fabric=mat('#9b9887',.97),fabricDark=mat('#657270',.95),
    rug=mat('#c6b9a5',.99),leather=mat('#c4a17e',.83),
    glass=mat('#9bc4c9',.2,{transparent:true,opacity:.65,side:THREE.DoubleSide}),
    mirror=mat('#a3b9c4',.1,{metalness:.43,envMapIntensity:1.1}),
    tv=mat('#181e25',.28,{metalness:.34}),
    foliage=mat('#456947',.95),trunk=mat('#725e49',.94);
  const photo=new THREE.TextureLoader();
  const woodFloor=mat('#ffffff',.75),tileFloor=mat('#ffffff',.64);
  const load=(name,material,x,y)=>{
    photo.load(new URL('assets/3d/'+name+'.webp',document.baseURI).href,t=>{
      t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;
      t.repeat.set(x,y);t.anisotropy=4;
      material.map=t;material.needsUpdate=true;
    },undefined,()=>{});
  };
  load('wood_planks',woodFloor,3,3);
  load('concrete_pavement_02_1k',tileFloor,3,3);
  function box(group,w,h,d,x,y,z,material,shadows=true){
    const obj=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
    obj.position.set(x,y,z);obj.castShadow=shadows;obj.receiveShadow=true;
    group.add(obj);return obj;
  }
  function sphere(group,r,x,y,z,material,sx=1,sy=1,sz=1){
    const obj=new THREE.Mesh(new THREE.SphereGeometry(r,12,9),material);
    obj.position.set(x,y,z);obj.scale.set(sx,sy,sz);
    obj.castShadow=true;group.add(obj);return obj;
  }
  function cylinder(group,r,h,x,y,z,material,n=16){
    const obj=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,n),material);
    obj.position.set(x,y,z);obj.castShadow=true;group.add(obj);return obj;
  }
  function picture(g,x,y,z,w=.95,h=.68,frame=oak){
    box(g,w+.075,h+.075,.055,x,y,z,frame,false);
    box(g,w,h,.061,x,y,z+.05,mat('#91a09a',.94),false);
    box(g,w*.56,h*.25,.065,x,y-.14,z+.09,mat('#d6c3ad',.94),false);
    box(g,w*.32,h*.16,.066,x+.14,y+.10,z+.09,mat('#c0aa90',.94),false);
  }
  function plant(g,x,z,y=.3){
    cylinder(g,.19,.34,x,y+.16,z,ceramic,12);
    box(g,.29,.08,.29,x,y+.32,z,stone,false);
    cylinder(g,.038,.92,x,y+.77,z,trunk,8);
    for(let i=0;i<6;i++){
      const a=i*Math.PI*2/6;
      sphere(g,.38,x+Math.cos(a)*.22,y+1.15+(i%3)*.11,z+Math.sin(a)*.20,foliage,.67,1.0,.60);
    }
  }
  function lamp(g,x,z,y=2.8){
    const shade=mat('#f8efdb',.62,{emissive:'#fff0d4',emissiveIntensity:.12});
    cylinder(g,.29,.20,x,y,z,shade,14);
    cylinder(g,.012,.23,x,y+.16,z,metal,8);
  }
  function windowFrame(g,x=1.85){
    // Recess-like reveal with sill, glass and a soft sky reflection.
    box(g,2.25,1.58,.11,x,2.03,-3.53,skirting,false);
    box(g,2.03,1.36,.045,x,2.03,-3.45,glass,false);
    box(g,.055,1.37,.064,x,2.03,-3.40,skirting,false);
    box(g,2.30,.09,.32,x,1.22,-3.35,stone,false);
    box(g,.065,1.5,.065,x-1.18,2.03,-3.34,cream,false);
    box(g,.065,1.5,.065,x+1.18,2.03,-3.34,cream,false);
    for(const dx of [-.74,.74])
      box(g,.07,1.70,.18,x+dx,2.03,-3.32,mat('#d6cfc0',.95),false);
  }
  const groups=new Map();
  function room(key,kind='wood'){
    const g=new THREE.Group();g.name='Комната · '+key;g.visible=false;root.add(g);groups.set(key,g);
    box(g,8.9,.18,7.2,0,.04,0,kind==='tile'?tileFloor:woodFloor);
    box(g,8.9,.16,7.2,0,3.31,0,ceiling,false);
    box(g,8.9,3.14,.16,0,1.69,-3.62,back,false);
    box(g,8.9,3.14,.16,0,1.69,3.62,wall,false);
    for(const x of [-4.45,4.45])box(g,.16,3.14,7.2,x,1.69,0,wall,false);
    for(const x of [-4.32,4.32])box(g,.07,.14,7.0,x,.24,0,skirting,false);
    for(const z of [-3.48,3.48])box(g,8.55,.14,.07,0,.24,z,skirting,false);
    // A real door and subtle trim on the wall behind the camera.
    box(g,1.25,2.27,.07,-2.85,1.29,3.51,oak);
    box(g,.09,2.40,.13,-3.55,1.29,3.47,skirting);
    box(g,.09,2.40,.13,-2.15,1.29,3.47,skirting);
    sphere(g,.055,-2.30,1.22,3.43,gold);
    windowFrame(g,1.83);
    const light=new THREE.PointLight('#fff1da',8.5,10,2);
    light.position.set(.25,2.9,.35);g.add(light);
    lamp(g,-1.4,.15);
    return g;
  }
  // Living room: sectional sofa, textile rug, shelves and glass side.
  {
    const g=room('living');
    box(g,4.1,.055,2.75,-1.05,.175,.23,rug,false);
    box(g,3.10,.38,1.14,-1.45,.53,-1.26,fabricDark);
    box(g,3.10,.78,.28,-1.45,.99,-1.76,fabricDark);
    for(const x of [-2.45,-1.45,-.45]){
      box(g,.85,.18,.88,x,.81,-1.06,fabric);
      sphere(g,.25,x,.99,-1.52,cream,1.0,.35,.82);
    }
    box(g,.20,.72,1.18,-3.06,.75,-1.25,fabricDark);
    box(g,.20,.72,1.18,.15,.75,-1.25,fabricDark);
    box(g,1.95,.085,.90,-1.2,.54,.60,oak);
    for(const x of [-2.00,-.40])box(g,.10,.45,.10,x,.29,.58,metal);
    sphere(g,.14,-1.52,.63,.60,cream,1,.40,1);
    box(g,2.05,1.10,.09,2.00,1.68,3.44,tv,false);
    box(g,2.45,.32,.56,2.00,.36,3.08,lightwood);
    plant(g,3.52,-2.5);
    picture(g,-2.88,1.90,-3.42,.88,.96);
  }
  // Kitchen: continuous cabinetry, stone countertops and island.
  {
    const g=room('kitchen','tile');
    for(const x of [-3.15,-2.10,-1.05,0]){
      box(g,1.02,.90,.64,x,.66,-3.16,cream);
      box(g,.99,.025,.055,x,.81,-2.81,gold,false);
      box(g,1.02,.70,.57,x,2.62,-3.19,lightwood);
      box(g,.85,.025,.045,x,2.50,-2.87,metal,false);
    }
    box(g,4.75,.12,.82,-1.60,1.15,-3.10,stone);
    box(g,.76,.06,.50,-2.35,1.23,-2.98,metal);
    cylinder(g,.04,.38,-2.80,1.43,-2.93,gold,10);
    box(g,3.20,.86,1.32,-.30,.62,.25,lightwood);
    box(g,3.45,.14,1.52,-.30,1.11,.25,stone);
    for(const x of [-1.5,.65]){
      cylinder(g,.24,.08,x,.74,1.57,oak,14);
      cylinder(g,.055,.69,x,.37,1.57,metal,12);
    }
    for(const x of [-1.45,.85])lamp(g,x,.28,2.54);
    plant(g,3.65,-2.27);
  }
  // Bedroom with upholstered headboard, bedding, bedside lighting.
  {
    const g=room('bedroom');
    box(g,3.33,1.10,.26,-1.1,1.10,-2.83,fabricDark);
    box(g,3.15,.46,4.12,-1.1,.57,-.80,lightwood);
    box(g,3.00,.32,3.95,-1.1,.95,-.79,cream);
    box(g,3.00,.10,2.65,-1.1,1.12,.18,fabric);
    for(const x of [-1.85,-.35])sphere(g,.46,x,1.24,-2.10,cream,1,.36,.66);
    for(const x of [-3.10,.95]){
      box(g,.58,.45,.52,x,.53,-2.29,oak);
      cylinder(g,.12,.35,x,.99,-2.29,gold,12);
      sphere(g,.18,x,1.20,-2.29,cream,1,.67,1);
    }
    box(g,2.65,.08,1.34,-1.10,.20,2.15,rug,false);
    box(g,1.55,2.55,.57,3.33,1.55,.72,lightwood);
    for(const z of [-.04,1.44])
      box(g,.065,2.25,.60,3.31,1.65,z,oak,false);
    picture(g,-3.10,2.10,-3.42,1.0,.84);
  }
  // Hall: mirror, coat rail, bench, console, plant.
  {
    const g=room('hall','tile');
    box(g,2.10,.16,.88,-1.92,.53,-1.24,oak);
    for(const x of [-2.80,-1.15])box(g,.12,.40,.67,x,.28,-1.24,metal);
    box(g,2.65,.16,.10,-1.92,2.31,-3.44,oak,false);
    for(const x of [-2.95,-2.28,-1.62,-.92]){
      sphere(g,.07,x,2.12,-3.30,gold,1,.68,1);
      box(g,.05,.20,.08,x,2.03,-3.32,metal,false);
    }
    box(g,1.50,2.21,.06,2.92,1.58,-3.44,gold,false);
    box(g,1.39,2.10,.04,2.92,1.58,-3.40,mirror,false);
    box(g,1.55,.19,.55,2.95,.76,-1.25,lightwood);
    for(const x of [2.4,3.5])box(g,.08,.58,.08,x,.43,-1.25,metal);
    plant(g,-3.53,1.72);
    picture(g,.20,1.82,-3.42,.80,1.01);
  }
  // Bathroom with tile, bathtub, shower glass and basin.
  {
    const g=room('bath','tile');
    box(g,2.48,.60,1.14,-1.79,.57,-1.72,ceramic);
    box(g,2.24,.04,.91,-1.79,.90,-1.72,mat('#e6f0ef',.23,{metalness:.12}),false);
    box(g,2.58,.13,1.23,-1.79,.95,-1.72,ceramic);
    cylinder(g,.045,.36,-2.94,1.16,-1.72,metal,12);
    box(g,1.18,.65,.62,1.65,.58,-2.64,lightwood);
    box(g,1.48,.12,.81,1.65,1.01,-2.62,stone);
    cylinder(g,.39,.14,1.65,1.15,-2.59,ceramic,24);
    cylinder(g,.035,.29,1.93,1.30,-2.89,gold,12);
    box(g,1.00,1.27,.055,1.65,2.16,-3.43,mirror,false);
    box(g,1.82,2.12,.045,3.33,1.38,.16,glass,false);
    box(g,1.80,.08,.07,3.33,2.46,.16,metal,false);
    cylinder(g,.12,.06,3.30,2.23,-.55,metal,20);
    box(g,.045,.68,.05,3.36,2.70,-.55,metal);
    box(g,1.18,.10,.64,-.10,.28,1.28,rug,false);
    plant(g,-3.40,2.08);
  }
  const names={living:'Гостиная',kitchen:'Кухня',bedroom:'Спальня',hall:'Прихожая',bath:'Санузел'};
  let selected='living';
  const setRoom=key=>{
    selected=groups.has(key)?key:'living';
    for(const [id,g] of groups)g.visible=id===selected;
    return names[selected];
  };
  setRoom('living');
  return {root,setRoom,roomNames:names,getRoom:()=>selected};
}
