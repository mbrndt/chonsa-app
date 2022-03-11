import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { Heartbutton } from "../pages/assets/Heartbutton";
import moment from "moment";
import { useContext } from "react";
import { ButtonNameContext } from "../context/ButtonNameContext";
import "../styles/Tracker.css";

export const MoodTracker = () => {
  const setButtonName = ButtonNameContext;

  const [currentMood, setcurrentMood] = useState("");

  const [button1Pushed, setButton1Pushed] = useState(false);
  const [button2Pushed, setButton2Pushed] = useState(false);
  const [button3Pushed, setButton3Pushed] = useState(false);
  const [button4Pushed, setButton4Pushed] = useState(false);
  const [button5Pushed, setButton5Pushed] = useState(false);

  const moodCollectionRef = collection(db, "moodTracker");
  const currentDateTime = moment().unix();

  var midnight = new Date();
  midnight.setHours(24, 0, 0, 0); //midnignt

  var timeTilMidnight = midnight.getTime() - Date.now();

  const saveMood = () => {
    addDoc(moodCollectionRef, {
      currentMood,
      currentDateTime,
    });
    toast.success("*heart*");
  };

  return (
    <div className="trackerbox buttons">
      <div className="trackerbox heartbutton">
        <button className="main">
          <Heartbutton
            disabled
            styles={{
              backgroundColour: currentMood === "happy" ? `#d6d6d6` : "#8C7284",
            }}
          ></Heartbutton>
          today
        </button>

        <div className="trackerbox moodselect">
          <button className="main">
            <Heartbutton
              className="happy"
              disabled={button1Pushed}
              onClick={() => {
                setButton1Pushed(true);
                setcurrentMood("happy");
                saveMood();
                setTimeout(setButton1Pushed, timeTilMidnight);
                setButtonName("happy");
              }}
            />
            happy
          </button>

          <button className="main">
            <Heartbutton
              className="sad"
              disabled={button2Pushed}
              onClick={() => {
                setButton2Pushed(true);
                setcurrentMood("sad");
                saveMood();
                setTimeout(setButton2Pushed, timeTilMidnight);
              }}
            ></Heartbutton>
            sad
          </button>

          <button className="main">
            <Heartbutton
              className="grumpy"
              disabled={button3Pushed}
              onClick={() => {
                setButton3Pushed(true);
                setcurrentMood("emotion3");
                saveMood();
                setTimeout(setButton3Pushed, timeTilMidnight);
              }}
            />
            grumpy
          </button>
          <button className="main">
            <Heartbutton
              label="happy"
              className="neutral"
              disabled={button4Pushed}
              onClick={() => {
                setButton4Pushed(true);
                setcurrentMood("emotion4");
                saveMood();
                setTimeout(setButton4Pushed, timeTilMidnight);
              }}
            />
            neutral
          </button>

          <button className="main">
            <Heartbutton
              className="exited"
              disabled={button5Pushed}
              onClick={() => {
                setButton5Pushed(true);
                setcurrentMood("emotion5");
                saveMood();
                setTimeout(setButton5Pushed, timeTilMidnight);
              }}
            />
            excited
          </button>
        </div>
      </div>
    </div>
  );
};
