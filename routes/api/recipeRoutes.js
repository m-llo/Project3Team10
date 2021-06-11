const router = require("express").Router();
const db = require("../../models");
const recipeController = require("../../controllers/recipeController");

router 
.route ("/new")
.post(recipeController.create)
.put(recipeController.update);

// router
// .route ("/saved")
// .post(recipeController.create)

router
.route("/plan/:id")
.get(recipeController.findAll)

router
.route("/:id")
.get(recipeController.findById)
// .post(recipeController.update
.delete(recipeController.remove);

router 
.route ("/")
.get(recipeController.findAll);


router
.route("/?q")
.get(recipeController.findByQuery);

module.exports = router;