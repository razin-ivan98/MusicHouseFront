import * as React from "react"
import { ColorVariant, Size } from "../consts"

import { Spinner } from "./CLSpinner.styled"

interface Props {
    variant?: ColorVariant
    size?: Size
}

export const CLSpinner: React.FC<Props> = (props) => {
    const {
        variant = "primary",
        size = "small"
    } = props

    return <Spinner size={size} variant={variant} />
}
