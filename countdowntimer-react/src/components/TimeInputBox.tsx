import { useRef, type RefObject } from "react";

interface IProp {
    secs: RefObject<number>
}

export function TimeInputBox({ secs }: IProp) { 
    const minRef = useRef<HTMLInputElement>(null);
    const secRef = useRef<HTMLInputElement>(null);
    const updateSecs = () => {
        secs.current = Number(minRef.current!.value) * 60 + Number(secRef.current!.value);
        console.log(secs.current);
    }
    return (
        <>
            <input type="text" ref={minRef} onChange={updateSecs}></input>
            <span>Minutes</span>
            <input maxLength={2} type="text" ref={secRef} onChange={updateSecs}></input>
            <span>Seconds</span>
        </>
    );
}