
var path = require("path");

// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"))});
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"))});
};


//    * A default, catch-all route that leads to `home.html` which displays the home page.
