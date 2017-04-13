import React from 'react'

const HourlyForecastCard = ( {hourlyForecast} ) => {
  return (
    <section>
      {hourlyForecast.slice(0, 7).map( (hour, index) => {
        return(
          <div key= {index}>
            <h1>HOURLY</h1>
            <h3>{hour.temp.english}</h3>
            <img src = {hour.icon_url}/>
            <h5>{hour.FCTTIME.civil}</h5>
          </div>
        )
      })}
    </section>
  )
}

export default HourlyForecastCard
