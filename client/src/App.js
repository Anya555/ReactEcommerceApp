import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import AdminPostForm from "./components/AdminPostForm";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
  const [search, setSearch] = React.useState("");

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
          <HomePage search={search} />
        </Route>
        <Route exact path="/login">
          <Login userLogin={userLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/admin-dashboard">
          {isAuthorized === true ? (
            <AdminDashboard search={search} />
          ) : (
            <div>Not authorized</div>
          )}
        </Route>
        <Route exact path="/admin-post-form">
          {isAuthorized === true ? (
            <AdminPostForm />
          ) : (
            <div>Not authorized</div>
          )}
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
