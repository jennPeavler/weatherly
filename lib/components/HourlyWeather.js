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
