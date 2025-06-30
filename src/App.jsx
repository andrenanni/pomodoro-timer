import { useState } from 'react'
import './App.css'
import Footer from './Components/footer'
import Timer from './Components/Timer'
import Buttons from './Components/Buttons';
import PomodoroCycle from './Components/PomodoroCycle';

function App() {

  const [time, setTime] = useState(1500);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='w-screen h-screen bg-[#FF6C6C] flex justify-center items-center flex-col gap-2'>
      <PomodoroCycle></PomodoroCycle>
      <div className="w-[340px] h-[383px] bg-[#f9f9f9] rounded-4xl flex flex-col justify-evenly p-6">
        <Timer
          minutes={String(minutes).padStart(2, '0')}
          seconds={String(seconds).padStart(2, '0')}
        />
        <Buttons></Buttons>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
