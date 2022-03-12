import React, { useContext } from "react";
import PictureContext from "../context/PictureContext";

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useContext(PictureContext);

  const darkModeToggle = () => {
    setTheme(theme === "light" ? "earth-theme" : "silver-theme");
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={() => darkModeToggle()}
      />
    </div>
  );
};
