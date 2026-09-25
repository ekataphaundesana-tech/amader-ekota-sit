const CACHE_NAME = "ekota-foundation-v1";

const FILES = [
  "/",
  "/index.html",
  "/logo.jpg",
  "/hero.jpg",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
