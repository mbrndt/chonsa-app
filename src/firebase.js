// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA94A-V1M_v_-8_YUQt1wKGRsrVf-d4sdM",
  authDomain: "chonsa-fa80a.firebaseapp.com",
  projectId: "chonsa-fa80a",
  storageBucket: "chonsa-fa80a.appspot.com",
  messagingSenderId: "959581817428",
  appId: "1:959581817428:web:d5f6898980d328cff6bbc1",
  measurementId: "G-L3W88YZZX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
    })
    .catch((error) => {
      console.log(error);
    });
};
