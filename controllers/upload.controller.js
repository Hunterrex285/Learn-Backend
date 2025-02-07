import File from '../models/file.js';
import uploadOnCloudinary from '../utils/cloudinary.js';

export const uploadFile = async (req, res) => {
    try {

      if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  
      // Upload to Cloudinary
      const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
  
      // Save file details to MongoDB
      const fileData = new File({
        filename: req.file.originalname,
        fileUrl: cloudinaryResponse.secure_url
      });
  
      const savedFile = await fileData.save();
  
      res.json({
        message: 'File uploaded and stored successfully',
        file: savedFile
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };