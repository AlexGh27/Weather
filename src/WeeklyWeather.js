const API_KEY = 'ac4b3a21bc90e7e4ae8ef6cb4b06fc97';

function getAValue() {
    let currentDateTime = new Date();
    let currentHour = currentDateTime.getHours();

    if (currentHour >= 0 && currentHour <=3) {
        let A = 8;
        return A;
    }
    else if(currentHour >= 3 && currentHour <=6) {
        let A = 7;
        return A;
    }
    else if(currentHour >= 6 && currentHour <=9) {
        let A = 6;
        return A;
    }
    else if(currentHour >= 9 && currentHour <=12) {
        let A = 5;
        return A;
    }
    else if(currentHour >= 12 && currentHour <=15) {
        let A = 4;
        return A;
    }
    else if(currentHour >= 15 && currentHour <=18) {
        let A = 3;
        return A;
    }
    else if(currentHour >= 18 && currentHour <=21) {
        let A = 2;
        return A;
    }
    else if(currentHour >= 21 && currentHour <=24) {
        let A = 1;
        return A;
    }
}

function getWeekWeather() {
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
            displayWeeklyWeather(response);
        })
}

function displayWeeklyWeather(response) {
    let A = getAValue();
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let max1 = document.querySelector('#max1');
    let firstDayMax = Math.max(response.list[A].main.temp_max,
                               response.list[A+1].main.temp_max,
                               response.list[A+2].main.temp_max,
                               response.list[A+3].main.temp_max,
                               response.list[A+4].main.temp_max,
                               response.list[A+5].main.temp_max,
                               response.list[A+6].main.temp_max,
                               response.list[A+7].main.temp_max);
    max1.textContent = Math.round(firstDayMax) + '°C';

    let day1 = document.querySelector('#day1');
    let unixTime1 = response.list[A].dt;
    let date1 = new Date(unixTime1 * 1000);
    day1.textContent = weekDays[date1.getDay()];
    
    let icon1 = document.querySelector('#icon1');
    icon1.src = `./src/WeatherIcons/${response.list[A+4].weather[0].icon}.png`;   


    let max2 = document.querySelector('#max2');
    let secondDayMax = Math.max(response.list[A+8].main.temp_max,
                                response.list[A+9].main.temp_max,
                                response.list[A+10].main.temp_max,
                                response.list[A+11].main.temp_max,
                                response.list[A+12].main.temp_max,
                                response.list[A+13].main.temp_max,
                                response.list[A+14].main.temp_max,
                                response.list[A+15].main.temp_max);
    max2.textContent = Math.round(secondDayMax) + '°C';

    let day2 = document.querySelector('#day2');
    let unixTime2 = response.list[A+8].dt;
    let date2 = new Date(unixTime2 * 1000);
    day2.textContent = weekDays[date2.getDay()];

    let icon2 = document.querySelector('#icon2');
    icon2.src = `./src/WeatherIcons/${response.list[A+12].weather[0].icon}.png`;



    let max3 = document.querySelector('#max3');
    let thirdDayMax = Math.max(response.list[A+16].main.temp_max,
                               response.list[A+17].main.temp_max,
                               response.list[A+18].main.temp_max,
                               response.list[A+19].main.temp_max,
                               response.list[A+20].main.temp_max,
                               response.list[A+22].main.temp_max,
                               response.list[A+23].main.temp_max);
    max3.textContent = Math.round(thirdDayMax) + '°C';


    let day3 = document.querySelector('#day3');
    let unixTime3 = response.list[A+16].dt;
    let date3 = new Date(unixTime3 * 1000);
    day3.textContent = weekDays[date3.getDay()];


    let icon3 = document.querySelector('#icon3');
    icon3.src = `./src/WeatherIcons/${response.list[A+20].weather[0].icon}.png`;


    let max4 = document.querySelector('#max4');
    let fourthDayMax = Math.max(response.list[A+24].main.temp_max,
                                response.list[A+25].main.temp_max,
                                response.list[A+26].main.temp_max,
                                response.list[A+27].main.temp_max,
                                response.list[A+28].main.temp_max,
                                response.list[A+29].main.temp_max,
                                response.list[A+30].main.temp_max,
                                response.list[A+31].main.temp_max);
    max4.textContent = Math.round(fourthDayMax) + '°C';

    let day4 = document.querySelector('#day4');
    let unixTime4 = response.list[A+24].dt;
    let date4 = new Date(unixTime4 * 1000);
    day4.textContent = weekDays[date4.getDay()];

    let icon4 = document.querySelector('#icon4');
    icon4.src = `./src/WeatherIcons/${response.list[A+28].weather[0].icon}.png`;    
    
    
    let min1 = document.querySelector('#min1');
    let firstDayMin = Math.min(response.list[A].main.temp_min,
                               response.list[A+1].main.temp_min,
                               response.list[A+2].main.temp_min,
                               response.list[A+3].main.temp_min,
                               response.list[A+4].main.temp_min,
                               response.list[A+5].main.temp_min,
                               response.list[A+6].main.temp_min,
                               response.list[A+7].main.temp_min);
    min1.textContent = Math.round(firstDayMin) + '°C';

    let min2 = document.querySelector('#min2');
    let secondDayMin = Math.min(response.list[A+8].main.temp_min,
                                response.list[A+9].main.temp_min,
                                response.list[A+10].main.temp_min,
                                response.list[A+11].main.temp_min,
                                response.list[A+12].main.temp_min,
                                response.list[A+13].main.temp_min,
                                response.list[A+14].main.temp_min,
                                response.list[A+15].main.temp_min);
    min2.textContent = Math.round(secondDayMin) + '°C';

    let min3 = document.querySelector('#min3');
    let thirdDayMin = Math.min(response.list[A+16].main.temp_min,
                               response.list[A+17].main.temp_min,
                               response.list[A+18].main.temp_min,
                               response.list[A+19].main.temp_min,
                               response.list[A+20].main.temp_min,
                               response.list[A+21].main.temp_min,
                               response.list[A+22].main.temp_min,
                               response.list[A+23].main.temp_min);
    min3.textContent = Math.round(thirdDayMin) + '°C';

    let min4 = document.querySelector('#min4');
    let fourthDayMin = Math.min(response.list[A+24].main.temp_min,
                                response.list[A+25].main.temp_min,
                                response.list[A+26].main.temp_min,
                                response.list[A+27].main.temp_min,
                                response.list[A+28].main.temp_min,
                                response.list[A+29].main.temp_min,
                                response.list[A+30].main.temp_min,
                                response.list[A+31].main.temp_min);
    min4.textContent = Math.round(fourthDayMin) + '°C';
}

export {getWeekWeather, displayWeeklyWeather, getAValue}