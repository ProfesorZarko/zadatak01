import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./PersonalCard.css";
import pic01 from "./imgCandidate03.png"

export default function PersonalCard() {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios(`http://localhost:3333/api/candidates/${id}`)
            .then(res => {
                console.log("res", res)

                setLoading(false);
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
                    <div className='Second'><h1>second</h1></div>
                </div>
                <div className='UpperPersonalCardRight'>
                    <div className='Third' ><h1>third</h1></div>
                    <div className='Fourth'><h1>fourth</h1></div>
                </div>
            </div>
        </div>
        <div className='PersonalTable'>
            <h2>here goes table</h2>
            <table>
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
