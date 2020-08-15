let apiKey = "3388ddae99b012796f2268bc5f4ba1c5";

function displayDate(date) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let timeHolder = document.querySelector("#last-update-time");
  timeHolder.innerHTML = `${day}, ${formatDate(date)}`;
}  

function formatDate(date) {
  let timestamp = new Date (date);
  let hours = timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

let iconMap = {
  "01d": "wi-day-sunny",
  "01n": "wi-night-clear",
  "02d": "wi-day-cloudy",
  "02n": "wi-night-alt-cloudy",
  "03d": "wi-cloudy",
  "03n": "wi-cloudy",
  "04d": "wi-cloudy",
  "04n": "wi-cloudy",
  "09d": "wi-showers",
  "09n": "wi-showers",
  "10d": "wi-rain",
  "10n": "wi-rain",
  "11d": "wi-thunderstorm",
  "11n": "wi-thunderstorm",
  "13d": "wi-snowflake-cold",
  "13n": "wi-snowflake-cold",
  "50d": "wi-fog",
  "50n": "wi-fog",
}

async function showCity(submitEvent) {
  submitEvent.preventDefault();
  const input = document.querySelector("#cityInput");
  const inputCity = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
  await getWeather(url);
}

async function getWeather(url) {
  const result = await fetch(url);
  const data = await result.json();

  console.log(data);

  let mainTemperatureElement = document.querySelector("#currentTemperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#last-update-time");
  let iconElement = document.querySelector("#currentIcon");
  let temperature = Math.round(data.main.temp);
  let defaultCurrentIcon = data.weather[0].icon;
 
 
  mainTemperatureElement.innerText = `${temperature}`;
  cityElement.innerText = data.name;
  descriptionElement.innerText = data.weather[0].description;
  humidityElement.innerText = data.main.humidity;
  windElement.innerText = Math.round(data.wind.speed);
  dateElement.innerText = formatDate(data.dt * 1000);
  iconElement.className = `wi ${iconMap [defaultCurrentIcon]} weather-image`

  return data;
}

displayDate();
let citySubmit = document.querySelector("#search-form");
citySubmit.addEventListener("submit", showCity);
