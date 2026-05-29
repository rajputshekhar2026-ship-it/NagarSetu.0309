// server/routes/incidents.js
const express = require('express');
const router = express.Router();
const db = require('../services/dataStore');
const { verifyIncident } = require('../services/aiVerifier');
const { invalidateCache } = require('../services/riskEngine');
const logger = require('../utils/logger');

// GET all incidents with filters
router.get('/', (req, res) => {
  const { status, ward, type, severity } = req.query;
  res.json(db.getIncidents({ status, ward, type, severity }));
});

// GET single incident
router.get('/:id', (req, res) => {
  const inc = db.getIncidentById(req.params.id);
  if (!inc) return res.status(404).json({ error: 'Incident not found' });
  res.json(inc);
});

// POST new incident (from Android app or webhook)
router.post('/', async (req, res) => {
  const inc = db.addIncident(req.body);

  // Auto-run AI verification in background
  verifyIncident(inc).then(aiResult => {
    db.updateIncident(inc.id, { aiScore: aiResult.score, aiFeedback: aiResult.feedback, aiTags: aiResult.tags, recommendedAction: aiResult.recommended_action });
    req.app.get('io').emit('incident_updated', db.getIncidentById(inc.id));
    // Auto-reject if score is very low
    const threshold = parseFloat(process.env.AI_REJECT_THRESHOLD || '0.25');
    if (aiResult.score < threshold) {
      db.updateIncident(inc.id, { status: 'rejected', notes: 'Auto-rejected by AI verifier' });
      req.app.get('io').emit('incident_updated', db.getIncidentById(inc.id));
      logger.info('Incident auto-rejected by AI', { id: inc.id, score: aiResult.score });
    }
  });

  req.app.get('io').emit('new_incident', inc);
  invalidateCache();
  logger.info('New incident reported', { id: inc.id, type: inc.type, ward: inc.ward });
  res.status(201).json(inc);
});

// PATCH update incident (verify, reject, assign, add notes)
router.patch('/:id', (req, res) => {
  const updated = db.updateIncident(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Incident not found' });
  req.app.get('io').emit('incident_updated', updated);
  if (req.body.status) invalidateCache();
  res.json(updated);
});

// POST bulk action
router.post('/bulk', (req, res) => {
  const { ids, action, assignedTo, notes } = req.body;
  if (!ids?.length || !action) return res.status(400).json({ error: 'ids and action required' });

  const results = [];
  for (const id of ids) {
    const patch = {};
    if (action === 'verify') patch.status = 'verified';
    if (action === 'reject') patch.status = 'rejected';
    if (action === 'assign') patch.assignedTo = assignedTo;
    if (notes) patch.notes = notes;
    const updated = db.updateIncident(id, patch);
    if (updated) {
      results.push(updated);
      req.app.get('io').emit('incident_updated', updated);
    }
  }

  invalidateCache();
  logger.info('Bulk action', { action, count: results.length });
  res.json({ updated: results.length, results });
});

// POST run AI verification on specific incident
router.post('/:id/verify-ai', async (req, res) => {
  const inc = db.getIncidentById(req.params.id);
  if (!inc) return res.status(404).json({ error: 'Incident not found' });

  try {
    const result = await verifyIncident(inc);
    const updated = db.updateIncident(req.params.id, {
      aiScore: result.score,
      aiFeedback: result.feedback,
      aiTags: result.tags,
      recommendedAction: result.recommended_action,
      aiBreakdown: result.breakdown
    });
    req.app.get('io').emit('incident_updated', updated);
    res.json(result);
  } catch (e) {
    logger.error('AI verify endpoint error', { error: e.message });
    res.status(500).json({ error: 'AI verification failed' });
  }
});

module.exports = router;
