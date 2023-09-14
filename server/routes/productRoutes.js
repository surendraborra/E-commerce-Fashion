const express = require('express');
const multer = require('multer');
const { uploadProduct, getProducts, getProductById, updateProduct, deleteProduct ,searchProducts,getAllProducts} = require('../controllers/productController');
const { multerConfig } = require('../utils/multerConfig');

const router = express.Router();
const upload = multer(multerConfig);

router.post('/upload', upload.single('image'), uploadProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/search-products', searchProducts);
router.get('/getallproducts', getAllProducts);

module.exports = router;
