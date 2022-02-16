import React from "react";
import { Button } from "@mantine/core";

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
      </div>
    </div>
  );
};

export default About;
