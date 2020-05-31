import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { useStyles } from "./style";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import API from "../../utils/API";

export default function SimpleTable() {
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const headers = [
    { id: 1, label: "Image" },
    { id: 2, label: "Name" },
    { id: 3, label: "Category" },
    { id: 4, label: "Quantity" },
    { id: 5, label: "Price" },
    { id: 6, label: "Description" },
    { id: 7, label: "" },
  ];

  useEffect(() => {
    displayAll();
  }, []);

  const displayAll = () => {
    API.getAllItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Link to="/admin-post-form">
        <Tooltip title="Add" aria-label="add" className={classes.fab}>
          <Fab color="secondary">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Link>
      <div className={classes.paper}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((column) => {
                  return (
                    <TableCell key={column.id} className={classes.headers}>
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell className={classes.tableWidth}>
                      <img src=" " alt="" width="100px" height="100px" />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell className={classes.description}>
                      {item.description}
                    </TableCell>
                    <TableCell>
                      <DeleteForever />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}
