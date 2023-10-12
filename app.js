
const apiKey = "7db4a2d673c801f6e348b26e12597593 ";
if (typeof window === "undefined"){
    console.log("jss");
}
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
  
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


async function getWeatherByLocation(city){
     
         const resp = await fetch(url(city), {
             origin: "cros" });
         const respData = await resp.json();
            print(respData)
           addWeatherToPage(respData);


          
     }

      function addWeatherToPage(data){
          const temp = Ktoc(data.main.temp);
          print(temp)
         if (temp>=0 && temp<=27){
            document.body.style.backgroundImage="url(sunny_weather.jpg)";
         }else{
            document.body.style.backgroundImage="url(water_weather.jpg)";
         }
          const weather = document.createElement('div')
          weather.classList.add('weather');

          weather.innerHTML = `
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
          <small>${data.weather[0].main}</small>
          
          `;


        //   cleanup 
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function Ktoc(K){
         return Math.floor(K - 273.15);
     }



     form.addEventListener('submit',(e) =>{
        e.preventDefault();

        const city = search.value;

        if(city){
            getWeatherByLocation(city)
        }

     });