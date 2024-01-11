import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageCount: { type: Number, default: 0 },
});

export default mongoose.model('Task', taskSchema);
