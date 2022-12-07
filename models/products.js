var mongoose = require('mongoose');
  const ProductsSchema  = new mongoose.Schema({

    name: {//name oof the products
        type : String,
        required : true, 
    },
    quantity: {//quantity avliable 
     type :Number,
     required : true,
    }
  });
  
  const Products= mongoose.model('Produts',ProductsSchema );
  module.exports =Products;