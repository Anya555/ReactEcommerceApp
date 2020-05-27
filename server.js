const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/products");

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
