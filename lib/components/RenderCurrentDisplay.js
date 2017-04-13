import React from 'react'
import HourlyWeather from './HourlyWeather.js'

const RenderCurrentDisplay = ( {lookupCity, hourlyForecast} ) => {
  debugger
  if(!hourlyForecast.length) {
    return (
      <div>
        Please enter a city
      </div>
    )
  }

  return (
    <section>
      <p>{ lookupCity }</p>
      <h4>Day: { hourlyForecast[0].FCTTIME.weekday_name + '   '}
               { hourlyForecast[0].FCTTIME.mon } /
               { hourlyForecast[0].FCTTIME.mday } /
               { hourlyForecast[0].FCTTIME.year }
      </h4>
      <h1>Temp: { hourlyForecast[0].temp.english }°F</h1>
      <section>
        <HourlyWeather hourlyForecast = { hourlyForecast }/>
      </section>
    </section>
  )
}

export default RenderCurrentDisplay
