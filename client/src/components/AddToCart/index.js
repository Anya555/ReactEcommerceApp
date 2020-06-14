import React, { useState, useEffect } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import API from "../../utils/API";

const AddToCart = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [shouldSave, setShouldSave] = useState(false);
  const [storageItems, setStorageItems] = useState([]);

  useEffect(() => {
    if (shouldSave === true) {
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
        // if user is registered, save item to mongoDB
        if (props.user.accessToken) {
          setCartItem({
            userId: props.user.data.userId,
            itemId: res.data._id,
            image: res.data.image,
            name: res.data.name,
            price: res.data.price,
          });
          setShouldSave(true);
          // if user is unregistered, items will be saved in localStorage
        } else {
          let items = JSON.parse(localStorage.getItem("items")) || [];
          let item = {
            _id: res.data._id,
            image: res.data.image,
            name: res.data.name,
            price: res.data.price,
          };
          items.push(item);
          setStorageItems(items);
          localStorage.setItem("items", JSON.stringify(items));
        }
      })
      .catch((error) => {
        console.log(error);
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
