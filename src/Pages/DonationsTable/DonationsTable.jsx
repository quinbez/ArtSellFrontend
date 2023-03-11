import * as React from 'react';
import './DonationsTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link } from 'react-router-dom';

function createData(name, role, product, amount, date) {
  return {name, role, product, amount, date };
}

const rows = [
  createData('Hanna Daniels',"Artist", "ink drawing", 39, "Feburary 23, 2023"),
  createData('Nathan Scott',"User", "painting",  37, "Feburary 21, 2023"),
  createData('Haley Johns', "Artist", "sketch",24,"Feburary 21, 2023"),
  createData('Michael Scoffield',"Artist", "ink drawing",67, "Feburary 23, 2023"),
  createData('Kevil Miles',"User", "digital",49, "Feburary 22. 2023"),
];

export default function BasicTable() {
  return ( 
    <div className="Donations">
    <TableContainer component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Amount (ETB)</TableCell>
            <TableCell align="left">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <Link className="back" to='/payment'>back</Link>
  </div>
  );
}