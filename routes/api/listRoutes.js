const router = require("express").Router();
const db = require("../../models");
const listController = require("../../controllers/listController");


router 
.route ("/")
.post(listController.create)

router
.route("/:id")
.get(listController.findById)
.put(listController.update)
.delete(listController.remove)




module.exports = router;