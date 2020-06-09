const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
  },
  itemId: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});
const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
