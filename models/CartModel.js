const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
  },
  itemId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
