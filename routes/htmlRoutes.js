var db = require("../models");

var path = require("path");

module.exports = function (app) {

    //Route to Home Page
    app.get("/", function(req, res) {
        res.render("index");
      });


    app.get("/test", function(req, res) {
        res.render("test");
    });














}