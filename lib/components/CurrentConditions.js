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
          <h2 id = 'current-city'>{ weatherObj.current.location }</h2>
          <div id = 'img-temp-container'>
            <div id = 'current-temp-container'>
              <h1 className = 'current-temp-class'>{ weatherObj.current.temp }</h1>
              <h1 className = 'current-temp-class'>°F</h1>
            </div>
            <img id = 'current-img' src ={ weatherObj.current.image }/>
            <div id = 'high-low-container'>
              <h4 className ='high-temp' id = 'high'>{ weatherObj.current.high }</h4>
              <h4 className = 'high-temp'>°F</h4>
              <h4 className = 'low-temp slash'> / </h4>
              <h4 className = 'low-temp' id = 'low'>{ weatherObj.current.low }</h4>
              <h4 className = 'low-temp'>°F </h4>
            </div>
          </div>
          <h4 id = 'current-day'>{ formatDate(weatherObj.current.day) }</h4>
          <h4 id = 'description'>{ weatherObj.current.description }</h4>
        </div>
      </section>
    )
  }
}

const formatDate = (unformattedDate) => {
  var date = unformattedDate.split('');
  var index = 0;
  var spaceIndices = [];
  while ((index = date.indexOf(' ', index + 1)) > 0) {
      spaceIndices.push(index);
  }
  var fourthSpaceIndex = spaceIndices[3]
  return date.slice(0, fourthSpaceIndex).join('')
}

export default CurrentConditions
