import { Toaster } from "react-hot-toast";
// react
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages routing
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import { JournalPage } from "./pages/JournalPage";
import { RecipeCollection } from "./pages/CollectionPages/RecipesCollection";
import { StudyNotes } from "./pages/CollectionPages/StudyNotes";
import { GeneralNotes } from "./pages/CollectionPages/GeneralNotes";
import { BookCollection } from "./pages/CollectionPages/BookCollection";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login.js";
// components
import { Header } from "./components/Navbar/Header";

import "./App.css";
function App() {
  //
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div id="holder">
      <Router>
        <Header />
        <Routes>
          <Route path="*" exact element={<PageNotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

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
