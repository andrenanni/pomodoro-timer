import {useState} from "react";
import cycleOptions from "../data/CycleOptions";
import { PomodoroContext } from "./PomodoroContext";

export function PomodoroProvider({ children }){

  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(1500);
  const [currentCycle, setCurrentCycle] = useState("foco");
  const [currentColor, setCurrentColor] = useState('#FF6C6C');
  const [showSetting, setShowSetting] = useState(true);
  const [valueInput, setValueInput] = useState({
    pomodoro: 25,
    pausaCurta: 5,
    pausaLonga: 15,
    ciclos: 25,
  });

function handleCycle(currentCycle){
  if (currentCycle === "pausaCurta"){
    setCurrentColor('#7bb35d')
    setCurrentCycle(currentCycle)
  }
  if (currentCycle === "foco"){
    setCurrentColor('#FF6C6C')
    setCurrentCycle(currentCycle)
  }
  if (currentCycle === "pausaLonga"){
    setCurrentColor('#406E9F')
    setCurrentCycle(currentCycle)
  }
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

