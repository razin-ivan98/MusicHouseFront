import * as React from "react"
import { CLFlex, CLFlexItem } from "../CLFlex/CLFlex"
import { CLIcon, CLIconType } from "../CLIcon/CLIcon"

import {ColorVariant, Size} from "../consts"
import { IconDummy, Wrapper } from "./CLButton.styled"

interface Props {
    size: Size
    variant: ColorVariant
    onClick?: () => void
    iconLeft?: CLIconType
    iconRight?: CLIconType
    children?: any,
    width?: "full" | "auto" | number
}

export const CLButton: React.FC<Props> = (props) => {
    return <Wrapper variant={props.variant} size={props.size} width={props.width}>
        <CLFlex>
            {props.iconLeft && <CLFlexItem noGrow noShrink>
                <CLIcon type={props.iconLeft} variant={props.variant} size={props.size} />
            </CLFlexItem>}
            <CLFlexItem>
                {props.children}
            </CLFlexItem>
            {props.iconRight && <CLFlexItem  noGrow noShrink>
                <CLIcon type={props.iconRight} variant={props.variant} size={props.size} />
            </CLFlexItem>}
        </CLFlex>
    </Wrapper>
}

<CLIcon size="large" variant="primary" />