import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import AdminPostForm from "./components/AdminPostForm";
import Cart from "./components/Cart";
import LearnMore from "./components/LearnMore";
import "./App.css";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
  const [search, setSearch] = React.useState("");
  const [image, setImage] = useState("");

  // this function checks if user is logged in and user's role is admin, if those conditions are met
  // components will be rendered
  const userLogin = (userData) => {
    setUser(userData);
    if (userData.accessToken && userData.data.role === "admin") {
      setIsAuthorized(true);
    }
  };

  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <HomePage search={search} image={image} />
        </Route>
        <Route exact path="/login">
          <Login userLogin={userLogin} user={user} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/admin-dashboard">
          {isAuthorized === true ? (
            <AdminDashboard search={search} image={image} />
          ) : (
            <>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {" "}
                <img
                  src="./images/401.gif"
                  className="unauthorized"
                  alt="unauthorized"
                />
              </Grid>
              <div className="no-access">
                You're not authorized to access this page
              </div>
            </>
          )}
        </Route>
        <Route exact path="/admin-post-form">
          {isAuthorized === true ? (
            <AdminPostForm setImage={setImage} image={image} />
          ) : (
            <>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {" "}
                <img
                  src="./images/401.gif"
                  className="unauthorized"
                  alt="unauthorized"
                />
              </Grid>
              <div className="no-access">
                You're not authorized to access this page
              </div>
            </>
          )}
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/learn-more">
          <LearnMore />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
