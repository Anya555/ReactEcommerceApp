const db = require("../models/itemsModel");
const { roles } = require("../roles");

module.exports = {
  // post item to db

  getUser: async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) return next(new Error("User does not exist"));
      res.status(200).json({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },

  allowIfLoggedin: async (req, res, next) => {
    try {
      const user = res.locals.loggedInUser;
      if (!user)
        return res.status(401).json({
          error: "You need to be logged in to access this route",
        });
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  },

  // if role is admin, grant permission to post item to db
  create: function (req, res) {
    const permission = roles.can(req.user.role).createAny("item");
    // console.log(permission);
    if (!permission.granted) {
      db.Items.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },
};
