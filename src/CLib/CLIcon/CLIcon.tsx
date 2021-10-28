import * as React from "react"
import { ColorVariant, Size } from "../consts"
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { CLIconWrapper } from "./CLIcon.styled"

require("./utils")

export type CLIconType = "delete" | "edit" | "ban" | "ok" | "cat" | "play" | "signOut" | "plus" | "pause"

const types: Record<CLIconType, any> = {
    delete: "trash",
    edit: "pen",
    ban: "ban",
    ok: "check",
    cat: "cat",
    plus: "plus",
    play: "play",
    signOut: "sign-out-alt",
    pause: "pause"
}

interface Props {
    type?: CLIconType
    size: Size
    onClick?: () => void
    variant: ColorVariant
}

export const CLIcon: React.FC<Props> = (props) => {
    const {
        size,
        variant,
        type
    } = props
    return <CLIconWrapper size={size} variant={variant}>
        <FontAwesomeIcon icon={types[type]} />
    </CLIconWrapper>
}
