const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  image: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  dbQuantity: {
    type: Number,
    required: true,
  },
  cartQuantity: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Items = mongoose.model("item", itemsSchema);
module.exports = Items;
