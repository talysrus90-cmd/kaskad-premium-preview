/* КАСКАД PWA Service Worker — offline shell + viewed photos, no caching of personal data.
   Only this published preview scope is controlled. No subscription to push notifications. */
'use strict';
const VERSION='kaskad-pwa-20261110-russian-market-v16';
const SHELL=VERSION+'-shell';
const IMAGES=VERSION+'-images';
const RUNTIME=VERSION+'-runtime';
const ROOT=self.registration.scope;
const core=[
 './','./index.html',
 './manifest.webmanifest','./pwa.js?v=1','./fonts.css?v=pwa1',
 './premium.css?v=houses-20261108','./gallery-viewer.css?v=20261108b','./ui-enhancements-20261108.css?v=1',
 './site-clarity-20261109.css?v=1',
 './gallery-fullscreen-20261109.css?v=1',
 './gallery-four-20261109.css?v=2',
 './faq-legal-20261109.css?v=2',
 './interactive-home.css?v=6',
 './3d-house-embed.html?v=5',
 './house-3d.bundle.js?v=5',
 './3d-house.css?v=4',
 './mobile-dock-20261110.css?v=1',
 './mobile-dock-20261110.js?v=3',
 './builder-gallery.js?v=2',
 './builder-gallery.css?v=2',
 './builder-lead-bridge.js?v=2',
 './assets/3d/roof_tile_neutral.webp',
 './roof-market-v16.js',
 './fence-market-v16.js',
 './foliage-v16.js',
 './assets/3d/cards/fence_brickIron.webp',
 './assets/3d/cards/fence_chess.webp',
 './assets/3d/cards/fence_louvers.webp',
 './assets/3d/cards/fence_panel3d.webp',
 './assets/3d/cards/fence_picket.webp',
 './assets/3d/cards/fence_profiled.webp',
 './assets/3d/cards/fence_ranch.webp',
 './assets/3d/cards/preset_coastal.webp',
 './assets/3d/cards/preset_craft.webp',
 './assets/3d/cards/preset_kavkaz.webp',
 './assets/3d/cards/preset_practical.webp',
 './assets/3d/cards/roof_ceramic.webp',
 './assets/3d/cards/roof_composite.webp',
 './assets/3d/cards/roof_flexible.webp',
 './assets/3d/cards/roof_metal3d.webp',
 './assets/3d/cards/roof_metalModular.webp',
 './assets/3d/cards/roof_profiled.webp',
 './assets/3d/cards/roof_standingSeam.webp',
 './assets/3d/italian_brick_diff.webp',
 './assets/3d/italian_brick_nor_gl.webp',
 './assets/3d/rustic_brick_diff.webp',
 './assets/3d/rustic_brick_nor_gl.webp',
 './assets/3d/metal_roof_diff.webp',
 './assets/3d/metal_roof_base.webp',
 './assets/3d/metal_roof_nor_gl.webp',
 './assets/3d/metal_roof_rough.webp',
 './assets/3d/rooitou_park_1k.hdr',
 './assets/3d/cards/facade_brick.webp',
 './assets/3d/cards/facade_gray.webp',
 './assets/3d/cards/facade_plaster.webp',
 './assets/3d/cards/facade_stone.webp',
 './assets/3d/cards/facade_tuscan.webp',
 './assets/3d/cards/fence_iron.webp',
 './assets/3d/cards/fence_stone.webp',
 './assets/3d/cards/fence_tuscan.webp',
 './assets/3d/cards/fence_wood.webp',
 './assets/3d/cards/preset_classic.webp',
 './assets/3d/cards/preset_estate.webp',
 './assets/3d/cards/preset_italian.webp',
 './assets/3d/cards/preset_modern.webp',
 './assets/3d/cards/roof_graphite.webp',
 './assets/3d/cards/roof_metalBurgundy.webp',
 './assets/3d/cards/roof_metalGraphite.webp',
 './assets/3d/cards/roof_slate.webp',
 './assets/3d/cards/roof_terracotta.webp',
 './premium.js?v=request-slider-v3-20261108','./gallery-zoom.js?v=20261109-fullscreen',
 './preview-runtime.js','./smart/lead-integration-20261108.js?v=3',
 './call-routing.js?v=samsung-dial-20261110-v2',
 './calculator-share.js?v=20261110-share-v1',
 './site-back-navigation.js?v=20261110-stepback-v1',
 './interaction-navigation.js?v=20261110-ui-history-v1',
 './email-compose.js?v=20261110-inpage-v3',
 './icons/kaskad-192.png','./icons/kaskad-512.png','./icons/kaskad-apple-180.png',
 './fonts/manrope-cyrillic.woff2','./fonts/manrope-latin.woff2',
 './fonts/prata-cyrillic.woff2','./fonts/prata-latin.woff2',
 './assets/ideas/card/hero-960.webp',
  './assets/ideas/card/gallery-four-b58c52bcb063-640.webp',
 './assets/ideas/card/gallery-four-899b3df28c14-640.webp',
 './assets/ideas/card/gallery-four-2ffd1278aecc-640.webp',
 './assets/ideas/card/gallery-four-64f507d46cca-640.webp',
 './assets/offline-photo.svg'
];
const URL_OF=p=>new URL(p,ROOT);
const isInScope=url=>url.origin===new URL(ROOT).origin&&url.pathname.startsWith(new URL(ROOT).pathname);
const isApi=p=>p.includes('/api/')||p.includes('/auth/')||p.includes('/admin/');
const put=async(cache,request,response)=>{
 try{if(response&&response.ok&&!response.type.includes('opaque'))await cache.put(request,response.clone())}catch{}
};
const limitCache=async(cache,max)=>{
 try{const keys=await cache.keys();for(let i=0;i<keys.length-max;i++)await cache.delete(keys[i])}catch{}
};
self.addEventListener('install',e=>{
 e.waitUntil((async()=>{
   const cache=await caches.open(SHELL);
   // Core stays small; original high-res images are loaded on demand and cached on access.
   await cache.addAll(core.map(x=>URL_OF(x).href));
   await self.skipWaiting();
 })());
});
self.addEventListener('activate',e=>{
 e.waitUntil((async()=>{
   const names=await caches.keys();
   await Promise.all(names.filter(n=>n.startsWith('kaskad-pwa-')&&!n.startsWith(VERSION)).map(n=>caches.delete(n)));
   await self.clients.claim();
 })());
});
const withTimeout=async(request,ms=3200)=>{
 const controller=new AbortController();
 const timer=setTimeout(()=>controller.abort(),ms);
 try{return await fetch(request,{signal:controller.signal})}finally{clearTimeout(timer)}
};
const getNavigation=async(request)=>{
 const store=await caches.open(RUNTIME);
 try{
   const result=await withTimeout(request,3500);
   if(result.ok) {
     await put(store,request,result);
     await limitCache(store,24);
     return result;
   }
   throw new Error('Network status '+result.status);
 }catch{
   const cached=await store.match(request,{ignoreSearch:true})
      ||await caches.match(URL_OF('./index.html').href,{ignoreSearch:true})
      ||await caches.match(URL_OF('./').href,{ignoreSearch:true});
   return cached||Response.error();
 }
};
const getCachedImage=async(request,url)=>{
 const cache=await caches.open(IMAGES);
 const saved=await cache.match(request,{ignoreSearch:true})||await caches.match(request,{ignoreSearch:true});
 if(saved)return saved;
 try{
   const response=await withTimeout(request,14000);
   if(!response.ok)throw Error('Image unavailable');
   await put(cache,request,response);
   await limitCache(cache,68);
   return response;
 }catch{
   const path=url.pathname;
   if(/\.(jpg|jpeg)$/i.test(path)){
     const file=path.split('/').pop();
     const thumb=path.replace(file,file.replace(/\.(jpg|jpeg)$/i,'-thumb.jpg'));
     const fallback=await caches.match(new URL(thumb,url.origin).href);
     if(fallback)return fallback;
   }
   const image=await caches.match(URL_OF('./assets/offline-photo.svg').href);
   return image||Response.error();
 }
};
const staleWhileRevalidate=async(request)=>{
 const store=await caches.open(RUNTIME);
 // Respect cache-busting asset versions; an older stylesheet must not override a new design.
 const old=await caches.match(request);
 const fresh=fetch(request).then(async(response)=>{
   if(response.ok){await put(store,request,response);await limitCache(store,50)}
   return response;
 }).catch(()=>null);
 if(old){void fresh;return old}
 return await fresh||await caches.match(request,{ignoreSearch:true})||Response.error();
};
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(!isInScope(url)||isApi(url.pathname))return;
 if(request.mode==='navigate'){event.respondWith(getNavigation(request));return}
 if(request.destination==='image' || /\.(?:jpg|jpeg|png|webp|avif|svg)$/i.test(url.pathname)){
   event.respondWith(getCachedImage(request,url));return;
 }
 event.respondWith(staleWhileRevalidate(request));
});
// No push permission is requested. Actual notifications require a consent-based
// subscriber UI and a separate authenticated Web Push/VAPID sender backend.
