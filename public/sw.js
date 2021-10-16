// const cacheName = "v1";

self.addEventListener("push", function (e) {
  const data = e.data.json();
  var options = {
    body: data.body,
    icon: "images/example.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };
  e.waitUntil(self.registration.showNotification(data.title, options));
});

// Install a service worker
self.addEventListener("install", (event) => {
  console.log("Service Workers: Installed");
});

// Cache and return requests
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     fetch(event.request)
//       .then((res) => {
//         //Make clone of response
//         const resClone = res.clone();
//         // Open cache
//         caches.open(cacheName).then((cache) => {
//           // Add response to the cache
//           cache.put(event.request, resClone);
//         });
//         return res;
//       })
//       .catch((err) =>
//         caches
//           .match(event.request)
//           .then((res) => res)
//           .catch((err) => console.error(err))
//       )
//   );
// });

// Update a service worker
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== cacheName) {
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });
