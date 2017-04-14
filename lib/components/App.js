import React, { Component } from 'react'
import CurrentConditions from './CurrentConditions'
import Controls from './Controls'
import dataSet from './hourlyData'
import HourlyForecast from './HourlyForecast.js'
import DailyForecast from './DailyForecast.js'
import cleanData from './cleanData.js'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
      weather: {}
    }
  }

  componentDidMount () {
    let location = localStorage.getItem('location')

    this.setState({
      location: location ? location : ''
    }, () => {
      if (this.state.location) {
        this.handleSubmit(this.state.location);
        console.log('did it get here?')
      }
    })

  }

  handleSubmit (userLocation) {
    let stateLocation = userLocation.split(' ')[1] // 'Denver CO'
    let cityLocation = userLocation.split(' ')[0]    //Denver
    $.get(this.props.source + stateLocation + '/' + cityLocation + '.json').
      then( weather => {
        if (weather.response.error) {
          this.setState({ weather: '', location: []})
          localStorage.clear()
          alert('hello! excuse me, not a city')
        } else {
          console.log();
          //call helper function to clean data
          //pass in 'weather', get back array/object
          let cleanedData = cleanData(weather)
          console.log('cleanedData: ', cleanedData);
          this.setState({ weather: cleanedData, location: userLocation })
          localStorage.setItem('location', userLocation.toLowerCase())
        }
      })
  }

  render () {
    return (
      <div>
        <h1>Good Afternoon</h1>
        <p>Find the weather in your neck of the woods</p>
        <Controls handleClick = { this.handleSubmit.bind(this) } />
        <CurrentConditions lookupCity = { this.state.location }
                           weatherObj = { this.state.weather }
        />
        <HourlyForecast weatherObj = { this.state.weather }/>
        <DailyForecast weatherObj = { this.state.weather }/>
      </div>
    );

  }

}
