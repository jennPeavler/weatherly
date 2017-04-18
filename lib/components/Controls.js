import React, { Component } from 'react'

export default class Controls extends Component {
  constructor () {
    super()
    this.state = {
      input: ''
    }
  }

  submitItem () {
    this.props.handleClick(this.state.input)
    this.setState( {input: ''} );
  }

  render () {
    return(
      <section id='controls-container'>
        <p id = 'instructions'>Find the weather in your neck of the woods:</p>
        <div id = 'search-container'>
          <input  id = 'search-input'
            type = 'text'
            placeholder = 'city, state'
            value = { this.state.input }
            onChange = { e => { this.setState({ input: e.target.value })}}
          />
          <label id = 'search-label'>
            <input  id = 'search-submit-button'
              type = 'submit'
              onClick = { this.submitItem.bind(this) }
            />
            <svg id = "search-icon" viewBox="0 0 24 24">
              <path fill="#FFF" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </label>
        </div>
      </section>
    )
  }
}
