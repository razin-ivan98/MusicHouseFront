import * as React from "react"
import { CLEntityCard } from "../CLEntityCard/CLEntityCard"

interface Props {
    name?: string
    actor?: string
    avatarLink?: string
    actionsElement?: React.ReactNode
}

export const CLTrackCard: React.FC<Props> = (props) => {
    const {
        name,
        actor,
        avatarLink,
        actionsElement
    } = props

    return <CLEntityCard
        avatarLink={avatarLink}
        mainTitle={name}
        subTitle={actor}
        onClick={() => console.log("Track")}
        avatarVariant="square"
        actionsElement={actionsElement}
    />
}
