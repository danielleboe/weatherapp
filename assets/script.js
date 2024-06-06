// Define the API URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=0aaf60db609b5ed9230d4d741d6c3bfb';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

