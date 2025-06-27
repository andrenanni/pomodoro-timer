import { useState } from 'react'
import './App.css'
import Footer from './Components/footer'
import Timer from './Components/Timer'

function App() {

  const [time, setTime] = useState(1500);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='w-screen h-screen bg-[#FF6C6C] flex flex-col justify-center items-center'>
      <Timer
        minutes={String(minutes).padStart(2, '0')}
        seconds={String(seconds).padStart(2, '0')}
      
      />
      <Footer></Footer>
    </div>
  )
}

export default App
