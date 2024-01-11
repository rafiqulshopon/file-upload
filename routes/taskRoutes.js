import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).send({ message: 'Task name is required' });
    }

    const newTask = new Task({ name, description });
    await newTask.save();

    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
