const db = require("../models");

module.exports = {
  // post item to db
  create: function (req, res) {
    console.log("post item");
    console.log(req.body);
    db.Items.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // Get all items from db
  findAll: function (req, res) {
    console.log(req.query);
    db.Items.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
