import { Router } from 'express';
import Project from '../models/Project.js';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    res.json(await Project.find().sort({ order: 1 }).lean());
  } catch (err) {
    next(err);
  }
});

export default router;
