import React from 'react'

const DailyForecastCard = ( {weatherObj} ) => {
  let keys = Object.keys(weatherObj.daily)

  return (
    <section>
      {keys.map( (day, index) => {
        return(
          <div key= {index}>
            <h1>DAILY</h1>
            <h3 id='day'>{weatherObj.daily[day].day}</h3>
            <img src = {weatherObj.daily[day].img} />
            <h5>{weatherObj.daily[day].low}</h5>
            <h5>{weatherObj.daily[day].high}</h5>
          </div>
        )
      })}
    </section>
  )
}

export default DailyForecastCard
