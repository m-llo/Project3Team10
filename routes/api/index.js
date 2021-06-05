const router = require("express").Router();
const calendarRoutes = require("./calendarRoutes");
const recipeRoutes = require("./recipeRoutes");

// Post routes
router.use("/recipes", recipeRoutes);
router.use("/calendar", calendarRoutes);

module.exports = router;
