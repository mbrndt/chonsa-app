import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA94A-V1M_v_-8_YUQt1wKGRsrVf-d4sdM",
  authDomain: "chonsa-fa80a.firebaseapp.com",
  projectId: "chonsa-fa80a",
  storageBucket: "chonsa-fa80a.appspot.com",
  messagingSenderId: "959581817428",
  appId: "1:959581817428:web:d5f6898980d328cff6bbc1",
  measurementId: "G-L3W88YZZX3",
  //...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
    })
    .catch((error) => {
      console.log(error);
    });
};
