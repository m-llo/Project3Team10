const router = require("express").Router();
const db = require("../../models");
// const calendarController = require("../../controllers/calendarController");

router.get("/search", (req, res) => {

  db.Recipe.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

// router
// .route("/calendar/:id")
// .get(calendarController.findById)
// .post(calendarController.update)
// .delete(calendarController.remove);

// router
//   .route("/calendar")
//   .post(calendarController.create);


module.exports = router;
