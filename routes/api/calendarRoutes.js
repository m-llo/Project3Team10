const router = require("express").Router();
const db = require("../../models");
const calendarController = require("../../controllers/calendarController");

router
  .route("/")
  .post(calendarController.create);

router
.route("/:id")
.get(calendarController.findById)
.post(calendarController.update)
.delete(calendarController.remove);

module.exports = router;
