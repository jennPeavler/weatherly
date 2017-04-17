import React from 'react'
import DailyForecastCard from './DailyForecastCard'

const DailyForecast = ( {weatherObj} ) => {
  if(!Object.keys(weatherObj).length) {
    return (
      <div></div>
    )
  }
  return (
    <section id = 'daily-forecast-container'>
      <DailyForecastCard weatherObj = {weatherObj}/>
    </section>
  )
}

export default DailyForecast
