'use strict';


module.exports = function(app) {

var cart =require('../controllers/cartController')

app.route('/rest/v1/users/:username/cart')
.get(cart.allcartitems)


app.route('/rest/v1/users/:username/cart/:productId')
.get(cart.showcartitem)
.post(cart.newcartitem)
.put(cart.updatecartitem)
.delete(cart.deletecartitem);

};
