const router = require("express").Router();
const itemController = require("../../controllers/itemControllers");
const userController = require("../../controllers/userControllers");

//   "/" =  /api/items

// ================== restricted routes for admin use========= //
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

router
  .route("/:id")
  .delete(
    userController.allowIfLoggedin,
    userController.grantAccess("delete", "item"),
    itemController.remove
  );
// ============================================================== //

// =========== display all items on a home page ================= //
router.route("/allitems").get(itemController.findAll);

module.exports = router;
