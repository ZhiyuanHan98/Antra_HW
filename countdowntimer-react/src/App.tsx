
import { useRef, useState } from 'react'
import './App.css'
import { Controller } from './components/Controller'
import { TimeInputBox } from './components/TimeInputBox'
import { Timer } from './components/Timer'

function App() {
    const secs = useRef(0);
    const timer = useRef(-1);
    let [curSec, curSecSetter] = useState(0);
    
    const startInterval = () => {
        timer.current = setInterval(() => curSecSetter(cur => cur - 1), 1000);
    }

    const onStart = () => {
        onReset();
        startInterval();
    };

    const onToggle = () => {
        if (timer.current != -1) {
            clearInterval(timer.current);
            timer.current = -1;
        } else {
            startInterval();
        }
    }

    const onReset = () => {
        if (timer.current != -1) clearInterval(timer.current);
        curSecSetter(secs.current);
    }
    
    return (
        <>
            <h1>Timer</h1>
            <TimeInputBox secs={secs}></TimeInputBox>
            <Controller onStart={onStart} onToggle={onToggle} onReset={onReset}></Controller>
            <Timer secs={curSec}></Timer>
        </>
    )
}

export default App
