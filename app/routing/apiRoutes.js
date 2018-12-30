var friends = require("../data/friends");

//Routing

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res) {
        var newFriend = req.body;
        var difference = []
        for (var i = 0; i < friends.length; i++) {
            var answer1 = (friends[i].scores[0]) - newFriend.scores[0];
            var answer2 = (friends[i].scores[1]) - newFriend.scores[1];
            var answer3 = (friends[i].scores[2]) - newFriend.scores[2];
            var answer4 = (friends[i].scores[3]) - newFriend.scores[3];
            var answer5 = (friends[i].scores[4]) - newFriend.scores[4];
            var answer6 = (friends[i].scores[5]) - newFriend.scores[5];
            var answer7 = (friends[i].scores[6]) - newFriend.scores[6];
            var answer8 = (friends[i].scores[7]) - newFriend.scores[7];
            var answer9 = (friends[i].scores[8]) - newFriend.scores[8];
            var answer10 = (friends[i].scores[9]) - newFriend.scores[9];
            var add = Math.abs(answer1) + Math.abs(answer2) + Math.abs(answer3) + Math.abs(answer4) + Math.abs(answer5) + Math.abs(answer6) + Math.abs(answer7) + Math.abs(answer8) + Math.abs(answer9) + Math.abs(answer10);
            difference.push(add);
        }
        var min = Math.min.apply(Math, difference);
        var indexMin = difference.indexOf(min);
        console.log("Best Match");
        console.log(friends[indexMin].name);
        console.log(friends[indexMin].photo);
        // $("div.modal-body").html("test");
        // $("#myModal").modal("toggle")
        friends.push(newFriend);

        //Loop through all friends and each score. Calculate difference score and add that. Lowest total difference return as matching friend.
        //write a function that calulates total difference. Loop through and call that function.

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