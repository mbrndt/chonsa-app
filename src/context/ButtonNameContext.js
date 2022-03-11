import react from "react";
import { Heartbutton } from "../pages/assets/Heartbutton";

export const ButtonNameContext = react.createContext();

export default function Moodtracker() {
  return (
    <ButtonNameContext.Provider value="Reed">
      <Heartbutton />
    </ButtonNameContext.Provider>
  );
}

function ButtonName() {
  return (
    <ButtonName.Consumer>
      {(value) => <h1>{value}</h1>}
      {/* prints: Reed */}
    </ButtonName.Consumer>
  );
}

// import { MoodTracker } from "../components/MoodTracker";
// import { Heartbutton } from "../pages/assets/Heartbutton";

// export function ButtonNameContext() {
//   const [buttonName, setButtonName] = createContext("");
//   return (
//     <div className="ButtonNameContext">
//       <ButtonNameContext.Provider value={{ buttonName, setButtonName }}>
//         {<MoodTracker />}
//         {<Heartbutton />}
//       </ButtonNameContext.Provider>
//     </div>
//   );
// }
