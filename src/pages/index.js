import React from "react";
import "./pages.css";

const Home = () => {
  return (
    <>
      <div id="wrapper">
        <div className="home">
          {/* grid one: calendar and journal */}
          <div className="grid_1">
            {/* calendar */}
            <div id="calendar">
              <p>calendar</p>
              <div id="calendar-placeholder"></div>
              <img src={require("./assets/pictures/calendar_box.png")} alt="" />
            </div>
            {/* journal */}
            <div id="journal">
              <p>journal</p>
            </div>
          </div>

          <div className="grid_2">
            <div id="task-box">task box</div>
            <div id="cleaning-zone"> current cleaning zone</div>
          </div>

          <div className="grid_3">
            <div className="picture">
              <img
                src={require("./assets/pictures/lav_clouds_img.jpg")}
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
                src={require("./assets/pictures/lav_desktop_img.jpg")}
                alt="fireSpot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
