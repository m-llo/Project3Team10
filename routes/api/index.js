const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// Post routes
router.use("/api", apiRoutes);

module.exports = router;
