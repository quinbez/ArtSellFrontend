import * as React from 'react';
import './UserTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(user, role, email, phone_number, city, house_number, cart) {
  return { user, role, email, phone_number, city, house_number, cart };
}

const rows = [
  createData('Hanna Daniels', "Admin", "Kim Robon@gmail.com", "0929334304", "Addis Ababa", 23, 0),
  createData('Nathan Scott', "Artist", "Jack Michaels@gmail.com","0929334305", "Jimma", 21, 24),
  createData('Haley Johns', "Artist", "Antony Jules@yahoo.com","0929334306","Addis Ababa",21, 12),
  createData('Michael Scoffield', "User", "Jack Michaels@yahoo.com","0929334307" , "Hawassa", 23, 4),
  createData('Kevil Miles', "User", "Raul Berry@gmail.com","0929334308", "Dire Dawa", 22, 10),
];

export default function BasicTable() {
  return ( 
    <div className="UserTable">
      <h3>All Users</h3>
    <TableContainer component={Paper}
    // style = "boxshadow: "
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">House_number</TableCell>
            <TableCell align="left">Cart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone_number}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="left">{row.house_number}</TableCell>
              <TableCell align="left">{row.cart}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}