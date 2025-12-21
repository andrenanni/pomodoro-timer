import { useContext } from "react";
import { PomodoroContext } from "../context/PomodoroContext";

function Timer(props){

    const {currentCycle} = useContext(PomodoroContext) 

    const colors = {
        pausaCurta: "#7bb35d",
        foco: "#FF6C6C",
        pausaLonga: "#406E9F"
    }

    const textColor = colors[currentCycle]

    return(
        <div className=" flex flex-col items-center justify-center leading-[130px] text-[125pt] font-roboto font-black" style={{ color: textColor}} >
            <span>
                {props.minutes}
            </span>
            <span>
                {props.seconds}
            </span>
        </div>
    );
}

export default Timer;