import React from 'react'

const HourlyWeather = ( {hourlyData} ) => {
 // console.log(hourlyData.hourly_forecast[0].icon_url)
return (
  <section>
          <h3>{ hourlyData.hourly_forecast[1].temp.english }°F</h3>
          <img src = { hourlyData.hourly_forecast[1].icon_url }/>
          <h5>{ hourlyData.hourly_forecast[1].FCTTIME.civil }</h5>
          <h3>{ hourlyData.hourly_forecast[2].temp.english }°F</h3>
          <img src = { hourlyData.hourly_forecast[2].icon_url }/>
          <h5>{ hourlyData.hourly_forecast[2].FCTTIME.civil }</h5>
          <h3>{ hourlyData.hourly_forecast[3].temp.english }°F</h3>
          <img src = { hourlyData.hourly_forecast[3].icon_url }/>
          <h5>{ hourlyData.hourly_forecast[3].FCTTIME.civil }</h5>
          <h3>{ hourlyData.hourly_forecast[4].temp.english }°F</h3>
          <img src = { hourlyData.hourly_forecast[4].icon_url }/>
          <h5>{ hourlyData.hourly_forecast[4].FCTTIME.civil }</h5>
  </section>
)

}
export default HourlyWeather