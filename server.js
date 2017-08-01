var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


// var apiRoutes = require(path.join(__dirname, "app/routing/apiRoutes.js"));
// var htmlRoutes = require(path.join(__dirname, "app/routing/htmlRoutes.js"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var apiRoutes = require(path.join(__dirname, "app/routing/apiRoutes.js"));
var htmlRoutes = require(path.join(__dirname, "app/routing/htmlRoutes.js"));


//apiRoutes
// app.get("/api/friends", apiRoutes.getWaitingList);
// // app.get("/api/reservations", apiRoutes.getReservations);
// app.post("/api/friends", apiRoutes.postRes);

// htmlRoutes
app.get("/", htmlRoutes.home);
app.get("/survey", htmlRoutes.survey);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});