const apiUrl="https://api.openweathermap.org/data/2.5/weather?&appid=fc4003ebdfb9f08c6fb124d43af507b8&units=metric";
const searchBar= document.querySelector(".search input");
const searchButton= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const resp=await fetch(apiUrl+ '&q=' + city);
    var data=await resp.json();

    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"m/s";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "https://clipart-library.com/img/1328336.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1502598/cloud-with-rain-clipart-md.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "https://cdn-icons-png.flaticon.com/512/1574/1574213.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "https://img.freepik.com/premium-vector/3d-cartoon-icon-weather-forecast-drizzle-rain-vector-illustration_595345-36.jpg";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bxhUvbJcoej9ONb3BLirOcAp1H1uv0IOrg&usqp=CAU";
    }

    document.querySelector(".weather").style.display="block";
}
searchButton.addEventListener("click",()=>{
    checkWeather(searchBar.value);
})