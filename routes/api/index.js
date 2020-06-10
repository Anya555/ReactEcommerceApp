const router = require("express").Router();
const itemRoutes = require("./itemsApi");
const userRoutes = require("./usersApi");
const cartRoutes = require("./cartApi");

// Item routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
