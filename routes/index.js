const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.route("/api/test").get(function (req, res) {
  res.json({ message: "this works" });
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  //changed to public from build
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
