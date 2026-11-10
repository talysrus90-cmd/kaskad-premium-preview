/* КАСКАД · авторская геометрия ограждений, без копирования моделей производителей.
   Вдохновлено распространёнными типами ограждений на российском рынке.
   Создаём только выбранный тип; остальные скрываем, чтобы Redmi не тормозил. */
export function createFenceSystem(THREE,scene,options){
  const {gardenStone,postBrick,tuscanBrick,tuscanFenceWall,copingStone,fenceIron,timber}=options;
  const segments=[
    [[-19,-17],[19,-17]], [[-19,-17],[-19,20.5]], [[19,-17],[19,20.5]],
    [[-19,20.5],[-3.65,20.5]],[[3.65,20.5],[19,20.5]]
  ];
  const styles=new Map();
  const sheet=new THREE.MeshStandardMaterial({color:'#48525b',roughness:.47,metalness:.52,side:THREE.DoubleSide});
  const woodDark=timber;
  const rawMetals=[fenceIron,sheet];
  let active='iron';

  const mesh=(parent,w,h,d,mat,x,y,z,cast=true)=>{
    const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
    m.position.set(x,y,z);m.castShadow=cast;m.receiveShadow=true;parent.add(m);
    return m;
  };
  const instanced=(parent,positions,dimensions,material,cast=false)=>{
    if(!positions.length)return;
    const geometry=new THREE.BoxGeometry(...dimensions);
    const item=new THREE.InstancedMesh(geometry,material,positions.length);
    const matrix=new THREE.Matrix4(),quaternion=new THREE.Quaternion(),scale=new THREE.Vector3(1,1,1);
    for(let i=0;i<positions.length;i++){
      const [x,y,z,rotation=0]=positions[i];
      quaternion.setFromEuler(new THREE.Euler(rotation,0,0));
      matrix.compose(new THREE.Vector3(x,y,z),quaternion,scale);
      item.setMatrixAt(i,matrix);
    }
    item.instanceMatrix.needsUpdate=true;item.castShadow=cast;item.receiveShadow=true;
    parent.add(item);
    return item;
  };
  const rails=(parent,L,mat=fenceIron,heights=[.45,1.47])=>{
    for(const y of heights)mesh(parent,L,.082,.092,mat,0,y,0,false);
  };
  function fillSpan(group,L,kind){
    const isBrick=kind==='tuscan'||kind==='brickIron';
    if(kind==='tuscan'){
      mesh(group,L,1.77,.24,tuscanFenceWall,0,.97,0);
      mesh(group,L+.08,.135,.41,copingStone,0,1.91,0);
      mesh(group,L,.26,.35,gardenStone,0,.15,0);
    }else if(kind==='stone'){
      mesh(group,L,.98,.27,gardenStone,0,.54,0);
      mesh(group,L+.1,.105,.42,copingStone,0,1.08,0);
    }else if(kind==='wood'||kind==='ranch'||kind==='louvers'){
      if(kind==='wood'){for(let y=.30;y<=1.65;y+=.19)mesh(group,L,.14,.105,woodDark,0,y,0,false);}
      if(kind==='ranch'){for(let y=.38;y<=1.80;y+=.33)mesh(group,L,.25,.09,sheet,0,y,0,false);}
      if(kind==='louvers'){
        const positions=[];
        for(let y=.24;y<=1.82;y+=.16)positions.push([0,y,0,-.42]);
        instanced(group,positions,[L,.18,.08],sheet,false);
      }
    }else if(kind==='profiled'){
      mesh(group,L,.30,.28,gardenStone,0,.18,0,false);
      const across=Math.max(20,Math.ceil(L/.12)),pos=[],indices=[];
      for(let i=0;i<=across;i++){
        const x=-L/2+L*i/across;
        const zz=.10*Math.sin(x*2*Math.PI/.30);
        pos.push(x,.30,zz,x,1.98,zz);
      }
      for(let i=0;i<across;i++){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
      const geo=new THREE.BufferGeometry();
      geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setIndex(indices);geo.computeVertexNormals();
      const prof=new THREE.Mesh(geo,sheet);prof.castShadow=true;prof.receiveShadow=true;group.add(prof);
      mesh(group,L,.075,.18,fenceIron,0,2.02,0,false);
    }else if(kind==='panel3d'){
      const bars=[];
      for(let x=-L/2+.12;x<L/2;x+=.21)bars.push([x,1.02,0]);
      instanced(group,bars,[.029,1.9,.032],fenceIron,false);
      const horizontal=[];
      for(let y=.22;y<2.04;y+=.25)horizontal.push([0,y,0]);
      instanced(group,horizontal,[L,.034,.03],fenceIron,false);
      rails(group,L,fenceIron,[.15,1.94]);
    }else if(kind==='picket'||kind==='chess'){
      rails(group,L,fenceIron,[.43,1.55]);
      const faces=kind==='chess'?2:1,slats=[];
      const n=Math.ceil(L/(kind==='chess'?.225:.28));
      for(let face=0;face<faces;face++)for(let k=0;k<n;k++){
        const x=-L/2+(k+.5+(face?.5:0))*L/n;
        if(x>L/2-.1)continue;
        slats.push([x,1.02,face?.11:-.08]);
      }
      instanced(group,slats,[kind==='chess'?.14:.14,1.73,.05],sheet,true);
    }else if(kind==='brickIron'){
      mesh(group,L,.55,.31,tuscanFenceWall,0,.30,0,false);
      mesh(group,L,.105,.43,copingStone,0,.61,0,false);
      rails(group,L,fenceIron,[.75,1.9]);
      const bars=[];
      for(let x=-L/2+.15;x<L/2;x+=.25)bars.push([x,1.32,0]);
      instanced(group,bars,[.05,1.25,.052],sheet,false);
    }else{
      // Classical wrought metal: slender bars and soft silhouette.
      rails(group,L,fenceIron,[.40,1.70]);
      const bars=[];
      for(let x=-L/2+.11;x<L/2;x+=.24)bars.push([x,1.10,0]);
      instanced(group,bars,[.048,1.79,.048],fenceIron,false);
      for(let x=-L/2+.18;x<L/2;x+=.73){
        const curl=new THREE.Mesh(new THREE.TorusGeometry(.16,.025,6,18,Math.PI),fenceIron);
        curl.position.set(x,1.28,.045);group.add(curl);
      }
    }
    if(isBrick||kind==='stone')mesh(group,L,.16,.43,gardenStone,0,.09,0,false);
  }

  function build(kind){
    const root=new THREE.Group();root.name='Fence · '+kind;
    const postKeys=new Map();
    const masonry=['tuscan','stone','brickIron'].includes(kind);
    for(const [[x1,z1],[x2,z2]] of segments){
      const dx=x2-x1,dz=z2-z1,L=Math.hypot(dx,dz);
      const group=new THREE.Group();
      group.position.set((x1+x2)/2,0,(z1+z2)/2);
      group.rotation.y=-Math.atan2(dz,dx);
      root.add(group);fillSpan(group,L,kind);
      const count=Math.max(1,Math.ceil(L/(masonry?3.4:4)));
      for(let j=0;j<=count;j++){
        const t=j/count,x=x1+dx*t,z=z1+dz*t;
        postKeys.set(x.toFixed(3)+':'+z.toFixed(3),[x,z]);
      }
    }
    const blockMat=kind==='tuscan'||kind==='brickIron'?tuscanBrick:kind==='stone'?gardenStone:postBrick;
    const postHeight=kind==='tuscan'?2.17:kind==='brickIron'?2.0:2.02;
    for(const [x,z] of postKeys.values()){
      const w=masonry?.52:.20;
      mesh(root,w,postHeight,w,masonry?blockMat:fenceIron,x,postHeight/2+.05,z);
      if(masonry)mesh(root,w+.13,.105,w+.13,copingStone,x,postHeight+.12,z);
    }
    // Entrance portal uses the same height and material as the perimeter.
    const z=20.5,entryMaterial=masonry?blockMat:postBrick,entryH=masonry?2.60:2.25;
    for(const x of [-3.65,3.65]){
      mesh(root,.72,entryH,.72,entryMaterial,x,entryH/2,z);
      mesh(root,.90,.16,.90,copingStone,x,entryH+.085,z);
      const light=new THREE.Mesh(new THREE.SphereGeometry(.13,12,8),
        new THREE.MeshStandardMaterial({color:'#f4d7a6',emissive:'#a56d39',emissiveIntensity:.25}));
      light.position.set(x,entryH+.27,z);root.add(light);
    }
    // Functional gate leaves are kept in the same architectural style.
    for(const side of [-1,1]){
      const pivot=new THREE.Group();
      pivot.position.set(side*3.42,0,z);
      pivot.rotation.y=side*.13;root.add(pivot);
      const door=(w,h,d,x,y,material=sheet)=>{
        mesh(pivot,w,h,d,material,x,y,0,false);
      };
      const width=2.96;
      if(['louvers','ranch','wood','profiled'].includes(kind)){
        const n=kind==='ranch'?5:kind==='wood'?8:12;
        for(let k=0;k<n;k++){
          door(width,kind==='ranch'?.24:kind==='wood'?.15:.12,.08,-side*width/2,.33+k*(1.52/(n-1)));
        }
      }else{
        for(const y of [.42,1.61])door(width,.10,.10,-side*width/2,y);
        for(let k=0;k<11;k++)door(.065,1.69,.07,-side*(.14+k*.264),1.04);
      }
      door(.14,1.85,.14,-side*(width-.03),1.08,fenceIron);
    }
    scene.add(root);styles.set(kind,root);
    return root;
  }

  return {
    setType(kind){
      active=kind;
      for(const [key,group] of styles)group.visible=key===kind;
      const selected=styles.get(kind)||build(kind);
      selected.visible=true;
      return selected;
    },
    setColor(value){
      // Only metal surface colors change; stone and masonry retain their true textures.
      for(const material of rawMetals)material.color.set(value);
    },
    getType(){return active;},
    available:['iron','tuscan','wood','stone','brickIron','louvers','picket','chess','ranch','profiled','panel3d']
  };
}