const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
// const routesUrls = require('./routes/routes');
// const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/api/calendarRoutes");
const routes = require("./routes")

// Define middleware here
app.use(express.json());
// app.use(cors());
// app.use('/app', routesUrls);
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

dotenv.config()

// mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"));
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://cukdb:group10@cluster0.gd2at.mongodb.net/CUKDB?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
// console.log(CUKdb)
// Use apiRoutes
// app.use("/api", apiRoutes);
app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
