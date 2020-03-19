'use strict';


var mongoose = require('mongoose'),


User = mongoose.model('User');




exports.showusers = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};




exports.createnewuser = function(req, res) {
  var newuser = new User(req.body);
  newuser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.userdetails = function(req, res) {
  User.find({username:req.params.username}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.updateuser = function(req, res) {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.deleteuser = function(req, res) {
User.remove({
    username: req.params.username},
     function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};
