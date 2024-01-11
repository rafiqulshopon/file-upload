import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  from: String,
  to: String,
  contributor: Number,
  comment: Number,
  date: Date,
  imageCount: { type: Number, default: 0 },
  status: {
    type: String,
    required: true,
    enum: [
      'incomplete',
      'todo',
      'doing',
      'under_review',
      'completed',
      'overdue',
    ],
  },
});

export default mongoose.model('Task', taskSchema);
