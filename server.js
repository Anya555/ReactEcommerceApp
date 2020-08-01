const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const jwt = require("jsonwebtoken");
const User = require("./models/UserModel");

const MONGO_CONNECT = (process.env.NODE_ENV === "production") ? "mongodb://webuser:43dN1x3hhDLMmiHhXQOcNd@ds029811.mlab.com:29811/heroku_dqpr36g1" : "mongodb://localhost:27017/products"

mongoose
  .connect(MONGO_CONNECT)
  .then(() => {
    console.log("Connected to the Database successfully");
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    const accessToken = req.headers["x-access-token"];
    const { userId, exp } = await jwt.verify(
      accessToken,
      process.env.JWT_SECRET
    );
    /// Check if token has expired
    if (exp < Date.now().valueOf() / 1000) {
      return res.status(401).json({
        error: "JWT token has expired, please login to obtain a new one",
      });
    }
    res.locals.loggedInUser = await User.findById(userId);
    next();
  } else {
    next();
  }
});

app.use(routes);
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path_join(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
