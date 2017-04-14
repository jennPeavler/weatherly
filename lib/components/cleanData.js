
const cleanData = ( weatherObj ) => {

let currentData = {
  location: weatherObj.current_observation.display_location.full,
  day: weatherObj.current_observation.local_time_rfc822,
  image: weatherObj.current_observation.icon_url,
  temp: weatherObj.current_observation.temp_f,
  high: weatherObj.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  low: weatherObj.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  description: weatherObj.forecast.txt_forecast.forecastday[0].fcttext
}

// let hourlyData = weatherObj.hourly_forecast.slice(0,7).reduce((acc, next) => {
//   acc['hour' + i]:
//     time: next.FCCTIME.civil,
//     img:
//     temp:
//   }
//     return acc;
//   },{})

let hourlyData = {
  hour1: {
    time: weatherObj.hourly_forecast[0].FCTTIME.civil,
    img: weatherObj.hourly_forecast[0].icon_url,
    temp: weatherObj.hourly_forecast[0].temp.english
  },
  hour2: {
    time: weatherObj.hourly_forecast[1].FCTTIME.civil,
    img: weatherObj.hourly_forecast[1].icon_url,
    temp: weatherObj.hourly_forecast[1].temp.english
  },
  hour3: {
    time: weatherObj.hourly_forecast[2].FCTTIME.civil,
    img: weatherObj.hourly_forecast[2].icon_url,
    temp: weatherObj.hourly_forecast[2].temp.english
  },
  hour4: {
    time: weatherObj.hourly_forecast[3].FCTTIME.civil,
    img: weatherObj.hourly_forecast[3].icon_url,
    temp: weatherObj.hourly_forecast[3].temp.english
  },
  hour5: {
    time: weatherObj.hourly_forecast[4].FCTTIME.civil,
    img: weatherObj.hourly_forecast[4].icon_url,
    temp: weatherObj.hourly_forecast[4].temp.english
  },
  hour6: {
    time: weatherObj.hourly_forecast[5].FCTTIME.civil,
    img: weatherObj.hourly_forecast[5].icon_url,
    temp: weatherObj.hourly_forecast[5].temp.english
  },
  hour7: {
    time: weatherObj.hourly_forecast[6].FCTTIME.civil,
    img: weatherObj.hourly_forecast[6].icon_url,
    temp: weatherObj.hourly_forecast[6].temp.english
  }
}

let dailyData = {
  day1: {
    day: weatherObj.forecast.simpleforecast.forecastday[0].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[0].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  },
  day2: {
    day: weatherObj.forecast.simpleforecast.forecastday[1].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[1].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[1].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[1].high.fahrenheit,
  },
  day3: {
    day: weatherObj.forecast.simpleforecast.forecastday[2].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[2].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[2].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[2].high.fahrenheit,
  },
  day4: {
    day: weatherObj.forecast.simpleforecast.forecastday[3].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[3].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[3].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[3].high.fahrenheit,
  },
  day5: {
    day: weatherObj.forecast.simpleforecast.forecastday[4].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[4].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[4].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[4].high.fahrenheit,
  },
  day6: {
    day: weatherObj.forecast.simpleforecast.forecastday[5].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[5].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[5].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[5].high.fahrenheit,
  },
  day7: {
    day: weatherObj.forecast.simpleforecast.forecastday[6].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[6].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[6].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[6].high.fahrenheit,
  },
  day8: {
    day: weatherObj.forecast.simpleforecast.forecastday[7].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[7].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[7].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[7].high.fahrenheit,
  },
  day9: {
    day: weatherObj.forecast.simpleforecast.forecastday[8].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[8].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[8].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[8].high.fahrenheit,
  },
  day10: {
    day: weatherObj.forecast.simpleforecast.forecastday[9].date.weekday,
    img: weatherObj.forecast.simpleforecast.forecastday[9].icon_url,
    low: weatherObj.forecast.simpleforecast.forecastday[9].low.fahrenheit,
    high: weatherObj.forecast.simpleforecast.forecastday[9].high.fahrenheit,
  }

}

return {
  current: currentData,
  hourly: hourlyData,
  daily: dailyData
}

}

export default cleanData
