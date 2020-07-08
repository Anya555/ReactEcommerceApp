import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
import API from "../../utils/API";

export default function Cart(props) {
  const classes = useStyles();
  const [isHigher, setIsHigher] = useState([]);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    getUserName();
  }, []);

  // delete item from cart
  const remove = (id) => {
    let newItems = props.cartItems.filter((item) => item._id !== id);

    // if user is logged in, delete item from MongoDB
    if (props.user.accessToken) {
      API.deleteCartItem(id).then(() => {
        props.setCartItems(newItems);
        props.setShouldGetCartContent(true);
      });
    } else {
      // for not registered users
      // remove all items with same id from cart
      localStorage.setItem("items", JSON.stringify(newItems));
      props.setCartItems(newItems);
      props.setShouldGetCartContent(true);
    }
  };

  // update items quantity in cart based on user input
  const handleQuantity = (id) => (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let item = props.cartItems.find((item) => item._id === id);
    // user input can not exceed items in stock
    if (value > item.dbQuantity) {
      value = item.dbQuantity;
      setIsHigher([...isHigher, item._id]);
    } else {
      setIsHigher(isHigher.filter((id) => item._id !== id));
    }

    if (props.user.accessToken) {
      // if user logged in
      API.updateCartQuantity(item._id, {
        cartQuantity: (item.cartQuantity = value),
      }).then(() => {
        props.setCartItems(props.cartItems);
        props.setShouldGetCartContent(true);
      });
    } else {
      // for not registered users
      item.cartQuantity = value;
      localStorage.setItem("items", JSON.stringify(props.cartItems));
      props.setCartItems(props.cartItems);
      props.setShouldGetCartContent(true);
    }
  };

  // update items count in database on buyout
  const updateInStockQty = () => {
    API.displayAllItems().then((res) => {
      let products = res.data;
      props.cartItems.forEach((item, index) => {
        if (props.user.accessToken) {
          updateInStockQtyMongo(item, products);
        } else {
          updateInStockQtyLocalStorage(item, index, products);
        }
      });
    });
  };

  const updateInStockQtyMongo = (item, products) => {
    const product = products.find((product) => item.itemId === product._id);
    API.updateDbQuantity(product._id, {
      dbQuantity: (product.dbQuantity -= item.cartQuantity),
    })
      .then(() => {
        remove(item._id);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const updateInStockQtyLocalStorage = (item, index, products) => {
    const product = products.find((product) => item._id === product._id);
    API.updateDbQuantity(product._id, {
      dbQuantity: (product.dbQuantity -= item.cartQuantity),
    })
      .then(() => {
        if (index === props.cartItems.length - 1) {
          localStorage.removeItem("items");
          props.setCartItems([]);
          props.setShouldGetCartContent(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserName = () => {
    if (props.user.accessToken) {
      setFirstName(props.user.data.firstName);
    }
  };

  return (
    <>
      {props.itemsCount > 1 ? (
        <Typography className={classes.heading}>
          {firstName} Your Shopping Cart Has {props.itemsCount} Items
        </Typography>
      ) : props.itemsCount === 1 ? (
        <Typography className={classes.heading}>
          {firstName} Your Shopping Cart Has 1 Item
        </Typography>
      ) : (
        <Typography className={classes.heading}>
          {firstName} Your shopping cart is empty
        </Typography>
      )}

      <div className={classes.root}>
        <Grid item xs={12} sm={8}>
          {props.cartItems.map((item) => {
            return (
              <Paper className={classes.paper} key={item._id}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <img
                      src={item.imgUrl}
                      alt="product"
                      height="100px"
                      width="100px"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <ul className={classes.list}>
                      <li className={classes.name}>{item.name}</li>
                      <br></br>
                      <li className={classes.price}> ${item.price}</li>
                      {item.dbQuantity === 0 ? (
                        <li className={classes.stock}>Out of stock</li>
                      ) : (
                        <li className={classes.stock}>In stock</li>
                      )}
                    </ul>
                  </Grid>
                  <Grid item xs={4} className={classes.quantity}>
                    <TextField
                      select
                      label="Qty: "
                      value={item.cartQuantity}
                      name="cartQuantity"
                      variant="outlined"
                      onChange={handleQuantity(item._id)}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </TextField>
                    {isHigher.includes(item._id) ? (
                      <div className={classes.message}>
                        Sorry, only {item.dbQuantity} left items in stock!
                      </div>
                    ) : null}
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
            <Button
              variant="contained"
              className={classes.checkout}
              onClick={updateInStockQty}
            >
              Proceed to checkout
            </Button>
          </Paper>
        </Grid>
      </div>
    </>
  );
}
