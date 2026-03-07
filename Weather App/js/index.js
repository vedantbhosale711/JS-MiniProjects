const cityInput = document.querySelector('#city-input');
const searchButton = document.querySelector('#search-btn');

const cityName = document.querySelector('#city-name');
const date = document.querySelector('#date');

const temperature = document.querySelector('#temperature-today-div');
const weather = document.querySelector('#weather-today');

const humidity = document.querySelector('#humidity .card-content');
const wind = document.querySelector('#wind .card-content');
const precipitation = document.querySelector('#precipitation .card-content');
const uvContent = document.querySelector('#uv-content .card-content');
const feelsLike = document.querySelector('#feels-like .card-content');
const chanceOfRain = document.querySelector('#chance-of-rain .card-content');

function updateDate(){
    const today = new Date();
    const options = {
        weekday : 'short',
        month : 'short',
        day : '2-digit',
        year : 'numeric',
    };
    date.textContent = today.toLocaleDateString("en-US",options);
}

async function loadWeather(city){
    try{
        const weatherData = await getWeatherData(city);
        temperature.textContent = `${Math.round(weatherData.main.temp - 273.15)}°`;
        weather.textContent = `${weatherData.weather[0].main}`;
        cityName.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        humidity.textContent = `${weatherData.main.humidity}`;
        feelsLike.textContent = `${Math.round(weatherData.main.feels_like - 273.15)}` 
        wind.textContent = `${weatherData.wind.speed} m/s`; 
        updateDate();
    }
    catch(error){
        alert("City not found!");
    }
}

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if(city){
        loadWeather(city);
    }
});

