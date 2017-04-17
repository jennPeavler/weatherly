
const cleanData = ( weatherObj ) => {

  console.log(weatherObj);

  let currentData = {
    location: weatherObj.current_observation.display_location.full,
    day: weatherObj.current_observation.local_time_rfc822,
    image: weatherObj.current_observation.icon_url,
    temp: weatherObj.current_observation.temp_f,
    high: weatherObj.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: weatherObj.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    description: weatherObj.forecast.txt_forecast.forecastday[0].fcttext
  }

  let hourlyIndex = 1
  let hourlyArray = weatherObj.hourly_forecast.slice(0, 7)
  let hourlyData = hourlyArray.reduce((acc, next) => {
    if (!acc['hour' + hourlyIndex]) {
      acc['hour' + hourlyIndex] = {};
    }
    acc['hour' + hourlyIndex].time = next.FCTTIME.civil;
    acc['hour' + hourlyIndex].img = next.icon_url;
    acc['hour' + hourlyIndex].temp = next.temp.english;
    hourlyIndex ++
    return acc;
  }, {})

  let dailyIndex = 1
  let dailyArray = weatherObj.forecast.simpleforecast.forecastday.slice(0, 10)
  let dailyData = dailyArray.reduce((acc, next) => {
    if (!acc['day' + dailyIndex]) {
      acc['day' + dailyIndex] = {};
    }
    acc['day' + dailyIndex].day = next.date.weekday;
    acc['day' + dailyIndex].img = next.icon_url;
    acc['day' + dailyIndex].low = next.low.fahrenheit;
    acc['day' + dailyIndex].high = next.high.fahrenheit;
    dailyIndex++
    return acc;
  }, {})

  return {
    current: currentData,
    hourly: hourlyData,
    daily: dailyData
  }
}

export default cleanData
