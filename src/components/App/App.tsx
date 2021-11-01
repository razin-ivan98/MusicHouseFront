import { autobind } from 'core-decorators'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import { CLAudio } from '../../CLib/CLAudio/CLAudio'
import { CLAvatar } from '../../CLib/CLAvatar/CLAvatar'

import { CLButton } from '../../CLib/CLButton/CLButton'
import { CLCard } from '../../CLib/CLCard/CLCard'
import { CLEntityCard } from '../../CLib/CLEntityCard/CLEntityCard'
import { CLFlex, CLFlexItem } from '../../CLib/CLFlex/CLFlex'
import { CLImage } from '../../CLib/CLImage/CLImage'
import { CLModal } from '../../CLib/CLModal/CLModal'
import { CLModalStore } from '../../CLib/CLModal/store'
import { CLProgressBar } from '../../CLib/CLProgressBar/CLProgressBar'
import { CLSkeleton } from '../../CLib/CLSkeleton/CLSkeleton'
import { CLSpinner } from '../../CLib/CLSpinner/CLSpinner'
import { CLTrackCard } from '../../CLib/CLTrackCard/CLTrackCard'
import { bindArg } from '../../CLib/utils'
import { SLApiStore } from '../../SLib/SLApiStore/SLApiStore'
import { SLListStore } from '../../SLib/SLApiStore/SLListStore'
import { Entity, User } from '../../SLib/SLApiStore/types'

import { AppWrapper } from "./App.styled"

@autobind
@observer
export class App extends React.Component {
    private actions = () => {
        return <React.Fragment>
            <CLButton variant="transparent" size="medium" iconLeft="delete" onClick={() => console.log("Button")}></CLButton>
            <CLButton variant="transparent" size="medium" iconLeft="edit" onClick={() => console.log("Button")}></CLButton>
        </React.Fragment>
    }
    private actions1 = () => {
        return <React.Fragment>
            <CLButton variant="transparent" size="medium" iconLeft="plus" onClick={() => console.log("Button")}></CLButton>
        </React.Fragment>
    }
    private generateActions = (onDelete: () => void) => {
        return <React.Fragment>
            <CLButton variant="transparent" size="medium" iconLeft="delete" onClick={onDelete}></CLButton>
        </React.Fragment>
    }

    @observable
    private apiStore: SLApiStore
    @observable
    private usersListStore: SLListStore<User>

    @action
    componentDidMount() {
        this.modalStore = new CLModalStore()
        this.modalStore.addModal({id: "modal_1", content: <h1>КОНТЕНТ МОДАЛКИ 1</h1>, caption: "CAPTION_1"})
        this.modalStore.addModal({id: "modal_2", content: <h3>КОНТЕНТ МОДАЛКИ 2</h3>, caption: "CAPTION_2"})

        this.apiStore = new SLApiStore()
        this.usersListStore = this.apiStore.initList<User>("http://localhost:3000/user/")
        this.usersListStore?.pull()
    }

    @observable
    private progressValue = 20

    @action
    private setProgressValue (newValue: number) {
        this.progressValue = newValue
    }

    @observable
    private modalStore: CLModalStore

    private modal_1ButtonClickHandle() {
        this.modalStore.setCurrentModal(this.modalStore.currentModalName ? null : "modal_1")
        console.log(this.modalStore.currentModalName) 
    }
    private modal_2ButtonClickHandle() {
        this.modalStore.setCurrentModal(this.modalStore.currentModalName ? null : "modal_2")
        console.log(this.modalStore.currentModalName) 
    }

    render() {
        return <AppWrapper>
            <CLModal modalStore={this.modalStore} />
            <CLFlex justify="center">
                <CLCard width={500}>
                    <CLFlex direction="column" width="auto">
                        <CLSpinner variant="warning" size="large" />
                        <CLFlexItem noGrow>
                            <CLButton variant="danger" size="large" iconLeft="delete" width="full">УДОЛИТЬ</CLButton>
                        </CLFlexItem>
                        <CLFlexItem noGrow>
                            <CLButton variant="primary" size="medium" iconLeft="edit" width="auto">Редактировать</CLButton>
                        </CLFlexItem>
                        <CLButton variant="danger" size="medium" iconLeft="ban" onClick={this.modal_1ButtonClickHandle}>МОДАЛККА 1</CLButton>
                        <CLButton variant="danger" size="medium" iconLeft="ban" onClick={this.modal_2ButtonClickHandle}>МОДАЛККА 2</CLButton>

                        <CLButton variant="success" size="small" iconLeft="ok" width={200}>ПОДТВИРДИТЬ</CLButton>
                        <CLButton variant="warning" size="large" iconLeft="cat" iconRight="cat">котики</CLButton>
                        <CLImage
                            src="https://cdn.fishki.net/upload/post/2019/08/24/3066538/98b54cf122f068003e4f2f3b0ec244ca.jpg"
                            width={200}
                        />
                        <CLAvatar
                            src="https://cdn.fishki.net/upload/post/2019/08/24/3066538/98b54cf122f068003e4f2f3b0ec244ca.jpg"
                            size={100}
                            borderColorVariant="success"
                        />
                        <CLAvatar
                            src="https://cdn.fishki.net/upload/post/2019/08/24/3066538/98b54cf122f068003e4f2f3b0ec244ca.jpg"
                            size={100}
                            borderColorVariant="success"
                            borderVariant="square"
                        />

                        <CLSkeleton loading={true} />
                        <CLEntityCard
                            avatarLink="https://cdn.fishki.net/upload/post/2019/08/24/3066538/98b54cf122f068003e4f2f3b0ec244ca.jpg"
                            mainTitle="Иван Разин"
                            subTitle="Разработчик"
                            actionsElement={this.actions()}
                            onClick={() => console.log("Entity")}
                        />
                        <CLTrackCard
                            avatarLink="https://img5.goodfon.ru/original/800x480/b/b3/queen-bohemian-rhapsody-rami-malek-rami-malek-bogemskaia-rap.jpg"
                            name="Bohemian Rhapsody"
                            actor="Фарух Балсара"
                            actionsElement={this.actions1()}
                        />
                        <CLProgressBar value={5} />
                        <CLProgressBar value={20} height={5} />
                        А этот можно менять
                        <CLProgressBar value={this.progressValue} onChange={this.setProgressValue} height={10} />
                        <CLProgressBar value={this.progressValue} onChange={this.setProgressValue} height={10} withMarker />
                        <CLAudio src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3" variant="success" />
                    </CLFlex>
                    
                </CLCard>
            </CLFlex>
        </AppWrapper>
    }
}
