'use strict';


var mongoose = require('mongoose'),

CartItem = mongoose.model('Cart');

exports.allcartitems = function(req, res) {
    CartItem.find({username:req.params.username}, 
      function(err, product) {

      if (err)
        res.send(err);
      res.json(product);
      
    });
  };
  
  
 exports.newcartitem = function(req, res) {
    var cartItemnew = new CartItem(req.body);
    cartItemnew.save(function(err, cartItem) {
      if (err)
        res.send(err);
      res.json(cartItem);
    });
  };

  
exports.showcartitem = function(req, res) {
    CartItem.find({productId:req.params.productId,username:req.params.username}, 
      function(err, product) {

      if (err)
        res.send(err);
      res.json(product);

    });
  };
  
  
  exports.updatecartitem = function(req, res) {
    CartItem.findOneAndUpdate({productId: req.params.productId,username:req.params.username}, req.body, {new: true}, 
      function(err, product) {
      
        if (err)
        res.send(err);
        res.json(product);
    });
  };
  
  
  exports.deletecartitem = function(req, res) {
    CartItem.remove({
      productId: req.params.productId, username:req.params.username},
       function(err, product) {
      
        if (err)
        res.send(err);
      res.json({ message: 'Product has been deleted' });
    
    });
  };
