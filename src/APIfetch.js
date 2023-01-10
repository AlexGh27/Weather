const API_KEY = 'ac4b3a21bc90e7e4ae8ef6cb4b06fc97';

function defaultWeather() {
    const city = 'Bucharest';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            displayWeather(response);
        })

}

function displayWeather(response) {
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
    let dateTime = document.querySelector('#date_time');
    let date = new Date(unixTime * 1000);
    // let date = new Date(unixTime * 1000).toLocaleDateString('en-uk');
    let fullDate = new Date(unixTime * 1000);
    let hours = fullDate.getHours();
    let minutes = '0' + fullDate.getMinutes();

    dateTime.textContent = date;
     //dateTime.textContent = date + ', ' + hours + ':' + minutes.substr(-2);
}

function searchWeather() {
    
    let city = document.querySelector('#searchBar').value;
    if (city.length < 1) {
        city = 'Bucharest';
    }
    else {
        city = document.querySelector('#searchBar').value;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            displayWeather(response);
        })
}


export {defaultWeather, displayWeather, searchWeather};







    