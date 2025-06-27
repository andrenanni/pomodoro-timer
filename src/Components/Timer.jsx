function Timer(props){
    return(
        <div className="w-[340px] h-[383px] bg-[#f9f9f9] rounded-4xl flex items-center justify-center">
            <div className="fle flex-col">
                <h1 className="text-[140pt] font-roboto font-black">
                {props.minutes}
            </h1>
                <h1 className="text-[140pt] font-roboto font-black">
                {props.seconds}
            </h1>
            </div>
        </div>
    );
}

export default Timer;