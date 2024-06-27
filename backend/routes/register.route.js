import registerUser from '../controllers/register.controller.js';
import { Router } from 'express';

const router =  Router();

// Add team
router.route('/').post(registerUser) 

export default router
