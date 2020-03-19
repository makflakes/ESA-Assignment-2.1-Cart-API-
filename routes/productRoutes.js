'use strict';
module.exports = function(app) {

var product = require('../controllers/productController');

// todoList Routes
app.route('/rest/v1/products')
.get(product.allproducts)
.post(product.createnewproduct);


app.route('/rest/v1/product/:productId')
.get(product.showproduct)
.put(product.updateproduct)
.delete(product.deleteproduct);



 
};
