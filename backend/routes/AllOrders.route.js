import express from 'express';
import AllOrders from '../controllers/AllOrders.controller.js';
import UpdateOrder from '../controllers/UpdateOrder.controller.js';
 


const router = express.Router();



router.route('/').get(AllOrders ) 
router.route('/updateorderstatus/:id').put(UpdateOrder ) 

export default router