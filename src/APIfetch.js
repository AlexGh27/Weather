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


function getWeekWeather() {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Bucharest&appid=${API_KEY}&units=metric`, {mode: 'cors'})
        .then(function(response) {
            console.log(response.json());
            return response.json();
    })
        .then(function(response) {
            displayWeeklyWeather(response);
        })

}

function getAValue() {
    let currentDateTime = new Date();
    let currentHour = currentDateTime.getHours();
    
    if (currentHour >= 0 && currentHour <=3) {
        let A = 8;
    }
    else if(currentHour >= 3 && currentHour <=6) {
        let A = 7;
    }
    else if(currentHour >= 6 && currentHour <=9) {
        let A = 6;
    }
    else if(currentHour >= 9 && currentHour <=12) {
        let A = 5;
    }
    else if(currentHour >= 12 && currentHour <=15) {
        let A = 4;
    }
    else if(currentHour >= 15 && currentHour <=18) {
        let A = 3;
    }
    else if(currentHour >= 18 && currentHour <=21) {
        let A = 2;
    }
    else if(currentHour >= 21 && currentHour <=24) {
        let A = 1;
    }
    return A;
}

function displayWeeklyWeather(response) {
    let max1 = document.querySelector('#max1');
    max1.textContent = Math.max(response.list[5].main.temp_max,
                                response.list[6].main.temp_max);
}

export {defaultWeather, displayWeather, searchWeather, getWeekWeather, displayWeeklyWeather, getAValue};







    