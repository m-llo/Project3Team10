const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,ref:"User"
   },
  label: {
    type: String,
    required: true
  },
  
  image: {
    type: String,
  },

  url: {
    type: String,
    unique: true
  },

  ingredients: [String]
});
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
