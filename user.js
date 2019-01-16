var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
 location: String,
 name: String
});

module.exports = mongoose.model('User', userSchema);

// let items = []
// module.exports = {
//     init: () => {
//         items = ['Init item']
//     }
// };
// const User = require('./user');

// const newUser = new User({
//     name: 'Pooklook',
//     location: 'Naresuan university'
// });
// newUser.save(function (err) {
//     if (err) throw err;

//     console.log('User saved successfully!');
// });
