import React from 'react';
import "../Januar/Januar.css"
import LevoDesno from '../Januar/LevoDesno';

export default function Januar() {
  return (
    <div className='main'>
        <div className='header'>
            <LevoDesno />
            <h4>navbar</h4>
        </div>
        <div className='middle'>
            <div className='l'>left</div>
            <div className='m'>midle</div>
            <div className='r'>right</div>
        </div>
        <div className="footer">
            here goes footer
        </div>
        </div>
  )
}
