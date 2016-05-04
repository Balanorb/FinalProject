var mongoose = require('mongoose');

    var companySchema = new mongoose.Schema({
    _id : String,
    name: String,
    cvr: String;
});

var Company = mongoose.model('Companys', userSchema);

module.exports = User;

