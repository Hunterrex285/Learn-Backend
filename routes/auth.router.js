import express from 'express';
import { register, login, logout, forgotPassword , verifyToken} from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/register', register);
router.post('/verify-email', verifyToken);
router.post('/login', login);
router.post('/logout', logout);
router.get('/forgotPassword', forgotPassword);

export default router;

