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

router
  .route("/")
  .get(
    userController.allowIfLoggedin,
    userController.grantAccess("read", "item"),
    itemController.findAll
  );

module.exports = router;
