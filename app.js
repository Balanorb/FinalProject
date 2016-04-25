var express = require('express');
var app = express();
var port = 3000;
var db = require('./api/db.js')
var routes = require('./api/index');

app.set('view engine', 'ejs');
app.use('/', routes);


app.listen(port);

console.log('Server is running on : ' +port);