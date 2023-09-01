// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiy4QjXf6RKfWYNxE6W9JZkG8SCQnZwog",
  authDomain: "waveloos-coderhouse-proyect.firebaseapp.com",
  projectId: "waveloos-coderhouse-proyect",
  storageBucket: "waveloos-coderhouse-proyect.appspot.com",
  messagingSenderId: "472945235984",
  appId: "1:472945235984:web:1d48da17c69985d6ded295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore inatialize
const db = getFirestore(app)

export default db