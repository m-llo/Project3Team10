const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
 userId:{
type: String
 },
  plan: [
      {
        day: "Sunday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}

      },
      {
        day: "Monday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: "Tuesday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: "Wednesday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: "Thursday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: "Friday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      {
        day: "Saturday",
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
    ]
  });
  
  const Calendar = mongoose.model("calendar", CalendarSchema);
  
  module.exports = Calendar;