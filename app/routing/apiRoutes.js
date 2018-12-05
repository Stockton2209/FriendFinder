
const path = require("path");
const friends = require("../data/friends.js");
// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        console.log(res.json(friends));
        return res.json(friends);
    });
    app.post("/api/friends", function(req, res){
    //need to parse out the survey results
        var userData = req.body

        var userName = userData.name;
        var userPic = userData.photo;
        var userScores = userData.scores;
    })



};
