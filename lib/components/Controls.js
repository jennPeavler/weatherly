import React, { Component } from 'react'


export default class Controls extends Component {

  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  submitSearch() {

    this.props.handleSubmit(this.state);
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <input  type = 'text'
                placeholder = 'enter city / zip code'
                value = { this.state.input }
                onChange = { e => { this.setState({ input: e.target.value })}}
        />
        <input  type = 'submit'
                // onClick = { this.displayData(dataSet) }
                // onClick = { this.handleSubmit.bind(this) }
                onClick = {this.submitSearch.bind(this)}
        />
      </div>
    )
  }
}
