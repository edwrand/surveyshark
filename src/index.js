// Import the functions you need from the SDKs you need

// use the structure below to import firebase services
// import { } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-SERVICE.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js';
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
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

// init servicesconst
const auth = getAuth(app);
const db = getFirestore();

// collection ref
const colRef = collection(db, 'users');

// get collection data
getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs);
});