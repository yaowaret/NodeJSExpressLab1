var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");


// var mongoose = require("mongoose");
// var db = "mongodb://localhost/test";
// mongoose.connect(db, {
//     useNewUrlParser: true
// });

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/", function (req, res) {
    res.send("happy to be here");
});

app.get("/test", function (req, res) {
    res.send("Ugh, i hate Mondays!");
});

var port = 3000;
app.listen(port, () => {});