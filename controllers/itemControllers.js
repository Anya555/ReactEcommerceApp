const db = require("../models");

module.exports = {
  // post item to db (admin restricted)
  create: function (req, res) {
    db.Items.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // Get all items from db
  findAll: function (req, res) {
    db.Items.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // Delete item from db (admin restricted)
  remove: function (req, res) {
    db.Items.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // find items in db by a category
  findCategory: function (req, res) {
    db.Items.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  getItemId: function (req, res) {
    db.Items.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  updateDBQuantity: function (req, res) {
    db.Items.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
