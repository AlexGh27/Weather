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
    temp1.textContent = Math.round(response.list[1].main.temp) + '°C';

    let hour1 = document.querySelector('#hour1');
    hour1.textContent = response.list[1].dt_txt.substr(11, 2) + ':00';
    

    let temp2 = document.querySelector('#temp2');
    temp2.textContent = Math.round(response.list[2].main.temp) + '°C';

    let hour2 = document.querySelector('#hour2');
    hour2.textContent = response.list[2].dt_txt.substr(11, 2) + ':00';


    let temp3 = document.querySelector('#temp3');
    temp3.textContent = Math.round(response.list[3].main.temp) + '°C';

    let hour3 = document.querySelector('#hour3');
    hour3.textContent = response.list[3].dt_txt.substr(11, 2) + ':00';


    let temp4 = document.querySelector('#temp4');
    temp4.textContent = Math.round(response.list[4].main.temp) + '°C';

    let hour4 = document.querySelector('#hour4');
    hour4.textContent = response.list[4].dt_txt.substr(11, 2) + ':00';









}

export {getHourWeather, displayHourlyWeather}