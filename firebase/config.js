import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkV2V-1cB-6ZXSl3yMA8IRjk0a9XAzBMg",
  authDomain: "rsvptennis-98f1b.firebaseapp.com",
  projectId: "rsvptennis-98f1b",
  storageBucket: "rsvptennis-98f1b.appspot.com",
  messagingSenderId: "818057102763",
  appId: "1:818057102763:web:8158d92619fa53811ebeee",
};

initializeApp(firebaseConfig); // init firebase
const db = getFirestore(); // init firestore

export {db};