// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcemZS9O8LY4fkv-dBPtPrlIB0I0bo4OY",
  authDomain: "flippage-8cb0f.firebaseapp.com",
  projectId: "flippage-8cb0f",
  storageBucket: "flippage-8cb0f.appspot.com",
  messagingSenderId: "1023345316487",
  appId: "1:1023345316487:web:0961a4ca891881979c1e22",
  measurementId: "G-42MK85L2XE"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();