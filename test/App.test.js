import App from '../lib/components/App'
import React from 'react'
import { shallow, mount } from 'enzyme'

describe('App', () => {
  it('should start with no location', () => {
    let app = new App;
    expect(app.state.location).toEqual(''); 
  } )



  it('should have a greeting', () => {
    let wrapper = shallow(<App />)
    let greeting = wrapper.find('#greeting')

    expect(greeting.props().children).toEqual('Good Afternoon');
  })
})
