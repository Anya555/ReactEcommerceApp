const router = require("express").Router();
const itemRoutes = require("./itemsApi");
const userRoutes = require("./usersApi");

// Item routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);

module.exports = router;
