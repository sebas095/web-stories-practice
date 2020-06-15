const CACHE_NAME = "STORIES_CACHE-v2";

self.addEventListener("install", function () {
  // Guardar archivos iniciales
  caches.open(CACHE_NAME).then((cache) => {
    cache.addAll(["/index.html", "/dist/js/bundle.js", "/public/images/1.jpg"]);
  });
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(
    caches.keys().then((cacheNames) => {
      const promises = cacheNames.map((cacheName) => {
        if (CACHE_NAME !== cacheName) return caches.delete(cacheName);
      });

      return Promise.all(promises);
    })
  );
});

self.addEventListener("fetch", function (ev) {
  ev.respondWith(
    caches
      .match(ev.request)
      .then((response) => {
        return searchInCacheOrMakeRequest(ev.request);
      })
      .catch((err) => {
        if (ev.request.mode === "navigate") return caches.match(ev.request);
      })
  );
});

function searchInCacheOrMakeRequest(request) {
  const cachePromise = caches.open(CACHE_NAME);
  const matchPromise = cachePromise.then((cache) => cache.match(request));

  return Promise.all([cachePromise, matchPromise]).then(
    ([cache, cacheResponse]) => {
      const fetchPromise = fetch(request).then((fetchResponse) => {
        cache.put(request, fetchResponse.clone());

        return fetchResponse;
      });

      return cacheResponse || fetchPromise;
    }
  );
}
