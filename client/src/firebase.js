// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sharex-c830b.firebaseapp.com",
  projectId: "sharex-c830b",
  storageBucket: "sharex-c830b.appspot.com",
  messagingSenderId: "1000918820639",
  appId: "1:1000918820639:web:66d5e62efb91baf063b22a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);