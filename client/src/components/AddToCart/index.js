import React, { useState, useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import API from "../../utils/API";
import firebase from "../../firebase";

const AddToCart = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [shouldSave, setShouldSave] = useState(false);

  useEffect(() => {
    if (shouldSave === true) {
      console.log(cartItem);
      API.addToCart(cartItem)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [shouldSave]);

  const getItemId = (id) => {
    API.findItem(id)
      .then((res) => {
        console.log(res);
        if (props.user.accessToken) {
          setCartItem({
            userId: props.user.data.userId,
            itemId: res.data._id,
            image: res.data.image,
            name: res.data.name,
            price: res.data.price,
          });
          setShouldSave(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <AddShoppingCartIcon
        style={{ color: "red" }}
        onClick={() => getItemId(props.product._id)}
      />
    </>
  );
};
export default AddToCart;
