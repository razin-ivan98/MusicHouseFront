import ReactDOM from 'react-dom'
import {App} from '@components/App'

require('@babel/polyfill')

const container = document.getElementById('root')

ReactDOM.render(App(), container)
