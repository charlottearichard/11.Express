// heroku app:

//ALWAYS RUN NPM START BEFORE REFRESHING HOST

// save importated animals from POST

const fs = require("fs");
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//allows front end to gather data from this file
const { animals } = require("./data/animals");

const express = require("express");

const PORT = process.env.PORT || 3001;

//instantiate the server
const app = express();

//brings in frontend code css and js for styling
//static makes these files resources to the server
app.use(express.static("public"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//tell it to listen for request
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
