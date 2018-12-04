//Dependencies
//=============================================
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

//Data
//=============================================

//Routes
//=============================================
//route to the homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

//Listener
//==============================================
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`)
  });
