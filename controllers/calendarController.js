const db = require("../models");

// Defining methods for the CalendarsController
module.exports = {
  findById: function(req, res) {
    db.Calendar.find({userId : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.Calendar.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    db.Calendar.findOneAndUpdate({ _id: req.params.id}, req.body , {new: true})
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
