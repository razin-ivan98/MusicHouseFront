import styled from "styled-components"
import { Colors } from "../consts"

interface Props {
    width: "auto" | "full" | number 
}

export const Wrapper = styled.div<Props>`
    background-color: ${() => Colors.light.common};
    border-radius: 10px;
    padding: 10px;
    color: ${() => Colors.light.inner};
    width: ${({width}) => {
        if (width === "auto") {
            return "min-content"
        } else if (!width || width === "full") {
            return "unset"
        } else {
            return width + "px"
        }
    }};
    &:hover {
        background-color: ${() => Colors.light.hovered};
        cursor: pointer;
    }
`
