const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByCity(city) {
    const resp = await fetch(url(city), {origin:"cors"});
    const respData = await resp.json();
    
    console.log(respData);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weater');

    weather.innerHTML = `
        <h2>${temp}°C</h2>
        <p>${search.value}</p>
    `;

    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;
    
    if (city) {
        getWeatherByCity(city);
    }
});
