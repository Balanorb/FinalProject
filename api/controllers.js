var data = require(__dirname +'/../package.json');
var User = require(__dirname +'/../models/user.js');

exports.main = function(req, res){
    res.render('index',{ title: 'Main page'});
}

exports.new = function(req, res){
    console.log('Check it out: ' + JSON.stringify(req.body));
   var UserAdd = new User({
        _id : req.body.email,
        name : req.body.name,
        age : req.body.age,
    }).save(function(err){
       if(err)res.send(err);
        res.send('Sucessfully added');
   });
}

exports.about = function(req, res){
    res.send(data);
}

exports.valami = function(req, res){
    res.send('valami');
}