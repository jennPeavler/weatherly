import App from '../lib/components/App'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MockData_2 from './MockData/MockData_2'

let app;
let wrapperShallow;
let wrapperMount;
let searchField;
let submitButton;

describe('App', () => {
  beforeEach(() => {
    app = new App;
    wrapperShallow = shallow(<App />)
    wrapperMount = mount(<App />)
    searchField = wrapperMount.find('input[type="text"]')
    submitButton = wrapperMount.find('input[type="submit"]')
  })

  it('should brighten your day a little', () => {
    console.log('I hope your day is filled with rainbows')
    console.log('🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈')
  })

  it('should start with no location', () => {
    expect(app.state.location).toEqual('');
  } )

  it('should start without weather data', () => {
    expect(app.state.weather).toEqual({});
  } )

  it('should have a greeting', () => {
    let greeting = wrapperShallow.find('#greeting')
    expect(greeting.props().children[0]).toEqual('Good');
  })

  it('should have a Controls component', () => {
    expect(wrapperShallow.find('Controls').length).toEqual(1)
  })

  it('should have a CurrentConditions component', () => {
    expect(wrapperShallow.find('CurrentConditions').length).toEqual(1)
  })

  it('should have an HourlyForecast component', () => {
    expect(wrapperShallow.find('HourlyForecast').length).toEqual(1)
  })

  it('should have a DailyForecast component', () => {
    expect(wrapperShallow.find('DailyForecast').length).toEqual(1)
  })

  it('should allow user to type a city for which to find the weather', () => {
    searchField.simulate('change', {target: {value: 'Chicago, IL'}})
    expect(searchField.props().value).toEqual('Chicago, IL')
  })

  it('should change state if it is given weather data', () => {
    expect(app.state.weather).toEqual({})
    app.state.weather = MockData_2();
    expect(app.state.weather).not.toBe({})
  })
})
