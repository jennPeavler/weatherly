import React from 'react'
import HourlyForecastCard from './HourlyForecastCard'

const HourlyForecast = ( {weatherObj} ) => {
  if(!Object.keys(weatherObj).length) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <HourlyForecastCard weatherObj = {weatherObj}/>
    </section>
  )
}

export default HourlyForecast
