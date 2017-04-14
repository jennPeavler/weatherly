import React from 'react'

const DailyForecastCard = ( {weatherObj} ) => {
  return (
    <section>
      {weatherObj.slice(0, 10).map( (hour, index) => {
        return(
          <div key= {index}>
            <h1>DAILY</h1>
            <h3>{hour.temp.english}</h3>
            <img src = {hour.icon_url}/>
            <h5>{hour.FCTTIME.civil}</h5>
          </div>
        )
      })}
    </section>
  )
}

export default DailyForecastCard
