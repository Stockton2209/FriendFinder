
const path = require("path");
// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// // Displays all characters
// app.get("/api/characters", function(req, res) {
//     return res.json(characters);
//   });
  
//   // Displays a single character, or returns false
//   app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "/../data/friends.js"))
        // return res.json(friends);
    });
};