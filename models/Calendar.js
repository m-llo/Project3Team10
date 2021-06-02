const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
 userId:{
type: String, ref:"User"
 },
  plan: [
      {
        day: {type: String, default: 'Sunday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: {type: String, default: 'Monday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: {type: String, default: 'Tuesday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: {type: String, default: 'Wednesday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: {type: String, default: 'Thursday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: {type: String, default: 'Friday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: {type: String, default: 'Saturday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
    ]
  });
  
  const Calendar = mongoose.model("calendar", CalendarSchema);
  
  module.exports = Calendar;