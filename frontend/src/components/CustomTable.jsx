import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">AcctType</TableCell>
            <TableCell align="right">Account</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">TypicalBal</TableCell>
            <TableCell align="right">DebitOffset</TableCell>
            <TableCell align="right">CreditOffset</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.AcctType}</TableCell>
              <TableCell align="right">{row.Account}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Department}</TableCell>
              <TableCell align="right">{row.TypicalBal}</TableCell>
              <TableCell align="right">{row.DebitOffset}</TableCell>
              <TableCell align="right">{row.CreditOffset}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
