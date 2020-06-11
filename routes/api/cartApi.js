const router = require("express").Router();
const cartController = require("../../controllers/cartControllers");
const itemController = require("../../controllers/itemControllers");

// === get item id that needs to be posted to cart === //
router.route("/:id").get(itemController.getItemId);

// ===== add item to cart ============================ //
router.route("/").post(cartController.create);

// ===== find items in cart ========================== //
router.route("/").get(cartController.getCartItems);

// ===== delete item from cart ======================= //
router.route("/:id").delete(cartController.remove);

module.exports = router;
