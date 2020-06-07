import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

export default function Cart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img src="./images/img.jpg" height="100px" weight="100px" />
            </Grid>
            <Grid item xs={4}>
              <ul className={classes.list}>
                <li className={classes.name}>Name</li>
                <br></br>
                <br></br>
                <li>Price: $</li>
              </ul>
            </Grid>
            <Grid item xs={3}>
              <Button className={classes.delete}>Delete</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
