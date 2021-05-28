const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
  Sunday: [
      {
        name: {
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
        indredients: [{
          type: String,
          }],
      }
    ],
    Monday: [
        {
          name: {
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
        indredients: [{
            type: String,
            }],
        }
      ],
      Tuesday: [
        {
          name: {
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
          indredients: [{
            type: String,
            }],
        }
      ],
      Wednesday: [
        {
          name: {
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
          indredients: [{
            type: String,
            }],
        }
      ],
      Thursday: [
        {
          name: {
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
          indredients: [{
            type: String,
            }],
        }
      ],
      Friday: [
        {
          name: {
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
          indredients: [{
            type: String,
            }],
        }
      ],
      Saturday: [
        {
          name: {
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
          indredients: [{
            type: String,
            }],
        }
      ],
  });
  
  const Calendar = mongoose.model("calendar", CalendarSchema);
  
  module.exports = Calendar;