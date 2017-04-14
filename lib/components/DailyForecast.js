import React from 'react'
import DailyForecastCard from './DailyForecastCard'

const DailyForecast = ( {weatherObj} ) => {
  if(!Object.keys(weatherObj).length) {
    return (
      <div></div>
    )
  }
  return (
    <section>
      <DailyForecastCard weatherObj = {weatherObj}/>
    </section>
  )
}

export default DailyForecast
