
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

    var s_c = '{"username":"dewankpant",\
"contexts":[{"ip":"293.168.1.1",\
    "charge_status":"Not charging",\
    "Location_lat": "32.73",\
    "Location_lng":"78.34",\ 
    "Battery level":"73",\ 
    "OS":"Android 9.0",\ 
    "CPU": "Snapdragon 845"\
}],\ 
"device_type":"chrome"\
}'
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://52.15.230.213:5000/contexthandler", false ); 
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(s_c));
    console.log(xmlHttp.responseText);


   

    // Attempt to extract notification URL
<<<<<<< HEAD
    var url = "https://www.facebook.com";
=======
    var url = event.notification.data.url;

    // Check if it exists
    if (url) {
        // Open the target URL in a new tab/window
>>>>>>> parent of 4be2a1c... Update service-worker.js
        event.waitUntil(clients.openWindow(url));
    
});