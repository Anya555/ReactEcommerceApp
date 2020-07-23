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
import firebase from "../../firebase";

export default function Dashboard(props) {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const headers = [
    { idx: 1, label: "Image" },
    { idx: 2, label: "Name" },
    { idx: 3, label: "Category" },
    { idx: 4, label: "Quantity" },
    { idx: 5, label: "Price" },
    { idx: 6, label: "Description" },
    { idx: 7, label: "" },
  ];

  useEffect(() => {
    displayAll();
  }, []);

  const displayAll = () => {
    API.getAllItems()
      .then((res) => {
        let items = res.data;
        Promise.all(items.map((item) => firebase.setImageUrl(item))).then(
          () => {
            setProducts(items);
          }
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteFromDb = (id) => {
    API.deleteItem(id)
      .then((res) => {
        products.map((product) => {
          // delete image from firebase storage when deleting item from mongoDB
          if (product._id === id) {
            firebase.storage.ref("images/").child(product.image).delete();
          }
          return product;
        });
      })
      .then(() => {
        displayAll();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Link to="/admin-post-form">
        <Tooltip title="Add" aria-label="add" className={classes.fab}>
          <Fab style={{ backgroundColor: "#880e4f", color: "white" }}>
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
                    <TableCell key={column.idx} className={classes.headers}>
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .filter(
                  (product) =>
                    product.category
                      .toLowerCase()
                      .includes(props.search.toLowerCase()) ||
                    product.name
                      .toLowerCase()
                      .includes(props.search.toLowerCase())
                )
                .map((product) => {
                  return (
                    <TableRow key={product._id}>
                      <TableCell className={classes.tableWidth}>
                        <img
                          src={product.imgUrl}
                          alt=""
                          width="100px"
                          height="100px"
                        />
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.dbQuantity}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell className={classes.description}>
                        {product.description}
                      </TableCell>
                      <TableCell>
                        <DeleteForever
                          className={classes.delete}
                          onClick={() => deleteFromDb(product._id)}
                        />
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
