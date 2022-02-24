import React from "react";
import "../styles/login.css";

export const Login = () => {
  return (
    <div className="loginPage">
      <div className="cpContainer">
        <div className="inputGp createUser">
          <h3> Register User</h3>
          <input placeholder="Email..." />
          <input placeholder="Password..." />
          <button>Create User</button>
        </div>

        <div className="inputGp login">
          <h3> Login</h3>
          <input placeholder="Email..." />
          <input placeholder="Password..." />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
