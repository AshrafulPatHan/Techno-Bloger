// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAhjL2CS87viZy8t94NCdEWFa_XqEPnHw",
  authDomain: "techno-bloger.firebaseapp.com",
  projectId: "techno-bloger",
  storageBucket: "techno-bloger.firebasestorage.app",
  messagingSenderId: "558123680725",
  appId: "1:558123680725:web:25d9b30d3600fa454e335c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;