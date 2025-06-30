function Timer(props){
    return(
        <div className="flex flex-col items-center justify-center leading-[130px]">
            <span className="text-[125pt] font-roboto font-black text-[#FF6C6C]">
                {props.minutes}
            </span>
            <span className="text-[125pt] font-roboto font-black text-[#FF6C6C]">
                {props.seconds}
            </span>
        </div>
    );
}

export default Timer;