import express from 'express';
import { createProduct, searchProduct } from '../controllers/product.controller.js';

const router = express.Router();

const createRouter = (upload) => {
  router.post('/addproduct',  upload.single('image'), createProduct);
 
  


   
 
   

  return router;
};

export default createRouter;
