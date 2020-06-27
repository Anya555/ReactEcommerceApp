import React from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

export default function LearnMore(props) {
  const classes = useStyles();

  return (
    <>
      <div xs={12} key={props.product._id}>
        <Modal className={classes.paper} open={props.product.open}>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={4}>
              <img
                src={props.product.imgUrl}
                alt="product"
                height="300px"
                width="300px"
              />
            </Grid>
            <Grid item xs={6}>
              <ul className={classes.list}>
                <li className={classes.name}>{props.product.name}</li>
                <br></br>
                <li className={classes.price}>Price: ${props.product.price}</li>
                <br></br>
                <li>{props.product.description}</li>
              </ul>
            </Grid>
            <Grid item xs={1}>
              <Button
                className={classes.close}
                onClick={() => props.handleShow(props.product)}
              >
                X
              </Button>
            </Grid>
          </Grid>
        </Modal>
      </div>
    </>
  );
}
