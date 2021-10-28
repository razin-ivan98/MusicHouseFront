import * as React from "react"
import { BorderTypes, CLAvatar } from "../CLAvatar/CLAvatar"
import { CLFlex, CLFlexItem } from "../CLFlex/CLFlex"
import { CLText } from "../CLText/CLText"
import { Wrapper } from "./CLEntityCard.styled"

interface Props {
    avatarLink?: string
    mainTitle?: string
    subTitle?: string
    width?: "auto" | "full" | number
    actionsElement?: React.ReactNode
    onClick?: (e: React.SyntheticEvent) => void
    avatarVariant?: BorderTypes
}


export const CLEntityCard: React.FC<Props> = (props) => {
    const {
        width = "full",
        avatarLink,
        mainTitle,
        subTitle,
        actionsElement,
        avatarVariant,
        onClick
    } = props

    const handleClick = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        onClick?.(e)
    }

    return <Wrapper width={width} onClick={handleClick}>
        <CLFlex margin="large" alignItems="center">
            <CLFlexItem noGrow noShrink>
                <CLAvatar size={40} src={avatarLink} borderVariant={avatarVariant} />
            </CLFlexItem>
            <CLFlexItem noShrink>
                <CLFlex direction="column" margin="small">
                    <CLText size="medium">{mainTitle}</CLText>
                    <CLText size="small">{subTitle}</CLText>
                </CLFlex>
            </CLFlexItem>
            <CLFlexItem noGrow noShrink>
                {actionsElement}
            </CLFlexItem>
        </CLFlex>
    </Wrapper>
}
