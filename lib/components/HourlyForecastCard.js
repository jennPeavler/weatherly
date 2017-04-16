import React from 'react'

const HourlyForecastCard = ( {weatherObj} ) => {
  let keys = Object.keys(weatherObj.hourly)

  return (
    <section id='hourly-forecast'>
      {keys.map( (hour, index) => {
        return(
          <div className= 'hourly-forecast-card' key= {index}>
            <h1>HOURLY</h1>
            <h5>{weatherObj.hourly[hour].temp}°F</h5>
            <img src = {weatherObj.hourly[hour].img} />
            <h3 className='time'>{weatherObj.hourly[hour].time}</h3>
          </div>
        )
      })}
    </section>
  )
  // return (
  //   <section>
  //     {Object.keys(weatherObj.hourly).map( (hour, index) => {
  //       return(
  //         <div key= {index}>
  //           <h1>HOURLY</h1>
  //           <h3>{hour.temp}</h3>
  //           <img src = {hour.img}/>
  //           <h5>{hour.time}</h5>
  //         </div>
  //       )
  //     })}
  //   </section>
  // )

  // formatTime(unformattedTime) {
  //   let time = unformattedTime.split('')
  //   time.splice(time.indexOf(':'), 3)
  //   return time.join('')
  // }

}

export default HourlyForecastCard
