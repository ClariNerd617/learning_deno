const station = "kbed";
const json = fetch(`https://api.weather.gov/stations/${station}/observations/latest`);


json.then((response) => {
    return response.json();
}).then((jsonData) => {
    console.log(JSON.stringify(jsonData.properties.temperature, null, 2));
});