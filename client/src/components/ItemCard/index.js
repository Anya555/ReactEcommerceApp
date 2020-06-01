import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStyles } from "./style";
import API from "../../utils/API";

export default function MediaCard() {
  const [spacing, setSpacing] = React.useState(4);
  const [items, setItems] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    displayAll();
  }, []);

  const displayAll = () => {
    API.displayAllItems()
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container className={classes.main} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {items.map((item) => (
            <Grid key={item._id} item>
              {" "}
              <Card className={classes.root}>
                <img src="" alt="item" height="100px" width="100px" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <div>Price: $ {item.price}</div>
                </CardContent>
                <CardActions>
                  <AddShoppingCartIcon className={classes.cart} />
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
