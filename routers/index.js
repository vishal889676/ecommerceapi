const express =require('express');
const router=express.Router();

const productContoler=require('../controlers/productContoler')
//router.get('/',productContoler.allProducts)
//router.get('/:id',productContoler.deleteProduct)
router.use("/products", require("./create"));
module.exports = router;