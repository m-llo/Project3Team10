const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
 userId:{
type: String
 },
  plan: [
      {
        day: "Sunday",
        recipeName: String,
        thumbnail: String,
        url: String,
        indredients:[String]
      },
      {
        monday: {
          type: String,
        },
        recipeName: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
        indredients:[String]
      },
      {
        tuesday: {
          type: String,
        },
        recipeName: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
        indredients:[String]
      },
      {
        wednesday: {
          type: String,
        },
        recipeName: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
        indredients:[String]
      },
      {
        thursday: {
          type: String,
        },
        recipeName: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
        indredients:[String]
      },
      {
        friday: {
          type: String,
        },
        recipeName: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
        indredients:[String]
      },
      {
        saturday: {
          type: String,
        },
        recipeName: {
          type: String,
        },
        thumbnail: {
          type: String,
        },
        url: {
          type: String,
        },
        indredients:[String]
      }
    ]
  });
  
  const Calendar = mongoose.model("calendar", CalendarSchema);
  
  module.exports = Calendar;