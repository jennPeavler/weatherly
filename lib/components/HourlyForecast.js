import React from 'react'
import HourlyForecastCard from './HourlyForecastCard'

const HourlyForecast = ( {hourlyForecast} ) => {
  if(!hourlyForecast.length) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <HourlyForecastCard hourlyForecast = {hourlyForecast}/>
    </section>
  )
}

export default HourlyForecast
