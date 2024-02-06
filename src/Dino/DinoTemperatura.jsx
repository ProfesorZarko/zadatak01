import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "8efd02a313e23eeea1d277a2a0fcc9c6";
const LAT = 44.446028;
const LON = 20.690680;
//const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
/*

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


{"coord":{"lon":20.6907,"lat":44.446},"list":[{"main":{"aqi":2},"components":{"co":323.77,"no":0.01,"no2":18.34,"o3":36.48,"so2":25.51,"pm2_5":17.66,"pm10":26.19,"nh3":4.12},"dt":1705173236}]}

{
    "coord": {
        "lon": 20.6907,
        "lat": 44.446
    },
    "list": [
        {
            "main": {
                "aqi": 2
            },
            "components": {
                "co": 323.77,
                "no": 0.01,
                "no2": 18.34,
                "o3": 36.48,
                "so2": 25.51,
                "pm2_5": 17.66,
                "pm10": 26.19,
                "nh3": 4.12
            },
            "dt": 1705173895
        }
    ]
}
dataZa temperaturu >>> 
{coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
base
: 
"stations"
clouds
: 
{all: 84}
cod
: 
200
coord
: 
{lon: 20.6907, lat: 44.446}
dt
: 
1705603254
id
: 
787893
main
: 
{temp: 287.01, feels_like: 286.28, temp_min: 285.29, temp_max: 287.01, pressure: 1000, …}
name
: 
"Mladenovac"
sys
: 
{type: 2, id: 2046233, country: 'RS', sunrise: 1705558124, sunset: 1705591541}
timezone
: 
3600
visibility
: 
10000
weather
: 
[{…}]
wind
: 
{speed: 3.62, deg: 210, gust: 7.43}
[[Prototype]]
: 
Object

*/


export default function DinoPrognoza() {
    const [vrednostZagadjenja, setVrednostZagadjenja] = useState()
    useEffect(() => {
        const fetchZagadjenje = async () => {
          try {
            const response = await axios.get(url);
    
            // Extract the joke from the response data
            const { data } = response;
            console.log("dataZa temperaturu >>>", data)
            setVrednostZagadjenja(data);
          } catch (error) {
            console.error('Error fetching joke:', error);
          }
        };
        fetchZagadjenje();
    }, []); // Empty dependency array ensures the effect runs once after the initial render
  
    

    console.log("vrednostZagadjenja", vrednostZagadjenja)
  return (
    <div>
        <h2>Temperatura je: </h2>
        <div>{vrednostZagadjenja && vrednostZagadjenja.main.temp - 273}</div>
        <p>{vrednostZagadjenja && vrednostZagadjenja.name}</p>
    </div>
  )
}
