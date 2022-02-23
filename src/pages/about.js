import { React } from "react";
import { Button } from "react-bootstrap";
import { Howl, Howler } from "howler";
import BellSound from "/Users/mareikebrandt/Desktop/projekte/react/chonsa_react/chonsa-app/src/pages/assets/Small-bell-ring-sound-effect.mp3";
import "./pages.css";

const About = () => {
  // Setup the new Howl.
  const sound = new Howl({
    src: [BellSound],
  });

  // Play the sound.
  //  sound.play();

  // Change global volume.
  Howler.volume(0.5);

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
        <Button className="collectionButton" onClick={() => sound.play}>
          Hello world!
        </Button>
      </div>
    </div>
  );
};

export default About;
