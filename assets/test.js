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
  
      // Day 1
      if (data.list && data.list.length > 0) {
        const dayOneDateValue = data.list[1].dt;
        const dayOneDateConverted = dayjs.unix(dayOneDateValue).format("MM/DD/YYYY");
        dayOneDateAPI.innerText = dayOneDateConverted;
  
        const dayOneIcon = data.list[1].weather[0].icon;
        dayOneIconOutput.src = `https://openweathermap.org/img/wn/${dayOneIcon}@2x.png`;
  
        const dayOneTemp = data.list[1].main.temp;
        dayOneTempOutput.innerText = `Temperature: ${dayOneTemp.toFixed(2)}°F`;
  
        const dayOneHumidity = data.list[1].main.humidity;
        dayOneHumidityOutput.innerText = `Humidity: ${dayOneHumidity}%`;
  
        const dayOneWind = data.list[1].wind.speed;
        dayOneWindOutput.innerText = `Wind: ${dayOneWind} MPH`;
      } else {
        dayOneDateAPI.innerText = "No data found";
        dayOneIconOutput.src = "";
        dayOneTempOutput.innerText = "No data found";
        dayOneHumidityOutput.innerText = "No data found";
        dayOneWindOutput.innerText = "No data found";
      }
  
      // Day 2
      if (data.list && data.list.length > 1) {
        const dayTwoDateValue = data.list[2].dt;
        const dayTwoDateConverted = dayjs.unix(dayTwoDateValue).format("MM/DD/YYYY");
        dayTwoDateAPI.innerText = dayTwoDateConverted;
  
        const dayTwoIcon = data.list[2].weather[0].icon;
        dayTwoIconOutput.src = `https://openweathermap.org/img/wn/${dayTwoIcon}@2x.png`;
  
        const dayTwoTemp = data.list[2].main.temp;
        dayTwoTempOutput.innerText = `Temperature: ${dayTwoTemp.toFixed(2)}°F`;
  
        const dayTwoHumidity = data.list[2].main.humidity;
        dayTwoHumidityOutput.innerText = `Humidity: ${dayTwoHumidity}%`;
  
        const dayTwoWind = data.list[2].wind.speed;
        dayTwoWindOutput.innerText = `Wind: ${dayTwoWind} MPH`;
      } else {
        dayTwoDateAPI.innerText = "No data found";
        dayTwoIconOutput.src = "";
        dayTwoTempOutput.innerText = "No data found";
        dayTwoHumidityOutput.innerText = "No data found";
        dayTwoWindOutput.innerText = "No data found";
      }
  
      // Day 3
      if (data.list && data.list.length > 2) {
        const dayThreeDateValue = data.list[3].dt;
        const dayThreeDateConverted = dayjs.unix(dayThreeDateValue).format("MM/DD/YYYY");
        dayThreeDateAPI.innerText = dayThreeDateConverted;
  
        const dayThreeIcon = data.list[3].weather[0].icon;
        dayThreeIconOutput.src = `https://openweathermap.org/img/wn/${dayThreeIcon}@2x.png`;
  
        const dayThreeTemp = data.list[3].main.temp;
        dayThreeTempOutput.innerText = `Temperature: ${dayThreeTemp.toFixed(2)}°F`;
  
        const dayThreeHumidity = data.list[3].main.humidity;
        dayThreeHumidityOutput.innerText = `Humidity: ${dayThreeHumidity}%`;
  
        const dayThreeWind = data.list[3].wind.speed;
        dayThreeWindOutput.innerText = `Wind: ${dayThreeWind} MPH`;
      } else {
        dayThreeDateAPI.innerText = "No data found";
        dayThreeIconOutput.src = "";
        dayThreeTempOutput.innerText = "No data found";
        dayThreeHumidityOutput.innerText = "No data found";
        dayThreeWindOutput.innerText = "No data found";
      }
  
      // Day 4
      if (data.list && data.list.length > 3) {
        const dayFourDateValue = data.list[4].dt;
        const dayFourDateConverted = dayjs.unix(dayFourDateValue).format("MM/DD/YYYY");
        dayFourDateAPI.innerText = dayFourDateConverted;
  
        const dayFourIcon = data.list[4].weather[0].icon;
        dayFourIconOutput.src = `https://openweathermap.org/img/wn/${dayFourIcon}@2x.png`;
  
        const dayFourTemp = data.list[4].main.temp;
        dayFourTempOutput.innerText = `Temperature: ${dayFourTemp.toFixed(2)}°F`;
  
        const dayFourHumidity = data.list[4].main.humidity;
        dayFourHumidityOutput.innerText = `Humidity: ${dayFourHumidity}%`;
  
        const dayFourWind = data.list[4].wind.speed;
        dayFourWindOutput.innerText = `Wind: ${dayFourWind} MPH`;
      } else {
        dayFourDateAPI.innerText = "No data found";
        dayFourIconOutput.src = "";
        dayFourTempOutput.innerText = "No data found";
        dayFourHumidityOutput.innerText = "No data found";
        dayFourWindOutput.innerText = "No data found";
      }
  
      // Day 5
      if (data.list && data.list.length > 4) {
        const dayFiveDateValue = data.list[5].dt;
        const dayFiveDateConverted = dayjs.unix(dayFiveDateValue).format("MM/DD/YYYY");
        dayFiveDateAPI.innerText = dayFiveDateConverted;
  
        const dayFiveIcon = data.list[5].weather[0].icon;
        dayFiveIconOutput.src = `https://openweathermap.org/img/wn/${dayFiveIcon}@2x.png`;
  
        const dayFiveTemp = data.list[5].main.temp;
        dayFiveTempOutput.innerText = `Temperature: ${dayFiveTemp.toFixed(2)}°F`;
  
        const dayFiveHumidity = data.list[5].main.humidity;
        dayFiveHumidityOutput.innerText = `Humidity: ${dayFiveHumidity}%`;
  
        const dayFiveWind = data.list[5].wind.speed;
        dayFiveWindOutput.innerText = `Wind: ${dayFiveWind} MPH`;
      } else {
        dayFiveDateAPI.innerText = "No data found";
        dayFiveIconOutput.src = "";
        dayFiveTempOutput.innerText = "No data found";
        dayFiveHumidityOutput.innerText = "No data found";
        dayFiveWindOutput.innerText = "No data found";
      }
  
    } catch (error) {
      console.error("Error fetching weather data:", error);
  
      // Display error messages for all days
      dayOneDateAPI.innerText = "Error fetching date data";
      dayOneIconOutput.src = "";
      dayOneTempOutput.innerText = "Error fetching temperature data";
      dayOneHumidityOutput.innerText = "Error fetching humidity data";
      dayOneWindOutput.innerText = "Error fetching wind data";
  
      dayTwoDateAPI.innerText = "Error fetching date data";
      dayTwoIconOutput.src = "";
      dayTwoTempOutput.innerText = "Error fetching temperature data";
      dayTwoHumidityOutput.innerText = "Error fetching humidity data";
      dayTwoWindOutput.innerText = "Error fetching wind data";
  
      dayThreeDateAPI.innerText = "Error fetching date data";
      dayThreeIconOutput.src = "";
      dayThreeTempOutput.innerText = "Error fetching temperature data";
      dayThreeHumidityOutput.innerText = "Error fetching humidity data";
      dayThreeWindOutput.innerText = "Error fetching wind data";
  
      dayFourDateAPI.innerText = "Error fetching date data";
      dayFourIconOutput.src = "";
      dayFourTempOutput.innerText = "Error fetching temperature data";
      dayFourHumidityOutput.innerText = "Error fetching humidity data";
      dayFourWindOutput.innerText = "Error fetching wind data";
  
      dayFiveDateAPI.innerText = "Error fetching date data";
      dayFiveIconOutput.src = "";
      dayFiveTempOutput.innerText = "Error fetching temperature data";
      dayFiveHumidityOutput.innerText = "Error fetching humidity data";
      dayFiveWindOutput.innerText = "Error fetching wind data";
    }
  }
  