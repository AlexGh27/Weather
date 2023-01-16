import './style.css';

import {getAValue} from './WeeklyWeather';

import {defaultWeather} from './CurrentWeather.js';
import {getHourWeather} from './HourlyWeather.js';
import {getWeekWeather} from './WeeklyWeather.js';
import {displayHourlyWeather} from './HourlyWeather.js';
import {displayWeeklyWeather} from './WeeklyWeather.js';
import {searchWeather, displayWeather} from './CurrentWeather.js';


const searchButton = document.querySelector('#searchButton');
 
const city = document.querySelector('#searchBar').value;

searchButton.addEventListener('click', () => {
    searchWeather();
    getHourWeather();
    getWeekWeather();
})
 

getAValue();
defaultWeather();
getHourWeather();
getWeekWeather();
