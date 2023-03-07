import * as React from 'react';
import './ProductTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(customer, product, artist,status, price, date) {
  return { customer, product, artist, status, price, date };
}

const rows = [
  createData('Hanna Daniels', "ink drawing", "Kim Robon", "Delivered", 39, "Feburary 23, 2023"),
  createData('Nathan Scott', "painting", "Jack Michaels","Delivered", 37, "Feburary 21, 2023"),
  createData('Haley Johns', "sketch", "Antony Jules","Pending",24,"Feburary 21, 2023"),
  createData('Michael Scoffield', "ink drawing", "Jack Michaels","Delivered" , 67, "Feburary 23, 2023"),
  createData('Kevil Miles', "digital", "Raul Berry","Pending", 49, "Feburary 22. 2023"),
];
const makeStyles = (status)=>{
  if(status ==="Delivered"){
    return{
      background : 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }else{
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
}
export default function BasicTable() {
  return ( 
    <div className="ProductTable">
      <h3>All Products</h3>
    <TableContainer component={Paper}
    // style = "boxshadow: "
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Artist</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Price (ETB)</TableCell>
            <TableCell align="left">Order Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customer}
              </TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell align="left">{row.artist}</TableCell>
              <TableCell align="left">
                <span className="status" style = {makeStyles(row.status)}>
                    {row.status}
                </span>
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}