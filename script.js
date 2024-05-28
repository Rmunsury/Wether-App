
const inputbox = document.getElementById('searchInput');
const search_button = document.getElementById('btn');
const wether_temprature = document.querySelector(".tempreture")
const city_name = document.getElementById('city_name');
const wether_description = document.getElementById('humidity');
const wether_description2 = document.getElementById('wind-speed');
const weather_image = document.querySelector('.weather-image')
const wether_location = document.querySelector('.location-not-found');
const wether_body = document.querySelector('.wether-body');

async function checkWether(city) {
    const api_key = `e62eab739c5d20036a2869bd38b47f20`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const wether_data = await fetch(`${url}`).then(responce => responce.json());
    console.log(wether_data);
    if(wether_data.cod === `404`) {
        wether_location.style.display ="flex";
        wether_body.style.display="none"
        console.log("error")
        return;
    }
    wether_location.style.display="none";
    wether_body.style.display='flex';
    wether_temprature.innerHTML = `${Math.round(wether_data.main.temp - 273.15)}°C`;

    city_name.innerHTML = `${wether_data.weather[0].main}`;
    wether_description.innerHTML = `${wether_data.main.humidity}%`;
    wether_description2.innerHTML = `${wether_data.wind.speed}Km/H`


    switch (wether_data.weather[0].main) {
        case 'Cloud':
            weather_image.src = "images/cloud.png"
            break;
        case 'Clear':
            weather_image.src = "images/clear.png"
            break;
        case 'Rain':
            weather_image.src = "images/rain.png"
            break;
        case 'Mist':
            weather_image.src = "images/mist.png"
            break;
        case 'Snow':
            weather_image.src = "images/snow.png"
            break;
    }
}

search_button.addEventListener('click', () => {

    checkWether(inputbox.value);

})