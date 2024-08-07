// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-clone-843a3.firebaseapp.com",
  projectId: "loop-clone-843a3",
  storageBucket: "loop-clone-843a3.appspot.com",
  messagingSenderId: "1071135799457",
  appId: "1:1071135799457:web:09acb6e5f3addfbfff58e0",
  measurementId: "G-4B41X3KTGP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
