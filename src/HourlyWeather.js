const API_KEY = 'ac4b3a21bc90e7e4ae8ef6cb4b06fc97';
function getHourWeather() {
     
   let city = document.querySelector('#searchBar').value;
    if (city.length < 1) {
        city = 'Bucharest';
    }
    else {
        city = document.querySelector('#searchBar').value;
    }
        
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
    })
        .then(function(response) {
            displayHourlyWeather(response);
        })
    
}

function displayHourlyWeather(response) {
    let temp1 = document.querySelector('#temp1');
    temp1.textContent = response.list[1].main.temp;
}

export {getHourWeather, displayHourlyWeather}