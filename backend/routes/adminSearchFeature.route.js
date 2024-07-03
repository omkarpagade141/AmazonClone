import express from 'express';
import { createProduct, searchProduct } from '../controllers/product.controller.js';

const router = express.Router();


router.get('/:searchTerm', searchProduct);

export default router