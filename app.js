<<<<<<< HEAD
const apiKey = '9708616d50791282d3367a79230e21bb';
const searchButton = document.querySelector('.button');

const searchBar = document.querySelector('.city-bar');
let city = "";

const weather = {
    weatherCity: document.querySelector('.weather-city h1'),
    weatherDegree: document.querySelector('.weather-degree h2'),
    weatherDescription: document.querySelector('.weather-description h3'),
    weatherDescriptionIcon: document.querySelector('.weather-icon'),
    weatherHumidity: document.querySelector('.weather-humidity h3'),
    weatherWind: document.querySelector('.weather-wind h3')
}

function getData(cityName) {
    city = cityName;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((response) => {
            if(!response.ok) {
                return displayWeatherError();
            }
            return response.json();
        })
        .then((data) => displayWeather(data));
}

function displayWeather(data) {
    weather.weatherCity.innerText = `Weather in ${data.name}`;
    weather.weatherDegree.innerText = `${data.main.temp} °C`;
    weather.weatherDescription.innerText = data.weather[0].description;
    weather.weatherDescriptionIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    weather.weatherHumidity.innerText = `Humidity: ${data.main.humidity}%`;
    weather.weatherWind.innerText = `Wind speed: ${data.wind.speed} km/h`;
    weather.weatherDegree.style.visibility = "visible";
    weather.weatherDescription.style.visibility = "visible";
    weather.weatherDescriptionIcon.style.visibility = "visible";
    weather.weatherHumidity.style.visibility = "visible";
    weather.weatherWind.style.visibility = "visible";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1280x720/?${data.name}')`;
}

function displayWeatherError() {
    weather.weatherDegree.style.visibility = "hidden";
    weather.weatherDescription.style.visibility = "hidden";
    weather.weatherDescriptionIcon.style.visibility = "hidden";
    weather.weatherHumidity.style.visibility = "hidden";
    weather.weatherWind.style.visibility = "hidden";
    weather.weatherCity.innerText = "No city at that name... Sorry!";
}

searchButton.addEventListener('click', function(){
    if(searchBar.value){
        getData(searchBar.value);
        searchBar.value = "";
    }
});

searchBar.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        if(searchBar.value){
            console.log(event);
            getData(searchBar.value);
            searchBar.value = "";
        }
    }
})

=======
const apiKey = '9708616d50791282d3367a79230e21bb';
const searchButton = document.querySelector('.button');

const searchBar = document.querySelector('.city-bar');
let city = "";

const weather = {
    weatherCity: document.querySelector('.weather-city h1'),
    weatherDegree: document.querySelector('.weather-degree h2'),
    weatherDescription: document.querySelector('.weather-description h3'),
    weatherDescriptionIcon: document.querySelector('.weather-icon'),
    weatherHumidity: document.querySelector('.weather-humidity h3'),
    weatherWind: document.querySelector('.weather-wind h3')
}

function getData(cityName) {
    city = cityName;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((response) => {
            if(!response.ok) {
                return displayWeatherError();
            }
            return response.json();
        })
        .then((data) => displayWeather(data));
}

function displayWeather(data) {
    weather.weatherCity.innerText = `Weather in ${data.name}`;
    weather.weatherDegree.innerText = `${data.main.temp} °C`;
    weather.weatherDescription.innerText = data.weather[0].description;
    weather.weatherDescriptionIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    weather.weatherHumidity.innerText = `Humidity: ${data.main.humidity}%`;
    weather.weatherWind.innerText = `Wind speed: ${data.wind.speed} km/h`;
    weather.weatherDegree.style.visibility = "visible";
    weather.weatherDescription.style.visibility = "visible";
    weather.weatherDescriptionIcon.style.visibility = "visible";
    weather.weatherHumidity.style.visibility = "visible";
    weather.weatherWind.style.visibility = "visible";
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1280x720/?${data.name}')`;
}

function displayWeatherError() {
    weather.weatherDegree.style.visibility = "hidden";
    weather.weatherDescription.style.visibility = "hidden";
    weather.weatherDescriptionIcon.style.visibility = "hidden";
    weather.weatherHumidity.style.visibility = "hidden";
    weather.weatherWind.style.visibility = "hidden";
    weather.weatherCity.innerText = "No city at that name... Sorry!";
}

searchButton.addEventListener('click', function(){
    if(searchBar.value){
        getData(searchBar.value);
        searchBar.value = "";
    }
});

searchBar.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        if(searchBar.value){
            console.log(event);
            getData(searchBar.value);
            searchBar.value = "";
        }
    }
})

>>>>>>> 735b7f9e70e2468cdf070e0db143245ed5c43bdc
getData("Budapest");