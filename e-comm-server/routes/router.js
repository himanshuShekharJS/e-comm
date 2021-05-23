import express from 'express'
import { addProduct, getAllProducts,updateProduct } from '../controllers/controller.js';
const router = express.Router();


router.get('/',getAllProducts);
router.post("/",addProduct);
router.patch("/:id",updateProduct)

 
export default router;