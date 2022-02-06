import React from "react";
import "./pages.css";

function SignIn() {
  return (
    <>
      <div className="signin-outline">
        <div className="grid_1">
          {/* SignUp */}
          <div id="signin-box">
            <p>SignIn</p>
            <div id="sns-auth">
              <p>or using these:</p>
              <p>icon icon icon</p>
            </div>
            <div id="signIn-box"></div>
          </div>

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
