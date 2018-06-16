var friendData = requires("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        // TODO actually select prospecitive friends.
        res.json(friendData);  
    });

    app.post("api/friends", function(req, res){
        // TODO echoing the data back for now, add logic to update the table
        res.json(req);
    });
};