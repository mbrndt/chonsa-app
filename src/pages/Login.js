import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "../styles/login.css";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuth }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //  sign in options

  // register with email and password
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  // login
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  // google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  // logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="loginPage">
      <div className="cpContainer">
        <div className="inputGp login">
          <h3> Login</h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}>Login</button>
        </div>

        <div className="LoginSNS">
          <h3>Or sign in using these:</h3>

          <button
            className="login-with-google-btn"
            onClick={signInWithGoogle}
          ></button>
          <h5>google</h5>
        </div>

        <div className="inputGp createUser">
          <h3> Register User</h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}>Create User</button>
        </div>

        <h4> User Logged In:</h4>
        {user?.email}

        <button onClick={logout}> Sign Out</button>
      </div>
    </div>
  );
};
