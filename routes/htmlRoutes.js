var db = require("../models");

var path = require("path");

module.exports = function (app) {

    //Route to Home Page
    app.get("/", function (req, res) {

        var featuredJobsArray = [];
        var featuredRequestsArray = [];

        homeObject = {
            featuredJobs: featuredJobsArray,
            featuredRequests: featuredRequestsArray
        }

        db.Project.findAll({}).then(function (data) {
            for (i = 0; i < data.length; i++) {
                featuredJobsArray.push(data[i].dataValues);
            }
            db.Request.findAll({}).then(function (data) {
                for (j = 0; j < data.length; j++) {
                    console.log(data[j].dataValues);
                    featuredRequestsArray.push(data[j].dataValues);
                }
            })
        })



        res.render("index", homeObject);

    });


    app.get("/test", function (req, res) {
        res.render("test");
    });














}