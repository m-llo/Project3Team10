const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Recipe.find({})
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findByQuery: function(req, res) {
    db.Recipe.find( {name: req.query})
      .then(recipes => res.json(recipes))
      .catch(err => res.end());
    },
  findById: function(req, res) {
    db.Recipe.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.Recipe
      .create({
        userId: req._id, 
        label: req.body.label,
        url: req.body.url,
        image: req.body.image,
        ingredients:[req.body.ingredients]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    db.Recipe.findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    db.Recipe.findByIdAndDelete({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
