var friendArr = require("../data/friends");

module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        var match = req.body;
        var user = req.body;
        var alreadyThere = false;
        var alreadyAdded = false;
        var userScore = 0;
        var closestDiff = 90;
        var closestMatch = {};

        // find and save closest match in friendArr
        var userScore = totalScore(user.scores);

        friendArr.forEach(friend => {
            if (user.userName.toUpperCase() === friend.userName.toUpperCase()) {
                console.log('setting alreadyThere to true');
                alreadyThere = true;
                return; // use this to leave the function and do the next iteration
            } else {
                alreadyThere = false;
            }

            console.log(user.userName + " " + friend.userName + " " + alreadyThere);

            friendScore = totalScore(friend.scores);
            // the smallest difference between scores is the best match
            var diff = Math.abs(userScore - friendScore);

            if (diff < closestDiff) {
                // best match so far
                closestMatch = friend;
                closestDiff = diff;
            }

            // append this person to the array if they aren't already there.
            if (alreadyThere === false && alreadyAdded === false) {
                friendArr.push(user);
                alreadyAdded = true;
            }

        });
        // console.log(closestMatch);

        // return the match
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
        totalScore += parseInt(score);
    });
    return totalScore;
}