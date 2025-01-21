import express from 'express';
import { createNewProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';


const router = express.Router();

//show all products
router.get('/', getProducts);

//create a new product function 
router.post('/', createNewProduct);

//product update function 
router.put('/:id', updateProduct);

//product delete function
router.delete('/:id', deleteProduct);


export default router;