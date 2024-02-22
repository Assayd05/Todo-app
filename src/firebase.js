// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXAPBMzYSt5R5u9lcADfG6rNR9_uNn1k4",
  authDomain: "todo-app-16581.firebaseapp.com",
  projectId: "todo-app-16581",
  storageBucket: "todo-app-16581.appspot.com",
  messagingSenderId: "1014578546481",
  appId: "1:1014578546481:web:f00cb7f312614a45791210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)