import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Modal, Button, Group } from "@mantine/core";

import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

import { Logout } from "../Logout";

export const Header = () => {
  // useNavigate
  const history = useNavigate();
  //
  // useState
  const [menuOpen, setMenuOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const [isAuth, setIsAuth] = useState(false);
  //
  // useEffect
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);
  //
  // functions

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/page-cta");
  };

  //

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          chonsa
        </Link>
        {/* {!isAuth ? (
          <Link to="/login" onClick={menuToggleHandler}>
            login
          </Link>
        ) : (
          <Logout />
        )} */}
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="src/pages/JournalPage.js" onClick={menuToggleHandler}>
                journal
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={menuToggleHandler}>
                about
              </Link>
            </li>
            <li>
              {isAuth ? (
                <Logout />
              ) : (
                <Link to="/login" onClick={menuToggleHandler}>
                  login
                </Link>
              )}
            </li>
            <li> logged in as {user?.email}</li>
          </ul>
          <ul>
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="change the theme here:"
            >
              <Button
                id="hero-btn1"
                variant="primary"
                onClick={() =>
                  document.body.setAttribute("data-theme", "light-theme")
                }
              >
                lavender
              </Button>
              <Button
                id="hero-btn2"
                variant="secondary"
                onClick={() =>
                  document.body.setAttribute("data-theme", "translucent-theme")
                }
              >
                translucent
              </Button>
              <Button
                id="hero-btn3"
                variant="success"
                onClick={() =>
                  document.body.setAttribute("data-theme", "earth-theme")
                }
              >
                earth{" "}
              </Button>
            </Modal>
            <Group position="center">
              <Button onClick={() => setOpened(true)}>change theme</Button>
            </Group>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};
