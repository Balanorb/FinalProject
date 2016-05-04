var mongoose = require('mongoose');

    var userSchema = new mongoose.Schema({
    _id : String,
    name: String,
    age: String
});

var User = mongoose.model('Student', userSchema);

module.exports = User;

