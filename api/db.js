var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost:27017/internBuddy';

mongoose.createConnection(dbURI);

console.log('database is connected on' +dbURI)