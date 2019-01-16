var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./user');

var db = 'mongodb://localhost/NewConnection';

mongoose.connect(db);

var port = 3000;

app.use(bodyParser());


app.get('/', function (req, res) {
    res.send('happy to be here');
});

app.post('/test', function (req, res) {
    console.log(req.body)

    res.send('Ugh, i hate Mondays!');
});

app.get('/users', function (req, res) {
    console.log('getting all user');
    User.find({})
    expect(function (err, users) {
        if (err) {
            res.send('error has occured');
        } else {
            console.log(users);
            res.json(users);
        }
    });
});

app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});

// User.init()

// app.get('/item/', (req, res) => {
//     res.send({ items: User.getAllItems() })
// })

