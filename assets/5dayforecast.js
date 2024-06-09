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

  //day3
  const dayThreeDateValue = dayjs(dayThreeDateAPI.value).format("MM/DD/YYYY");
  const dayThreeTempValue = dayThreeTempOutput.value;
  const dayThreeHumidityValue = dayThreeHumidityOutput.value;
  const dayThreeWindValue = dayThreeWindOutput.value;
  const dayThreeIconValue = dayThreeIconOutput.value;

  //day4
  const dayFourDateValue = dayjs(dayFourDateAPI.value).format("MM/DD/YYYY");
  const dayFourTempValue = dayFourTempOutput.value;
  const dayFourHumidityValue = dayFourHumidityOutput.value;
  const dayFourWindValue = dayFourWindOutput.value;
  const dayFourIconValue = dayFourIconOutput.value;

  //day5
  const dayFiveDateValue = dayjs(dayFiveDateAPI.value).format("MM/DD/YYYY");
  const dayFiveTempValue = dayFiveTempOutput.value;
  const dayFiveHumidityValue = dayFiveHumidityOutput.value;
  const dayFiveWindValue = dayFiveWindOutput.value;
  const dayFiveIconValue = dayFiveIconOutput.value;

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

    // cityName.innerText = `${cityInputValue}`;

    dayOneDateAPI.innerText = `${dayOneDateValue}`;
    dayOneIconOutput.src = `https://openweathermap.org/img/wn/${dayOneIconValue}@2x.png`;
    dayOneTempOutput.innerText = `Temperature: ${dayOneTempValue}°F`;
    dayOneWindOutput.innerText = `Wind: ${dayOneWindValue} MPH`;
    dayOneHumidityOutput.innerText = `Humidity: ${dayOneHumidityValue}%`;

    //day 2
    dayTwoDateAPI.innerText = `${dayTwoDateValue}`;
    document.getElementById("daytwo-icon").src = `https://openweathermap.org/img/wn/${dayTwoIconValue}@2x.png`;
    dayTwoTempOutput.innerText = `Temperature: ${dayTwoTempValue}°F`;
    dayTwoWindOutput.innerText = `Wind: ${dayTwoWindValue} MPH`;
    dayTwoHumidityOutput.innerText = `Humidity: ${dayTwoHumidityValue}%`;

    dayThreeDateAPI.innerText = `${dayThreeDateValue}`;
    document.getElementById(
      "daythree-icon"
    ).src = `https://openweathermap.org/img/wn/${dayThreeIconValue}@2x.png`;
    dayThreeTempOutput.innerText = `Temperature: ${dayThreeTempValue}°F`;
    dayThreeWindOutput.innerText = `Wind: ${dayThreeWindValue} MPH`;
    dayThreeHumidityOutput.innerText = `Humidity: ${dayThreeHumidityValue}%`;

    dayFourDateAPI.innerText = `${dayFourDateValue}`;
    document.getElementById(
      "dayfour-icon"
    ).src = `https://openweathermap.org/img/wn/${dayFourIconValue}@2x.png`;
    dayFourTempOutput.innerText = `Temperature: ${dayFourTempValue}°F`;
    dayFourWindOutput.innerText = `Wind: ${dayFourWindValue} MPH`;
    dayFourHumidityOutput.innerText = `Humidity: ${dayFourHumidityValue}%`;

    dayFiveDateAPI.innerText = `${dayFiveDateValue}`;
    document.getElementById(
      "dayfive-icon"
    ).src = `https://openweathermap.org/img/wn/${dayFiveIconValue}@2x.png`;
    dayFiveTempOutput.innerText = `Temperature: ${dayFiveTempValue}°F`;
    dayFiveWindOutput.innerText = `Wind: ${dayFiveWindValue} MPH`;
    dayFiveHumidityOutput.innerText = `Humidity: ${dayFiveHumidityValue}%`;
  
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

    ///Day1

    //dayOne's Date
    if (data.list && data.list.length > 1 && data.list[1].dt) {
      const dayOneDateValue = data.list[1].dt;
      const dayOneDateConverted = dayjs.unix(dayOneDateValue).format("MM/DD/YYYY");
      // dayOneDateAPI.value = dayOneDateValue; // Display the humidity
      console.log(`Day One Date: ${dayOneDateConverted}`);
    } else {
      dayOneDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's Icon
    if (
      data.list && data.list.length > 0 && data.list[1].weather && data.list[1].weather.length > 0
    ) {
      const dayOneIcon = data.list[0].weather[0].icon; // Accessing the first element in the weather array
      dayOneIconOutput.value = dayOneIcon; // Display the humidity
      console.log(`dayOne Icon: ${dayOneIcon}`);
    } else {
      dayOneIconOutput.value = "No data found"; // Handle case where no items are found
    }


    //dayOne's temp//
    if (data.list && data.list.length > 1 && data.list[1].main) {
      const dayOneTemp = data.list[1].main.temp;
      dayOneTempOutput.value = dayOneTemp.toFixed(2); // Display the temp value in Fahrenheit
      console.log(`dayOne fahrenheitTemp: ${dayOneTemp}°F`);
    } else {
      dayOneTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's humidity//
    if (data.list && data.list.length > 1 && data.list[1].main) {
      const dayOneHumidity = data.list[1].main.humidity;
      dayOneHumidityOutput.value = dayOneHumidity; // Display the humidity
      console.log(`dayOne Humidity: ${dayOneHumidity}%`);
    } else {
      dayOneHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayOne's Wind
    if (data.list && data.list.length > 1 && data.list[1].wind) {
      const dayOneWind = data.list[1].wind.speed;
      dayOneWindOutput.value = dayOneWind; // Display the humidity
      console.log(`dayOne Wind: ${dayOneWind} MPH`);
    } else {
      dayOneWindOutput.value = "No data found"; // Handle case where no items are found
    }

    //Day2

    // //dayTwo's Date
    if (data.list && data.list.length > 1 && data.list[2].dt) {
      const dayTwoDateValue = data.list[2].dt;
      const dayTwoDateConverted = dayjs.unix(dayTwoDateValue)
.format("MM/DD/YYYY");
      console.log(`Date: ${dayTwoDateConverted}`);
    } else {
      dayTwoDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //dayTwo's Icon
    if (
      data.list &&
      data.list.length > 0 &&
      data.list[2].weather &&
      data.list[2].weather.length > 0
    ) {
      const dayTwoIcon = data.list[2].weather[0].icon; // Accessing the first element in the weather array
      dayTwoIconOutput.value = dayTwoIcon; // Display the humidity
      console.log(`dayTwo Icon: ${dayTwoIcon}`);
    } else {
      dayTwoIconOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayTwo's temp//
    if (data.list && data.list.length > 0 && data.list[2].main) {
      const dayTwoTemp = data.list[2].main.temp;
      dayTwoTempOutput.value = dayTwoTemp.toFixed(2); // Display the temp value in Fahrenheit
      console.log(`dayTwo fahrenheitTemp: ${dayTwoTemp}°F`);
    } else {
      dayTwoTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayTwo's humidity//
    if (data.list && data.list.length > 0 && data.list[2].main) {
      const dayTwoHumidity = data.list[2].main.humidity;
      dayTwoHumidityOutput.value = dayTwoHumidity; // Display the humidity
      console.log(`dayTwo Humidity: ${dayTwoHumidity}%`);
    } else {
      dayTwoHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayTwo's Wind
    if (data.list && data.list.length > 0 && data.list[2].wind) {
      const dayTwoWind = data.list[2].wind.speed;
      dayTwoWindOutput.value = dayTwoWind; // Display the humidity
      console.log(`dayTwo Wind: ${dayTwoWind} MPH`);
    } else {
      dayTwoWindOutput.value = "No data found"; // Handle case where no items are found
    }

    //day 3

    //dayThree's Date
    if (data.list && data.list.length > 0 && data.list[3].dt) {
      const dayThreeDateValue = data.list[3].dt;
      const dayThreeDateConverted = dayjs
        .unix(dayThreeDateValue)
        .format("MM/DD/YYYY");
      // dayThreeDateAPI.value = dayThreeDateValue; // Display the humidity
      console.log(`Date: ${dayThreeDateConverted}`);
    } else {
      dayThreeDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //dayThree's Icon
    if (
      data.list &&
      data.list.length > 0 &&
      data.list[3].weather &&
      data.list[3].weather.length > 0
    ) {
      const dayThreeIcon = data.list[3].weather[0].icon; // Accessing the first element in the weather array
      dayThreeIconOutput.value = dayThreeIcon; // Display the humidity
      console.log(`dayThree Icon: ${dayThreeIcon}`);
    } else {
      dayThreeIconOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayThree's temp//
    if (data.list && data.list.length > 0 && data.list[3].main) {
      const dayThreeTemp = data.list[3].main.temp;
      dayThreeTempOutput.value = dayThreeTemp.toFixed(2); // Display the temp value in Fahrenheit
      console.log(`dayThree fahrenheitTemp: ${dayThreeTemp}°F`);
    } else {
      dayThreeTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayThree's humidity//
    if (data.list && data.list.length > 0 && data.list[3].main) {
      const dayThreeHumidity = data.list[3].main.humidity;
      dayThreeHumidityOutput.value = dayThreeHumidity; // Display the humidity
      console.log(`dayThree Humidity: ${dayThreeHumidity}%`);
    } else {
      dayThreeHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayThree's Wind
    if (data.list && data.list.length > 0 && data.list[3].wind) {
      const dayThreeWind = data.list[3].wind.speed;
      dayThreeWindOutput.value = dayThreeWind; // Display the humidity
      console.log(`dayThree Wind: ${dayThreeWind} MPH`);
    } else {
      dayThreeWindOutput.value = "No data found"; // Handle case where no items are found
    }

    //day 4

    //dayFour's Date
    if (data.list && data.list.length > 0 && data.list[4].dt) {
      const dayFourDateValue = data.list[4].dt;
      const dayFourDateConverted = dayjs
        .unix(dayFourDateValue)
        .format("MM/DD/YYYY");
      // dayFourDateAPI.value = dayFourDateValue; // Display the humidity
      console.log(`Date: ${dayFourDateConverted}`);
    } else {
      dayFourDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //dayFour's Icon
    if (
      data.list &&
      data.list.length > 0 &&
      data.list[4].weather &&
      data.list[4].weather.length > 0
    ) {
      const dayFourIcon = data.list[4].weather[0].icon; // Accessing the first element in the weather array
      dayFourIconOutput.value = dayFourIcon; // Display the humidity
      console.log(`dayFour Icon: ${dayFourIcon}`);
    } else {
      dayFourIconOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayFour's temp//
    if (data.list && data.list.length > 0 && data.list[4].main) {
      const dayFourTemp = data.list[4].main.temp;
      dayFourTempOutput.value = dayFourTemp.toFixed(2); // Display the temp value in Fahrenheit
      console.log(`dayFour fahrenheitTemp: ${dayFourTemp}°F`);
    } else {
      dayFourTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayFour's humidity//
    if (data.list && data.list.length > 0 && data.list[4].main) {
      const dayFourHumidity = data.list[4].main.humidity;
      dayFourHumidityOutput.value = dayFourHumidity; // Display the humidity
      console.log(`dayFour Humidity: ${dayFourHumidity}%`);
    } else {
      dayFourHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayFour's Wind
    if (data.list && data.list.length > 0 && data.list[4].wind) {
      const dayFourWind = data.list[4].wind.speed;
      dayFourWindOutput.value = dayFourWind; // Display the humidity
      console.log(`dayFour Wind: ${dayFourWind} MPH`);
    } else {
      dayFourWindOutput.value = "No data found"; // Handle case where no items are found
    }

    //day 5

    //dayFive's Date
    if (data.list && data.list.length > 0 && data.list[5].dt) {
      const dayFiveDateValue = data.list[5].dt;
      const dayFiveDateConverted = dayjs
        .unix(dayFiveDateValue)
        .format("MM/DD/YYYY");
      // dayFiveDateAPI.value = dayFiveDateValue; // Display the humidity
      console.log(`Date: ${dayFiveDateConverted}`);
    } else {
      dayFiveDateAPI.value = "No data found"; // Handle case where no items are found
    }

    //dayFive's Icon
    if (
      data.list &&
      data.list.length > 0 &&
      data.list[5].weather &&
      data.list[5].weather.length > 0
    ) {
      const dayFiveIcon = data.list[5].weather[0].icon; // Accessing the first element in the weather array
      dayFiveIconOutput.value = dayFiveIcon; // Display the humidity
      console.log(`dayFive Icon: ${dayFiveIcon}`);
    } else {
      dayFiveIconOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayFive's temp//
    if (data.list && data.list.length > 0 && data.list[5].main) {
      const dayFiveTemp = data.list[5].main.temp;
      dayFiveTempOutput.value = dayFiveTemp.toFixed(2); // Display the temp value in Fahrenheit
      console.log(`dayFive fahrenheitTemp: ${dayFiveTemp}°F`);
    } else {
      dayFiveTempOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayFive's humidity//
    if (data.list && data.list.length > 0 && data.list[5].main) {
      const dayFiveHumidity = data.list[5].main.humidity;
      dayFiveHumidityOutput.value = dayFiveHumidity; // Display the humidity
      console.log(`dayFive Humidity: ${dayFiveHumidity}%`);
    } else {
      dayFiveHumidityOutput.value = "No data found"; // Handle case where no items are found
    }

    //dayFive's Wind
    if (data.list && data.list.length > 0 && data.list[5].wind) {
      const dayFiveWind = data.list[5].wind.speed;
      dayFiveWindOutput.value = dayFiveWind; // Display the humidity
      console.log(`dayFive Wind: ${dayFiveWind} MPH`);
    } else {
      dayFiveWindOutput.value = "No data found"; // Handle case where no items are found
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    //day1
    dayOneDateAPI.value = "Error fetching date data"; // Display error message in the field
    dayOneIconOutput.value = "Error fetching icon data"; // Display error message in the field
    dayOneTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    dayOneHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    dayOneWindOutput.value = "Error fetching daily wind data"; // Display error message in the field

    //day2
    dayTwoDateAPI.value = "Error fetching date data"; // Display error message in the field
    dayTwoIconOutput.value = "Error fetching icon data"; // Display error message in the field
    dayTwoTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    dayTwoHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    dayTwoWindOutput.value = "Error fetching daily wind data"; // Display error message in the field

    //day3
    dayThreeDateAPI.value = "Error fetching date data"; // Display error message in the field
    dayThreeIconOutput.value = "Error fetching icon data"; // Display error message in the field
    dayThreeTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    dayThreeHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    dayThreeWindOutput.value = "Error fetching daily wind data"; // Display error message in the field

    //day4
    dayFourDateAPI.value = "Error fetching date data"; // Display error message in the field
    dayFourIconOutput.value = "Error fetching icon data"; // Display error message in the field
    dayFourTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    dayFourHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    dayFourWindOutput.value = "Error fetching daily wind data"; // Display error message in the field

    //day5
    dayFiveDateAPI.value = "Error fetching date data"; // Display error message in the field
    dayFiveIconOutput.value = "Error fetching icon data"; // Display error message in the field
    dayFiveTempOutput.value = "Error fetching daily temperature data"; // Display error message in the field
    dayFiveHumidityOutput.value = "Error fetching daily humidity data"; // Display error message in the field
    dayFiveWindOutput.value = "Error fetching daily wind data"; // Display error message in the field
  }
  ////////
}
// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

// const dailyTempHTML = document.createElement("div");
// const dailyHumidityHTML = document.createElement("div");
