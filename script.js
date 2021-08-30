var body = document.querySelector("body");
function randomColor() {
  var code = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
}
body.style.background = randomColor();

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[day.getDay()];
  return `${day} ${hours}:${minutes} ☜ ◕_◕ ༽つ`;
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
function displayForecast(response) {
  let date = response.data.daily;

  let dateElement = document.querySelector("#date");



function updateTemperature(response) {
  let searchedTemperature = Math.round(response.data.main.temp);
  let headerTemp = document.querySelector("#header-temp");
  headerTemp.innerHTML = `${searchedTemperature}℉`;
  console.log(response.data.weather[0].main);
  document.querySelector("#windspeed").innerHTML = response.data.main.humidity;
  document.querySelector("#precip").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-search");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = `🔎 ${cityInput.value}`;
  let city = `${cityInput.value}`;
  let units = "imperial";
  let apiKey = "159579a67bddf3fe42a90d0145993baf";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let apiUrl = `${apiEndpoint}${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(updateTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

function searchLocation(position) {
  let apiKey = "159579a67bddf3fe42a90d0145993baf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateTemperature);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

search("santa rosa");
