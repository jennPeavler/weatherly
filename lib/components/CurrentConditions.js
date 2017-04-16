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
      <section id='current-conditions'>
        <h2 id ='current-location'>{ weatherObj.current.location }</h2>
        <img id = 'current-image' src = { weatherObj.current.image } />
        <h4 id='day'>Day: { weatherObj.current.day }</h4>
        <h1 id='temp'>Temp: { weatherObj.current.temp }°F</h1>
        <h4 id='low-high'>{ weatherObj.current.low }°F / { weatherObj.current.high }°F</h4>
        <h4 id='description'>{ weatherObj.current.description }</h4>
      </section>
    )
  }
}

export default CurrentConditions
