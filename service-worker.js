self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('secrets-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'banks.html',
                'cards.html',
                'websites.html',
                'apps.html',
                'others.html',
                'settings.html',
                'styles/common.css',
                'styles/index.css',
                'styles/banks.css',
                'styles/cards.css',
                'styles/websites.css',
                'styles/apps.css',
                'styles/others.css',
                'styles/settings.css',
                'scripts/index.js',
                'scripts/banks.js',
                'scripts/cards.js',
                'scripts/websites.js',
                'scripts/apps.js',
                'scripts/others.js',
                'scripts/settings.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});