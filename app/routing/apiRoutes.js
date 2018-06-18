var friendArr = require("../data/friends");

module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        var match = req.body;
        var user = req.body;
        console.log(user);
        var alreadyThere = false;
        var userScore = 0;
        var closestDiff = 90;
        var closestMatch = {};

        // find and save closest match in friendArr
        var userScore = totalScore(user.scores);

        friendArr.forEach(friend => {
            if (user.userName === friend.userName) {
                alreadyThere = true;
                return; // use this to leave the function and do the next iteration
            }
            friendScore = totalScore(friend.scores);
            // the smallest difference between scores is the best match
            var diff = Math.abs(userScore - friendScore);
            console.log("user score: " + userScore +
                " friendScore: " + friendScore +
                " diff: " + diff + " closests diff: " + closestDiff);
            if (diff < closestDiff) {
                // best match so far
                closestMatch = friend;
                console.log("friend");
                console.log(friend);
                closestDiff = diff;
            }

            // append this person to the array if they aren't already there.
            if (!alreadyThere) {
                console.log("pushing");
                console.log(user);
                friendArr.push(user);
            }

        });
        // console.log(closestMatch);

        // return the match
        console.log("returning");
        console.log(closestMatch);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(closestMatch));
    });

    app.get("/api/friends", function (req, res) {
        res.json(friendArr);
    });
};

function totalScore(scores) {
    var totalScore = 0;

    scores.forEach(score => {
        // console.log("score: " + score);
        totalScore += parseInt(score);
    });
    console.log("totalScore");
    console.log(totalScore);
    return totalScore;
}