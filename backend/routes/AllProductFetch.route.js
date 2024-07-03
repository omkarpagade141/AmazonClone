import express from 'express';
import AllProducts from '../controllers/AllProductFetch.controller.js';


const router = express.Router();


router.route('/').get(AllProducts) 

export default router