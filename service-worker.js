/* VERSION: FINAL_SW_2026_01_20 */

self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // 常にネットワーク優先（保存破壊防止）
  e.respondWith(fetch(e.request));
});
