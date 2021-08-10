import * as React from 'react'

import {CLButton} from '../../CLib/CLButton/CLButton'
import { CLIconType } from '../../CLib/CLIcon/CLIcon'

import {AppWrapper} from './App.styled'

export const App: React.FC = () => {
    return <AppWrapper>
        <CLButton variant="danger" size="large" iconLeft={CLIconType.DELETE} width="full">УДОЛИТЬ</CLButton>
        <CLButton variant="primary" size="medium" iconLeft={CLIconType.EDIT} width="auto">Редактировать</CLButton>
        <CLButton variant="danger" size="medium" iconLeft={CLIconType.BAN}>Забанить этого петуха</CLButton>
        <CLButton variant="success" size="small" iconLeft={CLIconType.OK} width={200}>ПОДТВИРДИТЬ</CLButton>
        <CLButton variant="warning" size="large" iconLeft={CLIconType.CAT} iconRight={CLIconType.CAT}>котики</CLButton>

    </AppWrapper>
}