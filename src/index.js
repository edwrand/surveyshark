// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

const auth = firebase.auth();

// detect auth state
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
    }
}