const apiKey = "44325035c22759f95f063dfb8185d1b6"
    const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric"

    const cityinput = document.getElementById("cityinput");
    const fetchweatherbtn = document.getElementById("fetchweatherbtn");
    const weatherresult = document.getElementById("weatherresult");
    const responsetime = document.getElementById("responsetime");
    
    fetchweatherbtn.addEventListener("click", ()=>{
        const cityname = cityinput.value.trim();

        if(cityname === ""){
            alert("Please enter a city name");
            return;
        }
        getweatherdata(cityname);
    });
    cityinput.addEventListener("keydown", (e)=>{
         if (e.key === "Enter") {
        fetchweatherbtn.click(); 
    }
});
    async function getweatherdata(cityname){
        try{
            const start = performance.now();
            const response = await fetch(apiurl + `&q=${encodeURIComponent(cityname)}&appid=${apiKey}`);
            if(!response.ok){
                weatherResult.innerHTML = "City not found. Please check the city name and try again.";
                return;
            }
            const end = performance.now(); 
            const timetaken = (end - start).toFixed(2);
            console.log(`⏱ Response Time: ${timetaken} ms`);
            responsetime.innerHTML = `⏱ Response Time: ${timetaken} ms`;

            const data = await response.json();
            
            weatherresult.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${(data.main.temp)} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>`;
        }
        catch(error){
            weatherresult.innerHTML = "An error occurred while fetching the data. Please try again later.";
            console.error("Error fetching weather data:", error);
        }
    } 
   