import loginAdminController from '../controllers/loginAdmin.controller.js';
import { Router } from 'express';
import loginUserController from '../controllers/loginUser.controller.js';

const router =  Router();


router.route('/').post(loginAdminController) 
router.route('/user').post(loginUserController) 

export default router
