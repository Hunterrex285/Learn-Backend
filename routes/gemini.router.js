import express from 'express';
import { getGeminiData } from '../controllers/gemini.controller.js';

const router = express.Router();

router.post('/', getGeminiData);

export default router;