import * as React from 'react'
import { CLAvatar } from '../../CLib/CLAvatar/CLAvatar'

import { CLButton } from '../../CLib/CLButton/CLButton'
import { CLCard } from '../../CLib/CLCard/CLCard'
import { CLEntityCard } from '../../CLib/CLEntityCard/CLEntityCard'
import { CLFlex, CLFlexItem } from '../../CLib/CLFlex/CLFlex'
import { CLImage } from '../../CLib/CLImage/CLImage'
import { CLProgressBar } from '../../CLib/CLProgressBar/CLProgressBar'
import { CLSkeleton } from '../../CLib/CLSkeleton/CLSkeleton'
import { CLTrackCard } from '../../CLib/CLTrackCard/CLTrackCard'

import { AppWrapper } from "./App.styled"

export const App: React.FC = () => {
    const actions = () => {
        return <React.Fragment>
            <CLButton variant="transparent" size="large" iconLeft="delete" onClick={() => console.log("Button")}></CLButton>
            <CLButton variant="transparent" size="large" iconLeft="edit" onClick={() => console.log("Button")}></CLButton>
        </React.Fragment>
    }
    const actions1 = () => {
        return <React.Fragment>
            <CLButton variant="transparent" size="large" iconLeft="plus" onClick={() => console.log("Button")}></CLButton>
        </React.Fragment>
    }

    const [progressValue, changeProgressValue] = React.useState(20)

    return <AppWrapper>
        <CLFlex justify="center">
            <CLCard width={500}>
                <CLFlex direction="column" width="auto">
                    <CLFlexItem noGrow>
                        <CLButton variant="danger" size="large" iconLeft="delete" width="full">УДОЛИТЬ</CLButton>
                    </CLFlexItem>
                    <CLFlexItem noGrow>
                        <CLButton variant="primary" size="medium" iconLeft="edit" width="auto">Редактировать</CLButton>
                    </CLFlexItem>
                    <CLButton variant="danger" size="medium" iconLeft="ban">Забанить этого петуха</CLButton>
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
                    
                </CLFlex>
            </CLCard>
            <CLCard width={500}>
                <CLFlex direction="column" width="auto">
                    <CLSkeleton loading={true} />
                    <CLEntityCard
                        avatarLink="https://cdn.fishki.net/upload/post/2019/08/24/3066538/98b54cf122f068003e4f2f3b0ec244ca.jpg"
                        mainTitle="Иван Разин"
                        subTitle="Разработчик"
                        actionsElement={actions()}
                        onClick={() => console.log("Entity")}
                    />
                    <CLTrackCard
                        avatarLink="https://img5.goodfon.ru/original/800x480/b/b3/queen-bohemian-rhapsody-rami-malek-rami-malek-bogemskaia-rap.jpg"
                        name="Bohemian Rhapsody"
                        actor="Фарух Балсара"
                        actionsElement={actions1()}
                    />
                    <CLProgressBar value={5} />
                    <CLProgressBar value={20} height={5} />
                    А этот можно менять
                    <CLProgressBar value={progressValue} onChange={changeProgressValue} height={10} />
                    <CLProgressBar value={progressValue} onChange={changeProgressValue} height={10} withMarker />

                </CLFlex>
            </CLCard>
        </CLFlex>
    </AppWrapper>
}