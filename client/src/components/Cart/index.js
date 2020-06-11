import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import API from "../../utils/API";
import firebase from "../../firebase";

export default function Cart(props) {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartContent();
  }, []);

  const setImageUrl = async (item) => {
    return await firebase.storage
      .ref("images/")
      .child(item.image)
      .getDownloadURL()
      .then((url) => (item.imgUrl = url));
  };

  const getCartContent = () => {
    API.displayCartItems().then((res) => {
      console.log(res);
      const items = res.data;
      const userItems = [];
      // accessToken identifies if user is logged in
      if (props.user.accessToken) {
        items.forEach((item) => {
          if (item.userId === props.user.data.userId) {
            userItems.push(item);
          }
        });
      }
      Promise.all(userItems.map((item) => setImageUrl(item))).then(() => {
        setCartItems(userItems);
      });
    });
  };

  return (
    <>
      <Typography className={classes.heading}>Your Shopping Cart</Typography>
      <div className={classes.root}>
        <Grid item xs={12} sm={8}>
          {cartItems.map((item) => {
            return (
              <Paper className={classes.paper} key={item._id}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <img
                      src={item.imgUrl}
                      alt="product"
                      height="100px"
                      weight="100px"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <ul className={classes.list}>
                      <li className={classes.name}>{item.name}</li>
                      <br></br>
                      <br></br>
                      <li>Price: ${item.price}</li>
                    </ul>
                  </Grid>
                  <Grid item xs={1}>
                    <Button className={classes.delete}>Delete</Button>
                  </Grid>
                </Grid>
                <hr></hr>
              </Paper>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
