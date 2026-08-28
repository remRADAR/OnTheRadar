/**
 * Framer Exporter service worker.
 *
 * Framer loads some modules (icon packs, code components) via URLs *built at
 * runtime*, so they never appear as literal strings the exporter could rewrite.
 * This worker intercepts any request to Framer's domains and serves the local
 * copy that the exporter already saved under /assets/, with the correct MIME
 * type. Result: no runtime calls to Framer (analytics excepted).
 *
 * Mirrors export.js's assetLocalPath() naming exactly.
 */

const FRAMER = /(?:^|\.)(?:framer\.com|framerusercontent\.com|app\.framerstatic\.com)$/;

function hash8(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  return h.toString(36).slice(0, 8);
}

function localPath(urlStr) {
  const u = new URL(urlStr);
  let p = u.pathname;
  if (p === '' || p.endsWith('/')) p += 'index';
  if (u.search) {
    const dot = p.lastIndexOf('.');
    const base = dot > 0 ? p.slice(0, dot) : p;
    const ext = dot > 0 ? p.slice(dot) : '';
    p = base + '.q' + hash8(u.search) + ext;
  }
  let safe = (u.host + p).replace(/[<>:"|?*\\]/g, '_');
  const isJs = /\/m\/|\/modules\//.test(u.pathname);
  if (isJs && !/\.(m?js)$/i.test(safe)) safe += '.js';
  return '/assets/' + safe;
}

function mime(path) {
  const ext = (path.split('.').pop() || '').toLowerCase();
  const map = {
    js: 'text/javascript', mjs: 'text/javascript', css: 'text/css',
    json: 'application/json', svg: 'image/svg+xml', png: 'image/png',
    jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', avif: 'image/avif',
    gif: 'image/gif', ico: 'image/x-icon', woff2: 'font/woff2', woff: 'font/woff',
    ttf: 'font/ttf', otf: 'font/otf', mp4: 'video/mp4', webm: 'video/webm',
  };
  return map[ext] || 'application/octet-stream';
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  let u;
  try { u = new URL(e.request.url); } catch { return; }
  if (!FRAMER.test(u.host)) return;          // not a Framer request — leave it
  if (u.host === 'events.framer.com') return; // analytics — let it pass/fail on its own

  e.respondWith((async () => {
    // A root-relative "/assets/..." reference inside an SW-served module resolves
    // against the Framer origin, not ours. Detect that and serve it from our origin.
    const candidate = u.pathname.startsWith('/assets/') ? u.pathname : localPath(u.href);
    try {
      const r = await fetch(candidate);
      if (r.ok) {
        const buf = await r.arrayBuffer();
        return new Response(buf, { headers: { 'Content-Type': mime(candidate) } });
      }
    } catch { /* fall through */ }
    return fetch(e.request); // last resort: original network request
  })());
});
