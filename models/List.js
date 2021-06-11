const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  userId:{
    type: Schema.Types.ObjectId,ref:"User"
   },
  

  ingredients: [String]
});
const List = mongoose.model("List", listSchema, "List");

module.exports = List;
