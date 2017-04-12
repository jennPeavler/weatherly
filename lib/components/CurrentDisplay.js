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

  handleSubmit (location) {
    this.setState({ location: location })
    $.get(this.props.source).then( weather => {
      this.setState({ weather: weather.hourly_forecast })
    })
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
