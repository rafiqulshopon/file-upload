import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, description, from, to, contributor, comment, date, status } =
      req.body;

    if (!name || !status) {
      return res
        .status(400)
        .send({ message: 'Task name and status are required' });
    }

    const newTask = new Task({
      name,
      description,
      from,
      to,
      contributor,
      comment,
      date,
      status,
      imageCount: 0,
    });
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
