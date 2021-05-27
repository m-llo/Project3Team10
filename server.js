const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

// const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/routes.js");

// Define middleware here
app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
// app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

dotenv.config()

// Connect to the Mongo DB
mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"));

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(4000, () => console.log("server is up and running"))