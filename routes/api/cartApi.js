const router = require("express").Router();
const cartController = require("../../controllers/cartControllers");
const itemController = require("../../controllers/itemControllers");
const userController = require("../../controllers/userControllers");

// === post item to cart for logged in user === //

router.route("/:id").get(itemController.getItemId);

router.route("/").post(
  // userController.allowIfLoggedin,
  // userController.getUserId,
  // itemController.getItemId,
  cartController.create
);

module.exports = router;
