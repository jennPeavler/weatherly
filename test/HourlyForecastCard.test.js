import HourlyForecastCard from '../lib/components/HourlyForecastCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MockData_2 from './MockData/MockData_2'

describe('HourlyForecastCard', () => {
  it('should render an hourly forecast section', () => {
    let wrapper = shallow(<HourlyForecastCard weatherObj = {MockData_2()}/>)

    expect(wrapper.find('#hourly-forecast').length).toEqual(1)
  } )

  it('should render an 7 hourly forecast cards', () => {
    let wrapper = shallow(<HourlyForecastCard weatherObj = {MockData_2()}/>)

    expect(wrapper.find('.hourly-forecast-card').length).toEqual(7)
  } )
})
