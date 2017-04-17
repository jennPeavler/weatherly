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
      <section id = 'current-container'>
        <div id = 'current-location'>
          <h2>{ weatherObj.current.location }</h2>
          <img id = 'current-img' src ={ weatherObj.current.image }/>
          <h4>{ weatherObj.current.day }</h4>
        </div>
        <div id = 'current-temp-container'>
          <div id = 'current-temp'>
            <h1 className = 'current-temp-class'>{ weatherObj.current.temp }</h1>
            <h1 className = 'current-temp-class'>°F</h1>
          </div>
          <div id = 'high-low-container'>
            <h4 className ='high-temp'>{ weatherObj.current.low }</h4>
            <h4 className = 'high-temp'>°F</h4>
            <h4 className = 'low-temp slash'> / </h4>
            <h4 className = 'low-temp'>{ weatherObj.current.high }</h4>
            <h4 className = 'low-temp'>°F </h4>
          </div>
        </div>
        <div id = 'current-description'>
          <h4 id = 'description'>{ weatherObj.current.description }</h4>
        </div>
      </section>
    )
  }
}

export default CurrentConditions
