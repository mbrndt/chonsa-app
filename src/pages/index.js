//css
import "./pages.css";
//react, martine
import { Link } from "react-router-dom";
import { React, useState } from "react";
import { Button, Container } from "@mantine/core";
// context
import { PomSettingsContext } from "../context/PomSettingsContext";
// components
import { Pomodoro } from "../components/Pomodoro-Timer/Pomodoro";
import { PomodoroSettings } from "../components/Pomodoro-Timer/PomodoroSettings";
import JournalQuill from "../components/journal";
import { CalendarComp } from "../components/Calendar";
import { CollectionBoxes } from "../components/CollectionBoxes";
import { WaterTracker } from "../components/WaterTracker";
import { MoodTracker } from "../components/MoodTracker";
import { Taskbox } from "./Taskbox";
//
//

const Home = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(10);
  return (
    <>
      <div className="basic-outline">
        {/* grid one: calendar and journal */}
        <div className="grid_1">
          {/* calendar */}
          <div className="calendar">
            <p>calendar</p>
            <div id="calendar--comp">
              <CalendarComp />
            </div>
            <Button style={{ marginRight: 10 }} variant="light" radius="xl">
              create new
            </Button>

            <Button
              style={{ marginLeft: 10, marginBottom: 10 }}
              variant="light"
              radius="xl"
            >
              open calendar
            </Button>
          </div>
          {/* journal */}
          <div id="journal">
            <p>journal</p>
            <div className="text-box">
              <JournalQuill />

              <Button style={{ marginRight: 10 }} variant="light" radius="xl">
                save
              </Button>

              {/* <JournalPage /> */}

              <Button
                component={Link}
                to="src/pages/JournalPage.js"
                style={{ marginLeft: 10, marginBottom: 10 }}
                variant="light"
                radius="xl"
              >
                see older posts
              </Button>
            </div>
          </div>
        </div>

        <div className="grid_2">
          <div id="task-box">
            <p> task box</p>

            <div>
              <Container>
                <Taskbox />
              </Container>
            </div>
          </div>
          <div id="cleaning-zone">
            {" "}
            current cleaning zone
            <p></p>
          </div>
        </div>

        <div className="grid_3">
          <div className="picture">
            <img
              src={require("./assets/pictures/lav_clouds_img.jpg")}
              alt="fireSpot"
            />
          </div>
          <div id="collection-boxes">
            <p>collection boxes</p>
            <CollectionBoxes />
          </div>
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
          <div id="mood-tracker">
            <p>mood tracker</p>
            <MoodTracker />
          </div>
          <div id="water-tracker">
            <p>water tracker</p>
            <WaterTracker />
          </div>
          <div className="picture">
            <img
              src={require("./assets/pictures/lav_desktop_img.jpg")}
              alt="fireSpot"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
