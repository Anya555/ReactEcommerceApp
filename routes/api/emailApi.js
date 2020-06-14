const router = require("express").Router();
const emailController = require("../../controllers/emailControllers");

router.route("/").post(emailController.handleEmail);

module.exports = router;
