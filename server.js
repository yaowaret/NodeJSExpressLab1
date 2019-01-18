var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

var Schema = require('./schema')

var mongoose = require("mongoose");
var db = "mongodb://localhost:27017/NewConnection";
mongoose.connect(db, {
    useNewUrlParser: true
});
app.use(bodyParser.json());

app.use(cors());

//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(path.json(__dirname,'')))

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
    var newuser = new Schema.User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        location: req.body.location
    })
    newuser.save(function (err) {
        if (err) {
            console.log("this is server", err)
            res.send(err)
        } else {
            console.log('save user complete!!')
            res.send('yyyyyy');
        }
    })
});

//add a new location to the db
app.post("/addlocation", function (req, res) {
    console.log('Value from add Location:', req.body)
    var newLocation = new Schema.studentLocation({
        name: req.body.location
    })
    newLocation.save(function (err) {
        if (err) {
            console.log("Save Location Error", err)
            res.send(err)
        } else {
            console.log('Saved')
            res.send('done');

        }
    })
})

app.post("/getlocation", () => {
    Schema.studentLocation.find().then((err, result => {
        if (err) {
            res.send('Not Found')
        } else {
            res.send(result)
        }
    }))
})

//update a user in the db
app.put("/updateuser/:id", function (req, res) {
    Schema.User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Schema.User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        })
    })
});

//delete a user from the db 
app.delete("/deleteuser/:id", function (req, res) {
    Schema.User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user)
    });
});


var port = 3000;
app.listen(port, () => { }); 