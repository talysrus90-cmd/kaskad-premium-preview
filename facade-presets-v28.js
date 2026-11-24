/* KASKAD v28: Lightweight original procedural façade textures.
   Visual material concepts, not manufacturer-identical products.
   Color management: canvas textures are sRGB and use restrained per-texel variation.
*/
export function createFacadeMaterials(THREE){
 const make=(draw,rx=2.7,ry=2.2)=>{
  const c=document.createElement('canvas');c.width=c.height=512;
  const ctx=c.getContext('2d',{alpha:false});
  let seed=280624;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
  draw(ctx,rnd);
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
  t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rx,ry);t.anisotropy=4;return t;
 };
 const brick=(colors,mortar='#b2aaa0',scale=1)=>{
  return make((g,r)=>{
   g.fillStyle=mortar;g.fillRect(0,0,512,512);
   const w=95*scale,h=34*scale;
   for(let row=-1;row<Math.ceil(512/h)+1;row++){
    for(let col=-1;col<Math.ceil(512/w)+1;col++){
     const x=col*w+(row%2)*w*.50,y=row*h,base=colors[Math.floor(r()*colors.length)];
     g.fillStyle=base;g.fillRect(x+2,y+2,w-4,h-4);
     g.fillStyle='rgba(255,255,255,.09)';g.fillRect(x+3,y+3,w-6,2);
     g.fillStyle='rgba(0,0,0,.08)';g.fillRect(x+3,y+h-5,w-6,2);
     for(let k=0;k<10;k++){g.fillStyle=r()>.5?'rgba(255,255,255,.05)':'rgba(0,0,0,.06)';
      g.fillRect(x+3+r()*(w-6),y+3+r()*(h-6),1+r()*4,1+r()*3)}
    }
   }
  },3.1,2.4);
 };
 const plaster=(color,low,clouds=false)=>{
  return make((g,r)=>{
   g.fillStyle=color;g.fillRect(0,0,512,512);
   const count=clouds?1200:21000;
   for(let i=0;i<count;i++){
    g.fillStyle=r()>.5?'rgba(255,255,255,.07)':'rgba(50,47,41,.035)';
    const size=clouds?15+r()*80:1+r()*3;
    g.fillRect(r()*512,r()*512,size,size);
   }
   if(clouds){for(let k=0;k<7;k++){
     const x=r()*512,y=r()*512,grad=g.createRadialGradient(x,y,3,x,y,100+r()*130);
     grad.addColorStop(0,low);grad.addColorStop(1,'rgba(185,178,162,0)');
     g.fillStyle=grad;g.fillRect(0,0,512,512);
   }}
  },2.1,1.9);
 };
 const wood=make((g,r)=>{
  g.fillStyle='#795a40';g.fillRect(0,0,512,512);
  for(let x=0;x<512;x+=37){
   g.fillStyle=['#a27a57','#896747','#987151','#79573e'][Math.floor(r()*4)];
   g.fillRect(x+2,0,34,512);
   g.fillStyle='rgba(43,30,17,.14)';g.fillRect(x+2,0,2,512);
   for(let k=0;k<32;k++){
    g.fillStyle='rgba(35,28,18,.07)';g.fillRect(x+4+r()*28,r()*512,1,15+r()*55);
   }
  }
 },3.2,2.6);
 return {
   klinker:brick(['#49352c','#584036','#765447','#61443c','#795a4b'],'#a79b90',.92),
   brickBeige:brick(['#e0c8a7','#d7c4aa','#bca58b','#eed4b7','#cfad86'],'#ddd0bf',1.0),
   brickGraphite:brick(['#656563','#454a4d','#575c60','#3e4548','#6e7070'],'#9a9c9a',1.0),
   brickWhite:brick(['#ece7dc','#e0d9cc','#f2ede0','#d6d1c5','#e9e2d4'],'#bfc1b9',1.0),
   plasterSand:plaster('#c8b69a','rgba(148,125,96,.10)'),
   plasterWhite:plaster('#eeeae1','rgba(150,138,124,.09)'),
   venetian:plaster('#e2d9cc','rgba(142,133,120,.13)',true),
   planken:wood
 };
}
