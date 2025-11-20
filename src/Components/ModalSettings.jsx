import { X } from "lucide-react";
import InputSpinner from "./InputSpinner";
import { Switch } from '@headlessui/react'
import { useState } from "react";

function ModalSettings({showSetting, onClose, valueInput, setValueInput}){

const [enabled, setEnabled] = useState(false)

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
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-[#2AE68F]"
                                >
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                            </Switch>
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