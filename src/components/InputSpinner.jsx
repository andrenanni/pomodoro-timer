import { Triangle } from "lucide-react";
import { useContext } from "react";
import { PomodoroContext } from "../context/PomodoroContext";

function InputSpinner({type}) {

const {valueInput, valueSetIncrease, valueSetDecrease} = useContext(PomodoroContext)

return(
        <div className="bg-white h-10 flex justify-between items-center">
            <div className="flex border-1 h-full w-18 items-center justify-center rounded-l-xl">{valueInput[type]}</div>
            <div className="flex flex-col justify-evenly rounded-r-xl items-center border-t border-b border-r w-7 h-full">
                <button onClick={() => valueSetIncrease(type)} className= "cursor-pointer"><Triangle fill="#000" className="w-2 h-2"/></button>
                <div className="w-full h-[1px] bg-black"></div>
                <button onClick={() => valueSetDecrease(type)} className="cursor-pointer rotate-180"><Triangle fill="#000" className="w-2 h-2"/></button>
            </div>
        </div>
    ) 
}


export default InputSpinner;