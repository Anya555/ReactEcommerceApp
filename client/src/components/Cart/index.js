import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
import API from "../../utils/API";
import firebase from "../../firebase";

export default function Cart(props) {
  const classes = useStyles();
  const [storageItems, setStorageItems] = useState([]);

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

  // display items in cart
  const getCartContent = () => {
    API.displayCartItems().then((res) => {
      // console.log(res);
      const items = res.data;
      let userItems = [];
      // accessToken identifies if user is logged in
      if (props.user.accessToken) {
        items.forEach((item) => {
          if (item.userId === props.user.data.userId) {
            userItems.push(item);
          }
        });
        // if no logged in user found, check for items saved to local storage
      } else {
        userItems = JSON.parse(localStorage.getItem("items")) || [];
      }
      Promise.all(userItems.map((item) => setImageUrl(item))).then(() => {
        props.setCartItems(userItems);
      });
      // display total number of items added to cart
      let totalOfItemsInCart = userItems.reduce(
        (acc, item) => acc + item.cartQuantity,
        0
      );
      props.setItemsCount(totalOfItemsInCart);
    });
  };

  // delete item from cart
  const remove = (id) => {
    // if user is logged in, delete item from MongoDB
    if (props.user.accessToken) {
      API.deleteCartItem(id).then(() => {
        getCartContent();
      });
    } else {
      // remove all items with same id from cart
      let newItems = props.cartItems.filter((item) => item._id !== id);
      localStorage.setItem("items", JSON.stringify(newItems));
      getCartContent();
    }
  };

  const handleQuantity = (id) => (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    // update item quantity based on user input
    props.cartItems.find((item) => item._id === id).cartQuantity =
      e.target.value;

    setStorageItems({ ...props.cartItems });
    localStorage.setItem("items", JSON.stringify(props.cartItems));

    // display total number of items added to cart
    let totalOfItemsInCart = props.cartItems.reduce(
      (acc, item) => acc + item.cartQuantity,
      0
    );
    props.setItemsCount(totalOfItemsInCart);
  };

  return (
    <>
      {props.itemsCount > 1 ? (
        <Typography className={classes.heading}>
          Your Shopping Cart Has {props.itemsCount} Items
        </Typography>
      ) : props.itemsCount === 1 ? (
        <Typography className={classes.heading}>
          {" "}
          Your Shopping Cart Has 1 Item
        </Typography>
      ) : (
        <Typography className={classes.heading}>
          Your shopping cart is empty
        </Typography>
      )}
      <div className={classes.root}>
        <Grid item xs={12} sm={8}>
          {props.cartItems.map((item) => {
            return (
              <Paper className={classes.paper} key={item._id}>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img
                      src={item.imgUrl}
                      alt="product"
                      height="100px"
                      width="100px"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <ul className={classes.list}>
                      <li className={classes.name}>{item.name}</li>
                      <br></br>
                      <br></br>
                      <li>Price: ${item.price}</li>
                    </ul>
                  </Grid>
                  <Grid item xs={2} className={classes.quantity}>
                    <TextField
                      select
                      label="Qty: "
                      value={item.cartQuantity}
                      name="cartQuantity"
                      variant="outlined"
                      onChange={handleQuantity(item._id)}
                    >
                      <MenuItem value={item.cartQuantity}>
                        {item.cartQuantity}
                      </MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      className={classes.delete}
                      onClick={() => remove(item._id)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
                <hr></hr>
              </Paper>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.card}>
            <br></br>
            <Typography className={classes.subtotal}>
              Subtotal: $
              {props.cartItems.reduce(
                (acc, item) => acc + item.price * item.cartQuantity,
                0
              )}
            </Typography>
            <Button variant="contained" className={classes.checkout}>
              Proceed to checkout
            </Button>
          </Paper>
        </Grid>
      </div>
    </>
  );
}
