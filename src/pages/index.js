import React from "react";
import "./pages.css";
import { Pomodoro } from "../components/Pomodoro-Timer/Pomodoro";
import { PomodoroSettings } from "../components/Pomodoro-Timer/PomodoroSettings";
import { useState } from "react";
import { PomSettingsContext } from "../context/PomSettingsContext";

const Home = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(10);
  return (
    <>
      <div id="wrapper">
        <div className="basic-outline">
          {/* grid one: calendar and journal */}
          <div className="grid_1">
            {/* calendar */}
            <div id="calendar">
              <p>calendar</p>
              <div id="calendar-placeholder">
                <img
                  src={require("./assets/pictures/calendar_box.png")}
                  alt=""
                />
              </div>
            </div>
            {/* journal */}
            <div id="journal">
              <p>journal</p>
              <div className="text-box">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam, aenean morbi quisque luctus in habitant elit nibh
                pellentesque. Dignissim ut ultrices euismod nunc cras elementum
                faucibus dolor. Tortor urna sed aliquam velit pulvinar feugiat.
                Amet felis donec pellentesque aliquam.
              </div>
            </div>
          </div>

          <div className="grid_2">
            <div id="task-box">
              task box
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam, aenean morbi quisque luctus in habitant elit nibh
                pellentesque. Dignissim ut ultrices euismod nunc cras elementum
                faucibus dolor. Tortor urna sed aliquam velit pulvinar feugiat.
                Amet felis donec pellentesque aliquam.
              </p>
            </div>
            <div id="cleaning-zone">
              {" "}
              current cleaning zone
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam, aenean morbi quisque luctus in habitant elit nibh
                pellentesque. Dignissim ut ultrices euismod nunc cras elementum
                faucibus dolor. Tortor urna sed aliquam velit pulvinar feugiat.
                Amet felis donec pellentesque aliquam.
              </p>
            </div>
          </div>

          <div className="grid_3">
            <div className="picture">
              <img
                src={require("./assets/pictures/lav_clouds_img.jpg")}
                alt="fireSpot"
              />
            </div>
            <div id="collection-boxes">collection boxes</div>
            <div id="pomodoro-timer">
              <p>pomodoro timer</p>
              <PomSettingsContext.Provider
                value={{
                  showSettings,
                  setShowSettings,
                  workMinutes,
                  breakMinutes,
                  setWorkMinutes,
                  setBreakMinutes,
                }}
              >
                {showSettings ? <PomodoroSettings /> : <Pomodoro />}
              </PomSettingsContext.Provider>
            </div>
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
