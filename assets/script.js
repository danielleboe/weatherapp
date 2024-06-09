const cityInput = document.querySelector("#search");
const searchSubmitButton = document.querySelector("#submit");
const msgDiv = document.getElementById("msg");
const todayForecastDiv = document.getElementById("today-forecast");
const cityName = document.querySelector("#city-name");
const cityContainer = document.getElementById("container");

const todayDateAPI = document.getElementById("today");
const todayTempOutput = document.getElementById("today-temp");
const todayIconOutput = document.getElementById("today-icon");
const todayHumidityOutput = document.getElementById("today-humidity");
const todayWindOutput = document.getElementById("today-wind");

function generateSearchId() {
  return crypto.randomUUID();
}

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

searchSubmitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await logDaily();

  const todayDateConverted = dayjs.unix(todayDateAPI.value).format("MM/DD/YYYY");
  const cityInputValue = cityInput.value;
  const todayDateConverted = todayDateAPI.textContent;
  const todayTempValue = todayTempOutput.textContent.split(': ')[1];
  const todayHumidityValue = todayHumidityOutput.textContent.split(': ')[1];
  const todayWindValue = todayWindOutput.textContent.split(': ')[1];
  const todayIconValue = todayIconOutput.src.split("/").pop().split("@")[0];

  let isError = false;

  if (cityInputValue.trim() === "" || !cityInputValue) {
    console.log("city name+++++", cityInputValue);
    displayMessage("error", "City cannot be blank");
    isError = true;
  } else {
    displayMessage("success", "");
  }

  if (!isError) {
    const dailyForecast = {
      todayDate: todayDateConverted,
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
    todayDateAPI.innerText = `${todayDateConverted}`;
    todayTempOutput.innerText = `Temperature: ${todayTempValue}°F`;
    todayWindOutput.innerText = `Wind: ${todayWindValue} MPH`;
    todayHumidityOutput.innerText = `Humidity: ${todayHumidityValue}%`;
  }
});

async function logDaily() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=0aaf60db609b5ed9230d4d741d6c3bfb&units=imperial`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    const todayDateValue = data.dt;
    const todayDateConverted = dayjs.unix(todayDateValue).format("MM/DD/YYYY");
    todayDateAPI.textContent = todayDateConverted;
    console.log(`Date: ${todayDateConverted}`);

    const todayIcon = data.weather[0].icon;
    todayIconOutput.src = `https://openweathermap.org/img/wn/${todayIcon}@2x.png`;
    console.log(`Today Icon: ${todayIcon}`);

    const fahrenheitTemp = data.main.temp;
    todayTempOutput.textContent = `Temperature: ${fahrenheitTemp}°F`;
    console.log(`Today Temperature: ${fahrenheitTemp}°F`);

    const todayHumidity = data.main.humidity;
    todayHumidityOutput.textContent = `Humidity: ${todayHumidity}%`;
    console.log(`Today Humidity: ${todayHumidity}%`);

    const todayWind = data.wind.speed;
    todayWindOutput.textContent = `Wind: ${todayWind} MPH`;
    console.log(`Today Wind: ${todayWind} MPH`);

  } catch (error) {
    console.error("Error fetching weather data:", error);
    todayDateAPI.textContent = "Error fetching date data";
    todayIconOutput.src = "";
    todayTempOutput.textContent = "Error fetching temperature data";
    todayHumidityOutput.textContent = "Error fetching humidity data";
    todayWindOutput.textContent = "Error fetching wind data";
  }
}