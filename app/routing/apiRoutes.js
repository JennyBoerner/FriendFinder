var friends = require("../data/friends");

//Routing

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
        
        // Get the survey data: req.body
        // For each friend
        // Calculate the difference between their survey response score and ours
        // Keep a running sum of the total difference
        // if the total difference for the current friend is less than the lowest difference
        // must be a new best friend
        // set best friend attributes, name, photo, score, etc
        // response with friend data response.json(object of values of best friend)
        // friends.push(req.body);
    })
}