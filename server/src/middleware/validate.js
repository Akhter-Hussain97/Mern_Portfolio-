// Mirrors the validation rules from the original Django view, but stricter on email.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(req, res, next) {
  const { name = '', email = '', message = '', website = '' } = req.body ?? {};
  const errors = {};
  const n = String(name).trim();
  const e = String(email).trim();
  const m = String(message).trim();

  // Honeypot: real users never see or fill this field. Pretend success to bots.
  if (website) return res.status(201).json({ ok: true, message: 'Thanks! Your message was sent.' });

  if (n.length < 3 || n.length > 30) errors.name = 'Name must be between 3 and 30 characters.';
  if (!EMAIL_RE.test(e) || e.length > 50) errors.email = 'Please enter a valid email address.';
  if (m.length < 5 || m.length > 2000) errors.message = 'Message must be between 5 and 2000 characters.';

  if (Object.keys(errors).length) return res.status(400).json({ ok: false, errors });
  req.body = { name: n, email: e, message: m };
  next();
}

export function requireAdmin(req, res, next) {
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.get('x-admin-token') !== token) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }
  next();
}
