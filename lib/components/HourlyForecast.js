import React from 'react'
import HourlyForecastCard from './HourlyForecastCard'

const HourlyForecast = ( {hourlyForecast} ) => {
  if(!hourlyForecast.length) {
    return (
      <div>
        Please enter a city
      </div>
    )
  }
  return (
    <section>
      <HourlyForecastCard hourlyForecast = {hourlyForecast}/>
    </section>
  )
}

export default HourlyForecast
