const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const main = document.getElementById("main");
const search = document.getElementById("search");
const form = document.getElementById("form");

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
async function getWeatherByLocation(city) {
        const resp = await fetch(url(city),{origin: "cors"});
        const respData = await resp.json();
        addWeatherToPage(respData);
}

function addWeatherToPage(data){
  const temp = ktoC(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
    <h2>  ${temp} °C</h2>
  `;

  // cleen up
  main.innerHTML = ""
  main.appendChild(weather);
}
function ktoC(k) {
return (k - 273.15).toFixed(2);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if(city){
    getWeatherByLocation(city);
  }
});
