// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxMRghKCzcoEQndE4DSQcdB7tsRotvZsA",
  authDomain: "tinder2-clone-rak.firebaseapp.com",
  projectId: "tinder2-clone-rak",
  storageBucket: "tinder2-clone-rak.appspot.com",
  messagingSenderId: "175947823851",
  appId: "1:175947823851:web:55e9a5116f18ab4e545cae",
  measurementId: "G-2SSW4E5M7F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
