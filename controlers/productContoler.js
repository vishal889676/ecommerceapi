const Products= require("../models/products");
//for creating and saving products in database
module.exports.create = async(req, res)=>{
 console.log(req.body)
  const product =new Products(req.body);//sending body data to database
  console.log("create products successfully")
  product.save();
  return res.send(product)
};
// sending all products to user
module.exports.allProducts = async(req, res)=>{
 console.log('enter in allProducts')
const product=await Products.find({});//finding all products from mongodblog
return res.send(product)//SENDING ALL PRODUCTS TO POSTMAN  
}
// deleting product by given id
module.exports.deleteProduct = async(req, res)=>{
//console.log(req.params.id);
const id=req.params.id;//taking id from params
await Products.deleteOne({id});//deleted this product from database
 res.send('deleted this products');
}
module.exports.updateProduct = async(req, res)=>{
 const id=req.query.number;//taking data through query and updated the product
 const product=await Products.findOneAndUpdate({id},{$set:{quantity:req.query.number}});
 const oldProduct=product;

 console.log(oldProduct);
 return res.send('updated this products')
}