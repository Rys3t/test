self.addEventListener('fetch', () => {
 // …

});
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('./serviceworker.js')
.then(function(reg) {
    console.log('Successfully registered service worker', reg);
})
.catch(function(err) {
    console.warn('Error whilst registering service worker', err);
});
}