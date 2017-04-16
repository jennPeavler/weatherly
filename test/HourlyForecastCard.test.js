import HourlyForecastCard from '../lib/components/HourlyForecastCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MockData_2 from './MockData/MockData_2'

describe('HourlyForecastCard', () => {
  it('should print the MockData_2', () => {
    let wrapper = shallow(<HourlyForecastCard weatherObj = {MockData_2()}/>)

    expect(wrapper.find('#hourly-forecast').length).toEqual(1)
    expect(wrapper.find('.hourly-forecast-card').length).toEqual(7)
    // expect(wrapper.find('.today').length).to.equal(10)
  } )
})
