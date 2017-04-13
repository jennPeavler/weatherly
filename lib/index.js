// require('./style.scss')
import React from 'react'
import reactDOM from 'react-dom'
import App from './components/App'
import apiKey from './key.js'

reactDOM.render(<App source = {'http://api.wunderground.com/api/' + apiKey + '/hourly10day/q/CO/Denver.json'}/>, document.getElementById('application'))
