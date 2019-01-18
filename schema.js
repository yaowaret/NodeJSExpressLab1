var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    location: {
        type: String,
    }
});

var locationSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

var User = mongoose.model('user', userSchema);
var studentLocation = mongoose.model('location', locationSchema);

exports.User = User;
exports.studentLocation = studentLocation;
// module.exports = User;

