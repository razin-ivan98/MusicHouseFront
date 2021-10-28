import * as React from "react"
import { CLFlex } from "../CLFlex/CLFlex"
import styled from "styled-components"

const LineWrapper = styled.div<{width: string}>`
    width: ${({width}) => width};
    height: 1em;
    background: linear-gradient(90deg, white, grey, white);
    border-radius: 5px;
    animation: background 2s infinite;
    background-size: 300%;

    @keyframes background {
        0% {
            background-position: 0% 0;
        }
        50% {
            background-position: 100% 0;
        }
        100% {
            background-position: 0% 0;
        }
    }
`


interface Props {
    loading?: boolean
}


export const CLSkeleton: React.FC<Props> = (props) => {
    const {
        loading,
        children
    } = props

    return loading 
        ? <CLFlex direction="column">
            <LineWrapper width="100%"/>
            <LineWrapper width="70%"/>
        </CLFlex>
        : <React.Fragment>
            {children}
        </React.Fragment>
}
