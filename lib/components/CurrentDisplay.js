import React, { Component } from 'react'

export default class CurrentDisplay extends Component {
  constructor () {
    super()
    this.state = {
      input: ''
    }
  }

  handleSubmit () {
    debugger;
    console.log(this.state);
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
                onClick = { this.handleSubmit.bind(this) }
        />
      </div>
    );
  }

}
