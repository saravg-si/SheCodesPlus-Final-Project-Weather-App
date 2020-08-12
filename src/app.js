
let apiKey = "3388ddae99b012796f2268bc5f4ba1c5";
let citySubmit = document.querySelector("#cityInput");
citySubmit.addEventListener("submit", showCity);

function displayDate(date) {
    let now = new Date(timestamp);
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
    let hours = date.getHours();
        if (hours < 10) {
        hours = `0${hours}`;
            }
    let minutes = date.getMinutes();
        if (minutes < 10) {
        minutes = `0${minutes}`;
        }

    let lastUpdateTimer = document.querySelector("#last update time");
    let dateFormat = `${day}, ${hours}:${minutes}`
    lastUpdateTimer.innerText = dateFormat;

    return `${day} ${hours} ${minutes}`
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
  
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#weather description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#currentIcon");
  
    
    temperatureElement.innerText = Math.round(celsiusTemperature);
    cityElement.innerText = response.data.name;
    descriptionElement.innerText = response.data.weather[0].description;
    humidityElement.innerText = response.data.main.humidity;
    windElement.innerText = Math.round(response.data.wind.speed);
    dateElement.innerText = formatDate(response.data.dt * 1000);
    
    iconElement.setAttribute("class"`${weatherIcon}`);



    return data;
  }
  
  displayDate();