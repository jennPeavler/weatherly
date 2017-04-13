import React, { Component } from 'react'
import CurrentDisplay from './CurrentDisplay'


export default class Main extends Component {
  render () {
    return(
      <section>
        <CurrentDisplay source = {'http://api.wunderground.com/api/' + apiKey + '/hourly10day/q/CO/Denver.json'} />
      </section>
    )
  }
}
