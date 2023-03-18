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


    let mainImage = document.querySelector('#mainImage');
    let weatherIcon = response.weather[0].icon;
    weatherImage.src = `././src/WeatherIcons/${weatherIcon}.png`;
    


    let degrees = document.querySelector('#degrees');
    degrees.textContent = Math.round(response.main.temp) + '°C';

    let feels = document.querySelector('#feels'); 
    feels.textContent = 'Feels like ' + Math.round(response.main.feels_like) + '°C';

    let humidity = document.querySelector('#humidity');
    humidity.textContent = 'Humidity: ' + response.main.humidity + '%';

    let wind = document.querySelector('#wind');
    wind.textContent = 'Wind: ' + Math.round(response.wind.speed) + ' km/h';


    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let unixTime = response.dt;
    let dateTime = document.querySelector('#date_time');
    let date = new Date(unixTime * 1000);
    
    dateTime.textContent = weekDays[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

    let description = document.querySelector('#description');
    let descriptionLower = response.weather[0].description;
    let descriptionUpper = descriptionLower[0].toUpperCase() + descriptionLower.slice(1);
    description.textContent = descriptionUpper;


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
        .catch(function(error) {
            alert("Sorry, city not found!");
        })
}



export {defaultWeather, displayWeather, searchWeather};







    