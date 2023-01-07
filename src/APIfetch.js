export default function defaultWeather() {
    const API_KEY = 'ac4b3a21bc90e7e4ae8ef6cb4b06fc97';
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${API_KEY}`, {mode: 'cors'})
        .then(function(response) {
             console.log(response.json());
        })
}








    