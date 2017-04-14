import React from 'react'


const CurrentConditions = ( {lookupCity, weatherObj} ) => {
  if(!Object.keys(weatherObj).length) {
    return (
      <div>
        Please enter a valid city and state
      </div>
    )
  }
  else{

    return (
      <section>
        <p>{ weatherObj.current.location }</p>
        <img src = { weatherObj.current.image } />
        <h4>Day: { weatherObj.current.day }</h4>
        <h1>Temp: { weatherObj.current.temp }°F</h1>
        <h4>{ weatherObj.current.low }°F / { weatherObj.current.high }°F</h4>
        <h4>{ weatherObj.current.description }</h4>
      </section>
    )
  }
}

export default CurrentConditions
