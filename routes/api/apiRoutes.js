const router = require("express").Router();
const db = require("../../models");
const calendarController = require("../../controllers/calendarController");
const recipeController = require("../../controllers/recipeController");

router
.route("/recipes/:id")
.get(recipeController.findById)
.post(recipeController.update)
.delete(recipeController.remove);

router 
.route ("/recipes/new")
.post(recipeController.create);

router
.route("/recipe?q")
.get(recipeController.findByQuery);

router
.route("/calendar/:id")
.get(calendarController.findById)
.post(calendarController.update)
.delete(calendarController.remove);

router
  .route("/calendar")
  .post(calendarController.create);


module.exports = router;
