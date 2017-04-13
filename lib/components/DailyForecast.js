import React from 'react'
import DailyForecastCard from './DailyForecastCard'

const DailyForecast = ( {hourlyForecast} ) => {
  if(!hourlyForecast.length) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <DailyForecastCard hourlyForecast = {hourlyForecast}/>
    </section>
  )
}

export default DailyForecast
