const apikey = "3d81de769bcb9be0bba96b55b70149eb"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const imgupd = document.querySelector(".weather-i")
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if (data.weather[0].main == "Clouds") {
            imgupd.src = "clouds.png"
        } else if (data.weather[0].main == "Clear") {
            imgupd.src = "clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            imgupd.src = "rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            imgupd.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            imgupd.src = "mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            imgupd.src = "snow.png";
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})