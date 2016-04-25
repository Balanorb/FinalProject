var fs = require('fs');
var user = require(__dirname +'/../models/users');
var data = require(__dirname +'/../package.json');


exports.main = function(req, res){
    res.render('index',{ title: 'Main page'});
}

exports.usertest = function(req, res){
   user.find(function(err, User){
       res.send(User);
   });
}

exports.about = function(req, res){
    res.send(data);
}

exports.valami = function(req, res){
    res.send('valami');
}