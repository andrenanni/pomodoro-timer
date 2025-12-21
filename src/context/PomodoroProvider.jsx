import {useEffect, useState} from "react";
/* import cycleOptions from "../data/CycleOptions"; */
import { PomodoroContext } from "./PomodoroContext";

export function PomodoroProvider({ children }){

  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [currentCycle, setCurrentCycle] = useState("foco");
  const [currentColor, setCurrentColor] = useState('#FF6C6C');
  const [showSetting, setShowSetting] = useState(false);
  const [valueInput, setValueInput] = useState({
    foco: 25,
    pausaCurta: 5,
    pausaLonga: 15,
    ciclos: 4,
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

function valueSetIncrease( type ){
  if (valueInput[type] < 30){
     setValueInput(prev => ({...prev, [type]: prev[type] + 1,}))};
  }

function valueSetDecrease( type ){
if (valueInput[type] > "0"){
  setValueInput(prev => ({...prev, [type]: prev[type] - 1,}))};
}

useEffect(() => {
  const numberInput = valueInput[currentCycle] * 60;
  setTime(numberInput);
}, [valueInput, currentCycle])

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

function handlePlay(){
   setIsRunning(prev => !prev);
}

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      setTime(prev => prev -1);
    }, 1000);

    return () => clearInterval(interval);
}, [isRunning]);

function resetCycle(){
  setIsRunning(false);
  const numberInput = valueInput[currentCycle] * 60;
  setTime(numberInput);
}


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
    seconds,
    valueSetIncrease,
    valueSetDecrease,
    isRunning,
    resetCycle
};

return(
    <PomodoroContext.Provider value={values}>
        {children}
    </PomodoroContext.Provider>
)}