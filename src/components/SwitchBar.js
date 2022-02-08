import { useState } from "react";
import {MdDarkMode,MdLightMode } from "react-icons/md";

const SwitchBar = ({switchTheme}) => {
    const [isTrigger, setisTrigger] = useState(true)
    const light = "translate-x-0 duration-500 ease-in-out"
    const dark = "translate-x-9 duration-500 ease-in-out"
    return (
        <div className="flex justify-center items-center gap-2">
            <MdLightMode size={'1.5rem'} color={isTrigger?'black':'white'}/>
            <div className="w-14 h-5 bg-gray-300 rounded-full">
                <button className={`w-6 h-5 bg-white rounded-full shadow-lg ${isTrigger? light: dark}`}
                        onClick={()=> {
                            setisTrigger(!isTrigger)
                            switchTheme()
                        }}
                ></button>
            </div>
            <MdDarkMode size={'1.5rem'} color={isTrigger?'black':'white'}/>
        </div>
    )
}

export default SwitchBar