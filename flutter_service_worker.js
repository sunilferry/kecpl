'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0f763b3dd25daa55e4c100916036479d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7a42c4a920c48fb975828962b0d026fc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef7b9d00cefc37982d826eef12a870e3",
".git/logs/refs/heads/main": "06e1f19c8e8d54af1c78ceaf63c4b813",
".git/logs/refs/remotes/origin/main": "17bcce176dd9d4d8ffb0cdb5d0b4bd44",
".git/objects/13/717ad68ba854f1da14047ea2bc6e217ee0cf03": "984fdbaee7f820ee763af0ddf5347966",
".git/objects/1e/12f754ea7ab9353beadeb95c0a8709586995a2": "3a2bb2c6064f9ab3809dd87441caac80",
".git/objects/28/7f1390c2640a1cff5385e6c51a28ab76b09dfa": "e8137b39ccd81116db63961189c6b5d7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/e25e15bc9efb8e10425f7f6d58b64df18c7a67": "30d586de818cd9c71cc18b59b9ed83ed",
".git/objects/3b/ae116b873a336351f49da5fc8695d075ccd5c3": "da4f457c9d32c91e41fdef557b22c480",
".git/objects/44/8ebcde6ab7ff8d42cf378870c6f29f16210e16": "9720b3c1389c372ad164141358ce2c1b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/567c10ff8941886dca54088167a06054bb992c": "88e9af116c8c20b15b2a8885dc57df5e",
".git/objects/49/f5f386eca0df563700403f50a520923673e587": "f0c6bd69af35c7838d8fa0e21db7bf0d",
".git/objects/4c/5194a4257a403131f2d3bffe0307b4647f13b3": "c85323cb625bb444cda61ccf6f65bc25",
".git/objects/53/041f6cf061f81b2d0915b0a2be9903550ac1e9": "22cfe358811aba59c2a1ac6241cc5825",
".git/objects/58/21b19f25ee80674b1c4612c09ce5342047846f": "61162572c6c644c6df444decc3c5e86a",
".git/objects/60/e44c715dd3b50b742cf46cd16b9f219848f046": "c20fc8022bbecafd1883072c0abdf67c",
".git/objects/61/0d743b85b78e256b107f672e6ad4f0ae22bf92": "15cc9bb3f7707964c7a07f62fbd46bfd",
".git/objects/61/8fb921d6649314f5dff68d3506dfb25d07ab4a": "f1e62d69c61dc97cf96a1a02319947cb",
".git/objects/6c/b5505cef7438555e3f5fbd0919141765ab8d07": "9befe201eaade3c98cf9b39860da382a",
".git/objects/6e/ad74f85374ea24b3371ea69a36e6cd8c5a0373": "4d28579402c8545db3e3402f75383c40",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/324149fab6cfaafb39e802069f929c02843b61": "c8549e1afc82ad4c33faeb9aae50da44",
".git/objects/90/45edbdf47a86bc3ffcd64d82576839cc3dd44f": "42a1617d547d237f6f46c0bfaed949a1",
".git/objects/9e/3c895e7d0c18258b126ed455af613293c0bcf6": "dde5f633907df4c6047a2c2de8a495d3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/631b70b66b95f7e1cd99b7fee75d91a58146ae": "17abea6bd0afaf3725b4e2e795b3c5d6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c6/abc2b9d98f6d8133b56d6bcfacab6b9a353875": "9b4482ed879dde1180b99cfcf9a58ce5",
".git/objects/cf/6a00647fda5b621004a1a93540371d99f67cab": "ed2fe1db1f47771a651a7f43a1bdc713",
".git/objects/d4/957916db0311b9018fecffb7e9579e04536d34": "ed7fb1aa1b19a3c8ea8102f060307408",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/420bb63c44048fe28e042ad0e0d7129c6e6034": "38da577389b9691d944c1dd3cd2b3ce0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/ec152d35f7bf0ba9e5174532c733d1aaac5a07": "a4ded52dda9b96bbc7824d2b5c908dfb",
".git/objects/ea/f36da05cca557164d5263f07b0dd2603ab008f": "42b3514c5f2f0cb1fe3024715849311f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/556ba4ac481f23faa74831ac945287749a076b": "65a83ab64da077a3f5de75133caa56ea",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fc/126b647e67cbbe2b9bb8170df2fd8a07618f73": "38e4f7529bd70922007ab22e9f9e7781",
".git/refs/heads/main": "106b5b2f597bcbe9e055b2ed8b674214",
".git/refs/remotes/origin/main": "106b5b2f597bcbe9e055b2ed8b674214",
"assets/AssetManifest.json": "48aaa4c26bf36f150d73f2264e69d792",
"assets/assets/icons/fingerprint.png": "0a0c782596ecf13dae3451db751c81a1",
"assets/assets/icons/shield.png": "b8e10d0f4cc1a1859c2bac0c2dd3697f",
"assets/assets/icons/shield1.png": "35dbee1ed3dd70fcc02a145dfe967728",
"assets/assets/images/banner.jpg": "e025aab2c00dc30a7680a2372f88eab5",
"assets/assets/images/banner2.jpg": "e139ea172b48ecb1592ab1a600cf9b1b",
"assets/assets/images/banner3.jpg": "b3d63ebfaeb3e70e3da6beebb06c6a5a",
"assets/assets/images/camera_img.jpg": "d73c76a393fe1f11f32c3b9469306d22",
"assets/assets/images/cctv_img.jpg": "200519bbfcbf9d448adcb012ada7cf73",
"assets/assets/images/cctv_img.png": "789738a4fd352f31672f1e58a29bb33b",
"assets/assets/images/domcam.jpg": "c55f8c1ad3ebfdc93a13d909aa222791",
"assets/assets/images/finger_img.jpg": "a0703277c6fe479b539522162720e6b4",
"assets/assets/images/finger_print_door.jpg": "23bb42f4651943685aa8968a88c6e6f5",
"assets/assets/images/finger_print_lock.jpg": "e2002a549ca823a71cd2213d17b88bd8",
"assets/assets/images/home_automation.jpg": "18afcbd5c04ad795d71b1d9e163b34d9",
"assets/assets/logo.png": "44a3fa4d5f3cb44cf37244b57d3ba63c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8d84839390fe4bdd1d3f5fd4182666a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d1652dd778196f58a8becba5bb51534",
"/": "6d1652dd778196f58a8becba5bb51534",
"main.dart.js": "b7c9a4d1016acd87e8b38758e618b459",
"manifest.json": "c59f96527e096893ffe3e476cbb96632",
"version.json": "1499fe82120c3364517ff6769870e2cc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
