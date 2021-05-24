import express from 'express'
import { filterBetweenRange,addProduct, getAllProducts,updateProduct,deleteProduct,filterProduct,getProductsBySearch } from '../controllers/controller.js';
const router = express.Router();


router.get('/',getAllProducts);
router.post("/",addProduct);
router.patch("/:id",updateProduct);
router.delete("/:id",deleteProduct);
router.get('/:category',filterProduct)
router.get('/sort/:category',filterProduct)
router.get('/search/:query',getProductsBySearch)
router.get('/:min/:max',filterBetweenRange)
export default router;