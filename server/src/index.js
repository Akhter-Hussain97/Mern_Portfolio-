import 'dotenv/config';
import mongoose from 'mongoose';
import { createApp } from './app.js';

const { PORT = 5000, MONGODB_URI = 'mongodb://127.0.0.1:27017/portfolio' } = process.env;

try {
  await mongoose.connect(MONGODB_URI);
  console.log('MongoDB connected');
} catch (err) {
  console.error('MongoDB connection failed:', err.message);
  process.exit(1);
}

createApp().listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
