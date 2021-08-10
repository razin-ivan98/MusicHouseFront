import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: between;
    align-items: stretch;
    overflow: hidden;
`

const ItemWrapper = styled.div<Partial<ItemProps>>`
    flex-grow: ${({noGrow}) => noGrow ? 0 : 1};
    flex-shrink: ${({noShrink}) => noShrink ? 0 : 1};
    & + & {
        margin-left: 1em;
    }
`

export const CLFlex: React.FC = (props) => {
    return <Wrapper>
        {props.children}
    </Wrapper>
}

interface ItemProps {
    noGrow?: boolean
    noShrink?: boolean
}

export const CLFlexItem: React.FC<ItemProps> = (props) => {
    return <ItemWrapper {...props}>
        {props.children}
    </ItemWrapper>
}