"use strict";var precacheConfig=[["/index.html","6d4ef7f7912f34c5aa810a72ac197ac2"],["/static/js/main.0feb0438.js","7b961705e0c37428c218fd45e98b6b5b"],["/static/media/Donation.aa78bc00.scss","aa78bc008a7767355270f455479a0f03"],["/static/media/DonationFooter.30d4ef96.scss","30d4ef96f30a80aeb87bcbca26895da0"],["/static/media/DonationHeader.ee56089d.scss","ee56089dc413ea1c22475d39574b29d5"],["/static/media/DonationMain.577fcd87.scss","577fcd87cacfe979dffedc83825be2f6"],["/static/media/List.43a775cf.scss","43a775cfad0285cf48385102ab8d7673"],["/static/media/ListItems.4fcad12e.scss","4fcad12e05f3b892fae8f03611b74857"],["/static/media/MainDesc.2b2a9e1f.scss","2b2a9e1fbc84d0101559292455c080b6"],["/static/media/MainFill.368b199e.scss","368b199e38925fd87464eb128f6c3c2b"],["/static/media/MainForm.a0612989.scss","a0612989f441be6a503e421d2a6df453"],["/static/media/MainTitle.1230bcba.scss","1230bcbaa0ee73395f55aaf1a860b7b3"],["/static/media/MainWhy.c5f18dcc.scss","c5f18dcc566309a6edb63b93c788bdca"],["/static/media/Navigation.b3688a23.scss","b3688a232bc3d575b0ebd2425f8b07c0"],["/static/media/index.0200c0f5.scss","0200c0f5d52cb663a8cef70df6a67337"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var s="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});