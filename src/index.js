import './style.css';
import {getAValue} from './WeeklyWeather';
import {defaultWeather} from './CurrentWeather.js';
import {getWeekWeather} from './WeeklyWeather';
import {searchWeather, displayWeather} from './CurrentWeather.js';
import {displayWeeklyWeather} from './WeeklyWeather.js';
const searchButton = document.querySelector('#searchButton');
 
const city = document.querySelector('#searchBar').value;

searchButton.addEventListener('click', () => {
    searchWeather();
    getWeekWeather();
})
 

getAValue();
defaultWeather();
getWeekWeather();