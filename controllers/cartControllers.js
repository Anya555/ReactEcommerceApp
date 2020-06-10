const db = require("../models");

module.exports = {
  // post item to cart
  create: function (req, res) {
    console.log("post item");
    console.log(req.body);
    db.Cart.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
