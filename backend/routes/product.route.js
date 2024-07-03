import express from 'express';
import { createProduct, searchProduct } from '../controllers/product.controller.js';
import updateProduct from '../controllers/updateProduct.controller.js';
import deleteProduct from '../controllers/deleteProduct.controller.js';

const router = express.Router();

const createRouter = (upload) => {
  router.post('/addproduct',  upload.single('image'), createProduct);
  router.put('/updateproduct/:id',  updateProduct);
  router.delete('/deleteproduct/:id',  deleteProduct);
  router.get('/search/:searchTerm',  searchProduct);
  

 
  


   
 
   

  return router;
};

export default createRouter;
