import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyD3hR9OvMEezKXDOm17p7LPq6TZAqQ6_c0",
        authDomain: "fir-pj-2987c.firebaseapp.com",
        projectId: "fir-pj-2987c",
        storageBucket: "fir-pj-2987c.firebasestorage.app",
        messagingSenderId: "30486258127",
        appId: "1:30486258127:web:8616796cda8776e724b2ba",
        measurementId: "G-8GWF7GLRPZ",
    });
}

export default firebase;
