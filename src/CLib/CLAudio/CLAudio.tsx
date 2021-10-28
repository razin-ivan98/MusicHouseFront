import * as React from "react"
import { ColorVariant } from "../consts"
import { CLImage } from "../CLImage/CLImage"
import { observer } from "mobx-react"

export type BorderTypes = "circle" | "square"

interface Props {
    src: string
}

@observer
export class CLAudio extends React.Component<Props> {

    render() {
        return <div></div>
    }
}
