import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { Heartbutton } from "../pages/assets/Heartbutton";
import moment from "moment";
import "../styles/Tracker.css";

export const MoodTracker = () => {
  const [currentMood, setcurrentMood] = useState("");

  const moodCollectionRef = collection(db, "moodTracker");
  const currentDateTime = moment().unix();

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
            className={{ currentMood }}
            disabled
            // styles={{
            //   backgroundColour: { currentMood } === "happy" ? `black` : "white",
            // }}
          ></Heartbutton>
          <p>today:</p>
          {currentMood}
        </button>

        <div className="trackerbox moodselect">
          <button className="main">
            <Heartbutton
              className="happy"
              onClick={() => {
                setcurrentMood("happy");
                saveMood();
              }}
            />
            happy
          </button>

          <button className="main">
            <Heartbutton
              className="sad"
              onClick={() => {
                setcurrentMood("sad");
                saveMood();
              }}
            ></Heartbutton>
            sad
          </button>

          <button className="main">
            <Heartbutton
              className="grumpy"
              onClick={() => {
                setcurrentMood("grumpy");
                saveMood();
              }}
            />
            grumpy
          </button>
          <button className="main">
            <Heartbutton
              label="happy"
              className="neutral"
              onClick={() => {
                setcurrentMood("neutral");
                saveMood();
              }}
            />
            neutral
          </button>

          <button className="main">
            <Heartbutton
              className="exited"
              onClick={() => {
                setcurrentMood("exited");
                saveMood();
              }}
            />
            excited
          </button>
        </div>
      </div>
    </div>
  );
};
