self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installing Service Worker...', e);
});
self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activating Service Worker...', e);
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetching something ...', e);
    e.respondWith(fetch(e.request));
});