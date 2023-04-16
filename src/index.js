// Import the functions you need from the SDKs you need
// import { } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-SERVICE.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSXIVb311nhAuO6LNAKbdiCTkKgJkOlX8",
    authDomain: "commentgod-e6b50.firebaseapp.com",
    projectId: "commentgod-e6b50",
    storageBucket: "commentgod-e6b50.appspot.com",
    messagingSenderId: "869570128912",
    appId: "1:869570128912:web:a35278d9f46328186f6e95",
    measurementId: "G-DLDZYLRH6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// detect auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in')
    } else {
        console.log('No user logged in')
    }
});