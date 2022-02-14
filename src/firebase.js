import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig ={
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA94A-V1M_v_-8_YUQt1wKGRsrVf-d4sdM",
  authDomain: "chonsa-fa80a.firebaseapp.com",
  projectId: "chonsa-fa80a",
  storageBucket: "chonsa-fa80a.appspot.com",
  messagingSenderId: "959581817428",
  appId: "1:959581817428:web:d5f6898980d328cff6bbc1",
  measurementId: "G-L3W88YZZX3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
