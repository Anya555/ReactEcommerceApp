const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const { urlencoded, json } = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

app.use(json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(passport.initialize());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/products");

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
