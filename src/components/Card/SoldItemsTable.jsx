import * as React from 'react';
import './Card.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( name, artist, category, price, status) {
  return { name, artist, category, price, status};
}

const rows = [
  createData("Dog drawing", "Antony Jules", "Sketch", "150" ),
  createData("Artist drawing", "Michael Scott", "pen", "150" ),
  createData("House sketch", "Steve Jules", "Sketch", "200"),
  createData("Abstract drawing", "John Conar", "painting", "350" ),
  createData("Sky drawing", "Jermaine Cole", "ink", "250" ),
];

export default function BasicTable() {
  return ( 
    <div className="ProductTable">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Artist</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price (ETB)</TableCell>
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
              <TableCell align="left">{row.artist}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}