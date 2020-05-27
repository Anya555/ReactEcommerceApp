import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
