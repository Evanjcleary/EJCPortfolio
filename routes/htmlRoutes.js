var db = require("../models");

var path = require("path");

module.exports = function (app) {

    //Route to Home Page
    app.get("/", function(req, res) {
        
        var featuredJobsArray = [];

        homeObject = {
            featuredJobs: featuredJobsArray
        }

        db.Project.findAll({}).then(function(data){
            for (i = 0; i < data.length; i++) {
                featuredJobsArray.push(data[i].dataValues);
            }

        })
        
        res.render("index", homeObject);

      });


    app.get("/test", function(req, res) {
        res.render("test");
    });














}