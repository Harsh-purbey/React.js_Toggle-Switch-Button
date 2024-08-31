import { useState } from "react";
import './ToggleSwitch.css'


const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    const cheekIsOn = isOn ? "ON" : "OFF";
    const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "rgb(199, 195, 195)" }

    return (
        <div className="toggle-switch-outer" onClick={handleToggleSwitch} style={toggleBgColor}>
            <div className={`switch-button ${cheekIsOn}`}>
                <span className="switch-content">{cheekIsOn}</span>
            </div>
        </div>
    )
}

export default ToggleSwitch;