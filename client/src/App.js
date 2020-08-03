import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import AdminPostForm from "./components/AdminPostForm";
import Cart from "./components/Cart";
import LearnMore from "./components/LearnMore";
import Contact from "./components/Contact";
import "./App.css";
import API from "./utils/API";
import firebase from "./firebase";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [shouldGetCartContent, setShouldGetCartContent] = useState(true);

  useEffect(() => {
    if (shouldGetCartContent === true) {
      getCartContent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, cartItems, shouldGetCartContent]);

  //  if user is logged in and user's role is admin,
  // admin-access restricted components will be rendered
  const userLogin = (userData) => {
    setUser(userData);
    setShouldGetCartContent(true);
    if (userData.accessToken && userData.data.role === "admin") {
      setIsAdmin(true);
    }
  };

  // display items in cart
  const getCartContent = () => {
    API.displayCartItems().then((res) => {
      const items = res.data;
      let userItems = [];
      // accessToken identifies if user is logged in

      if (user.accessToken) {
        items.forEach((item) => {
          if (item.userId === user.data.userId) {
            userItems.push(item);
          }
        });
        // if no logged in user found, check for items saved to local storage
      } else {
        userItems = JSON.parse(localStorage.getItem("items")) || [];
      }
      Promise.all(userItems.map((item) => firebase.setImageUrl(item))).then(
        () => {
          setCartItems(userItems);
        }
      );
      displayCartItemsQty(userItems);
      setShouldGetCartContent(false);
    });
  };

  // display total number of items added to cart
  const displayCartItemsQty = (userItems) => {
    let totalItemsInCart = userItems.reduce(
      (acc, item) => acc + item.cartQuantity,
      0
    );
    setItemsCount(totalItemsInCart);
  };

  return (
    <Router>
      <Navbar
        setSearch={setSearch}
        itemsCount={itemsCount}
        cartItems={cartItems}
      />
      <Switch>
        <Route exact path="/">
          <HomePage
            search={search}
            image={image}
            user={user}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemsCount={itemsCount}
            setItemsCount={setItemsCount}
            setShouldGetCartContent={setShouldGetCartContent}
          />
        </Route>
        <Route exact path="/login">
          <Login userLogin={userLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/admin-dashboard">
          {isAdmin === true ? (
            <AdminDashboard search={search} image={image} />
          ) : (
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img
                  src="./images/401.gif"
                  className="unauthorized"
                  alt="unauthorized"
                />
              </Grid>
              <div className="no-access">
                You're not authorized to access this page
              </div>
            </div>
          )}
        </Route>
        <Route exact path="/admin-post-form">
          {isAdmin === true ? (
            <AdminPostForm setImage={setImage} image={image} />
          ) : (
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img
                  src="./images/401.gif"
                  className="unauthorized"
                  alt="unauthorized"
                />
              </Grid>
              <div className="no-access">
                You're not authorized to access this page
              </div>
            </div>
          )}
        </Route>
        <Route exact path="/cart">
          <Cart
            user={user}
            cartItems={cartItems}
            setCartItems={setCartItems}
            itemsCount={itemsCount}
            setItemsCount={setItemsCount}
            setShouldGetCartContent={setShouldGetCartContent}
          />
        </Route>
        <Route exact path="/learn-more">
          <LearnMore />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
