import React from 'react'

const HourlyForecastCard = ( {weatherObj} ) => {
  let keys = Object.keys(weatherObj.hourly)

  return (
    <section>
      {keys.map( (hour, index) => {
        return(
          <div key= {index}>
            <h1>HOURLY</h1>
            <h3>{weatherObj.hourly[hour].time}</h3>
            <img src = {weatherObj.hourly[hour].img} />
            <h5>{weatherObj.hourly[hour].temp}</h5>
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
}

export default HourlyForecastCard
