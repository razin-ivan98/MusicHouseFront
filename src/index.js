import ReactDOM from 'react-dom'
import {App} from '@components/App'

const container = document.getElementById('root')

console.log(App, container);

ReactDOM.render(App(), container)
