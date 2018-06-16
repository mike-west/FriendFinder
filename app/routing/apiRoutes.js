var friendArr = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        // TODO actually select prospecitive friends.
        console.log("Inside GET /api/friends");
        // console.log(friendArr);
        res.json(friendArr);
    });

    app.post("/api/friends", function (req, res) {
        // TODO echoing the data back for now, add logic to update the table
        console.log("Inside POST /api/friends");
        res.json(true);
    });
};