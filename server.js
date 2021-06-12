const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const session = require('express-session')
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")

// const sess = {
//   secret: 'Super secret secret',
//   resave: false,
//   saveUninitialized: true,
// };

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(session(sess))

dotenv.config()
mongoose.connect (
  process.env.MONDGODB_URI || "mongodb://localhost/CUKdb",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb+srv://cukdb:group10@cluster0.gd2at.mongodb.net/CUKDB?retryWrites=true&w=majority",
// );
app.use(routes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
};
 

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
