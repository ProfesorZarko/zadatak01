import React from 'react';
import "../componentsForDaki/Daki.css";
import OdeljenjeClock from '../componentsForOdeljenje/OdeljenjeClock';
import Ucenici from "../componentsForOdeljenje/Ucenici.jsx"

export default function Odeljenje() {
  return (
    <div>
        <div className='bodyDaki'>
           <div className='upperLeft'>
                <OdeljenjeClock />
            </div>
            <div className='upperRight'>
                <Ucenici />
            </div>
            <div className='middleLeft'>
             
            </div>
            <div className='middleRight'>
              
              
            </div>
      </div>
    </div>
  )
}
