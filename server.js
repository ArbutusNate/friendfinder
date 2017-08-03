// Requirements
  var express = require("express");
  var bodyParser = require("body-parser");
  var path = require("path");
  var app = express();
  var exphbs = require("express-handlebars");

// Shortcuts
  var PORT = process.env.PORT || 3000;
  var apiRoutes = require(path.join(__dirname, "app/routing/apiRoutes.js"));
  var htmlRoutes = require(path.join(__dirname, "app/routing/htmlRoutes.js"));

// Set Handlebars as the default templating engine.
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Linked documents
  app.use(express.static(path.join(__dirname, "app/public/css")));
  app.use(express.static(path.join(__dirname, "app/public/js")));
  app.use(express.static(path.join(__dirname, "app/public")));

//apiRoutes
  // app.get("/api/newFriend", apiRoutes.getFriends);
  app.post("/api/newFriend", apiRoutes.postSurvey);

// htmlRoutes
  app.get("/", htmlRoutes.home);
  app.get("/survey", htmlRoutes.survey);

// Listener Alert
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });