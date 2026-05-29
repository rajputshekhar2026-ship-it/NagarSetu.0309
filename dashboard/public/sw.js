// NagarSetu Admin — Service Worker v1.0
const CACHE = 'nagarsetu-admin-v1';
const STATIC = [
  '/',
  '/index.html',
  '/offline.html',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js',
  'https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js',
];

// Install — cache static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache what we can; ignore failures (external CDN may block SW)
      return Promise.allSettled(STATIC.map(url => cache.add(url).catch(() => {})));
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network-first for API, cache-first for static
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API calls — network only, no cache
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/socket.io/')) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response(JSON.stringify({ offline: true, error: 'Offline — cached data unavailable' }), {
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // Static assets — cache first, network fallback
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache successful GET responses
        if (e.request.method === 'GET' && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Return offline page for navigation requests
        if (e.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });
    })
  );
});

// Background sync for queued actions
self.addEventListener('sync', e => {
  if (e.tag === 'sync-actions') {
    e.waitUntil(syncQueuedActions());
  }
});

async function syncQueuedActions() {
  // Notify all clients that sync happened
  const clients = await self.clients.matchAll();
  clients.forEach(client => client.postMessage({ type: 'SYNC_COMPLETE' }));
}

// Push notifications
self.addEventListener('push', e => {
  const data = e.data?.json() || {};
  const options = {
    body: data.message || 'New alert from NagarSetu',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    tag: data.tag || 'nagarsetu-alert',
    requireInteraction: data.type === 'sos',
    data: { url: data.url || '/', type: data.type },
    actions: data.type === 'sos'
      ? [{ action: 'view', title: '🚨 View SOS' }, { action: 'dismiss', title: 'Dismiss' }]
      : [{ action: 'view', title: 'View' }]
  };
  e.waitUntil(self.registration.showNotification(data.title || 'NagarSetu Alert', options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'view' || !e.action) {
    const url = e.notification.data?.url || '/';
    e.waitUntil(clients.openWindow(url));
  }
});
