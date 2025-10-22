import './App.css'
import Footer from './components/footer'
import Timer from './components/Timer'
import Buttons from './components/Buttons';
import PomodoroCycle from './components/PomodoroCycle';
import ModalSettings from './components/ModalSettings';
import { PomodoroContext } from './context/PomodoroContext';
import { useContext } from 'react';

function App() {

  const {showSetting, valueInput, setValueInput, setShowSetting, currentCycle, handleCycle, handleSetting, handlePlay, currentColor, minutes, seconds} = useContext(PomodoroContext);

  console.log(showSetting);

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
