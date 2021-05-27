const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  thumbnail: {
    type: String,
    default: ""
  },

  href: {
    type: String,
    default: "",
    unique: true
  },

  ingredients: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
