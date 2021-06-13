const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
};

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

app.use(routes)



mongoose.connect (
  process.env.MONDGODB_URI || "mongodb://localhost/CUKdb",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

 

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
