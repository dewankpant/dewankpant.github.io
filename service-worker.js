// Import Pushy Service Worker 1.0.2


// Listen for incoming push notifications
self.addEventListener('push', function (event) {
    // Extract payload as JSON object, default to empty object
    var data = event.data.json() || {"true"};

    // Extract notification image URL
    var image = data.image || 'http://www.logotypes101.com/logos/548/D24FC139C1C2463F584EBB0894559B92/nice_logo.png';

    // Notification title and body
    var title = data.title || 'NICE-MFA';
    var body = data.message || 'Send Contexts';

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

// Listen for notification click event
self.addEventListener('notificationclick', function (event) {
    // Hide notification
    event.notification.close();

    // Attempt to extract notification URL
    var url = event.notification.data.url;

    // Check if it exists
    if (url) {
        // Open the target URL in a new tab/window
        event.waitUntil(clients.openWindow(url));
    }
});