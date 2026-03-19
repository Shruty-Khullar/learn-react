import { useState } from "react";
import "./Toggle.css"
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch2 = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    // 3 pos -> 1 div for entire button, one div for round toggle button and span for Text
    // div -> takes entire width and consumer entire Linter, span -> takes pnly space thats required 
    return (
        <>
        <h1>
            Toggle Switch <IoIosSwitch />
        </h1>
            {/* ByDefault react uses bubbling so if child event is triggered, it will reach to parent also */}
            {/* if we have added the class in span, when we click on text then only pos have changed, if 2nd inner div -> click on round button so thats why we applied on parent div as we want if anywhere we are clicking toggle should change */}
            {/* in style 1st {} is JSX and other {} is JS object */}
            <div className="toggle-switch" onClick={handleToggleSwitch} style={{ backgroundColor: isOn ? "green" : "red"}}>
                {/* conditional class */}
                <div className= {`switch ${isOn ? "on" : "off"}`}>
                    <span className="switch-state">{isOn ? "On" : "Off"}</span>
                </div>
            </div>
        </>
    )
} 

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    const isButtonOn = isOn ? "on" : "off";
    const bgColorOnOff = {backgroundColor: isOn ? "green" : "red"}
    // 3 pos -> 1 div for entire button, one div for round toggle button and span for Text
    // div -> takes entire width and consumer entire Linter, span -> takes pnly space thats required 
    return (
        <>
            {/* ByDefault react uses bubbling so if child event is triggered, it will reach to parent also */}
            {/* if we have added the class in span, when we click on text then only pos have changed, if 2nd inner div -> click on round button so thats why we applied on parent div as we want if anywhere we are clicking toggle should change */}
            {/* in style 1st {} is JSX and other {} is JS object */}
            <div className="toggle-switch" onClick={handleToggleSwitch} style={bgColorOnOff}>
                {/* conditional class */}
                <div className= {`switch ${isButtonOn}`}>
                    <span className="switch-state">{isButtonOn}</span>
                </div>
            </div>
        </>
    )
} 


//translateX is a CSS transform function. It moves an element horizontally (left or right) along the X-axis. positive value → moves right ➡️ negative value → moves left ⬅️