import './style.css';
import {defaultWeather, displayWeather, searchWeather} from './APIfetch.js';

const searchButton = document.querySelector('#searchButton');

const city = document.querySelector('#searchBar').value;

searchButton.addEventListener('click', searchWeather)

defaultWeather();