// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// with express set up, load the routes
// =============================================================
require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

// object constructors
// TODO use this to constsruct new user, may move it to separate file
// function User(name, link, scores) {

//     this.name = name;
//     this.link = link;
//     this.scores = scores;
// }

// var user = new User("Mike", "link", [1,2,3,4,5,6,7,8,9,0]);
// console.log(user)

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});