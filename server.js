var express = require('express'),

  app = express(),
  port = process.env.PORT || 5000,


  mongoose = require('mongoose'),

  User = require('./models/userModel'), 
  CartItem = require('./models/cartModel'), 
  ProductItem = require('./models/ProductModel'),

  bodyParser = require('body-parser');

require("dotenv/config");
  


//MongoDB Atlas Connection
//MongoDB Atlas Connection link is through an.env file
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true);


//Parsers

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routes

var cartRoutes = require('./routes/cartRoutes'); 
var userRoutes = require('./routes/userRoutes'); 
var productRoutes = require('./routes/productRoutes');


//Connecting it to the express module
cartRoutes(app);
userRoutes(app); 
productRoutes(app);

app.listen(port);


console.log('shopping cart RESTful API server started on: ' + port);
