import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  imgixUrl: { type: String, required: true },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
});

export default mongoose.model('Image', imageSchema);
