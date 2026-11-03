import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import ContactMessage from '../models/ContactMessage.js';
import { validateContact, requireAdmin } from '../middleware/validate.js';

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many messages. Please try again later.' },
});

router.post('/', limiter, validateContact, async (req, res, next) => {
  try {
    await ContactMessage.create(req.body);
    res.status(201).json({ ok: true, message: 'Thanks! Your message was sent.' });
  } catch (err) {
    next(err);
  }
});

// Replacement for the Django admin list view.
router.get('/', requireAdmin, async (_req, res, next) => {
  try {
    res.json(await ContactMessage.find().sort({ createdAt: -1 }).lean());
  } catch (err) {
    next(err);
  }
});

export default router;
