import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Function to upload a local file to Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) throw new Error("File path is required");

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: 'uploads',
      resource_type: 'auto'
    });

    console.log("File uploaded on Cloudinary:", response.secure_url);

    fs.unlinkSync(localFilePath); // Delete local file after upload

    return response;
  } catch (err) {
    fs.unlinkSync(localFilePath); // Cleanup if upload fails
    console.error("Cloudinary Upload Error:", err);
    throw new Error("Error uploading file to Cloudinary");
  }
};

export default uploadOnCloudinary ;
