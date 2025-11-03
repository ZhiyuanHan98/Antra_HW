import { useState } from "react";

interface IProp {
    onStart: () => void;
    onToggle: () => void;
    onReset: () => void;
}

export function Controller({onStart, onToggle, onReset}: IProp) {  
    const [paused, setPaused] = useState(false);
    return (
        <div>
            <button onClick={onStart}>START</button>
            <button onClick={() => {onToggle(); setPaused(!paused)}}>
                {paused ? "RESUME" : "PAUSE"}
            </button>
            <button onClick={onReset}>RESET</button>
        </div>
    );
}