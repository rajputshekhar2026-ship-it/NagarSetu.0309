// server/routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../services/dataStore');
const logger = require('../utils/logger');

router.get('/', (req, res) => res.json(db.getUsers(req.query)));
router.patch('/:id/status', (req, res) => {
  const updated = db.updateUser(req.params.id, { status: req.body.status });
  if (!updated) return res.status(404).json({ error: 'User not found' });
  req.app.get('io').emit('user_updated', updated);
  logger.info('User status updated', { id: req.params.id, status: req.body.status });
  res.json(updated);
});
router.patch('/:id/trust', (req, res) => {
  const { trustScore } = req.body;
  if (trustScore === undefined) return res.status(400).json({ error: 'trustScore required' });
  const updated = db.updateUser(req.params.id, { trustScore: Math.max(0, Math.min(100, trustScore)) });
  if (!updated) return res.status(404).json({ error: 'User not found' });
  req.app.get('io').emit('user_updated', updated);
  res.json(updated);
});

module.exports = router;
