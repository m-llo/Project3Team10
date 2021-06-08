const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
 userId:{
  type: Schema.Types.ObjectId,ref:"User",
  unique: true
 },
    sunday: {
        day: {type: String, default: 'Sunday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
             },
     monday: {
        day: {type: String, default: 'Monday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      tuesday:{
        day: {type: String, default: 'Tuesday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      wednesday: {
        day: {type: String, default: 'Wednesday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      thursday: {
        day: {type: String, default: 'Thursday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
      friday: {
        day: {type: String, default: 'Friday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
     saturday: {
        day: {type: String, default: 'Saturday'},
        recipe:{type: Schema.Types.ObjectId,ref:"Recipe"}
      },
    
    
  });
  
  const Calendar = mongoose.model("Calendar", CalendarSchema, "calendar");
  
  module.exports = Calendar;