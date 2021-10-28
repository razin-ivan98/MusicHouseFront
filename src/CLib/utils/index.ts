export const formatTime = (time: number) => {
    const intTime = Math.round(time)
    const minutes = Math.trunc(intTime / 60)
    const seconds = (intTime % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}