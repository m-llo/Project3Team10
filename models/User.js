const mongoose = require('mongoose')
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
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

const User = mongoose.model("User", userSchema);


module.exports = User