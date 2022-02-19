import { React } from "react";
import { Button } from "react-bootstrap";
import JournalQuill from "../components/journal";
import "./pages.css";
import { db } from "/Users/mareikebrandt/Desktop/projekte/react/chonsa_react/chonsa-app/src/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitati
          onem, totam.
        </h1>
        <Button className="collectionButton">Hello world!</Button>
      </div>
    </div>
  );
};

export default About;
