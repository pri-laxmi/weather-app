const apiKey="";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity=document.querySelector(".search-bar input");
const btn=document.querySelector(".search-bar button");
/*const img=document.querySelector(".icon");*/



async function weather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data); 
    const City=document.getElementById("city");
    City.innerHTML=data.name;
    const temp=document.getElementById("temp");
    temp.innerHTML=Math.round(data.main.temp) + `'c`;
    const hum=document.getElementById("hum");
    hum.innerHTML=data.main.humidity + `%`;
    const wind=document.getElementById("wind");
    wind.innerHTML=data.wind.speed + `km/hr`;

    const img=document.querySelector(".icon");
    console.log(img);
 if(img){
    if(data.weather[0].main =="Clouds"){
        img.src="images/clouds.png";
    }   
    else if(data.weather[0].main =="Clear"){
        img.src="images/clear.png";
        
    }
    else if(data.weather[0].main =="Drizzle"){
        img.src="images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        img.src="images/mist.png";
    }
    else if(data.weather[0].main =="Rain"){
        img.src="images/rain.png";
    }    
    else if(data.weather[0].main =="Snow"){
        img.src="images/snow.png";
    }
  }
}

/*weather(searchCity);*/
btn.addEventListener("click",()=>{
    weather(searchCity.value);
});
