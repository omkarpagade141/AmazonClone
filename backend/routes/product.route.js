import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

const createRouter = (upload) => {
  router.post('/addproduct',  upload.single('image'), createProduct);
  router.get('/', getProducts);
  router.get('/:id', getProductById); 
  router.put('/:id', upload.single('image'), updateProduct);
  router.delete('/:id', deleteProduct);

  return router;
};

export default createRouter;
