// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp7PHJqdVkVOCPtsbC49PUJtcubHrkotM",
  authDomain: "fireship-demo-a5b9d.firebaseapp.com",
  projectId: "fireship-demo-a5b9d",
  storageBucket: "fireship-demo-a5b9d.appspot.com",
  messagingSenderId: "94536361621",
  appId: "1:94536361621:web:6224e73d9fa1bbb95f5d9c",
  measurementId: "G-9H4JXGJCCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

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
