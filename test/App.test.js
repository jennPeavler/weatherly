import App from '../lib/components/App'
import React from 'react'
import { shallow, mount } from 'enzyme'

describe('App', () => {
  it('should have a greeting', () => {
    let wrapper = shallow(<App />)
    let greeting = wrapper.find('#greeting')
    
    expect(greeting.props().children).toEqual('Good Afternoon');
  })
})
