const router = require("express").Router();
const itemRoutes = require("./itemsApi");
const userRoutes = require("./usersApi");
const cartRoutes = require("./cartApi");
const emailRoutes = require("./emailApi");

// Item routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);
router.use("/cart", cartRoutes);
router.use("/email", emailRoutes);

module.exports = router;
