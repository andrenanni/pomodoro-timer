import { X } from "lucide-react";
import InputSpinner from "./InputSpinner";

function ModalSettings({showSetting, onClose, valueInput, setValueInput}){
    return(
        <div className={` ${showSetting ? 'flex' : 'hidden'} fixed w-screen h-screen items-center justify-center bg-black/50 backdrop-blur-sm`}>
            <div className="w-65 h-60 rounded-2xl bg-white z-50 flex flex-col items-center p-4 gap-3">
                <div className="flex w-full justify-between items-start">
                    <p>CONFIGURAÇÕES</p>
                    <button onClick={onClose} className="cursor-pointer"><X/></button>
                </div>
                <div className="flex w-full flex-col items-center">
                    <p>Timer (minutos)</p>
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col items-center">
                            <p>Pomodoro</p>
                            <InputSpinner
                                type="pomodoro"
                                value={valueInput.pomodoro}
                                setValueInput={setValueInput}
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <p>Pausa curta</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSettings;