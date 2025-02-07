import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: String,
  fileUrl: String, // Cloudinary URL
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model('File', fileSchema);
