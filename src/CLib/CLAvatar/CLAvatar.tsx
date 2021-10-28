import * as React from "react"
import { ColorVariant } from "../consts"
import { CLImage } from "../CLImage/CLImage"

export type BorderTypes = "circle" | "square"

interface Props {
    size?: number
    src?: string
    borderColorVariant?: ColorVariant
    borderVariant?: BorderTypes
}

const borderVariants: Record<BorderTypes, string> = {
    circle: "50%",
    square: "25%"
}

export const CLAvatar: React.FC<Props> = (props) => {

    const {
        size = "auto",
        borderColorVariant,
        src,
        borderVariant = "circle"
    } = props

    return <CLImage
        src={src}
        borderRadius={borderVariants[borderVariant]}
        borderColorVariant={borderColorVariant}
        borderWidth={borderColorVariant && 5}
        width={size}
        height={size}
        fit="cover"
    />
}
