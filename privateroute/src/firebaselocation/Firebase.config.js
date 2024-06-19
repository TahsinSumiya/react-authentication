// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHeQXvPgpOkmBuvBm6bLX2LQ6KQ9GhTMs",
  authDomain: "react-private-route-d9955.firebaseapp.com",
  projectId: "react-private-route-d9955",
  storageBucket: "react-private-route-d9955.appspot.com",
  messagingSenderId: "801754901841",
  appId: "1:801754901841:web:97d3dd68d7225e91183770",
  measurementId: "G-EFWNL8ZXWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth