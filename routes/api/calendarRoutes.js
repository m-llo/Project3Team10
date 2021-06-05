const router = require("express").Router();
const db = require("../../models");
const calendarController = require("../../controllers/calendarController");


router
.route("/calendar/:id")
.get(calendarController.findById)
.post(calendarController.update)
.delete(calendarController.remove);

router
  .route("/calendar")
  .post(calendarController.create);


module.exports = router;
