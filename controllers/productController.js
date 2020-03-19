'use strict';


var mongoose = require('mongoose'),


Product = mongoose.model('Products');




exports.allproducts = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};




exports.createnewproduct = function(req, res) {
  var newProduct = new Product(req.body);
  newProduct.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.showproduct = function(req, res) {
  Product.find({productId:req.params.productId}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.updateproduct = function(req, res) {
  Product.findOneAndUpdate({productId: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.deleteproduct = function(req, res) {
  Product.remove({
    _id: req.params.productId},
     function(err, product) {

    if (err)
      res.send(err);
    res.json({ message: 'Product has been deleted' });

  });
};
