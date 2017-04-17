import CurrentConditions from '../lib/components/CurrentConditions'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MockData_2 from './MockData/MockData_2'

describe('CurrentConditions', () => {
  it('should render the current conditions', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let currentConditions =  wrapper.find('#current-container')
    expect(currentConditions.length).toEqual(1)
  })

  it('should render the current location', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let currentLocation = wrapper.find('#current-city')
    expect(currentLocation.props().children).toEqual('Chicago, IL')
  })

  it('should render a current conditions image', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let currentImage = wrapper.find('#current-img')
    expect(currentImage.props().src).toEqual('https://pixabay.com/p-284291/?no_redirect')
  })

  it('should render the day', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let day = wrapper.find('#current-day')
    expect(day.props().children).toEqual('Monday')
  })

  it('should render a low temp', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let low = wrapper.find('#low')
    // console.log(low.props())
    expect(low.props().children).toEqual('70')
  })

  it('should render a high temp', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let high = wrapper.find('#high')
    expect(high.props().children).toEqual('85')
  })

  it('should render a description', () => {
    let wrapper = shallow(<CurrentConditions weatherObj = {MockData_2()} location = 'Chicago, IL'/>)
    let description = wrapper.find('#description')
    expect(description.props().children).toEqual('cloudy with a chance of sky falling')
  })
})
