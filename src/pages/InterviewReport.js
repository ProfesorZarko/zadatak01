import React from 'react';
import "./InterviewReport.css";
import Cards from '../interview/Cards';


export default function InterviewReport() {
  return (
    <div className='wrapper'>
        <div className='header'>
            <button>Candidates</button>
            <h1>InterviewReport</h1>
            <button>Reports</button>
        </div>
        <div className='body'>
           <Cards />
        </div>
        <div className='footer'>
            <h1>sticky footer ide dole</h1>
        </div>
    
    
    </div>
  )
}
