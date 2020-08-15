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
  timeHolder.innerHTML = `${day}, ${now.getHours()}:${now.getMinutes()}`;
}  

displayDate();