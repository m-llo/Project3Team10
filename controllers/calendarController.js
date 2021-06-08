const db = require("../models");

// Defining methods for the CalendarsController
module.exports = {
  findById: function(req, res) {
    db.Calendar.findByUserId({userId : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.Calendar.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    const day = req.body.day
    db.Calendar.findOneAndUpdate({ _id: req.params.id, day: req.body.day }, {$push: {recipe: req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    db.Calendar.findOneAndDelete({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
