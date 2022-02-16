import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import { Toaster } from "react-hot-toast";

function App() {
  //

  return (
    <div id="holder">
      <Router>
        {/* Navbar Begin */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/signin" element={<SignIn />} />

          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

        {/* // Navbar End */}
        <Toaster />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
