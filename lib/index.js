import React from 'react'
import reactDOM from 'react-dom'
import App from './components/App'
import apiKey from './key.js'
import './styles/App.scss'
// import './styles/sky-4.jpg'

reactDOM.render(<App source = {'https://api.wunderground.com/api/' + apiKey + '/conditions/hourly/forecast10day/q/'}/>, document.getElementById('application'))
