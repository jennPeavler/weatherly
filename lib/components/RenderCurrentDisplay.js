import React from 'react'
import HourlyWeather from './HourlyWeather.js'

const RenderCurrentDisplay = ( {lookupCity, hourlyData} ) => {
  return (
    <section>
      <p>{ lookupCity }</p>
      <h4>Day: { hourlyData.hourly_forecast[0].FCTTIME.pretty }</h4>
      <h1>Temp: { hourlyData.hourly_forecast[0].temp.english }°F</h1>
      <section>
        <HourlyWeather hourlyData = { hourlyData }/>
      </section>
    </section>
  )
}

export default RenderCurrentDisplay
