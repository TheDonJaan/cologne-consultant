const CACHE='cologne-consultant-v311-sauvage-retirement-1';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./bottle-profiles.js?v=scent", "./note-atlas-1.webp", "./note-atlas-2.webp", "./note-atlas-3.webp", "./assets/bottle_01.webp", "./hacivat-dark.webp", "./assets/bottle_03.webp", "./assets/bottle_04.webp", "./assets/bottle_05.webp", "./assets/bottle_06.webp", "./assets/bottle_07.webp", "./assets/bottle_08.webp", "./assets/bottle_09.webp", "./assets/bottle_10.webp", "./assets/bottle_11.webp", "./assets/bottle_12.webp", "./assets/bottle_13.webp", "./assets/bottle_14.webp", "./assets/bottle_15.webp", "./assets/bottle_16.webp", "./assets/bottle_17.webp", "./assets/bottle_18.webp", "./assets/bottle_19.webp", "./assets/bottle_20.webp", "./assets/bottle_21.webp", "./assets/bottle_22.webp", "./assets/bottle_23.webp", "./assets/bottle_24.webp", "./assets/bottle_25.webp", "./assets/bottle_26.webp", "./assets/bottle_27.webp", "./assets/bottle_28.webp", "./assets/icon-192.png", "./assets/icon-512.png"];
const REFERENCE_MARKER='<meta name="fragrance-reference" content="3.1.1 — Sauvage EDP Retired Master">';
const INDEX='./index.html';

async function hasCurrentReference(response){
  return response?.ok && (await response.clone().text()).includes(REFERENCE_MARKER);
}

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})));
    if(!await hasCurrentReference(await cache.match(INDEX))){
      await caches.delete(CACHE);
      throw new Error('The current reference has not reached this host yet');
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('cologne-consultant-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

async function navigate(request){
  const cache=await caches.open(CACHE);
  try{
    const response=await fetch(request,{cache:'no-cache'});
    if(await hasCurrentReference(response)){
      await cache.put(INDEX,response.clone());
      return response;
    }
  }catch{
    // The verified shell is also the offline entry point.
  }
  return (await cache.match(INDEX))||Response.error();
}

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith(navigate(request));
    return;
  }
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(request);
    if(cached)return cached;
    const response=await fetch(request);
    if(response.ok)await cache.put(request,response.clone());
    return response;
  })());
});
