import React, { Component } from 'react'
import RenderCurrentDisplay from './RenderCurrentDisplay'
import dataSet from './hourlyData'
import Controls from './Controls.js'

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

  handleSubmit (location) {
    this.setState({ location: location })
    localStorage.setItem('location', this.state.location.toLowerCase())
    $.get(this.props.source).then( weather => {
      this.setState({ weather: weather.hourly_forecast })
    })
  }

  render () {
    debugger
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
