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
    // console.log("query", req.query);
    db.Items.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // Delete
  remove: function (req, res) {
    console.log("id", req.params.id);
    db.Items.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
