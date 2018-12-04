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
require ("./app/routing/htmlRoutes.js")(app);


//Listener
//==============================================
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`)
  });
