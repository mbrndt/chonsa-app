import { useContext } from "react";
import ReactSlider from "react-slider";
import { PomSettingsContext } from "../../context/PomSettingsContext";
import { Backbutton } from "../../pages/assets/Backbutton";
import "./PomodoroElements.css";

export const PomodoroSettings = () => {
  const settingsInfo = useContext(PomSettingsContext);
  return (
    <div className="PomSettings">
      <div>
        <label>work minutes: {settingsInfo.workMinutes}:00</label>
        <ReactSlider
          className={"slider"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          min={"1"}
          max={"120"}
        />
        <label>break minutes: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider
          className={"slider break"}
          thumbClassName={"thumb"}
          trackClassName={"track"}
          value={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          min={"1"}
          max={"120"}
        />
        <div className="Backbutton">
          <Backbutton onClick={() => settingsInfo.setShowSettings(false)} />
        </div>
      </div>
    </div>
  );
};
