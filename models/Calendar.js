const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalendarSchema = new Schema(
  [
    {
 userId:{
  type: Schema.Types.ObjectId,ref:"User",
  unique: true
 }, 
      sunday: {
        day: {type: String, default: 'Sunday'},
        label: {type: String},
        url: {type: String},
        ingredients:[String],
        image: {type: String}
                    },

     monday: {
      day: {type: String, default: 'Monday'},
      label: {type: String},
      url: {type: String},
      ingredients:[String],
      image: {type: String}
      },

      tuesday:{
      day: {type: String, default: 'Tuesday'},
      label: {type: String},
      url: {type: String},
      ingredients:[String],
      image: {type: String}
      },

      wednesday: {
        day: {type: String, default: 'Wednesday'},
        label: {type: String},
      url: {type: String},
      ingredients:[String],
      image: {type: String}
      },

      thursday: {
        day: {type: String, default: 'Thursday'},
        label: {type: String},
        url: {type: String},
        ingredients:[String],
        image: {type: String}
      },
      friday: {
        day: {type: String, default: 'Friday'},
        label: {type: String},
        url: {type: String},
        ingredients:[String],
        image: {type: String}
      },

     saturday: {
      day: {type: String, default: 'Saturday'},
      label: {type: String},
      url: {type: String},
      ingredients:[String],
      image: {type: String}
      }
}
]);
  
  const Calendar = mongoose.model("Calendar", CalendarSchema, "calendar");
  
  module.exports = Calendar;