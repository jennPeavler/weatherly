import React from 'react'
import HourlyWeather from './HourlyWeather'

const RenderCurrentDisplay = ( {lookupCity, hourlyData}) => {
  console.log(lookupCity)
  if(!lookupCity.input) {
    return (
      <div>

      </div>
    )
  }

  return (
    <section>
      <h1>{lookupCity.input}</h1>
      <h4>Day: { hourlyData.hourly_forecast[0].FCTTIME.pretty }</h4>
      <img src = { hourlyData.hourly_forecast[0].icon_url }/>
      <h1>Temp: { hourlyData.hourly_forecast[0].temp.english }°F</h1>
      <section>
        <HourlyWeather hourlyData = { hourlyData }/>
      </section>}
    </section>
  )
}

export default RenderCurrentDisplay
