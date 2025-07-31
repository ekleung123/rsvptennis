import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: null,
  authDomain: null,
  projectId: null,
  storageBucket: null,
  messagingSenderId: null,
  appId: null
}; // Firebase information removed on GitHub

alert("If you're seeing this, you're likely viewing this website cloned from my Github.  The clone will not work as I've removed my Firebase ID and other identifying information from my Github due to it being in public view.  To view this website properly, please go to my portfolio at www.ekleung123.com.")


initializeApp(firebaseConfig); // init firebase
const db = getFirestore(); // init firestore

export { db, firebaseConfig };