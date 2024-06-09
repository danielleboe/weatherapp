const cityInput = document.querySelector("#search");
const searchSubmitButton = document.querySelector("#submit");
const todayTempOutput = document.getElementById("today-temp");
const todayHumidityOutput = document.getElementById("today-humidity");
const todayWindOutput = document.getElementById("today-wind");
const cityName = document.querySelector("#city-name");
const todayDateAPI = document.getElementById("today");
const todayIconOutput = document.getElementById("today-icon");
const searchHistoryContainer = document.getElementById("search-history");

function generateSearchId() {
  return crypto.randomUUID();
}

function displayMessage(type, message) {
  const msgDiv = document.getElementById("msg");
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function saveSearchHistory(city) {
  let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  if (!searchHistory.includes(city)) {
    searchHistory.push(city);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }
}

function displaySearchHistory() {
  let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
  searchHistoryContainer.innerHTML = "";
  searchHistory.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.setAttribute("class","search-line");
    li.addEventListener("click", () => {
      cityInput.value = city;
      searchSubmitButton.click();
    });
    searchHistoryContainer.appendChild(li);
  });
}

searchSubmitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  await logDaily();
  const todayDateValue = dayjs(todayDateAPI.innerText).format("MM/DD/YYYY");
  const cityInputValue = cityInput.value;
  const todayTempValue = todayTempOutput.innerText;
  const todayHumidityValue = todayHumidityOutput.innerText;
  const todayWindValue = todayWindOutput.innerText;
  const todayIconValue = todayIconOutput.src.split("/").pop().split("@")[0];

  let isError = false;

  if (cityInputValue.trim() === "" || !cityInputValue) {
    displayMessage("error", "City name cannot be blank");
    isError = true;
  } else {
    displayMessage("success", "");
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

    // Save search to history
    saveSearchHistory(cityInputValue);
    displaySearchHistory();
  }
});
// end search submit button

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
    todayDateAPI.innerText = todayDateConverted;
    console.log(`Date: ${todayDateConverted}`);

    const todayIcon = data.weather[0].icon;
    todayIconOutput.src = `https://openweathermap.org/img/wn/${todayIcon}@2x.png`;
    console.log(`Today Icon: ${todayIcon}`);

    const fahrenheitTemp = data.main.temp;
    todayTempOutput.innerText = `Temperature: ${fahrenheitTemp}°F`;
    console.log(`Today Temperature: ${fahrenheitTemp}°F`);

    const todayHumidity = data.main.humidity;
    todayHumidityOutput.innerText = `Humidity: ${todayHumidity}%`;
    console.log(`Today Humidity: ${todayHumidity}%`);

    const todayWind = data.wind.speed;
    todayWindOutput.innerText = `Wind: ${todayWind} MPH`;
    console.log(`Today Wind: ${todayWind} MPH`);

  } catch (error) {
    console.error("Error fetching weather data:", error);
    todayDateAPI.innerText = "Error fetching date data";
    todayIconOutput.src = "";
    todayTempOutput.innerText = "Error fetching temperature data";
    todayHumidityOutput.innerText = "Error fetching humidity data";
    todayWindOutput.innerText = "Error fetching wind data";
  }

}

// Display search history on page load
displaySearchHistory();
