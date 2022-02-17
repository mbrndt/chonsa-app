import React from "react";
import { signInWithGoogle } from "../firebase";
import "./pages.css";
import Loader from "../components/Loader";

function SignIn() {
  return (
    <>
      <div className="signin-outline">
        <div className="grid_1">
          {/* SignUp */}
          <div id="signin-box">
            <p>SignIn</p>
            <div id="sns-auth">
              <p>or sign in with google:</p>
              <button onClick={signInWithGoogle}>Google</button>
            </div>
            <div id="signIn-box"></div>
          </div>
          <Loader />

          {/* SignIn */}
          <div id="signup-box">
            <p>SignUp</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
