import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "./avatar.png"
import "./Card.css"


export default function Card({candidate}) {
  const { id, name, email } = candidate;
  console.log("candidate", candidate)
  return (
    <Link to={`/personal/${id}`} className="card">
      <img src={avatar} alt="Hot air balloons" />
      <div className="content">
        <h3>{name}</h3>
        <p> {email}</p>
      </div>
    </Link>
  )
}
