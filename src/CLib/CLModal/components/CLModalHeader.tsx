import * as React from "react"

import { observer } from "mobx-react"
import { CLFlex, CLFlexItem } from "../../CLFlex/CLFlex"
import { CLButton } from "../../CLButton/CLButton"

interface Props {
    caption: React.ReactNode
    onClose: () => void
}

export const CLModalHeader: React.FC<Props> = observer((props) => {
    const {
        caption,
        onClose
    } = props

    return <CLFlex alignItems="center">
        {caption}
        <CLFlexItem noGrow noShrink>
            <CLButton
                variant="transparent"
                onClick={onClose}
                iconLeft="close"
            />
        </CLFlexItem>
    </CLFlex>
})
