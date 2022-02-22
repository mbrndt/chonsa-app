import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import { Toaster } from "react-hot-toast";
import { JournalPage } from "./pages/JournalPage";
import { RecipeCollection } from "./pages/CollectionPages/RecipesCollection";
import { StudyNotes } from "./pages/CollectionPages/StudyNotes";
import { GeneralNotes } from "./pages/CollectionPages/GeneralNotes";
import { BookCollection } from "./pages/CollectionPages/BookCollection";
import { Header } from "./components/Navbar/Header";

function App() {
  //

  return (
    <div id="holder">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="src/pages/JournalPage.js" element={<JournalPage />} />
          {/* collection pages */}
          <Route
            path="src/pages/CollectionPages/BookCollection.js"
            element={<BookCollection />}
          />

          <Route
            path="src/pages/CollectionPages/GeneralNotes.js"
            element={<GeneralNotes />}
          />

          <Route
            path="src/pages/CollectionPages/RecipesCollection.js"
            element={<RecipeCollection />}
          />

          <Route
            path="src/pages/CollectionPages/StudyNotes.js"
            element={<StudyNotes />}
          />
        </Routes>

        <Toaster />
      </Router>
    </div>
  );
}

export default App;
