require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

var mysql = require("mysql");
// var session = require("express-session");
// var bodyParser = require("body-parser");
var path = require("path");


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.engine( 
    "handlebars", 
    exphbs({
    defaultLayout: "main"
})
);
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
  }


  db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });

  
  
  module.exports = app;