// Requirements
  var express = require("express");
  var app = express()
  var bodyParser = require("body-parser");
  var path = require("path");

//Shortcuts
  var friends = require(path.join(__dirname, "../data/friends.js"));
  var friendList = friends.friends;

//Exports
  exports.getFriends = function(req, res){
    res.json(friends);
  }

  //Survey Posting and Friend-finding logic.
  exports.postSurvey = function(req, res){
    console.log("----pushing data----");
    console.log(req.body);
    var newScore = req.body.totalScore;
    var friendCompare = Math.abs(friendList[0].totalScore - newScore);
    var bestFriend = friendList[0];
    var tempCompare = 0;
    console.log("friendCompare: " + friendCompare);
    //For loop for determining best match.
    for (i = 1; i < friendList.length; i++){
      tempCompare = Math.abs(friendList[i].totalScore - newScore)
      console.log(friendList[i].name + " total score is: " + friendList[i].totalScore);
      console.log("Your total score is " + newScore + ". The different between you and " + friendList[i].name + " is " + tempCompare);
      if(tempCompare < friendCompare){
        bestFriend = friendList[i];
        console.log(bestFriend)
      } else {
        console.log(friendList[i].name + " is not your best friend.")
      }
    }
    friendList.push(req.body);
      //put bestFriend in a modal.
    // console.log(friendList);
  }