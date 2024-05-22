// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFwP-6LX7TesUDiFah1ZozVFJZUpTxi6s",
  authDomain: "netflixgpt-dca27.firebaseapp.com",
  projectId: "netflixgpt-dca27",
  storageBucket: "netflixgpt-dca27.appspot.com",
  messagingSenderId: "192264539031",
  appId: "1:192264539031:web:650e8063db5e969b2c12d2",
  measurementId: "G-6H8JLN6935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();