import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/connectDB.js';
import authRoutes from './routes/auth.router.js';
import geminiRoutes from './routes/gemini.router.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/gemini', geminiRoutes);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})