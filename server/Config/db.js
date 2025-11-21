import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    
    if (!MONGODB_URL) {
      throw new Error('MONGODB_URL not found in .env file');
    }

    await mongoose.connect(MONGODB_URL);
    console.log('Database connected successfully');
  } catch (err) {
    console.error(' Database connection error:', err.message);
    process.exit(1);
  }
};
