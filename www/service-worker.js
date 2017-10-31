/**
 * Check out https://googlechrome.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');
// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

self.toolbox.options.cache = {
    name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
    [
        './build/main.js',
        './build/vendor.js',
        './build/main.css',
        './build/polyfills.js',
        'index.html',
        'manifest.json'
    ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;



// firebase.initializeApp({
//     'messagingSenderId': '25666590030'
// });

// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/assets/img/logo.png'
//     };

//     return self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });