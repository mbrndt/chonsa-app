import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CogIcon } from "../../pages/assets/icons/CogIcon";
import { Pausebutton } from "../../pages/assets/Pausebutton";
import { Playbutton } from "../../pages/assets/Playbutton";
import { PomSettingsContext } from "../../context/PomSettingsContext";
import("./PomodoroElements.css");

const percentage = 66;

export const Pomodoro = () => {
  const settingsInfo = useContext(PomSettingsContext);

  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState("work"); //work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function switchMode() {
    const nextMode = mode === "work" ? "break" : "work";
    const nextSeconds =
      nextMode === "work"
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
    setMode(nextMode);
    setSecondsLeft(nextSeconds);
  }

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }
  function tick() {
    setSecondsLeft(secondsLeft - 1);
  }

  useEffect(() => {
    initTimer();

    setInterval(() => {
      if (isPaused) {
        return;
      }
      if (secondsLeft === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
  }, [settingsInfo]);

  return (
    <div className="Pomodoro">
      <CircularProgressbar
        className="CircleProgBar"
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "round",
          textSize: "30px",
          pathTransitionDuration: 0.5,
          pathColor: `#cbd0e7`,
          textColor: "#B1B7D1",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />

      <div>
        {isPaused ? (
          <Playbutton onClick={() => toast.success("let's go!")} />
        ) : (
          <Pausebutton onClick={() => toast.success("brakes are on!")} />
        )}

        <CogIcon onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
};
