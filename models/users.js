var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var userSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('users', userSchema);

module.exports = User;