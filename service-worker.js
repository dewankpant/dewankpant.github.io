// Import Pushy Service Worker 1.0.2
importScripts('https://sdk.pushy.me/web/1.0.2/pushy-service-worker.js');

Pushy.register({ appId: '5c034ebb2ec6b68c14dbf265' }).then(function (deviceToken) {
    // Print device token to console
    console.log('Pushy device token: ' + deviceToken);

    // Send the token to your backend server via an HTTP GET request
    //fetch('https://your.api.hostname/register/device?token=' + deviceToken);

    // Succeeded, optionally do something to alert the user
}).catch(function (err) {
    // Handle registration errors
    console.error(err);
});


// Check if the device is registered
if (Pushy.isRegistered()) {
    // Subscribe the device to a topic
    Pushy.subscribe('HELLO').catch(function (err) {
        // Handle subscription errors
        console.error('Subscribe failed:', err);
    });
}