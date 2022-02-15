import React from "react";
import "./pages.css";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";

export default function signup() {
  return (
    <div>
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
      <Loader />
    </div>
  );
}
