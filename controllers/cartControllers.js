const db = require("../models");

module.exports = {
  // post item to cart
  create: function (req, res) {
    db.Cart.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  getCartItems: function (req, res) {
    db.Cart.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
