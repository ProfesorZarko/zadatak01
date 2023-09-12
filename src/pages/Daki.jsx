import React from 'react';
import "../componentsForDaki/Daki.css";
import DakiShopingForm from '../componentsForDaki/DakiShopingForm'
import ClockForDaki from '../componentsForDaki/ClockForDaki';
import DakiCounter from '../componentsForDaki/DakiCounter';
import RandomDaki from '../componentsForDaki/RandomDaki';

export default function Daki() {
  return (
    <div>
      <div className='bodyDaki'>
       <div className='upperLeft'>
            <DakiShopingForm />
            </div>
            <div className='upperRight'></div>
            <div className='middleLeft'>
              <ClockForDaki />
              <DakiCounter />
              <RandomDaki />
            </div>
            <div className='middleRight'></div>
      </div>
    </div>
  )
}
