'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c5451a7b8ff55cabb350f5f3d9771ef6",
"index.html": "6044f706dc0db9f9d38baabca4560a82",
"/": "6044f706dc0db9f9d38baabca4560a82",
"main.dart.js": "021e7643e3df438c5eab3ad970def27c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05bb7f31301877e489599f87ff8d53cd",
".git/config": "6b1842c5e581bc47c3c33f9f2ade40fa",
".git/objects/59/33d136a2da0f3d8f612b1a946b1b20f14a8b9c": "fc1d17433ce6833585d795f819a4f0b2",
".git/objects/92/5fbbb79e01b179e6458bd71bc5d6fc6ca9b716": "a5e2b9b3bb59a6cffb9652a2bca6731a",
".git/objects/04/8d9ab24eb861c5082bca3995a2e93f8526d60a": "7126ea1d8fc88d30631f23c01eae93d1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/140f685ecc9be7ef7ddcae8a765be5d6f49929": "92611cc89d8762ec69d1e5a0564489e5",
".git/objects/58/0c1b3dfa51e475f6b6980cc41c26fc6729f0e9": "0b35ee3e1dc2c346a3daf0ec0c5abf83",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4e/9b04e15ca52e405a95e898797f516b35db64a4": "0f98c341c1b8bd8ba02c7303fb161d49",
".git/objects/18/ba5f9a60469f394e6f051c46d4ce391f763793": "d6f24f4b3374f1be57e13b9f718045ee",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/e6edb28db790a5be763a7387174c8b71e8ab24": "5c9fbee0a03e9322af6393c5513b5fde",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/17/80c2cba885c8525bcad78b0d6093bc93427523": "5c135a4d5a90651fa13d09485e6a8363",
".git/objects/7b/524830291a28f3faf9f60a84d1895d7a9e811a": "e4cbf2b3f1e180dbd033075f8a3cc227",
".git/objects/8a/431a7eb76a7dd99112098e958fe878d8dad356": "e9cba44073984897d25014b222ef6f4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/18b044b9ba263a3ed5f14b3838af87c22f2744": "c2cb76fa89ca6648e843d3fdbf3ea402",
".git/objects/26/649e0033714e35cc66ceaa091aec2ed71226c0": "7e1833b2cc4ec6936b9bee159529836a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c2fc0547e9b2200a78ae99f9afc4374e4ea531": "b8b7c4f507d6cab41e56bf0d34add963",
".git/objects/5b/a4513fd5775fc2501ba4ca914de0de6c6e5deb": "274a70eebeb6c34419e6eb3e37575ceb",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/95f6189956cf243a4a42c1075e3a68a7294ae1": "b29ff4df80b85c8686d4c25aece90438",
".git/objects/06/2e35c863d9a72076273966f99cd31aa5629d79": "b7b742db97188c8b4607096880d6a9e6",
".git/objects/6c/fc632dd20d0b28c01bffb07e1d2fab5542d9af": "6db03aed4270fbb6d920f29f205cd9af",
".git/objects/6c/aa8ae516f2535f07bf5cb4417ed5908d6bc3da": "4c453c7487d90669f0eb0ff85c4d797b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/d3/f96561bd12b655340748d0b12f59e3fe21defc": "ed4e4c793686f71d6832ad6ee782847d",
".git/objects/a9/d8ff0f2633f2c4857c6b15ffca181e71fb33f6": "c2b53787da43f617adc39685ff6f4f9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/9f0eac8938ef7d5afb93ea486633d926b03c49": "9d5c9d04f802601e0ee700783b80ce74",
".git/objects/2d/73d0d644dbb74167b95d8b6e39cfe4772e8203": "d767bfc0043f0aff2de619efb15d3e44",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/d0dce4cc7b84fca3dd8c64530e6ef412508ea6": "9577ecda5bfd970bd2d7f19a1b980eee",
".git/objects/70/746f029b4affc77791a4d6bfde95d98d4d842c": "83a98052af5b8166674faf3fd4ae4000",
".git/objects/24/1fa254c6c9f797aff6c7bbb7c4a53b870310c4": "d6f6145102c09591942a9edd758d37cb",
".git/objects/4f/fa347039bb0a8d5b807d55c40e0ccfef454a5f": "9865b2dc09643da6dc7645c98789bf4a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/22/ef50e396d629091d1b023847b5e41affacccd7": "7ec39695560ff152d45decac798f47ab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4cdd00b499b376ebd4b011cc0584a5fa",
".git/logs/refs/heads/main": "4cdd00b499b376ebd4b011cc0584a5fa",
".git/logs/refs/remotes/origin/main": "e7490eda45fdfda72ccf701be663af6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "39d51e72e1e764b73ffc0bdd28219140",
".git/refs/remotes/origin/main": "39d51e72e1e764b73ffc0bdd28219140",
".git/index": "4949f8e4418d8a315753529851888c72",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "fec7a9c8cfe406ac76906f3589476678",
"assets/AssetManifest.json": "9ed497306d9761b1c71a1ff0c565c613",
"assets/NOTICES": "14ed3c887d4ea40d6fa9df61ccd10f5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/navermap.webp": "8b2a71df94d6460b32c601e889143b45",
"assets/assets/images/apple_map.svg.png": "4e7c494cefb3e4d7956fba964be059dd",
"assets/assets/images/kakaomap.png": "c40e01c9b6c8bab947911c9b84db6a10",
"assets/assets/images/tmap.webp": "88597f115e0f4972f188444cf6818439",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
