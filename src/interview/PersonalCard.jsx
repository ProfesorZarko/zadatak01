import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PersonalCard.css";
import pic01 from "./imgCandidate03.png"

export default function PersonalCard() {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({});
    const [ loading, setLoading ] = useState(false);
console.log("candiodate", candidate)
    useEffect(() => {
        setLoading(true);
        axios(`http://localhost:3333/api/candidates/${id}`)
            .then(res => {
                console.log("res", res)
                setLoading(false);
                setCandidate(res.data)
            })
            .catch(err => console.log(err))
    }, []);
   

  return (
    <>
        <div className='PersonalCard' >
            <div className='UpperPersonalCard'>
                <img src={candidate.avatar} alt={candidate.name} id='UpperPersonalCardImg' className='UpperPersonalCardLeft'/>
                <div className='UpperPersonalCardMiddle'>
                    <div className='First'>
                        <p>name:</p>
                        <p>{candidate.name}</p>
                    </div>
                    <div className='Second'>
                        <p>email: </p>
                        {candidate.email}
                    </div>
                </div>
                <div className='UpperPersonalCardRight'>
                    <div className='Third' >
                        <p>date of Birth: </p>
                        <p>{candidate.birthday}</p>
                    </div>
                    <div className='Fourth'>
                        <p>education : </p>
                        <p>{candidate.education}</p></div>
                </div>
            </div>
        </div>
        <div className='PersonalTable'>
            <h2>here goes table</h2>
            <table style={{width:"100%"}}>
                <tr>
                    <th>Company</th>
                    <th>Interview Date</th>
                    <th cholspan="2">Status</th>
                </tr>
                <tr>
                    <td>sony</td>
                    <td>2maj</td>
                    <td> ne znam</td>
                    <td>oko</td>
                </tr>
                <tr>
                    <td>milko</td>
                    <td>11 oktobar</td>
                    <td>znam</td>
                    <td>oko</td>
                </tr>
            </table>
        </div>
    </>
  )
}
