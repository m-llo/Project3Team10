const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

router 
.route ("/")
.get(recipeController.findAll);

router 
.route ("/new")
.post(recipeController.create)
.put(recipeController.update);

router
.route("/:id")
.get(recipeController.findById)
.delete(recipeController.remove);

module.exports = router;