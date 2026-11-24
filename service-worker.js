/* КАСКАД PWA Service Worker — offline shell + viewed photos, no caching of personal data.
   Only this published preview scope is controlled. No subscription to push notifications. */
'use strict';
const VERSION='kaskad-pwa-20261124-v59-priority-cache';
const SHELL=VERSION+'-shell';
const IMAGES=VERSION+'-images';
const RUNTIME=VERSION+'-runtime';
const ROOT=self.registration.scope;
const core=[
 './','./index.html',
 './manifest.webmanifest','./pwa.js?v=1','./fonts.css?v=pwa1',
 './premium.css?v=lead-mobile-20261109c','./gallery-viewer.css?v=20261124-fast','./ui-enhancements-20261108.css?v=1',
 './site-clarity-20261109.css?v=1',
 './gallery-fullscreen-20261109.css?v=3',
 './gallery-four-20261109.css?v=2',
 './faq-legal-20261109.css?v=2',
 './interactive-home.css?v=11',
 './mobile-usability-20261123.css?v=1',
 './kaskad-type-tuning.css?v=1',
 './3d-house-embed.html?v=30',
 './house-3d.bundle.js?v=27',
 './3d-house.css?v=4',
 './builder-v25-layout.css?v=14',
 './builder-v25-experience.js?v=15',
 './builder-launch-v29.js?v=4',
 './builder-gallery.js?v=18',
 './roof-relief-v25.js',
 './russian-home-v26.js',
 './house-variants-v27.js',
 './front-yard-v27.js',
 './facade-presets-v28.js',
 './entrance-v28.js',
 './exterior-addons-v30.js',
 './blind-area-v31.js',
 './veranda-v31.js',
 './two-storey-v31.js',
 './architecture-styles-v19.js',
 './assets/3d/cards/facade_brickBeige_v28.webp',
 './assets/3d/cards/facade_brickGraphite_v28.webp',
 './assets/3d/cards/facade_brickWhite_v28.webp',
 './assets/3d/cards/facade_brick_v28.webp',
 './assets/3d/cards/facade_gray_v28.webp',
 './assets/3d/cards/facade_klinker_v28.webp',
 './assets/3d/cards/facade_plasterSand_v28.webp',
 './assets/3d/cards/facade_plasterWhite_v28.webp',
 './assets/3d/cards/facade_plaster_v28.webp',
 './assets/3d/cards/facade_stone_v28.webp',
 './assets/3d/cards/facade_tuscan_v28.webp',
 './assets/3d/cards/facade_venetian_v28.webp',
 './assets/3d/cards/preset_twoClassic_v31.webp',
 './assets/3d/cards/preset_twoBrick_v31.webp',
 './assets/3d/cards/preset_twoColumns_v31.webp',
 './assets/3d/cards/preset_twoModern_v31.webp',
 './assets/3d/cards/preset_twoBalcony_v31.webp',
 './assets/3d/cards/preset_twoTerrace_v31.webp',
 './assets/3d/cards/preset_twoEstate_v31.webp',
 './assets/3d/cards/preset_twoFamily_v31.webp',
 './assets/3d/cards/preset_barnhouse_v27.webp',
 './assets/3d/cards/preset_bungalow_v27.webp',
 './assets/3d/cards/preset_chalet_v27.webp',
 './assets/3d/cards/preset_classic_v27.webp',
 './assets/3d/cards/preset_coastal_v27.webp',
 './assets/3d/cards/preset_cottage_v27.webp',
 './assets/3d/cards/preset_country_v27.webp',
 './assets/3d/cards/preset_craft_v27.webp',
 './assets/3d/cards/preset_estateOne_v27.webp',
 './assets/3d/cards/preset_family_v27.webp',
 './assets/3d/cards/preset_southernVillaTwo_v46.webp',
 './assets/3d/cards/preset_krasnodarTwo_v46.webp',
 './assets/3d/cards/preset_caucasusGalleryTwo_v46.webp',
 './assets/3d/cards/preset_modernOffsetTwo_v46.webp',
 './assets/3d/cards/preset_gableAttic_v27.webp',
 './assets/3d/cards/preset_italian_v27.webp',
 './assets/3d/cards/preset_kavkaz_v27.webp',
 './assets/3d/cards/preset_mansardHome_v27.webp',
 './assets/3d/cards/preset_minimal_v27.webp',
 './assets/3d/cards/preset_modernOne_v27.webp',
 './assets/3d/cards/preset_nordic_v27.webp',
 './assets/3d/cards/preset_practical_v27.webp',
 './assets/3d/cards/preset_terrace_v27.webp',
 './builder-gallery.css?v=3',
 './builder-lead-bridge.js?v=10',
 './assets/3d/preview-start-v43.webp',
 './assets/3d/roof_tile_neutral.webp',
 './roof-market-v16.js',
 './roof-forms-v20.js',
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
 './assets/3d/cards/roof_metalGraphite_v25.webp',
 './assets/3d/cards/roof_metal3d_v25.webp',
 './assets/3d/cards/roof_metalModular_v25.webp',
 './assets/3d/cards/roof_metalTramontana_v25.webp',
 './assets/3d/cards/roof_profiled.webp',
 './assets/3d/cards/roof_standingSeam.webp',
 './assets/3d/italian_brick_diff.webp',
 './assets/3d/italian_brick_nor_gl.webp',
 './assets/3d/rustic_brick_diff.webp',
 './assets/3d/rustic_brick_nor_gl.webp',
 './assets/3d/metal_roof_diff.webp',
 './assets/3d/metal_roof_base.webp',
 './assets/3d/concrete_pavement_02_1k.webp',
 './assets/3d/concrete_pavement_02_2k.webp',
 './assets/3d/leafy_grass_1k.webp',
 './assets/3d/leafy_grass_2k.webp',
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
 './premium.js?v=request-slider-v3-20261108','./gallery-zoom.js?v=20261123-finger-anchor-v24',
 './preview-runtime.js','./smart/lead-integration-20261108.js?v=3',
 './call-routing.js?v=samsung-dial-20261110-v2',
 './calculator-share.js?v=20261110-share-v1',
 './site-back-navigation.js?v=20261110-stepback-v1',
 './interaction-navigation.js?v=20261110-ui-history-v1',
 './mobile-process-20261123.js?v=1',
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
// Install a light, reliable offline shell. The 3D builder, HDR textures, and its
// previews are fetched and cached on first use, not downloaded by every visitor.
// Previously install preloaded 102 resources (~5.7 MB), even on mobile data.
const offlineCore=[
 './','./index.html','./manifest.webmanifest',
 './assets/offline-photo.svg','./assets/ideas/card/hero-960.webp',
 './fonts.css?v=pwa1','./premium.css?v=lead-mobile-20261109c'
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
   await cache.addAll(offlineCore.map(x=>URL_OF(x).href));
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
const getNavigation=async(request,event)=>{
 const store=await caches.open(RUNTIME);
 const path=new URL(request.url).pathname;
 const builder=path.endsWith('/3d-house-embed.html');
 // A matching cached editor can be displayed without waiting for a slow
 // connection. Never serve the main index document as an iframe editor.
 const cached=await store.match(request);
 if(builder&&cached){
   event.waitUntil((async()=>{
     try{
       const response=await withTimeout(request,12000);
       if(response.ok)await put(store,request,response);
     }catch{}
   })());
   return cached;
 }
 try{
   const result=await withTimeout(request,builder?12000:4500);
   if(result.ok){
     // Writing to Cache Storage must not delay navigation or first paint.
     event.waitUntil((async()=>{
       await put(store,request,result);
       await limitCache(store,24);
     })());
     return result;
   }
   throw new Error('Network status '+result.status);
 }catch{
   const old=await store.match(request,{ignoreSearch:!builder});
   if(old)return old;
   // Only the home page (or an SPA home navigation) may reuse index.html.
   const rootPath=new URL(ROOT).pathname;
   const home=path===rootPath||path===rootPath+'index.html';
   if(home)return await caches.match(URL_OF('./index.html').href,{ignoreSearch:true})
     ||await caches.match(URL_OF('./').href,{ignoreSearch:true})
     ||Response.error();
   return Response.error();
 }
};
const getCachedImage=async(request,url,event)=>{
 const cache=await caches.open(IMAGES);
 const saved=await cache.match(request,{ignoreSearch:true})||await caches.match(request,{ignoreSearch:true});
 if(saved)return saved;
 try{
   const response=await withTimeout(request,14000);
   if(!response.ok)throw Error('Image unavailable');
   // Respond to the browser immediately; persist a clone without blocking
   // rendering or the next swipe while IndexedDB/Cache Storage writes finish.
   event.waitUntil((async()=>{await put(cache,request,response);await limitCache(cache,96)})());
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
 const old=await caches.match(request);
 const url=new URL(request.url);
 // Explicitly versioned CSS/JS does not need a duplicate network fetch on
 // every visit. Unversioned scripts continue to revalidate in the background.
 // Bump each asset's ?v= URL when changing its contents.
 const versionedStatic=url.searchParams.has('v')
   && (request.destination==='style'||request.destination==='script');
 if(old&&versionedStatic)return old;
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
 if(request.mode==='navigate'){event.respondWith(getNavigation(request,event));return}
 if(request.destination==='image' || /\.(?:jpg|jpeg|png|webp|avif|svg)$/i.test(url.pathname)){
   event.respondWith(getCachedImage(request,url,event));return;
 }
 event.respondWith(staleWhileRevalidate(request));
});
// No push permission is requested. Actual notifications require a consent-based
// subscriber UI and a separate authenticated Web Push/VAPID sender backend.
