const db = require("../models");

module.exports = {
  // post item to cart
  create: function (req, res) {
    db.Cart.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // get all items stored in  cart collection
  getCartItems: function (req, res) {
    db.Cart.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // Delete item from cart
  remove: function (req, res) {
    db.Cart.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
