self.addEventListener("install",e=>{e.waitUntil(caches.open("v1").then(t=>t.addAll(["index.html","manifest.json","express (4).png","hero image.png","hand 4.jpeg","hand 5.jpeg","Chat bot 12.png"])))});self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))});
