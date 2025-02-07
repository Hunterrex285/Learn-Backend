import express from "express";
import { uploadFile } from "../controllers/upload.Controller.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post('/', upload.single('file'), uploadFile);

export default router;
