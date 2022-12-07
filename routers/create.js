const express = require("express");
const router = express.Router();
const productContoler=require('../controlers/productContoler')
router.post('/create',productContoler.create)
router.get('/:id/update-quantity',productContoler.updateProduct)
router.get('/:id',productContoler.deleteProduct)
router.get('/',productContoler.allProducts)

module.exports = router;