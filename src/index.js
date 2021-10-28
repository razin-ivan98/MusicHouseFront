import ReactDOM from 'react-dom'
import * as React from "react"
import {App} from '@components/App'

require('@babel/polyfill')

const container = document.getElementById('root')

ReactDOM.render(<App />, container)
