const db = require("../models");

// Defining methods for the List Controller
module.exports = {
  findById: function(req, res) {
    db.List.find({userId : req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.List.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    db.List.findOneAndUpdate({ _id: req.params.id}, req.body , {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    db.List.findOneAndDelete({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};