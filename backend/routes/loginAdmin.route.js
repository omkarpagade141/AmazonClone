import loginAdminController from '../controllers/loginAdmin.controller.js';
import { Router } from 'express';

const router =  Router();


router.route('/').post(loginAdminController) 

export default router
