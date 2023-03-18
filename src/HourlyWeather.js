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

    let hour0 = document.querySelector('#hour0');
    hour0.textContent = response.list[0].dt_txt.substr(11, 2) + ':00';

    let picture0 = document.querySelector('#picture0');
    picture0.src = `/src/WeatherIcons/${response.list[0].weather[0].icon}.png`;

    let temp0 = document.querySelector('#temp0');
    temp0.textContent = Math.round(response.list[0].main.temp) + '°C';



    let temp1 = document.querySelector('#temp1');
    temp1.textContent = Math.round(response.list[1].main.temp) + '°C';

    let picture1 = document.querySelector('#picture1');
    picture1.src = `/src/WeatherIcons/${response.list[1].weather[0].icon}.png`;

    let hour1 = document.querySelector('#hour1');
    hour1.textContent = response.list[1].dt_txt.substr(11, 2) + ':00';
    
    

    let temp2 = document.querySelector('#temp2');
    temp2.textContent = Math.round(response.list[2].main.temp) + '°C';

    let picture2 = document.querySelector('#picture2');
    picture2.src = `/src/WeatherIcons/${response.list[2].weather[0].icon}.png`;

    let hour2 = document.querySelector('#hour2');
    hour2.textContent = response.list[2].dt_txt.substr(11, 2) + ':00';



    let temp3 = document.querySelector('#temp3');
    temp3.textContent = Math.round(response.list[3].main.temp) + '°C';

    let picture3 = document.querySelector('#picture3');
    picture3.src = `/src/WeatherIcons/${response.list[3].weather[0].icon}.png`;

    let hour3 = document.querySelector('#hour3');
    hour3.textContent = response.list[3].dt_txt.substr(11, 2) + ':00';



    let temp4 = document.querySelector('#temp4');
    temp4.textContent = Math.round(response.list[4].main.temp) + '°C';

    let picture4 = document.querySelector('#picture4');
    picture4.src = `/src/WeatherIcons/${response.list[4].weather[0].icon}.png`;

    let hour4 = document.querySelector('#hour4');
    hour4.textContent = response.list[4].dt_txt.substr(11, 2) + ':00';



    let temp5 = document.querySelector('#temp5');
    temp5.textContent = Math.round(response.list[5].main.temp) + '°C';

    let picture5 = document.querySelector('#picture5');
    picture5.src = `/src/WeatherIcons/${response.list[5].weather[0].icon}.png`;

    let hour5 = document.querySelector('#hour5');
    hour5.textContent = response.list[5].dt_txt.substr(11, 2) + ':00';

}

export {getHourWeather, displayHourlyWeather}