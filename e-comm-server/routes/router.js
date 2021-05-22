import express from 'express'
import { getHomePage,addProduct } from '../controllers/controller.js';
const router = express.Router();


router.get('/',getHomePage);
router.post("/",addProduct)

 
export default router;