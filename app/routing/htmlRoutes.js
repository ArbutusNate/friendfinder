// Requirements
  var express = require("express");
  var app = express();
  var path = require("path");

// Exports
  //To Home
  exports.home = function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  }
  //To survey
  exports.survey = function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  }