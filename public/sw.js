if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-019999f6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_error",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/PaU3DPWTmaYBhzAVQRAz8/_buildManifest.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/PaU3DPWTmaYBhzAVQRAz8/_ssgManifest.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.523fe9d0846fc9163ae4.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.d16e34d082bd9267f2e6.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/framework.0c239260661ae1d12aa2.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/main-801c73a5770b9c33fb68.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/pages/_app-1d92680df685be6ae011.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/pages/_error-3280d8d506df4c049934.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/pages/index-6c80d3e26890a9d9e0fc.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"PaU3DPWTmaYBhzAVQRAz8"},{url:"/fonts/poppins-v15-latin-300.woff2",revision:"9ddc04912d6e8f88d9de4045b8b89c59"},{url:"/fonts/poppins-v15-latin-500.woff2",revision:"84780596e268aa0cb2be48af2ed5c375"},{url:"/fonts/poppins-v15-latin-700.woff2",revision:"f4f17fd53c7d040e56f91a3ecb692b22"},{url:"/fonts/poppins-v15-latin-regular.woff2",revision:"9ed361bba8488aeb2797b82befda20f1"},{url:"/img/back_top.svg",revision:"d5c2178d487984f4100e057453034a0c"},{url:"/img/favicon.ico",revision:"c657fffd221375f2620a6b99a8e405d7"},{url:"/img/hands.svg",revision:"6306788471b5f06dd7a23c60f303a626"},{url:"/img/logo.svg",revision:"a1d7012929bd3cc0b7675f868debf719"},{url:"/img/logo144.png",revision:"5887cff92bd6102a298521d976d3efb8"},{url:"/img/logo192.png",revision:"c58423b33a0614fb6dfc0f3ff247e116"},{url:"/img/logo256.png",revision:"f1872d3c73df012ad5388bb54d99df41"},{url:"/img/logo384.png",revision:"aba75a80c1654f8c279c80aef9dd34f1"},{url:"/img/logo48.png",revision:"d8ca74b39cc9f112ea8fa2e9fdfa7e4d"},{url:"/img/logo512.png",revision:"6188099add6bd56d663ad4ac0b3b228d"},{url:"/img/logo72.png",revision:"d8ca74b39cc9f112ea8fa2e9fdfa7e4d"},{url:"/img/logo96.png",revision:"2662b66133e9b64561203150aeee8c11"},{url:"/manifest.json",revision:"db1b7652c0e7cdab0fc749a65d6b6f71"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{requestWillFetch:async({request:e})=>(Request(),e)},new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e,event:s,error:a,state:r})=>caches.match("/offline.jpg",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e,event:s,error:a,state:r})=>caches.match("/_error",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
