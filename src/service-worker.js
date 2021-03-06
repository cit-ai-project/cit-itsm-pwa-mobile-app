/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app/adsenseComponent.ts","d7a21fc6ef40ef40b77a29e38c711afa"],["app/app.component.css","d41d8cd98f00b204e9800998ecf8427e"],["app/app.component.html","63dbec50be8a9bab0ccf5387c90b6f11"],["app/app.component.spec.ts","17015dfb3d4a99a5270916b9edfec588"],["app/app.component.ts","ed3a21b8682de914ec6dabb50e0482ea"],["app/app.e2e.ts","5998af1e8a780a09e224b521c60cc52e"],["app/app.module.ts","4443f082bd5c8d23f8e04a4471c23aba"],["app/app.resolver.ts","c9ae62a8caa7b137959f4d58ba9c6d9d"],["app/app.routing.ts","d417375df3a16794e7ade79e4d0c16ba"],["app/desk.component.html","900d82ad451b934fcd1cec6c39295430"],["app/desk.component.ts","d3c66ac8b45b402059751353734b0f87"],["app/environment.ts","174d6d5a89690dde68560dd771057b3e"],["app/home.component.html","f13106550c8066736363489e563336c2"],["app/home.component.ts","d9e650bbcf88b1fd97c50961c94ffe74"],["app/index.ts","79cfb00897229cbb19f7f12d2bd6c761"],["app/service-worker.js","a520cae01cf99a393073e6ed75d2cbf8"],["app/slideMenuNavigation/clickOutside.ts","69fea1b56460a2fbbc330fdbaed8b051"],["app/slideMenuNavigation/slideMenu.ts","878bcd7a43cc7028ca461a8a8497b487"],["app/slideMenuNavigation/slidemenu.styles.scss","8846ee00d12e6c21452152aaff3aa748"],["app/slideMenuNavigation/slidemenu.template.html","c20165e426c30e33b9f6ce0df4272ac2"],["assets/css/bootstrap.css","8fa473e525b0210e422e4e400a530260"],["assets/css/font-awesome.min.css","7c5c70efc6386e1f69e66154da8c5c8d"],["assets/css/styles.css","ac0767f06678c6d6704c6c6837818b5e"],["assets/data.json","ba5508d05a7cef388d6ffa9db73b91a7"],["assets/fonts/FontAwesome.otf","87d8ca3ddc57e7d2da6226e480f90457"],["assets/fonts/fontawesome-webfont.eot","32400f4e08932a94d8bfd2422702c446"],["assets/fonts/fontawesome-webfont.svg","65e8f7dd6a65aa5812afa9050bfc720e"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d6"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef580"],["assets/fonts/fontawesome-webfont.woff2","db812d8a70a4e88e888744c1c9a27e89"],["assets/humans.txt","ead1fb6f48cde7ca717a8a535eedcb1d"],["assets/img/angular-logo.png","b149eca9d6d9471c9a77f797d79f0f2f"],["assets/img/apple-touch-icon-144x144.png","ffef7ee25efcafb953c6f825f91a759c"],["assets/img/apple-touch-icon-152x152.png","449fb90bab15858241ac07af9fa174da"],["assets/img/apple-touch-icon-72x72.png","24a9f6d5506cad0184e0247ea5ab5b80"],["assets/img/cuppa-favicon16x16.png","955a6a4e5e464168ff506709159fc54b"],["assets/img/cuppa-logo.png","8708e11b98737036bf1ac94b420995b5"],["assets/img/demo4.webm","af741da5bc2fc357f9a18623a5237bef"],["assets/img/favicon-128.png","82ee7c14b078455cff86d1342d341c0f"],["assets/img/favicon-196x196.png","999ac00bc5746cab0a64dab658be8c3d"],["assets/img/favicon-96x96.png","baf893b2c01c81ea2e9c7e732c7b809b"],["assets/img/iphone-empty.png","78d95ff683e98a5a807881fd0b908e0b"],["assets/img/slidemenu-banner.png","589b2ec311179baebd9efe3d53381b7a"],["assets/js/bootstrap.min.js","fb975a54300458089e4609e8bee7e814"],["assets/manifest.json","2c26946f2b88704a6a0e1ff317a51a8e"],["assets/mock-data/mock-data.json","b84d01cb2adc9b5db96acf6970cf81dd"],["assets/robots.txt","7f6b06b8b0ea5858216e447fb96ea519"],["assets/service-worker.js","deb2e620290839bb4fec8fa803cf681d"],["environments/environment.prod.ts","dbbaafb5412a4ec40c3b60625551c76d"],["environments/environment.ts","dafd5563a4e8445907625f4410f621d2"],["favicon.ico","b9aa7c338693424aae99599bec875b5f"],["index.html","5d2856f9287d4bcb17b608c58f66c771"],["main.ts","7641bc61bfad7284ab99fd9d7d266a8a"],["manifest.json","713b188f6ef92f3b840b83b526d11062"],["polyfills.ts","ba60fb3d53a9b455bd0acd7d3a4746d0"],["styles.css","0744b9f6769c326ccd7f2726fe132ce7"],["test.ts","85c9b6687606a11d33930da5627dcf5e"],["tsconfig.json","0ac8279547f6209c0bc8cadecbd7997d"],["inline.bundle.js","85c9b6687606a11d33930da5627dcf5e"],["main.bundle.js","85c9b6687606a11d33930da5627dcf5e"],["polyfills.bundle.js","85c9b6687606a11d33930da5627dcf5e"],["vendor.bundle.js","85c9b6687606a11d33930da5627dcf5e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







