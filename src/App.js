import { Toaster } from "react-hot-toast";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/CollectionPages/Pages";
// react
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import CreatePost from "./pages/CreatePost";

function App() {
  //
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div id="holder">
      <Router>
        <Header />
        <nav>
          {!isAuth ? (
            <Link to="/login"> Login </Link>
          ) : (
            <>
              <Link to="/createpost"> Create Post </Link>
              <button onClick={signUserOut}> Log Out</button>
            </>
          )}
        </nav>

        <Routes>
          <Route
            path="/createpost"
            exact
            element={<CreatePost isAuth={isAuth} />}
          />

          <Route path="*" exact element={<PageNotFound />} />
          <Route path="/" exact element={<Home isAuth={isAuth} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

          <Route
            path="src/pages/JournalPage.js"
            element={<JournalPage isAuth={isAuth} />}
          />
          {/* collection pages */}
          <Route
            path="src/pages/CollectionPages/BookCollection.js"
            element={<BookCollection isAuth={isAuth} />}
          />

          <Route
            path="src/pages/CollectionPages/GeneralNotes.js"
            element={<GeneralNotes isAuth={isAuth} />}
          />

          <Route
            path="src/pages/CollectionPages/RecipesCollection.js"
            element={<RecipeCollection isAuth={isAuth} />}
          />

          <Route
            path="src/pages/CollectionPages/StudyNotes.js"
            element={<StudyNotes isAuth={isAuth} />}
          />
        </Routes>

        <Category />
        <Search />
        <Pages />
      </Router>

      <Toaster />
    </div>
  );
}

export default App;
