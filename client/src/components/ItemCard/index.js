import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SecondNavbar from "../SecondNavbar";
import { useStyles } from "./style";
import API from "../../utils/API";

export default function MediaCard(props) {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (props.query) {
      displayItemCategory();
    } else {
      displayAll();
    }
  }, []);

  const displayAll = () => {
    API.displayAllItems()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayItemCategory = (query) => {
    // console.log("this is called");
    API.displayCategory(query)
      .then((res) => {
        setProducts(res.data);
        console.log(query);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SecondNavbar displayItemCategory={displayItemCategory} />
      <Grid container className={classes.main} spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {products
              .filter((product) => product.category.toLowerCase())
              .map((product) => (
                <Grid key={product._id} item>
                  {" "}
                  <Card className={classes.root}>
                    <img src="" alt="product" height="100px" width="100px" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <div>Price: $ {product.price}</div>
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
    </>
  );
}
