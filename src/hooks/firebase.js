// firebase.js
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb0nDIaMifiuWpYSc8pbyL0pvXRMnnrqs",
  authDomain: "react-firebase-9257e.firebaseapp.com",
  projectId: "react-firebase-9257e",
  storageBucket: "react-firebase-9257e.appspot.com",
  messagingSenderId: "550233614719",
  appId: "1:550233614719:web:00170d4c02529f39c9124a",
  measurementId: "G-ZQG2P91DGG",
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database();

export default firebase;
