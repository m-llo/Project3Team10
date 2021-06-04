const db = require("../models");

// Defining methods for the CalendarsController
module.exports = {
  findAll: function(req, res) {
    db.Recipe.find({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByQuery: function(req, res) {
    db.Recipe.find( {name: req.query})
      .then(recipes => res.json(recipes))
      .catch(err => res.status(422).end());
    },
  findById: function(req, res) {
    db.Recipe.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Recipe.create(req.body)
      .then(dbModel => res.json(recipes))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Recipe.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
