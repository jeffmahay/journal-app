import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCWfccjfP5eZczV7mms5gpRGxOJjv2R_fY",
    authDomain: "journal-app-cf9c0.firebaseapp.com",
    projectId: "journal-app-cf9c0",
    storageBucket: "journal-app-cf9c0.appspot.com",
    messagingSenderId: "13159776822",
    appId: "1:13159776822:web:10fea970fcb68fb0998e97"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };