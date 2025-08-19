function InputSpinner() {
    
    function valueSet( type ){
  setValueInput(prev => ({...prev, [type]: prev[type] + 1,}));
}
    return(
        <div className="bg-amber-300 w-25 h-10 rounded-full flex justify-between items-center">
            <button className="bg-gray-900 w-7 h-full rounded-s-full text-white cursor-pointer">-</button>
            <div>25</div>
            <button className="bg-gray-900 w-7 h-full rounded-e-full text-white cursor-pointer">+</button>
        </div>
    )
}

export default InputSpinner;