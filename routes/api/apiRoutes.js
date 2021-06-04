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
.route ("/recipes")
.get(recipeController.findAll);

// router.get("/recipes", () =>{
//  db.Recipe.findAll({})
// .then(recipes => res.json(recipes))
// .catch(err => res.status(422).end());

// })

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
