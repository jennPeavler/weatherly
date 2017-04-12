import React, { Component } from 'react'
import RenderCurrentDisplay from './RenderCurrentDisplay'
import dataSet from './hourlyData'

export default class CurrentDisplay extends Component {
  constructor () {
    super()
    this.state = {
      input: '',
      location: ''
    }
  }

  handleSubmit () {
    // debugger;
    this.setState({ location: this.state.input })
    // console.log(this.state);
  }

  displayData (data) {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>Good Afternoon</h1>
        <p>Find the weather in your neck of the woods</p>
        <input  type = 'text'
                placeholder = 'enter city / zip code'
                value = { this.state.input }
                onChange = { e => { this.setState({ input: e.target.value })}}
        />
        <input  type = 'submit'
                onClick = { this.displayData(dataSet) }
                // onClick = { this.handleSubmit.bind(this) }
        />
        <section>
          <RenderCurrentDisplay lookupCity = { this.state.location } />
        </section>
      </div>
    );
  }

}
