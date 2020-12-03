

const api = {
    key: "aa37ffeb65547f5a4c778101c84b0de9", 
    base: "https://api.openweathermap.org/data/2.5/"
  }

function fetchData(cityName) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(response => {
        const weatherData = response.json();
        return weatherData;
      }).then(displayWeather);
}

document.getElementById('searchButton').addEventListener('click', () => {
    let searchKey = document.getElementById('searchBar').value;
    if (searchKey)
        {
            fetchData(searchKey);
        }
    else {
        defaultWeather();
    }
        
})

function defaultWeather()
{
    let defaultCity = "London";
    let fetchDCData = fetchData(defaultCity);
    displayWeather(fetchDCData);
}
function displayWeather (weatherData) {
    let currentCity = document.getElementById('searchBar'); //current city
    currentCity.innerHTML = weatherData.name + ',' + weatherData.sys.country;
  
      
    let currtemp = document.getElementById('currentTemp'); //current temp
    currtemp.innerHTML = Math.round(weatherData.main.temp) + "°C";
  

    let currIcon = document.getElementById('currentIcon'); //icon
    currIcon.src = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
  

    let hightemp = document.getElementById('currentDateHigh'); //high temp
    hightemp.innerText = Math.round(weatherData.main.temp_max) + "°C";

    let lowtemp = document.getElementById('currentDateLow'); //low temp
    lowtemp.innerText = Math.round(weatherData.main.temp_min) + "°C";

    let humidity = document.getElementById('currentDateHumidity'); //humidity
    humidity.innerText = weatherData.main.humidity + "%";

    let windSpeed = document.getElementById('currentDateWindSpeed'); //wind speed
    windSpeed.innerText = weatherData.wind.speed + " mph";
}
