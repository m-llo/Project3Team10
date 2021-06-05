const router = require("express").Router();
const db = require("../../models");
const recipeController = require("../../controllers/recipeController");

router
.route("/:id")
.get(recipeController.findById)
.post(recipeController.update)
.delete(recipeController.remove);

router 
.route ("/new")
.post(recipeController.create);

router 
.route ("/")
.get(recipeController.findAll);

// router.get("/", () =>{
//  db.Recipe.findAll({})
// .then(recipes => res.json(recipes))
// .catch(err => res.status(422).end());

// })

router
.route("/?q")
.get(recipeController.findByQuery);




module.exports = router;