import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { AdminRoute } from './Routes/AdminRoute.js';

dotenv.config();

const JOBLADDER2_0 = express();

JOBLADDER2_0.use(json());
JOBLADDER2_0.use(cors({
  origin: 'http://localhost:5173',  // Adjust if needed for your React app
  credentials: true
}));
JOBLADDER2_0.use(cookieParser());

// Use Routes
JOBLADDER2_0.use('/admin', AdminRoute);

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/JOBLADDER3';
mongoose.connect(MONGO_URI, {
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); 
});

const port = 8000;

JOBLADDER2_0.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
