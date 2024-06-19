// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default app;