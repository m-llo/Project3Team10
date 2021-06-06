const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      },

    email:{
       type:String,
       required:true,
       unique: true,
       match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password:{
        type:String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
})
beforeCreate: async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;
  },
  beforeUpdate: async (updatedUserData) => {
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
  },

module.exports = mongoose.model('User', User, "user")