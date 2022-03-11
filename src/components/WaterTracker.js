import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { Cloudbutton } from "../pages/assets/Cloudbutton";
import moment from "moment";

export const WaterTracker = () => {
  const [waterIntake, setWaterIntake] = useState(true);
  const [button1Pushed, setButton1Pushed] = useState(false);
  const [button2Pushed, setButton2Pushed] = useState(false);
  const [button3Pushed, setButton3Pushed] = useState(false);
  const [button4Pushed, setButton4Pushed] = useState(false);
  const [button5Pushed, setButton5Pushed] = useState(false);

  const waterCollectionRef = collection(db, "waterTracker");
  const currentDateTime = moment().unix();

  var midnight = new Date();
  midnight.setHours(24, 0, 0, 0); //midnignt

  var timeTilMidnight = midnight.getTime() - Date.now();

  const saveWater = () => {
    addDoc(waterCollectionRef, {
      waterIntake,
      currentDateTime,
    });
    toast.success("*gulp gulp*");
  };

  return (
    <div>
      <div className="trackerbox">
        <Cloudbutton
          disabled={button1Pushed}
          onClick={() => {
            setButton1Pushed(true);
            setWaterIntake(true);
            saveWater();
            setTimeout(setButton1Pushed, timeTilMidnight);
          }}
        />
        <Cloudbutton
          disabled={button2Pushed}
          onClick={() => {
            setButton2Pushed(true);
            setWaterIntake(true);
            saveWater();
            setTimeout(setButton2Pushed, timeTilMidnight);
          }}
        />
        <Cloudbutton
          disabled={button3Pushed}
          onClick={() => {
            setButton3Pushed(true);
            setWaterIntake(true);

            saveWater();
            setTimeout(setButton3Pushed, timeTilMidnight);
          }}
        />
        <Cloudbutton
          disabled={button4Pushed}
          onClick={() => {
            setButton4Pushed(true);
            setWaterIntake(true);
            saveWater();
            setTimeout(setButton4Pushed, timeTilMidnight);
          }}
        />
        <Cloudbutton
          disabled={button5Pushed}
          onClick={() => {
            setButton5Pushed(true);
            setWaterIntake(true);
            saveWater();
            setTimeout(setButton5Pushed, timeTilMidnight);
          }}
        />
      </div>
    </div>
  );
};
