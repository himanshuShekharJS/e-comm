import express from 'express'
import { filterBetweenRange,addProduct, getAllProducts,updateProduct,deleteProduct,filterProduct,searchDatabase } from '../controllers/controller.js';
const router = express.Router();


router.get('/',getAllProducts);
router.post("/",addProduct);
router.patch("/:id",updateProduct);
router.delete("/:id",deleteProduct);
router.get('/:category',filterProduct)
router.get('/sort/:category',filterProduct)
router.get('/range',filterBetweenRange)
router.get('/search/:value',searchDatabase)
export default router;