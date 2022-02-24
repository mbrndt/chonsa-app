import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const Logout = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return <button onClick={logout}> Sign Out</button>;
};
