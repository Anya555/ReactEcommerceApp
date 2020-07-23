import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import API from "../../utils/API";

const AddToCart = (props) => {
  const [itemToSave, setItemToSave] = useState({});
  const [shouldSave, setShouldSave] = useState(false);

  useEffect(() => {
    if (shouldSave === true) {
      addItemToDB();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldSave]);

  const addItemToDB = () => {
    API.addToCart(itemToSave)
      .then((res) => {
        props.setItemsCount(props.itemsCount + 1);
        props.setCartItems([...props.cartItems, res.data]);
        props.setShouldGetCartContent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addItemToCart = (id) => {
    API.findItem(id)
      .then((res) => {
        let currentlyInCart = props.cartItems.find(
          (item) => item.itemId === id
        );
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
            updateItemQuantityInDB(id);
          }
        } else {
          addItemToLocalStorage(id, res);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const updateItemQuantityInDB = (id) => {
    let item = props.cartItems.find((item) => item.itemId === id);
    console.log(item);
    API.updateCartQuantity(item.itemId, {
      cartQuantity: (item.cartQuantity += 1),
    })
      .then(() => {
        props.setItemsCount(props.itemsCount + 1);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  // if user is unregistered, items will be saved in localStorage
  const addItemToLocalStorage = (id, res) => {
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
    localStorage.setItem("items", JSON.stringify(items));
    props.setItemsCount(props.itemsCount + 1);
    props.setCartItems(items);
    props.setShouldGetCartContent(true);
  };

  return (
    <div>
      <AddShoppingCartIcon
        style={{ color: "#880e4f", cursor: "pointer" }}
        onClick={() => addItemToCart(props.product._id)}
      />
    </div>
  );
};
export default withRouter(AddToCart);
