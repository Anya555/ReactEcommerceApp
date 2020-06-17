import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import API from "../../utils/API";

const AddToCart = (props) => {
  const [itemToSave, setItemToSave] = useState({});
  const [shouldSave, setShouldSave] = useState(false);
  const [storageItems, setStorageItems] = useState([]);

  useEffect(() => {
    if (shouldSave === true) {
      API.addToCart(itemToSave)
        .then((res) => {
          console.log(res);
          props.history.replace("/cart");
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, [shouldSave]);

  const getItemId = (id) => {
    API.findItem(id)
      .then((res) => {
        let currentlyInCart = props.cartItems.find(
          (item) => item.itemId === id
        );
        // console.log(currentlyInCart);
        // if user is registered, save item to mongoDB
        if (props.user.accessToken) {
          if (!currentlyInCart) {
            setItemToSave({
              userId: props.user.data.userId,
              itemId: res.data._id,
              image: res.data.image,
              name: res.data.name,
              price: res.data.price,
              dbQuantity: res.data.dbQuantity,
              cartQuantity: 1,
            });
            setShouldSave(true);
          } else {
            let item = props.cartItems.find((item) => item.itemId === id);
            API.updateQuantity(item._id, {
              cartQuantity: (item.cartQuantity += 1),
            }).then((res) => {
              console.log(res);
              props.history.replace("/cart");
            });
          }
        }

        // if user is unregistered, items will be saved in localStorage
        if (!props.user.accessToken) {
          let items = JSON.parse(localStorage.getItem("items")) || [];

          let isItemInCart = items.find((item) => item._id === id);

          if (isItemInCart) {
            items.find((item) => item._id === id).cartQuantity += 1;
          } else {
            let item = {
              _id: res.data._id,
              image: res.data.image,
              name: res.data.name,
              price: res.data.price,
              dbQuantity: res.data.dbQuantity,
              cartQuantity: 1,
            };
            items.push(item);
          }

          setStorageItems(items);
          localStorage.setItem("items", JSON.stringify(items));
          props.history.replace("/cart");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AddShoppingCartIcon
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => getItemId(props.product._id)}
      />
    </>
  );
};
export default withRouter(AddToCart);
