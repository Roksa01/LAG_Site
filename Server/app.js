/**
 * Created by Anastasia on 22.06.2017.
 */

// connecting express
var express = require("express");
// сreate app object
var app = express();
// Static
app.use(express.static(__dirname + "/public"));
// detecting route "/"
app.get("/", function(request, response){

    // creating response
    response.send("<h2>Привет Express!</h2>");
});
// listening port number
app.listen(3000);