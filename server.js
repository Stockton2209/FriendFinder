//Dependencies
//=============================================
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Data
//=============================================

//Routes
//=============================================
require ("./app/routing/htmlRoutes.js")(app);
require ("./app/routing/apiRoutes.js")(app);


//Listener
//==============================================
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`)
  });
