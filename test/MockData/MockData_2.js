const MockData_2 = ( ) => {

let currentData = {
  location: 'Chicago, IL',
  day: 'Monday',
  image: 'https://pixabay.com/p-284291/?no_redirect',
  temp: '80',
  high: '85',
  low: '70',
  description: 'cloudy with a chance of sky falling'
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
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  },
  hour2: {
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  },
  hour3: {
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  },
  hour4: {
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  },
  hour5: {
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  },
  hour6: {
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  },
  hour7: {
    time: '5:00',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    temp: '80'
  }
}

let dailyData = {
  day1: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day2: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day3: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day4: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day5: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day6: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day7: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day8: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day9: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  },
  day10: {
    day: 'Monday',
    img: 'https://pixabay.com/p-284291/?no_redirect',
    low: '20',
    high: '58',
  }

}

return {
  current: currentData,
  hourly: hourlyData,
  daily: dailyData
}

}

export default MockData_2
