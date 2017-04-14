import React from 'react'
import DailyForecastCard from './DailyForecastCard'

const DailyForecast = ( {weatherObj} ) => {
  if(!weatherObj.length) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <DailyForecastCard weatherObj = {hourlyForecast}/>
    </section>
  )
}

export default DailyForecast
