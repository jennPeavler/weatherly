import React, { Component } from 'react'
import CurrentConditions from './CurrentConditions'
import Controls from './Controls'
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
        this.handleSubmit(this.state.location)
      }
    })
  }

  handleSubmit (userLocation) {
    if(userLocation.indexOf(' ') === -1) {
      alert('hello! excuse me, not a city/state')
    } else {
      let stateLocation = this.formatUserSearch(userLocation)[1]
      let cityLocation = this.formatUserSearch(userLocation)[0]

      this.callWundergroundAPI(stateLocation, cityLocation, userLocation)
    }
  }

  formatUserSearch (unformattedInput) {
    let locationInput = unformattedInput.split('');
    let index = 0;
    let spaceIndices = [];
    let locationArr = [];

    while ((index = locationInput.indexOf(' ', index + 1)) > 0) {
      spaceIndices.push(index);
    }
    let lastSpaceIndex = spaceIndices[spaceIndices.length-1]

    locationArr.push(locationInput.slice(0, lastSpaceIndex).join(''))
    locationArr.push(locationInput.slice(lastSpaceIndex).join(''))
    return locationArr
  }

  callWundergroundAPI (stateLocation, cityLocation, userLocation) {
    $.get(this.props.source + stateLocation + '/' + cityLocation + '.json').
      then( weather => {
        if (weather.response.error) {
          this.setState({ weather: '', location: []})
          localStorage.clear()
          alert('hello! excuse me, not a city/state')
        } else {
          let cleanedData = cleanData(weather)

          this.setState({ weather: cleanedData, location: userLocation })
          localStorage.setItem('location', userLocation.toLowerCase())
        }
      })
  }

  render () {
    return (
      <section id='app-container'>
        <header id='greeting-container'>
          <h1 id = 'greeting'>Good
            <span id='greeting-time-of-day'>
              {this.getTimeOfDay()}
            </span>
          </h1>
          <p id = 'instructions'>Find the weather in your neck of the woods:</p>
        </header>
        <section>
          <Controls id='controls' handleClick = { this.handleSubmit.bind(this) } />
          <CurrentConditions      lookupCity = { this.state.location }
                                  weatherObj = { this.state.weather }
          />
          <HourlyForecast         weatherObj = { this.state.weather }/>
          <DailyForecast          weatherObj = { this.state.weather }/>
        </section>
      </section>
    );
  }

  getTimeOfDay() {
    let date = new Date();
    let hour = date.getHours();
    
    return hour >= 3 && hour < 12 ?
      ' Morning' : hour >=12 && hour < 18 ?
      ' Afternoon' : ' Evening'
  }
}
