import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "8efd02a313e23eeea1d277a2a0fcc9c6";
const LAT = 44.446028;
const LON = 20.690680;
const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;
/*

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

*/


export default function DinoPrognoza() {
    const [vrednostZagadjenja, setVrednostZagadjenja] = useState()
    useEffect(() => {
        const fetchZagadjenje = async () => {
          try {
            const response = await axios.get(url);
    
            // Extract the joke from the response data
            const { data } = response;
            console.log("data>>>", data)
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
        <h2>ovde ispisuje zagadjenje</h2>
        <div>{vrednostZagadjenja && vrednostZagadjenja.list[0].components.pm10}</div>
    </div>
  )
}
