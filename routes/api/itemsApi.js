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
router.route("/all").get(itemController.findAll);

// =========== display items by a category on a home page ======= //
router.route("/getCategory").get(itemController.findCategory);

module.exports = router;
