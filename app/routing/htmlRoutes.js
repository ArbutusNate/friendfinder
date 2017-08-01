var express = require("express");
var app = express();
var path = require("path");

exports.home = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
}

exports.survey = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
}