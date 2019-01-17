var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

var User = require('./user')

var mongoose = require("mongoose");
var db = "mongodb://localhost:27017/NewConnection";
mongoose.connect(db, {
    useNewUrlParser: true
});
app.use(bodyParser.json());

app.use(cors());

// app.use(bodyParser.urlencoded({
//     extended: false
// }));

//Get Home page
app.get("/", function (req, res) {
    res.send("happy to be here");
});

//get a new user to the db
app.get("/test", function (req, res) {
    res.send({ type: 'GET' });
});

//add a new user to the db
app.post("/saveuser", function (req, res) {
    console.log('req.body', req.body)
    var newuser = new User(req.body)
    newuser.save(function (err){
        if (err) {
            console.log("this is server",err)
            res.send(err)
        }else{
            res.send('yyyyyy');

        }
    })
});

//update a user in the db
app.put("/updateuser/:id", function (req, res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        })
    })
});

//delete a user from the db 
app.delete("/deleteuser/:id", function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user)
    });
});


var port = 3000;
app.listen(port, () => { }); 