// Import Pushy Service Worker 1.0.2


// Listen for incoming push notifications
self.addEventListener('push', function (event) {
    // Extract payload as JSON object, default to empty object
    var data = event.data.json() || {};

    
    var s_c = '{"username":"bluejay",\
"contexts":[{"ip":"293.168.1.1",\
    "charge_status":"Not charging",\
    "Location_lat": "32.73",\
    "Location_lng":"78.34",\ 
    "Battery level":"73",\ 
    "OS":"Android 9.0",\ 
    "CPU": "Snapdragon 845"\
}],\ 
"device_type":"phone"\
}'
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://52.15.230.213:5000/contexthandler", false ); 
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(s_c));
    console.log(xmlHttp.responseText);
    

    

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