// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDmlnKOI5sz-t9T0AolHBPyCHNFhA38ICc",
   authDomain: "burhani-it.firebaseapp.com",
   projectId: "burhani-it",
   storageBucket: "burhani-it.appspot.com",
   messagingSenderId: "798872156491",
   appId: "1:798872156491:web:9b7a604e0704736cb9d0ce",
   measurementId: "G-GRYFTN9FHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);