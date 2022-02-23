import React from "react";
import mp3 from "/Users/mareikebrandt/Desktop/projekte/react/chonsa_react/chonsa-app/src/pages/assets/Small-bell-ring-sound-effect.mp3";

export const Audio = () => {
  return (
    <div>
      <audio className="audio-element" url={mp3}></audio>
    </div>
  );
};
