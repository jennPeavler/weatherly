import React from 'react'

const HourlyWeather = ( {hourlyForecast} ) => {
  if(!hourlyForecast.length) {
    return (
      <div>
        Please enter a city
      </div>
    )
  }
  return (
    <section>
    {hourlyForecast.map( (item, index) => {
      if(index < 7) {
        return(
          <div key= {index}>
            <h3>{item.temp.english}</h3>
            <img src = {item.icon_url}/>
            <h5>{item.FCTTIME.civil}</h5>
          </div>
        )

      }
    })}

    </section>
  )
}

export default HourlyWeather

// <h3>{ hourlyData.hourly_forecast[1].temp.english }°F</h3>
// <img src = { hourlyData.hourly_forecast[1].icon_url }/>
// <h5>{ hourlyData.hourly_forecast[1].FCTTIME.civil }</h5>
// <h3>{ hourlyData.hourly_forecast[2].temp.english }°F</h3>
// <img src = { hourlyData.hourly_forecast[2].icon_url }/>
// <h5>{ hourlyData.hourly_forecast[2].FCTTIME.civil }</h5>
// <h3>{ hourlyData.hourly_forecast[3].temp.english }°F</h3>
// <img src = { hourlyData.hourly_forecast[3].icon_url }/>
// <h5>{ hourlyData.hourly_forecast[3].FCTTIME.civil }</h5>
// <h3>{ hourlyData.hourly_forecast[4].temp.english }°F</h3>
// <img src = { hourlyData.hourly_forecast[4].icon_url }/>
// <h5>{ hourlyData.hourly_forecast[4].FCTTIME.civil }</h5>
