// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm8xUQPIeTsvYGaxXpoBOZNdOA2HDSAjQ",
  authDomain: "react-nauth.firebaseapp.com",
  projectId: "react-nauth",
  storageBucket: "react-nauth.appspot.com",
  messagingSenderId: "650292491235",
  appId: "1:650292491235:web:7633cb772718a45b8b26d6",
  measurementId: "G-PSZHFHR531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;