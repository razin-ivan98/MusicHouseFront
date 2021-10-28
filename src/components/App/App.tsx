import * as React from 'react'
import { CLAvatar } from '../../CLib/CLAvatar/CLAvatar'

import { CLButton } from '../../CLib/CLButton/CLButton'
import { CLCard } from '../../CLib/CLCard/CLCard'
import { CLFlex, CLFlexItem } from '../../CLib/CLFlex/CLFlex'
import { CLImage } from '../../CLib/CLImage/CLImage'
import { CLSkeleton } from '../../CLib/CLSkeleton/CLSkeleton'

import { AppWrapper } from "./App.styled"

export const App: React.FC = () => {
    return <AppWrapper>
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
                <CLSkeleton loading={true} />
            </CLFlex>
        </CLCard>
    </AppWrapper>
}