import { Brain, Coffee } from "lucide-react";
import { PomodoroContext } from "../context/PomodoroContext";
import { useContext } from "react";

function PomodoroCycle(){

    const {handleCycle, currentCycle} = useContext(PomodoroContext)

    return(
        <div className="flex justify-evenly p-1 bg-[#f9f9f9] shadow-[0_0_20px_rgba(0,0,0,0.10)] ring ring-black/10 min-w-25 h-auto w-75 rounded-full text-[#FF6C6C] font-roboto font-bold text-xs">
            <button onClick={() => handleCycle("pausaCurta")} className={`${currentCycle === "pausaCurta" ? "bg-[#7bb35d] text-[#f9f9f9] " : "" } flex items-center justify-center gap-1 rounded-full w-25 cursor-pointer`}><Coffee className="w-4"/>Pausa curta</button>
            <button onClick={() => handleCycle("foco")} className={`${currentCycle === "foco" ? "bg-[#FF6C6C] text-[#f9f9f9] " : "" } flex items-center justify-center gap-1 rounded-full w-25 cursor-pointer`}><Brain className="w-4"/>Foco</button>
            <button onClick={() => handleCycle("pausaLonga")} className={`${currentCycle === "pausaLonga" ? "bg-[#406E9F] text-[#f9f9f9] " : "" } flex items-center justify-center gap-1 rounded-full w-25 cursor-pointer`}><Coffee className="w-4"/>Pausa longa</button>
        </div>
    );
}

export default PomodoroCycle;