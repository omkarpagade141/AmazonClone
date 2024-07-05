import { Router } from 'express';
import orderProduct from '../controllers/orderproduct.controller.js';

const router =  Router();
router.route('/orders').post(orderProduct) 


export default router