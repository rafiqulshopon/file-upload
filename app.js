import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import imageRoutes from './routes/imageRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();

app.use(express.json());

app.use('/image', imageRoutes);

app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
