import { React, useState, useEffect } from "react";
import "./NavbarElements.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items">chonsa</li>
            <li className="items">Home</li>
            <li className="items">Journal</li>
            <li className="items">Login</li>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          BTN
        </button>
      </nav>
    </>
  );
};
