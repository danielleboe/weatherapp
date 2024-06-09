//one for both - can remove when scripts are combined
// const cityInput = document.querySelector("#search");
// const searchSubmitButton = document.querySelector("#submit");
// const msgDiv = document.getElementById("msg");
// const cityName = document.querySelector("#city-name");
// const cityContainer = document.getElementById("container");

//day One
const dayOneForecastDiv = document.getElementById("dayone-forecast");
const dayOneDateAPI = document.getElementById("dayone-date");
const dayOneIconOutput = document.getElementById("dayone-icon");
const dayOneTempOutput = document.getElementById("dayone-temp");
const dayOneHumidityOutput = document.getElementById("dayone-humidity");
const dayOneWindOutput = document.getElementById("dayone-wind");

//day Two
const dayTwoForecastDiv = document.getElementById("daytwo-forecast");
const dayTwoDateAPI = document.getElementById("daytwo-date");
const dayTwoIconOutput = document.getElementById("daytwo-icon");
const dayTwoTempOutput = document.getElementById("daytwo-temp");
const dayTwoHumidityOutput = document.getElementById("daytwo-humidity");
const dayTwoWindOutput = document.getElementById("daytwo-wind");

//day Three
const dayThreeForecastDiv = document.getElementById("daythree-forecast");
const dayThreeDateAPI = document.getElementById("daythree-date");
const dayThreeIconOutput = document.getElementById("daythree-icon");
const dayThreeTempOutput = document.getElementById("daythree-temp");
const dayThreeHumidityOutput = document.getElementById("daythree-humidity");
const dayThreeWindOutput = document.getElementById("daythree-wind");

//day Four
const dayFourForecastDiv = document.getElementById("dayfour-forecast");
const dayFourDateAPI = document.getElementById("dayfour-date");
const dayFourIconOutput = document.getElementById("dayfour-icon");
const dayFourTempOutput = document.getElementById("dayfour-temp");
const dayFourHumidityOutput = document.getElementById("dayfour-humidity");
const dayFourWindOutput = document.getElementById("dayfour-wind");

//day Five
const dayFiveForecastDiv = document.getElementById("dayfive-forecast");
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
  const dayOneDateValue = dayjs(dayOneDateAPI.value).format("MM/DD/YYYY");
  const dayOneTempValue = dayOneTempOutput.value;
  const dayOneHumidityValue = dayOneHumidityOutput.value;
  const dayOneWindValue = dayOneWindOutput.value;
  const dayOneIconValue = dayOneIconOutput.value;

  //day2
  const dayTwoDateValue = dayjs(dayTwoDateAPI.value).format("MM/DD/YYYY");
  const dayTwoTempValue = dayTwoTempOutput.value;
  const dayTwoHumidityValue = dayTwoHumidityOutput.value;
  const dayTwoWindValue = dayTwoWindOutput.value;
  const dayTwoIconValue = dayTwoIconOutput.value;

  let isError = false;

  if (cityInputValue.trim() === "" || !cityInputValue) {
    console.log("city name+++++", cityInputValue);
    displayMessage("error", "Exercise cannot be blank");
    isError = true;
  } else {
    displayMessage("success", "Submitted successfully");
  }
  if (!isError) {
    const weeklyForecast = {
      dayOneDate: dayOneDateValue,
      citySubmit: cityInputValue,
      dailyTempValue: dayOneTempValue,
      dailyHumidityValue: dayOneHumidityValue,
      dailyWindValue: dayOneWindValue,
      dayOneIconValue: dayOneIconValue,
      dttm: new Date(),
      searchId: generateSearchId(),
    };

    let weeklyWeather = JSON.parse(localStorage.getItem("weeklyWeather")) || [];
    weeklyWeather.push(dailyForecast);
    localStorage.setItem("weeklyWeather", JSON.stringify(weeklyWeather));

    cityName.innerText = `${cityInputValue}`;
    dayOneDateAPI.innerText = `${dayOneDateValue}`;
    document.getElementById("dayone-icon").src = `https://openweathermap.org/img/wn/${dayOneIconValue}@2x.png`;
    dayOneTempOutput.innerText = `Temperature: ${dayOneTempValue}°F`;
    dayOneWindOutput.innerText = `Wind: ${dayOneWindValue} MPH`;
    dayOneHumidityOutput.innerText = `Humidity: ${dayOneHumidityValue}%`;
  }
});
// end search submit button

async function logWeekly() {
  try {
    //fetch daily weather data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&appid=0aaf60db609b5ed9230d4d741d6c3bfb&units=imperial`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    //dayOne's Date
    if (data.list && data.list.length > 0 && data.list[1].dt) {
      const dayOneDateValue = data.list[1].dt;
      const dayOneDateConverted = dayjs.unix(dayOneDateValue).format("MM/DD/YYYY");
      // dayOneDateAPI.value = dayOneDateValue; // Display the humidity
      console.log(`Date: ${dayOneDateConverted}`);
    } else {
      dayOneDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's Icon
    if (data.list && data.list.length > 0 && data.list[1].weather && data.list[1].weather.length > 0) {
      const dayOneIcon = data.list[1].weather[0].icon; // Accessing the first element in the weather array
      dayOneIconOutput.value = dayOneIcon; // Display the humidity
      console.log(`dayOne Icon: ${dayOneIcon}`);
    } else {
      dayOneIconOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's temp//
    if (data.list && data.list.length > 0 && data.list[1].main) {
      const dayOneTemp = data.list[1].main.temp;
      dayOneTempOutput.value = dayOneTemp.toFixed(2); // Display the temp value in Fahrenheit
      console.log(`dayOne fahrenheitTemp: ${dayOneTemp}°F`);
    } else {
      dayOneTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's humidity//
    if (data.list && data.list.length > 0 && data.list[1].main) {
      const dayOneHumidity = data.list[1].main.humidity;
      dayOneHumidityOutput.value = dayOneHumidity; // Display the humidity
      console.log(`dayOne Humidity: ${dayOneHumidity}%`);
    } else {
      dayOneHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's Wind
    if (data.list && data.list.length > 0 && data.list[1].wind) {
      const dayOneWind = data.list[1].wind.speed;
      dayOneWindOutput.value = dayOneWind; // Display the humidity
      console.log(`dayOne Wind: ${dayOneWind} MPH`);
    } else {
      dayOneWindOutput.value = "No data found"; // Handle case where no items are found
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);

    dayOneDateAPI.value = "Error fetching date data"; // Display error message in the field
    dayOneIconOutput.value =  "Error fetching icon data"; // Display error message in the field
    dayOneTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    dayOneHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    dayOneWindOutput.value = "Error fetching daily wind data"; // Display error message in the field
  }
  ////////
}
// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

// const dailyTempHTML = document.createElement("div");
// const dailyHumidityHTML = document.createElement("div");
