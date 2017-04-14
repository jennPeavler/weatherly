import React from 'react'


const CurrentConditions = ( {lookupCity, weatherObj} ) => {
  if(!Object.keys(weatherObj).length) {
    return (
      <div>
        Please enter a valid city and state
      </div>
    )
  }
  let current = weahterObj.current
  return (
    <section>
      <p>{ current.location }</p>
      <img src = { current.image } />
      <h4>Day: { current.day }</h4>
      <h1>Temp: { current.temp }°F</h1>
      <h4>{ current.low }°F / { current.high }°F</h4>
      <h4>{ current.description }</h4>
    </section>
  )
}

export default CurrentConditions
