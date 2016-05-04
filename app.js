var express = require('express');
var app = express();
var port = 3000;
var db = require('./models/db.js');
var routes = require('./api/index');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/', routes);


app.listen(port);

console.log('Server is running on : ' +port);