// Element selectors for day one
const dayOneDateAPI = document.getElementById("dayone-date");
const dayOneIconOutput = document.getElementById("dayone-icon");
const dayOneTempOutput = document.getElementById("dayone-temp");
const dayOneHumidityOutput = document.getElementById("dayone-humidity");
const dayOneWindOutput = document.getElementById("dayone-wind");

// Element selectors for day two
const dayTwoDateAPI = document.getElementById("daytwo-date");
const dayTwoIconOutput = document.getElementById("daytwo-icon");
const dayTwoTempOutput = document.getElementById("daytwo-temp");
const dayTwoHumidityOutput = document.getElementById("daytwo-humidity");
const dayTwoWindOutput = document.getElementById("daytwo-wind");

// Element selectors for day three
const dayThreeDateAPI = document.getElementById("daythree-date");
const dayThreeIconOutput = document.getElementById("daythree-icon");
const dayThreeTempOutput = document.getElementById("daythree-temp");
const dayThreeHumidityOutput = document.getElementById("daythree-humidity");
const dayThreeWindOutput = document.getElementById("daythree-wind");

// Element selectors for day four
const dayFourDateAPI = document.getElementById("dayfour-date");
const dayFourIconOutput = document.getElementById("dayfour-icon");
const dayFourTempOutput = document.getElementById("dayfour-temp");
const dayFourHumidityOutput = document.getElementById("dayfour-humidity");
const dayFourWindOutput = document.getElementById("dayfour-wind");

// Element selectors for day five
const dayFiveDateAPI = document.getElementById("dayfive-date");
const dayFiveIconOutput = document.getElementById("dayfive-icon");
const dayFiveTempOutput = document.getElementById("dayfive-temp");
const dayFiveHumidityOutput = document.getElementById("dayfive-humidity");
const dayFiveWindOutput = document.getElementById("dayfive-wind");

searchSubmitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await logWeekly();
  const cityInputValue = cityInput.value;

  //day1
  const dayOneDateValue = dayOneDateAPI.innerText;
  const dayOneTempValue = dayOneTempOutput.innerText.split(" ")[1];
  const dayOneHumidityValue = dayOneHumidityOutput.innerText.split(" ")[1];
  const dayOneWindValue = dayOneWindOutput.innerText.split(" ")[1];
  const dayOneIconValue = dayOneIconOutput.src.split("/").pop().split("@")[0];

  //day2
  const dayTwoDateValue = dayTwoDateAPI.innerText;
  const dayTwoTempValue = dayTwoTempOutput.innerText.split(" ")[1];
  const dayTwoHumidityValue = dayTwoHumidityOutput.innerText.split(" ")[1];
  const dayTwoWindValue = dayTwoWindOutput.innerText.split(" ")[1];
  const dayTwoIconValue = dayTwoIconOutput.src.split("/").pop().split("@")[0];

  //day3
  const dayThreeDateValue = dayThreeDateAPI.innerText;
  const dayThreeTempValue = dayThreeTempOutput.innerText.split(" ")[1];
  const dayThreeHumidityValue = dayThreeHumidityOutput.innerText.split(" ")[1];
  const dayThreeWindValue = dayThreeWindOutput.innerText.split(" ")[1];
  const dayThreeIconValue = dayThreeIconOutput.src.split("/").pop().split("@")[0];

  //day4
  const dayFourDateValue = dayFourDateAPI.innerText;
  const dayFourTempValue = dayFourTempOutput.innerText.split(" ")[1];
  const dayFourHumidityValue = dayFourHumidityOutput.innerText.split(" ")[1];
  const dayFourWindValue = dayFourWindOutput.innerText.split(" ")[1];
  const dayFourIconValue = dayFourIconOutput.src.split("/").pop().split("@")[0];

  //day5
  const dayFiveDateValue = dayFiveDateAPI.innerText;
  const dayFiveTempValue = dayFiveTempOutput.innerText.split(" ")[1];
  const dayFiveHumidityValue = dayFiveHumidityOutput.innerText.split(" ")[1];
  const dayFiveWindValue = dayFiveWindOutput.innerText.split(" ")[1];
  const dayFiveIconValue = dayFiveIconOutput.src.split("/").pop().split("@")[0];

  const weeklyForecast = {
    citySubmit: cityInputValue,
    dttm: new Date(),
    searchId: generateSearchId(),
    dayOneDate: dayOneDateValue,
    dayOneTempValue: dayOneTempValue,
    dayOneHumidityValue: dayOneHumidityValue,
    dayOneWindValue: dayOneWindValue,
    dayOneIconValue: dayOneIconValue,
    dayTwoDate: dayTwoDateValue,
    dayTwoTempValue: dayTwoTempValue,
    dayTwoHumidityValue: dayTwoHumidityValue,
    dayTwoWindValue: dayTwoWindValue,
    dayTwoIconValue: dayTwoIconValue,
    dayThreeDate: dayThreeDateValue,
    dayThreeTempValue: dayThreeTempValue,
    dayThreeHumidityValue: dayThreeHumidityValue,
    dayThreeWindValue: dayThreeWindValue,
    dayThreeIconValue: dayThreeIconValue,
    dayFourDate: dayFourDateValue,
    dayFourTempValue: dayFourTempValue,
    dayFourHumidityValue: dayFourHumidityValue,
    dayFourWindValue: dayFourWindValue,
    dayFourIconValue: dayFourIconValue,
    dayFiveDate: dayFiveDateValue,
    dayFiveTempValue: dayFiveTempValue,
    dayFiveHumidityValue: dayFiveHumidityValue,
    dayFiveWindValue: dayFiveWindValue,
    dayFiveIconValue: dayFiveIconValue,
  };

  let weeklyWeather = JSON.parse(localStorage.getItem("weeklyWeather")) || [];
  weeklyWeather.push(weeklyForecast);
  localStorage.setItem("weeklyWeather", JSON.stringify(weeklyWeather));

  // Update UI with forecast data
  updateForecastUI();
});

async function logWeekly() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=0aaf60db609b5ed9230d4d741d6c3bfb&units=imperial`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const dailyForecasts = filterDailyForecasts(data.list);

    if (dailyForecasts.length >= 5) {
      updateDayForecast(dailyForecasts[0], dayOneDateAPI, dayOneIconOutput, dayOneTempOutput, dayOneHumidityOutput, dayOneWindOutput);
      updateDayForecast(dailyForecasts[1], dayTwoDateAPI, dayTwoIconOutput, dayTwoTempOutput, dayTwoHumidityOutput, dayTwoWindOutput);
      updateDayForecast(dailyForecasts[2], dayThreeDateAPI, dayThreeIconOutput, dayThreeTempOutput, dayThreeHumidityOutput, dayThreeWindOutput);
      updateDayForecast(dailyForecasts[3], dayFourDateAPI, dayFourIconOutput, dayFourTempOutput, dayFourHumidityOutput, dayFourWindOutput);
      updateDayForecast(dailyForecasts[4], dayFiveDateAPI, dayFiveIconOutput, dayFiveTempOutput, dayFiveHumidityOutput, dayFiveWindOutput);
    } else {
      throw new Error('Not enough forecast data');
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    handleError();
  }
}

function filterDailyForecasts(forecasts) {
  const dailyForecasts = [];
  const seenDates = new Set();
  const today = dayjs().format("YYYY-MM-DD");

  for (const forecast of forecasts) {
    const date = dayjs.unix(forecast.dt).format("YYYY-MM-DD");
    if (date !== today && !seenDates.has(date)) {
      seenDates.add(date);
      dailyForecasts.push(forecast);
    }
    if (dailyForecasts.length >= 5) break;
  }

  return dailyForecasts;
}

function updateDayForecast(forecast, dateAPI, iconOutput, tempOutput, humidityOutput, windOutput) {
  const dateValue = dayjs.unix(forecast.dt).format("MM/DD/YYYY");
  const iconValue = forecast.weather[0].icon;
  const tempValue = forecast.main.temp.toFixed(2);
  const humidityValue = forecast.main.humidity;
  const windValue = forecast.wind.speed;

  dateAPI.innerText = dateValue;
  iconOutput.src = `https://openweathermap.org/img/wn/${iconValue}@2x.png`;
  tempOutput.innerText = `Temperature: ${tempValue}°F`;
  humidityOutput.innerText = `Humidity: ${humidityValue}%`;
  windOutput.innerText = `Wind: ${windValue} MPH`;

  console.log(`Date: ${dateValue}`);
  console.log(`Icon: ${iconValue}`);
  console.log(`Temperature: ${tempValue}°F`);
  console.log(`Humidity: ${humidityValue}%`);
  console.log(`Wind: ${windValue} MPH`);
}

function handleError() {
  const elements = [dayOneDateAPI, dayTwoDateAPI, dayThreeDateAPI, dayFourDateAPI, dayFiveDateAPI,
                    dayOneIconOutput, dayTwoIconOutput, dayThreeIconOutput, dayFourIconOutput, dayFiveIconOutput,
                    dayOneTempOutput, dayTwoTempOutput, dayThreeTempOutput, dayFourTempOutput, dayFiveTempOutput,
                    dayOneHumidityOutput, dayTwoHumidityOutput, dayThreeHumidityOutput, dayFourHumidityOutput, dayFiveHumidityOutput,
                    dayOneWindOutput, dayTwoWindOutput, dayThreeWindOutput, dayFourWindOutput, dayFiveWindOutput];

  elements.forEach(el => el.innerText = "Error fetching data");
}

function generateSearchId() {
  return Math.floor(Math.random() * Date.now());
}

function updateForecastUI() {
  // Update the UI with the forecast data from localStorage or directly from the response
  // This function should be implemented based on your specific UI requirements
}
