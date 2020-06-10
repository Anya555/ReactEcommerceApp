const router = require("express").Router();
const cartController = require("../../controllers/cartControllers");
const itemController = require("../../controllers/itemControllers");
const userController = require("../../controllers/userControllers");

// === get item id that needs to be posted to cart === //
router.route("/:id").get(itemController.getItemId);

// ===== add item to cart ============================ //
router.route("/").post(cartController.create);

// ===== find items in cart ========================== //
router.route("/").get(cartController.getCartItems);

module.exports = router;
