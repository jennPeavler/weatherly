import React from 'react'
import HourlyForecastCard from './HourlyForecastCard'

const HourlyForecast = ( {weatherObj} ) => {
  if(!weatherObj.length) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <HourlyForecastCard weatherObj = {hourlyForecast}/>
    </section>
  )
}

export default HourlyForecast
