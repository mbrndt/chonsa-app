import { createContext } from "react";

const PictureContext = createContext({
  theme: "silver",
  setTheme: (theme) => {},
});

export default PictureContext;
