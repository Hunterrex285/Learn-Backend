import express from 'express';
import { register, login, logout, forgotPassword } from '../controllers/auth.controller.js';

const router = express.Router();


router.get('/register', register);
router.get('/login', login);
router.get('/logout', logout);
router.get('/forgotPassword', forgotPassword);

export default router;

