import * as React from "react"
import { Colors, ColorVariant } from "../consts"
import styled from "styled-components"
import { CLFlex } from "../CLFlex/CLFlex"

interface Props {
    width?: "full" | number
    height?: number
    min?: number
    max?: number
    value: number
    colorVariant?: ColorVariant
    onChange?: (value: number) => void
    withMarker?: boolean
}
const Wrapper = styled.div<Partial<Props>>`
    width: ${({width}) => width === "full" ? "100%" : width + "px"};
    height: ${({height}) => height ? height + "px" : "1em"};
    background: ${() => Colors.light.common};;
    border-radius: 5px;
    position: relative;
`

const Progress = styled.div<Partial<Props>>`
    width: ${({width}) => width + "%"};
    height: ${({height}) => height ? height + "px" : "1em"};
    background: ${({colorVariant}) => Colors[colorVariant].common};
    border-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
`
const Marker = styled.div<{progress: number, size?: number, colorVariant: ColorVariant}>`
    width: ${({size}) => size * 2.0}px;
    height: ${({size}) => size * 2.0}px;
    border-radius: 50%;
    border: 2px solid ${({colorVariant}) => Colors[colorVariant].inner};
    background-color: ${({colorVariant}) => Colors[colorVariant].common};
    position: absolute;
    top: ${({size}) => -size / 2}px;
    left: calc(${({progress}) => progress}% - ${({size}) => size}px);
    &::after {
        content: "";
        top: ${({size}) => size - size / 2.4 - 2}px;
        left: ${({size}) => size - size / 2.4 - 2}px;
        width: ${({size}) => size / 1.2}px;
        height: ${({size}) => size / 1.2}px;
        display: block;
        border-radius: 50%;
        position: absolute;
        background-color: white;
    }
`

export const CLProgressBar: React.FC<Props> = (props) => {
    const {
        min = 0,
        max = 100,
        value,
        colorVariant = "primary",
        width = "full",
        height = 10,
        onChange,
        withMarker
    } = props

    const barRef = React.useRef<HTMLDivElement>(null);
    const [mousePressed, changeMousePressed] = React.useState<boolean>(false)

    const handleMouseDown = () => {
        changeMousePressed(true)
    }
    const handleMouseUp = () => {
        changeMousePressed(false)
    }

    const handleClick = (e: React.MouseEvent) => {
        const element = barRef.current?.getBoundingClientRect();

        if (!element || !onChange) {
            return
        }
 
        const newValue = (e.clientX - element.left) / (element.right - element.left) * max
        if (newValue < min || newValue > max) {
            return
        }
        onChange(newValue);
    }

    const handleMove = (e: React.MouseEvent) => {
        if (!mousePressed || !onChange) {
            return
        }
        const element = barRef.current?.getBoundingClientRect();
        if (!element) {
            return
        }
        const newValue = (e.clientX - element.left) / (element.right - element.left) * max
        if (newValue < min || newValue > max) {
            return
        }
        onChange(newValue);
    }
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!mousePressed || !onChange) {
            return
        }
        const element = barRef.current?.getBoundingClientRect();
        if (!element) {
            return
        }
        const newValue = (e.touches[0].clientX - element.left) / (element.right - element.left) * max
        if (newValue < min || newValue > max) {
            return
        }
        onChange(newValue);
    }

    const progress = (value - min) / (max - min) * 100 || 0

    return <Wrapper
        width={width}
        colorVariant={colorVariant}
        height={height}
        ref={barRef}
        onClick={handleClick}
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
    >
        <Progress width={progress} colorVariant={colorVariant} height={height} />
        {withMarker && <Marker size={height} colorVariant={colorVariant} progress={progress}/>}
    </Wrapper>

}
