const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({});

const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;
