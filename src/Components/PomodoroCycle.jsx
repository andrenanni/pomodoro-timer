import { Brain, Coffee } from "lucide-react";

function PomodoroCycle({currentCycle}){
    return(
        <div className="flex items-center justify-center p-2 gap-1 bg-[#f9f9f9] ring ring-black/10 min-w-25 rounded-full text-[#FF6C6C] font-roboto font-bold"><Brain></Brain>{currentCycle}</div>
    );
}

export default PomodoroCycle;