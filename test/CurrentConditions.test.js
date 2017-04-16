import CurrentConditions from '../lib/components/CurrentConditions'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MockData_2 from './MockData/MockData_2'

describe('CurrentConditions', () => {
  it('should render the current conditions', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let currentConditions = wrapper.find('#current-conditions')
    expect(currentConditions.length).toEqual(1)
  })

  it('should render the current location', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let currentLocation = wrapper.find('#current-location')
    expect(currentLocation.props().children).toEqual('Chicago, IL')
  })

  it('should render a current conditions image', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let currentImage = wrapper.find('#current-image')
    expect(currentImage.props().src).toEqual('https://pixabay.com/p-284291/?no_redirect')
  })

  it('should render the day', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let day = wrapper.find('#day')
    expect(day.props().children[1]).toEqual('Monday')
  })

  it('should render a low and high temp', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let lowHigh = wrapper.find('#low-high')
    expect(lowHigh.props().children[0]).toEqual('70')
    expect(lowHigh.props().children[2]).toEqual('85')
  })

  it('should render a description', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let description = wrapper.find('#description')
    expect(description.props().children).toEqual('cloudy with a chance of sky falling')
  })
})
