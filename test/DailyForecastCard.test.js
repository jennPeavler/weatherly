import DailyForecastCard from '../lib/components/DailyForecastCard'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MockData_2 from './MockData/MockData_2'

describe('DailyForecastCard', () => {
  it('should render a daily forecast section', () => {
    let wrapper = shallow(<DailyForecastCard weatherObj = {MockData_2()}/>)

    expect(wrapper.find('#daily-forecast').length).toEqual(1)
  } )

  it('should render an 10 daily forecast cards', () => {
    let wrapper = shallow(<DailyForecastCard weatherObj = {MockData_2()}/>)

    expect(wrapper.find('.daily-forecast-card').length).toEqual(10)
  } )
})
