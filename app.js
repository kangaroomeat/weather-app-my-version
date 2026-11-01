var searchBar = document.querySelector(".search-bar");
var searchBtn = document.querySelector(".submit-btn");
var cityName = document.querySelector(".city-name");
var cityTemp = document.querySelector(".city-temp");
//var cityValue = searchBar.value;

function displayText() {
   
   console.log(searchBar.value);
}

/*searchBtn.onclick=function(){
    displayText();
}*/

searchBtn.addEventListener('click', getData);
searchBtn.addEventListener('click', displayText);





/*const request = async () => await fetch("https://api.weatherapi.com/v1/forecast.json?key=2a7cf9dd09524a2796d112426263110&q=Navarre");
const data = async () => await request.json();
console.log(data);*/

async function getData(){
    const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a7cf9dd09524a2796d112426263110&q=${searchBar.value}`);
    const data = await request.json();
    console.log(data);
    cityName.innerText = data.location.name;

    var objectTemp = data.current.temp_f;

    var objectTempRounded = Math.round(objectTemp);



    cityTemp.innerText = objectTempRounded + "°F";



}

function cardDisplay(){
    //data.current.temp_f = cityTemp.innerText
    //data.location.name = cityName.innerText
}

