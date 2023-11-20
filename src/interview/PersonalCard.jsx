import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button, Modal, Box } from '@mui/material';

import "./PersonalCard.css";
import pic01 from "./imgCandidate03.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PersonalCard() {
    const { cid } = useParams(); // STRING!!!
    const [candidate, setCandidate] = useState({});
    const [reports, setReports] = useState([]);
    const [open, setOpen] = useState(false);
    const [report, setReport] = useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios(`http://localhost:3333/api/candidates/${cid}`)
            .then(res => {
                console.log("res", res)
                setLoading(false);
                setCandidate(res.data)
            })
            .catch(err => console.log(err))

        axios(`http://localhost:3333/api/reports`)
        .then(res => {
            setReports(res.data.filter(x => x.candidateId === parseInt(cid)))
        })
        .catch(err => console.log(err))
    }, []);

    const handleClose = () => {
        setOpen(false);
    }
   

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
        <Typography variant="h3" component="h4" align='left'>
            Reports
        </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Interview Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((row) => (
            <TableRow key={row.id}>
                <TableCell align="right">{row.companyName}</TableCell>
                <TableCell align="right">{moment(row.interviewDate).format("LL")}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                    <Button 
                        variant="text"
                        onClick={() => {
                        setReport(row)
                        setOpen(true)
                    }}>Details</Button>
                </TableCell>
            </TableRow>
          ))}
           </TableBody>
          </Table>
          </TableContainer>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {report.candidateName}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {report.note}
            </Typography>
            </Box>
        </Modal>
    </>
  )
}
