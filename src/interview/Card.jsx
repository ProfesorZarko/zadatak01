import React from 'react';
import avatar from "./avatar.png"
import "./Card.css"


export default function Card({name="ime i prezime", email="pa brate mail"}) {
  return (
        <div className="card">
            <img src={avatar} alt="Hot air balloons" />
            <div className="content">
              <h3>{name}</h3>
              <p> {email}</p>
            </div>
        </div>
  )
}
