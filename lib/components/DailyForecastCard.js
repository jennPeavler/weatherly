import React from 'react'

const DailyForecastCard = ( {weatherObj} ) => {
  let keys = Object.keys(weatherObj.daily)

  return (
    <section id = 'daily-forecast'>
      {keys.map( (day, index) => {
        return(
          <div className = 'daily-forecast-card' key= {index}>
            <h3 className = 'day'>{weatherObj.daily[day].day}</h3>
            <img className = 'daily-img' src = {weatherObj.daily[day].img} />
            <h5 className = 'daily-high-temp'>{weatherObj.daily[day].high}</h5>
            <h5 className = 'daily-high-temp'>°F</h5>
            <h5 className = 'daily-low-temp daily-slash'>/</h5>
            <h5 className = 'daily-low-temp'>{weatherObj.daily[day].low}</h5>
            <h5 className = 'daily-low-temp'>°F</h5>
          </div>
        )
      })}
    </section>
  )
}

export default DailyForecastCard
