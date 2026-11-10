/* КАСКАД · процедурные древесные кроны с листовыми масками.
   Это не сканы растений, но силуэт натуральнее сфер и конусов.
   Один InstancedMesh на оттенок, экономно для мобильных WebGL. */
export function addNaturalFoliage(THREE,scene,{trunkMat}){
  const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
  const ctx=canvas.getContext('2d');
  let seed=43581;
  const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
  ctx.clearRect(0,0,256,256);
  for(let i=0;i<72;i++){
    const x=18+rand()*220,y=19+rand()*210,a=rand()*6.28,r=9+rand()*14;
    const green=rand()>.65?'#66834e':rand()>.33?'#4c7451':'#537c4e';
    ctx.save();ctx.translate(x,y);ctx.rotate(a);
    ctx.fillStyle=green;ctx.beginPath();ctx.ellipse(0,0,r*.54,r*1.0,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#96aa77';ctx.globalAlpha=.3;ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(0,-r*.75);ctx.lineTo(0,r*.77);ctx.stroke();ctx.restore();
  }
  const image=new THREE.CanvasTexture(canvas);image.colorSpace=THREE.SRGBColorSpace;
  image.anisotropy=4;
  const palettes=['#d4e2b9','#9aba8a','#b6c991','#88aa7b'];
  const mats=palettes.map(c=>new THREE.MeshStandardMaterial({
    color:c,map:image,transparent:true,alphaTest:.28,side:THREE.DoubleSide,
    roughness:1,depthWrite:true,metalness:0
  }));
  const positions=palettes.map(()=>[]);
  const trunk=(x,y,z,top,bottom,h,angleX=0,angleZ=0)=>{
    const m=new THREE.Mesh(new THREE.CylinderGeometry(top,bottom,h,9),trunkMat);
    m.position.set(x,y,z);m.rotation.set(angleX,0,angleZ);
    m.castShadow=true;scene.add(m);
  };
  function leaf(x,y,z,width,height,shade=0,rot=0){
    positions[shade%positions.length].push([x,y,z,width,height,rot]);
  }
  function deciduous(x,z,s=1,variety=0){
    const h=(5.2+(variety%3)*.55)*s;
    trunk(x,h*.37,z,.14*s,.28*s,h*.74);
    for(let b=0;b<7;b++){
      const a=b*2.399+variety, dx=Math.cos(a),dz=Math.sin(a);
      const len=(1.25+(b%3)*.35)*s, cy=h*.73+(b%3)*.23*s;
      trunk(x+dx*len*.25,cy,z+dz*len*.25,.06*s,.10*s,len*.92,0,dx*.45);
      const ccx=x+dx*len*.77,ccz=z+dz*len*.77;
      for(let j=0;j<14;j++){
        const angle=j*2.4+b,spread=(.2+rand()*.83)*s;
        const yy=cy+(rand()-.33)*1.48*s;
        leaf(ccx+Math.cos(angle)*spread,yy,ccz+Math.sin(angle)*spread,
          (.78+rand()*.53)*s,(.60+rand()*.45)*s,
          (j+b)%4,angle+rand()*.4);
      }
    }
  }
  function cypress(x,z,h=4.0,k=0){
    trunk(x,h*.45,z,.095,.18,h*.90);
    for(let layer=0;layer<9;layer++){
      const t=layer/9,y=.55+t*h*.82,r=(.78*(1-t)+.11);
      for(let i=0;i<7;i++){
        const a=i*6.283/7+layer*.67,rr=r*(.60+rand()*.4);
        leaf(x+Math.cos(a)*rr,y+(rand()-.5)*.33,z+Math.sin(a)*rr,
          .52+rr*.5,.78+rr*.5,(i+layer+k)%4,a);
      }
    }
  }
  [[-14.8,-10.6,1.05],[13.6,-11.6,.97],[-14.7,13.2,.84],[15.8,14.2,.92],[-6.8,-13,.78]]
    .forEach((entry,i)=>deciduous(...entry,i));
  [[-11.6,4],[-11.2,0],[-10.6,-4],[16.4,-4],[16.4,0],[16.4,4],[5,-9],[-6,-10],[-13,-10]]
    .forEach(([x,z],i)=>cypress(x,z,3.15+(i%3)*.65,i));
  // Distinct small shrub clusters beside driveway and patio.
  for(let k=0;k<28;k++){
    const x=k<14?-8.9+(k%7)*.57:8.3+(k%7)*.58;
    const z=k<14?8.2+(k%2)*1.0:9.3+(k%2)*1.2;
    for(let t=0;t<5;t++){
      const a=t*6.28/5,rr=.25+(t%2)*.16;
      leaf(x+Math.cos(a)*rr,.40+(t%2)*.18,z+Math.sin(a)*rr,
        .50,.42,(k+t)%4,a);
    }
  }
  const geo=new THREE.PlaneGeometry(1,1),matrix=new THREE.Matrix4();
  const quaternion=new THREE.Quaternion(),scale=new THREE.Vector3(),pos=new THREE.Vector3();
  for(const [color,leaves] of positions.entries()){
    const mesh=new THREE.InstancedMesh(geo,mats[color],leaves.length);
    for(let i=0;i<leaves.length;i++){
      const [x,y,z,w,h,rot]=leaves[i];
      pos.set(x,y,z);quaternion.setFromEuler(new THREE.Euler(0,rot,Math.sin(rot)*.17));
      scale.set(w,h,1);matrix.compose(pos,quaternion,scale);mesh.setMatrixAt(i,matrix);
    }
    mesh.instanceMatrix.needsUpdate=true;
    mesh.castShadow=false;mesh.receiveShadow=true;mesh.frustumCulled=false;scene.add(mesh);
  }
}