import * as React from "react"
import { Colors, ColorVariant } from "../consts"
import styled from "styled-components"

const Wrapper = styled.img<Props>`
    width: ${({width}) => {
        if (width === "full") return "100%"
        else if (!width || width === "auto") return "unset"
        else return width + "px"
    }};
    height: ${({height}) => {
        if (height === "full") return "100%"
        else if (!height || height === "auto") return "unset"
        else return height + "px"
    }};
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : "unset"};
    border-color: ${({borderColorVariant}) => borderColorVariant ? Colors[borderColorVariant].common : "unset"};
    border-width: ${({borderWidth}) => borderWidth ? borderWidth + "px" : "unset"};
    border-style: ${({borderWidth}) => borderWidth ? "solid" : "unset"};
    object-fit: ${({fit}) => fit};
`

interface Props {
    width?: number | "auto" | "full"
    height?: number | "auto" | "full"
    src?: string
    borderColorVariant?: ColorVariant
    borderRadius?: string
    borderWidth?: number
    alt?: string
    title?: string
    fit?: "cover" | "fill" | "content" | "none"
}

export const CLImage: React.FC<Props> = (props) => {
    const {
        width = "auto",
        height = "auto",
        borderColorVariant,
        borderRadius,
        borderWidth,
        src,
        alt,
        title,
        fit = "none"
    } = props

    return <Wrapper
        width={width}
        height={height}
        borderColorVariant={borderColorVariant}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        src={src}
        alt={alt}
        title={title}
        fit={fit}
    />
}
