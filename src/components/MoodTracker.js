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
        <Heartbutton>today</Heartbutton>

        <div className="trackerbox moodselect">
          <Heartbutton
            className="heartbutton"
            disabled={button1Pushed}
            onClick={() => {
              setButton1Pushed(true);
              setcurrentMood("happy");
              saveMood();
              setTimeout(setButton1Pushed, timeTilMidnight);
              setButtonName("happy");
            }}
          />

          <Heartbutton
            className="heartbutton"
            disabled={button2Pushed}
            onClick={() => {
              setButton2Pushed(true);
              setcurrentMood("sad");
              saveMood();
              setTimeout(setButton2Pushed, timeTilMidnight);
            }}
          >
            today
          </Heartbutton>

          <Heartbutton
            className="heartbutton"
            disabled={button3Pushed}
            onClick={() => {
              setButton3Pushed(true);
              setcurrentMood("emotion3");
              saveMood();
              setTimeout(setButton3Pushed, timeTilMidnight);
            }}
          />

          <Heartbutton
            label="happy"
            className="heartbutton"
            disabled={button4Pushed}
            onClick={() => {
              setButton4Pushed(true);
              setcurrentMood("emotion4");
              saveMood();
              setTimeout(setButton4Pushed, timeTilMidnight);
            }}
          />

          <Heartbutton
            className="heartbutton"
            disabled={button5Pushed}
            onClick={() => {
              setButton5Pushed(true);
              setcurrentMood("emotion5");
              saveMood();
              setTimeout(setButton5Pushed, timeTilMidnight);
            }}
          />
        </div>
      </div>
    </div>
  );
};
