import React from "react";
import { Button } from "@mantine/core";
import JournalQuill from "../components/journal";

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
        <Button>Hello world!</Button>
        <JournalQuill />
      </div>
    </div>
  );
};

export default About;
