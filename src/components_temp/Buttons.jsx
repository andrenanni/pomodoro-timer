import { Play, Settings, RotateCcw, Pause } from "lucide-react";
import { useContext } from "react";
import { PomodoroContext } from "../context/PomodoroContext";

function Buttons({ onCycle, onSetting, onPlay }){

const {currentColor, isRunning} = useContext(PomodoroContext)

console.log(isRunning);

    return(
        <div className="flex items-center justify-center gap-5" style={{color: currentColor }}>
            <button onClick={onCycle} className="bg-[#f4f4f4] rounded-full w-[47px] h-[47px] flex justify-center items-center cursor-pointer"><RotateCcw/></button>
            <button onClick={onPlay} className="bg-[#f4f4f4] rounded-full w-[57px] h-[57px] flex justify-center items-center cursor-pointer">{isRunning ? <Pause className="fill-current"/> : <Play className="fill-current"/>}</button>
            <button onClick={onSetting} disabled={isRunning} title={isRunning ? "Pause o contador" : ""} className={` ${isRunning ? "text-gray-300" : "cursor-pointer"} bg-[#f4f4f4] rounded-full w-[47px] h-[47px] flex justify-center items-center`}><Settings/></button>
        </div>
    );

    
}

export default Buttons;