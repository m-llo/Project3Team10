const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const session = require('express-session')


const PORT = process.env.PORT || 3001;
const app = express();
;
const routes = require("./routes")

const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

dotenv.config()
mongoose.connect (
  process.env.MONDGODB_URI || "mongodb://localhost/CUKdb"
)
// mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"));
// mongoose.connect(

//   process.env.MONGODB_URI || "mongodb+srv://cukdb:group10@cluster0.gd2at.mongodb.net/CUKDB?retryWrites=true&w=majority",

//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );
app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
