import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Timer from './components/Timer'
import Buttons from './components/Buttons';
import PomodoroCycle from './components/PomodoroCycle';
import cycleOptions from './data/CycleOptions';
import ModalSettings from './components/ModalSettings';

function App() {

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

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-2" style={{backgroundColor: currentColor}}>
      
      <ModalSettings showSetting={showSetting} valueInput={valueInput} setValueInput={setValueInput} onClose={ () => setShowSetting(false)}/>

      <PomodoroCycle currentCycle={currentCycle}/>

      <div className="w-[340px] h-max-[383px] bg-[#f9f9f9] rounded-4xl flex flex-col justify-evenly p-6 shadow-[0_0_20px_rgba(0,0,0,0.20)]">
        <Timer
          minutes={String(minutes).padStart(2, '0')}
          seconds={String(seconds).padStart(2, '0')}
        />
        <Buttons onCycle={handleCycle} onSetting={handleSetting} onPlay={handlePlay}/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
