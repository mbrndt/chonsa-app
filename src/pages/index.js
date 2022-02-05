import React from "react";
import "./pages.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="grid_1">
          <div id="calendar">calendar</div>
          <div id="journal">journal</div>
        </div>

        <div className="grid_2">
          <div id="task-box">task box</div>
          <div id="cleaning-zone"> current cleaning zone</div>
        </div>

        <div className="grid_3">
          <div className="picture">
            <img
              src={require("./pictures/lav_clouds_img.jpg")}
              alt="fireSpot"
            />
          </div>
          <div id="collection-boxes">collection boxes</div>
          <div id="pomodoro-timer">pomodoro timer</div>
        </div>

        <div className="grid_4">
          <div id="mood-tracker">mood tracker</div>
          <div id="water-tracker">water tracker</div>
          <div className="picture">
            <img
              src={require("./pictures/lav_desktop_img.jpg")}
              alt="fireSpot"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
