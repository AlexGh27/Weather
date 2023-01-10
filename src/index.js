import './style.css';
import {defaultWeather, displayWeather, searchWeather} from './APIfetch.js';

const searchButton = document.querySelector('#searchButton');
const city = document.querySelector('#searchBar').value;

searchButton.addEventListener('click', function(e) {
    if (city === '') {
        alert('Please enter a city name!')
    }
    else {
        searchWeather();
    }
})

defaultWeather();