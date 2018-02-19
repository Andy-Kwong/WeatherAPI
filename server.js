var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(__dirname + '/WeatherAngular/dist'));

app.all("*" , (req, res, next) => {
    res.sendFile(path.resolve("./WeatherAngular/dist/index.html"));
});

app.listen(4200, function() {

    console.log("listening on port 4200")
})
