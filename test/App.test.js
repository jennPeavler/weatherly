import App from '../lib/components/App'
import React from 'react'
import { shallow, mount } from 'enzyme'

let app;
let wrapperShallow;
let wrapperMount;

describe('App', () => {
  beforeEach(() => {
    app = new App;
    wrapperShallow = shallow(<App />)
    wrapperMount = mount(<App />)
  })

  it('should start with no location', () => {
    expect(app.state.location).toEqual('');
  } )

  it('should start without weather data', () => {
    expect(app.state.weather).toEqual({});
  } )

  it('should have a greeting', () => {
    let greeting = wrapperShallow.find('#greeting')

    expect(greeting.props().children).toEqual('Good Afternoon');
  })

  it('should submit a city for which to find the weather', () => {
    let searchField = wrapperMount.find('input[type="text"]')
    let submitButton = wrapperMount.find('input[type="submit"]')

    searchField.simulate('change', {target: {value: 'Chicago, IL'}})
    expect(searchField.props().value).toEqual('Chicago, IL')

  })
})
