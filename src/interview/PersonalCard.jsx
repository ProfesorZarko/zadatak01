import React from 'react';
import "./PersonalCard.css"

export default function PersonalCard({name}) {
  return (
    <div className='PersonalCard' >
        <div className='UpperPersonalCard'>
            <img src="" alt="{name}" id='UpperPersonalCardImg' className='UpperPersonalCardLeft'/>
            <div className='UpperPersonalCardMiddle'>
                <div>
                    <p>name:</p>
                    <p>Josephina Higins</p>
                </div>
                <div><h1>second</h1></div>
            </div>
            <div className='UpperPersonalCardRight'>
                <div><h1>third</h1></div>
                <div><h1>fourth</h1></div>
            </div>
        </div>
        <div className='TablePersonal'>
            <h2>here goes table</h2>
        </div>
    </div>
  )
}
