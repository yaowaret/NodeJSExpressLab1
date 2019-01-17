var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    location: {
        type: String,
    }
});

var User = mongoose.model('user', userSchema);
module.exports = User;

