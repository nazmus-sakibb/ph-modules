// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoar2GHMhuVoBV2i0gX-jnd1mb1QwgPD0",
  authDomain: "email-pass-auth1.firebaseapp.com",
  projectId: "email-pass-auth1",
  storageBucket: "email-pass-auth1.appspot.com",
  messagingSenderId: "348332816843",
  appId: "1:348332816843:web:e5bd420ba650812b651e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;