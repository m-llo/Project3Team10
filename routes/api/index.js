const router = require("express").Router();
const calendarRoutes = require("./calendarRoutes");
// const recipeRoutes = require("./recipeRoutes");
const logInRoutes = require("./logInRoutes");
const signUpRoutes = require("./signUpRoutes");
const listRoutes = require("./listRoutes");



// Post routes
// router.use("/recipes", recipeRoutes);
router.use("/calendar", calendarRoutes);
router.use("/signup", signUpRoutes);
router.use("/user", logInRoutes);
router.use("/list", listRoutes);
router.use("/", logInRoutes);



module.exports = router;
