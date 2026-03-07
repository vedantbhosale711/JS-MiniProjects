const apiKey = "44a34de5cb731f3375c07792966526cc";


async function getWeatherData(city="mumbai"){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44a34de5cb731f3375c07792966526cc`;
    const response = await fetch(url);
    // console.log(response.headers.get("content-type")); //just wanted to see the header
    return await response.json();
}

async function printData(){
    const data = await getWeatherData();
    console.log(data);
}

printData();




