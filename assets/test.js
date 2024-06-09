// Assuming jsonData contains the JSON response from the API

// Parse the JSON response
const data = JSON.parse(jsonData);

// Extract the list of forecasts
const forecasts = data.list;

// Group forecasts by date
const groupedForecasts = {};
forecasts.forEach(forecast => {
  const date = forecast.dt_txt.split(' ')[0];
  if (!groupedForecasts[date]) {
    groupedForecasts[date] = [];
  }
  groupedForecasts[date].push(forecast);
});

// Extract the forecast for each day
const dailyForecasts = [];
Object.keys(groupedForecasts).forEach(date => {
  // Take the first forecast for each day
  const forecast = groupedForecasts[date][0];
  dailyForecasts.push({
    date: date,
    temperature: forecast.main.temp,
    weather: forecast.weather[0].description
    // Add other properties as needed
  });
});

// Print or use the daily forecasts
console.log(dailyForecasts);
