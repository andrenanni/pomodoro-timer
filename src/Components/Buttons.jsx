import { Play, Ellipsis, ChevronsRight } from "lucide-react";

function Buttons({ onCycle, onSetting, onPlay }){
    return(
        <div className="flex items-center justify-center gap-5">
            <button onClick={onSetting} className="bg-[#e6e6e6] rounded-full w-[47px] h-[47px] flex justify-center items-center cursor-pointer"><Ellipsis/></button>
            <button onClick={onPlay} className="bg-[#d9d9d9] rounded-full w-[57px] h-[57px] flex justify-center items-center cursor-pointer"><Play className="fill-current"/></button>
            <button onClick={onCycle} className="bg-[#e6e6e6] rounded-full w-[47px] h-[47px] flex justify-center items-center cursor-pointer"><ChevronsRight/></button>
        </div>
    );
}

export default Buttons;