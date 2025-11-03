import { format, minsec } from "../utils/Formats";

interface IProp {
    secs: number
}

export function Timer({ secs }: IProp) {
    const [min, sec] = minsec(secs);
    return (
        <div>
            <h1>{format(min)}:{format(sec)}</h1>
        </div>
    )
}