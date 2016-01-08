import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MyFirstSPA from './app/MyFirstSPA.jsx'

injectTapEventPlugin()

ReactDOM.render(<MyFirstSPA />, document.getElementById('app'))
