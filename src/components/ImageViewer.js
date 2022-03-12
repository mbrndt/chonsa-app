import React, { useContext } from "react";
import PictureContext from "../context/PictureContext";

export function ImageViewer() {
  const { theme } = useContext(PictureContext);
  const earth_mushroom = "../pages/assets/pictures/earth_mushroom.png";
  const lav_clouds = "../pages/assets/pictures/lav_clouds_img.jpg";

  return (
    <img alt="" src={theme === "earth-theme" ? earth_mushroom : lav_clouds} />
  );
}
