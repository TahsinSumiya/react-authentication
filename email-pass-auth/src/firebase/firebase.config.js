// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlLUqDo3LPsXTISKgaG5Y1D85hMjSP5c",
  authDomain: "simplefirebase-a1657.firebaseapp.com",
  projectId: "simplefirebase-a1657",
  storageBucket: "simplefirebase-a1657.appspot.com",
  messagingSenderId: "807961014017",
  appId: "1:807961014017:web:cee0abb000c286d5597500",
  measurementId: "G-02JLS58CVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
