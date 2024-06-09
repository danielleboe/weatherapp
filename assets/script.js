const cityInput = document.querySelector("#search");
const searchSubmitButton = document.querySelector("#submit");
const todayTempOutput = document.getElementById("today-temp");
const todayForecastDiv = document.getElementById("today-forecast");
const msgDiv = document.getElementById("msg");
const todayHumidityOutput = document.getElementById("today-humidity");
const todayWindOutput = document.getElementById("today-wind");
const cityName = document.querySelector("#city-name");
const cityContainer = document.getElementById("container");
const todayDateAPI = document.getElementById("today");
const todayIconOutput = document.getElementById("today-icon");

function generateSearchId() {
  return crypto.randomUUID();
}

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

// const exerciseDate = dayjs(
//   lastExerciseDate.exerciseDateForm,
//   "MMM DD,YYYY")

searchSubmitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await logDaily();
  const todayDateValue = dayjs(todayDateAPI.value).format("MM/DD/YYYY");
  const cityInputValue = cityInput.value;
  const todayTempValue = todayTempOutput.value;
  const todayHumidityValue = todayHumidityOutput.value;
  const todayWindValue = todayWindOutput.value;
  const todayIconValue = todayIconOutput.value;

  let isError = false;

  if (cityInputValue.trim() === "" || !cityInputValue) {
    console.log("city name+++++", cityInputValue);
    displayMessage("error", "Exercise cannot be blank");
    isError = true;
  } else {
    displayMessage("success", "Submitted successfully");
  }
  if (!isError) {
    const dailyForecast = {
      todayDate: todayDateValue,
      citySubmit: cityInputValue,
      dailyTempValue: todayTempValue,
      dailyHumidityValue: todayHumidityValue,
      dailyWindValue: todayWindValue,
      todayIconValue: todayIconValue,
      dttm: new Date(),
      searchId: generateSearchId(),
    };

    let dailyWeather = JSON.parse(localStorage.getItem("dailyWeather")) || [];
    dailyWeather.push(dailyForecast);
    localStorage.setItem("dailyWeather", JSON.stringify(dailyWeather));

    cityName.innerText = `${cityInputValue}`;
    todayDateAPI.innerText = `${todayDateValue}`;
    document.getElementById(
      "today-icon"
    ).src = `https://openweathermap.org/img/wn/${todayIconValue}@2x.png`;
    todayTempOutput.innerText = `Temperature: ${todayTempValue}°F`;
    todayWindOutput.innerText = `Wind: ${todayWindValue} MPH`;
    todayHumidityOutput.innerText = `Humidity: ${todayHumidityValue}%`;
  }
});
// end search submit button

async function logDaily() {
  try {
    //fetch daily weather data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput.value}&cnt=1&appid=0aaf60db609b5ed9230d4d741d6c3bfb&units=imperial`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    //Today's Date
    if (data.list && data.list.length > 0 && data.list[0].dt) {
      const todayDateValue = data.list[0].dt;
      const todayDateConverted = dayjs.unix(todayDateValue).format("MM/DD/YYYY");
      // todayDateAPI.value = todayDateValue; // Display the humidity
      console.log(`Date: ${todayDateConverted}`);
    } else {
      todayDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //Today's Icon
    if (
      data.list &&
      data.list.length > 0 &&
      data.list[0].weather &&
      data.list[0].weather.length > 0
    ) {
      const todayIcon = data.list[0].weather[0].icon; // Accessing the first element in the weather array
      todayIconOutput.value = todayIcon; // Display the humidity
      console.log(`Today Icon: ${todayIcon}`);
    } else {
      todayIconOutput.value = "No data found"; // Handle case where no items are found
    }

    //Today's temp//
    if (data.list && data.list.length > 0 && data.list[0].main) {
      const fahrenheitTemp = data.list[0].main.temp;
      todayTempOutput.value = fahrenheitTemp; // Display the humidity
      console.log(`Today Humidity: ${fahrenheitTemp}%`);
    } else {
      todayTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //Today's humidity//
    if (data.list && data.list.length > 0 && data.list[0].main) {
      const todayHumidity = data.list[0].main.humidity;
      todayHumidityOutput.value = todayHumidity; // Display the humidity
      console.log(`Today Humidity: ${todayHumidity}%`);
    } else {
      todayHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //Today's Wind
    if (data.list && data.list.length > 0 && data.list[0].wind) {
      const todayWind = data.list[0].wind.speed;
      todayWindOutput.value = todayWind; // Display the humidity
      console.log(`Today Wind: ${todayWind} MPH`);
    } else {
      todayWindOutput.value = "No data found"; // Handle case where no items are found
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);

    todayDateAPI.value = "Error fetching date data"; // Display error message in the field
    todayIconOutput.value = "Error fetching icon data"; // Display error message in the field
    todayTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    todayHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    todayWindOutput.value = "Error fetching daily wind data"; // Display error message in the field
  }
  ////////
}
// Function to convert Kelvin to Fahrenheit
// function kelvinToFahrenheit(kelvin) {
//   return ((kelvin - 273.15) * 9) / 5 + 32;
// }

// const dailyTempHTML = document.createElement("div");
// const dailyHumidityHTML = document.createElement("div");
