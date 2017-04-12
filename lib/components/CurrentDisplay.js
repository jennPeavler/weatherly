import React, { Component } from 'react'
import RenderCurrentDisplay from './RenderCurrentDisplay'
import Controls from './Controls'
import dataSet from './hourlyData'

export default class CurrentDisplay extends Component {
  constructor () {
    super()
    this.state = {
      location: '',
      weather: []
    }
  }

  componentDidMount () {
    let location = localStorage.getItem('location')
    this.setState({ location: location ? location : '' }, () => {
      this.setState({ weather: this.handleSubmit(this.state.location) })
    })

  }

  handleSubmit (userLocation) {
    debugger
    $.get(this.props.source).then( weather => {
      this.setState({ weather: weather.hourly_forecast })
    })
    this.setState({ location: userLocation })
    localStorage.setItem('location', userLocation.toLowerCase())
  }

  render () {
    return (
      <div>
        <h1>Good Afternoon</h1>
        <p>Find the weather in your neck of the woods</p>
        <Controls handleClick = { this.handleSubmit.bind(this) } />
        <section>
          <RenderCurrentDisplay lookupCity = { this.state.location }
                                hourlyData = { dataSet }
          />
        </section>
      </div>
    );

  }

}
