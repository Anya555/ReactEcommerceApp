const router = require("express").Router();
const itemController = require("../../controllers/itemControllers");
const userController = require("../../controllers/userControllers");

//  route /api/items
router
  .route("/")
  .post(
    userController.allowIfLoggedin,
    userController.grantAccess("create", "item"),
    itemController.create
  );

module.exports = router;
