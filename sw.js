/* Service Worker: macht die Seite installierbar und das Spiel offline spielbar.
   Spiel und Startseite: erst Netz, bei Fehler Cache (so kommen Updates sofort an).
   Bilder und Icons: Cache zuerst. */
const VER='gf-v37';
const SHELL=['./','index.html','game/spiel.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','shot-kampf.jpg','shot-upgrade.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VER).then(c=>c.addAll(SHELL).catch(()=>{})).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VER).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  const html=r.mode==='navigate'||/\.(html|webmanifest)$/.test(new URL(r.url).pathname)||new URL(r.url).pathname.endsWith('/');
  if(html){e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(VER).then(ch=>ch.put(r,c));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))))}
  else{e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const c=res.clone();caches.open(VER).then(ch=>ch.put(r,c));return res})))}
});
