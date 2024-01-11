import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinaryConfig.js';
import Image from '../models/Image.js';
import Task from '../models/Task.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.array('images'), async (req, res) => {
  const { taskId } = req.body;
  const images = req.files;

  if (!taskId) {
    return res.status(400).send({ message: 'TaskId is required' });
  }

  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }

    const imageData = [];

    for (const image of images) {
      const result = await cloudinary.uploader.upload(image.path, {
        folder: 'image',
      });

      const newImage = new Image({
        image_url: result.url,
        taskId: taskId,
      });
      await newImage.save();

      imageData.push(newImage);
    }

    const imageCount = imageData.length;
    task.imageCount += imageCount;
    await task.save();

    res.status(201).send(imageData);
  } catch (error) {
    console.error('Error in image upload:', error);
    res.status(500).send({ message: error.message });
  }
});

router.get('/:taskId', async (req, res) => {
  const { taskId } = req.params;

  if (!taskId) {
    return res.status(400).send({ message: 'TaskId is required in the URL' });
  }

  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send({ message: 'Task not found' });
    }

    const images = await Image.find({ taskId: taskId });
    res.status(200).send(images);
  } catch (error) {
    console.error('Error in fetching images:', error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
