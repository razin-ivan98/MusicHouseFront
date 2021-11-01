import * as React from "react"
import { CLFlex, CLFlexItem } from "../CLFlex/CLFlex"
import { CLIcon, CLIconType } from "../CLIcon/CLIcon"
import { ColorVariant, Size } from "../consts"
import { CLModalStore } from "./store"
import { Container, Modal } from "./CLModal.styled"
import { observer } from "mobx-react"
import { CLModalHeader } from "./components/CLModalHeader"

interface Props {
    modalStore: CLModalStore
}

export const CLModal: React.FC<Props> = observer((props) => {
    const {
        modalStore
    } = props

    if (!modalStore) {
        return null
    }

    const onClose = () => {
        modalStore.setCurrentModal(null)
    }

    const stopPropogation = (e: React.SyntheticEvent) => {
        e.stopPropagation()
    }

    return <Container onClick={onClose} active={!!modalStore.currentModalName}>
        <Modal  active={!!modalStore.currentModalName} onClick={stopPropogation} >
            <CLModalHeader caption={modalStore.caption} onClose={onClose} />
            {modalStore.content}
        </Modal>
    </Container>
})
