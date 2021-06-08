const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: false,
      required: false
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

userSchema.methods = {
  checkPassword: function(input){
    return bcrypt.compareSync(input, this.password)
  },
  hashPassword: plainText => {
    return bcrypt.hashSync(plainText, 10)
  }
}

userSchema.pre('save', function (next) {
  if(!this.password){
    console.log("no password provided")
    next()
  }else{
    console.log('password provided, hashing password')
    this.password = this.hashPassword(this.password);
    next()
  }
})
// userSchema.methods = {

//   beforeCreate: async (newUserData) => {
//     newUserData.password = await bcrypt.hash(newUserData.password, 10);
//     return newUserData;
//   },
//   beforeUpdate: async (updatedUserData) => {
//     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
//     return updatedUserData;
//   }
// }

const User = mongoose.model("User", userSchema);


module.exports = User