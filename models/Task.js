import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

export default mongoose.model('Task', taskSchema);
