import * as React from 'react';
import './CategoryTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product,category) {
  return { product,category};
}

const rows = [
  createData("Dog drawing", "Sketch"),
  createData("Artist drawing", "Pen"),
  createData("Abstract drawing", "Digital"),
  createData("Sky drawing", "Paint"),
];

export default function BasicTable() {
  return ( 
    <div className="CategoriesTable">
      <h3>All Categories</h3>
    <TableContainer component={Paper}
    // style = "boxshadow: "
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="left">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}