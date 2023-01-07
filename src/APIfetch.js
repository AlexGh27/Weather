function defaultWeather(response) {
    let cityName = document.querySelector('#cityName');
    cityName.textContent = response.name;

    let degrees = document.querySelector('#degrees');
    degrees.textContent = Math.round(response.main.temp) + '°C';

    let feels = document.querySelector('#feels'); 
    feels.textContent = 'Feels like ' + Math.round(response.main.feels_like) + '°C';

    let humidity = document.querySelector('#humidity');
    humidity.textContent = 'Humidity: ' + response.main.humidity + '%';

    let wind = document.querySelector('#wind');
    wind.textContent = 'Wind: ' + Math.round(response.wind.speed) + ' km/h';

    let unixTime = response.dt;
    console.log(unixTime);
}



function fetchWeather() {
    const API_KEY = 'ac4b3a21bc90e7e4ae8ef6cb4b06fc97';
    const city = 'Galati';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            defaultWeather(response);
        })
}

export {defaultWeather, fetchWeather};







    