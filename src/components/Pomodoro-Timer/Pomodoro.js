import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CogIcon } from "../../pages/assets/icons/CogIcon";
import { Pausebutton } from "../../pages/assets/Pausebutton";
import { Playbutton } from "../../pages/assets/Playbutton";
import { PomSettingsContext } from "../../context/PomSettingsContext";
import("./PomodoroElements.css");

export const Pomodoro = () => {
  const settingsInfo = useContext(PomSettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("break"); //work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      nextMode === "work"
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function initTimer() {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  }
  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 100);
    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="Pomodoro">
      <div>
        <p>
          {mode === "work"
            ? `time to concentrate! `
            : "good job! break time is over in:"}
        </p>
      </div>
      <CircularProgressbar
        className="CircleProgBar"
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "round",
          textSize: "30px",
          pathTransitionDuration: 0.5,
          pathColor: mode === "work" ? `#cbd0e7` : "#9B9FB5",
          textColor: mode === "work" ? "#B1B7D1" : "#8C7284",
          trailColor: mode === "work" ? `#d6d6d6` : "#8C7284",
          backgroundColor: "#3e98c7",
        })}
      />

      <div>
        {isPaused ? (
          <Playbutton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
              toast.success("let's go!");
            }}
          />
        ) : (
          <Pausebutton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
              toast.success("paused!");
            }}
          />
        )}

        <CogIcon onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
    </div>
  );
};
