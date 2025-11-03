export function format(num: number) {
    return num.toString().padStart(2, "0");
}

export function minsec(num: number) {
    return [Math.floor(num / 60), num % 60]
}