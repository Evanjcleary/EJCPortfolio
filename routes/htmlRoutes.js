var db = require("../models");

var path = require("path");

module.exports = function (app) {

    //Route to Home Page
    app.get("*", function (req, res) {

        var featuredJobsArray = [];
        var featuredRequestsArray = [];

        homeObject = {
            projects: featuredJobsArray,
            requests: featuredRequestsArray
        }
        // alert("searching for projects")
        db.Project.findAll({}).then(function (data1) {
            for (i = 0; i < data1.length; i++) {
                console.log("looping through projects")
                console.log(data1[i].dataValues);
                featuredJobsArray.push(data1[i].dataValues);
            }
            
        })
        setTimeout(function(){

            db.Request.findAll({}).then(function (data2) {
                for (j = 0; j < data2.length; j++) {
                    console.log(data2[j].dataValues);
                    featuredRequestsArray.push(data2[j].dataValues);
                }
            })
        }, 500)

        setTimeout(function(){ 
        res.render("index", homeObject);
    }, 1000)
    });


    app.get("/test", function (req, res) {
        res.render("test");
    });














}