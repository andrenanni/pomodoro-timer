import {useState} from "react";
import cycleOptions from "../data/CycleOptions";
import { PomodoroContext } from "./PomodoroContext";

export function PomodoroProvider({ children }){

  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(1500);
  const [currentCycle, setCurrentCycle] = useState("Foco");
  const [currentColor, setCurrentColor] = useState('#FF6C6C');
  const [showSetting, setShowSetting] = useState(false);
  const [valueInput, setValueInput] = useState({
    pomodoro: 25,
    pausaCurta: 5,
    pausaLonga: 15,
    ciclos: 25,
  });

function handleCycle(){
  const cycleIndex = cycleOptions.findIndex(cycle => cycle.label === currentCycle);
  let cycle = cycleIndex + 1;
  cycle > 2 ? cycle = 0 : null
  setCurrentCycle(cycleOptions[cycle].label)
  setCurrentColor(cycleOptions[cycle].color)
}

function handleSetting(){
   setShowSetting(true);
}

function handlePlay(){
   console.log("Hello World play")
}

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

const values = {
    time,
    setTime,
    currentCycle,
    setCurrentCycle,
    currentColor,
    setCurrentColor,
    showSetting,
    setShowSetting,
    valueInput,
    setValueInput,
    darkMode,
    setDarkMode,
    handleCycle,
    handleSetting,
    handlePlay,
    minutes,
    seconds
};

return(
    <PomodoroContext.Provider value={values}>
        {children}
    </PomodoroContext.Provider>
)}

