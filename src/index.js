import './style.css';

import {getAValue} from './WeeklyWeather';

import {defaultWeather} from './CurrentWeather.js';
import {getHourWeather} from './HourlyWeather.js';
import {getWeekWeather} from './WeeklyWeather.js';
import {displayHourlyWeather} from './HourlyWeather.js';
import {displayWeeklyWeather} from './WeeklyWeather.js';
import {searchWeather, displayWeather} from './CurrentWeather.js';


const searchButton = document.querySelector('#searchButton');
const searchBar = document.querySelector('#searchBar');
const city = document.querySelector('#searchBar').value;

searchButton.addEventListener('click', () => {
    searchWeather();
    getHourWeather();
    getWeekWeather();
})
 
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
        getHourWeather();
        getWeekWeather();
    }
    
});

getAValue();
defaultWeather();
getHourWeather();
getWeekWeather();
