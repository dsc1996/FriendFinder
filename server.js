var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
// var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(PORT)

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../app/public/home.html"));
//       });

//  app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "../app/public/survey.html"));
//         });

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

      app.listen(PORT, function() {
        console.log("Listening on Port: " + PORT)
      });