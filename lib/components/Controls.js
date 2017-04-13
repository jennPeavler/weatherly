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
      <section>
        <input  type = 'text'
                placeholder = 'enter city, state'
                value = { this.state.input }
                onChange = { e => { this.setState({ input: e.target.value })}}
        />
        <input  type = 'submit'
                onClick = { this.submitItem.bind(this) }
        />
      </section>
    )
  }
}
