var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost:27017/internBuddy';

mongoose.connect(dbURI);
    
console.log('database is connected on' +dbURI);
