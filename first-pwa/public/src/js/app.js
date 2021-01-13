let deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service Worker registered!')
        });
}

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt fired');
    e.preventDefault();
    deferredPrompt = e;
    return false;
});