export const formatTime = (time: number) => {
    const intTime = Math.round(time)
    const minutes = Math.trunc(intTime / 60)
    const seconds = (intTime % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export const bindArg = <T>(fn: (...args: Array<T>) => void, ...args: Array<T>) => {
    return <() => void>fn.bind(void 0, ...args)
}
