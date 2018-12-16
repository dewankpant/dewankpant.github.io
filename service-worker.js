
// Listen for incoming push notifications
self.addEventListener('push', function (event) {
    // Extract payload as JSON object, default to empty object
    var data = event.data.json() || {};



    // Extract notification image URL
    var image = data.image || 'https://sdk.pushy.me/web/assets/img/icon.png';

    // Notification title and body
    var title = data.title || '';
    var body = data.message || '';

    // Notification options
    var options = {
        body: body,
        icon: image,
        badge: image,
        data: {
            url: data.url
        }
    };

    // Wait until notification is shown
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("show", function(e){

    alert("1111");
    console.log("")
}, false)

// Listen for notification click event
self.addEventListener('notificationclick', function (event) {

    


   

    // Attempt to extract notification URL
    var url = "https://www.facebook.com";
        event.waitUntil(clients.openWindow(url));
    
});