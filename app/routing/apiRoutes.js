var express = require("express");
var app = express()
var bodyParser = require("body-parser");
var path = require("path");

var reservations = require(path.join(__dirname, "../data/friends.js"));

exports.getFriends = function(req, res){
  res.json(reservations.waitingList);
}

exports.postSurvey = function(req, res){
 var newUser = new NewUser()
}

// New Friend Construction
function NewUser(name, picture, score){
  this.name = name,
  this.picture = picture,
  this.score = score
}