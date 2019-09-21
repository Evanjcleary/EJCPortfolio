var db = require("../models");

module.exports = function (app) {



    app.post("/api/requests", function (req, res) {
        db.Request.create(req.body).then(function (dbRequest) {
          res.json(dbRequest);
        });
      });
    







}