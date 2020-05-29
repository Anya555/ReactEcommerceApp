const router = require("express").Router();
const itemController = require("../../controllers/itemControllers");
const userController = require("../../controllers/userControllers");

// route / api / users;
router
  .route("/:userId")
  .get(itemController.allowIfLoggedin, itemController.getUser);

//  route /api/items
router.route("/").post(itemController.create);

module.exports = router;
