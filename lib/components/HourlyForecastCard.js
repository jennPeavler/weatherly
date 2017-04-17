import React from 'react'

const HourlyForecastCard = ( {weatherObj} ) => {
  let keys = Object.keys(weatherObj.hourly)

  return (
    <section id='hourly-forecast'>
      {keys.map( (hour, index) => {
        return(
          <div className= 'hourly-forecast-card' key= {index}>
            <h3 className = 'hourly-temp'>{weatherObj.hourly[hour].temp}</h3>
            <h3 className = 'hourly-temp'>°F</h3>
            <img className = 'hourly-img' src = {weatherObj.hourly[hour].img} />
            <h5 className='time'>{formatTime(weatherObj.hourly[hour].time)}</h5>
          </div>
        )
      })}
    </section>
  )
}

const formatTime = (unformattedTime) => {
    let time = unformattedTime.split('')
    time.splice(time.indexOf(':'), 3)
    return time.join('')
}

export default HourlyForecastCard
