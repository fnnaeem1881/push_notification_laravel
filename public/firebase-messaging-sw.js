// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyCYu7B4Az5BBuI55Lz34HV4J9qitCadjkM",
    authDomain: "garibook-9149d.firebaseapp.com",
    databaseURL: "https://garibook-9149d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "garibook-9149d",
    storageBucket: "garibook-9149d.appspot.com",
    messagingSenderId: "937015332627",
    appId: "1:937015332627:web:b8f86e2bd264c775a214e6",
    measurementId: "G-HHJYCNHTPF"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});
