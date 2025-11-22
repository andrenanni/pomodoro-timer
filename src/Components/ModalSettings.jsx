import { X } from "lucide-react";
import InputSpinner from "./InputSpinner";
import { Switch } from '@headlessui/react'
import { useState } from "react";

function ModalSettings({showSetting, onClose, valueInput, setValueInput}){

const [darkMode, setDarkMode] = useState(false)
const [autoRestart, setAutoRestart] = useState(false)

    return(
        <div className={` ${showSetting ? 'flex' : 'hidden'} fixed w-screen h-screen items-center justify-center bg-black/50 backdrop-blur-sm`}>
            <div className="w-90 h-auto rounded-2xl bg-white z-50 flex flex-col items-center p-4 gap-3">
                <div className="flex w-full justify-between items-start">
                    <p>CONFIGURAÇÕES</p>
                    <button onClick={onClose} className="cursor-pointer"><X/></button>
                </div>
                <div className="flex w-full flex-col gap-3 items-center">
                    <p>Timer (minutos)</p>
                    <div className="flex w-full h-full flex-col gap-3">
                            <div className="flex w-full h-auto justify-between items-center">
                                <p>Dark mode</p>
                            <Switch
                                checked={darkMode}
                                onChange={setDarkMode}
                                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-[#2AE68F]"
                                >
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                            </Switch>
                            </div>
                            <div className="flex items-center w-full h-auto justify-between">
                                <p>Pomodoro</p>
                                <InputSpinner
                                    type="pomodoro"
                                    value={valueInput.pomodoro}
                                    setValueInput={setValueInput}
                                />
                            </div>
                                <div className="flex items-center w-full h-auto justify-between">
                                <p>Pausa curta</p>
                                <InputSpinner
                                    type="pomodoro"
                                    value={valueInput.pomodoro}
                                    setValueInput={setValueInput}
                                />
                            </div>
                                <div className="flex items-center w-full h-auto justify-between">
                                <p>Pausa longa</p>
                                <InputSpinner
                                    type="pomodoro"
                                    value={valueInput.pomodoro}
                                    setValueInput={setValueInput}
                                />
                            </div>
                                <div className="flex items-center w-full h-auto justify-between">
                                <p>Quantidaded de ciclos</p>
                                <InputSpinner
                                    type="pomodoro"
                                    value={valueInput.pomodoro}
                                    setValueInput={setValueInput}
                                />
                            </div>
                              <div className="flex w-full h-auto justify-between items-center">
                                <p>Retomar automaticamente</p>
                            <Switch
                                checked={autoRestart}
                                onChange={setAutoRestart}
                                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-[#2AE68F]"
                                >
                                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                            </Switch>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSettings;