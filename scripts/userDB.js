const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CUKdb"
);

const userSeed = [
  {
    email: "michael.t@yahoo.com",
    password: "mike1234"
  },
  {
    email: "mark.t@yahoo.com",
    password: "mark1234"
  },
  {
    email: "shaquille.t@yahoo.com",
    password: "shaquille1234"
  },
  {
      email: "gititdone@yahoo.com",
      password: "whenisthisover"
  }
]
db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });