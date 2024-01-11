import express from 'express';
import multer from 'multer';
import fs from 'fs';
import util from 'util';
import cloudinary from '../config/cloudinaryConfig.js';
import Image from '../models/Image.js';
import Task from '../models/Task.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const unlinkFile = util.promisify(fs.unlink);

router.post('/', upload.single('image'), async (req, res) => {
  const { taskId } = req.body;

  if (!taskId) {
    return res.status(400).send({ message: 'TaskId is required' });
  }

  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }

    if (!req.file) {
      return res.status(400).send({ message: 'Image file is required' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'image',
    });

    await unlinkFile(req.file.path);

    const newImage = new Image({
      image_url: result.url,
      taskId: taskId,
    });
    await newImage.save();

    res.status(201).send(newImage);
  } catch (error) {
    await unlinkFile(req.file.path).catch((e) =>
      console.error('Error deleting file', e)
    );
    console.error('Error in image upload:', error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
