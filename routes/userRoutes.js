'use strict';


module.exports = function(app) {

var product = require('../controllers/userController');
app.route('/rest/v1/Users')
    .get(product.showusers)
    .post(product.createnewuser);


app.route('/rest/v1/Users/:username')
    .get(product.userdetails)
    .put(product.updateuser)
    .delete(product.deleteuser);



};
