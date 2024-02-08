import React, { useEffect } from 'react';
import axios from 'axios';


export default function Februar24() {
    useEffect(()=>{
        const hvatajApi= async()=>{
            const res = await axios.get('https://api.api-ninjas.com/v1/recipe?query=steak',
                {headers: {
                  'X-Api-Key': 'cZeC/RXVUrOV1gOJjLyUOQ==3G5X8qBJ8oWIQTvB'
                },
              });
              const {data} = res;
              console.log(data)
            }
            hvatajApi()
    },[])


  return (
    <div>
            <button>click for API</button>
    </div>
  )
}
