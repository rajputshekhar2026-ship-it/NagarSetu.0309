// server/routes/alerts.js
const express = require('express');
const router = express.Router();
const db = require('../services/dataStore');
const { createClient } = require('@supabase/supabase-js');

router.get('/', (req, res) => res.json(db.getAlerts()));

// POST /api/alerts — Admin pushes an alert to Supabase (→ Android sees it via Realtime)
router.post('/', async (req, res) => {
  const { title, message, type, ward, severity } = req.body;

  // 1. Store in admin's local store
  const alert = db.addAlert({ title, message, type, ward, severity });
  req.app.get('io').emit('new_alert', alert);

  // 2. Also write to Supabase so Android app picks it up via Realtime
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
      await supabase.from('live_alerts').insert({
        type: type || 'GENERAL',
        severity: severity || 'WARNING',
        title,
        description: message,
        ward: ward || null,
        is_active: true
      });
      console.log('[Supabase] Alert pushed to mobile app');
    } catch (e) {
      console.error('[Supabase] Alert insert failed:', e.message);
    }
  }

  res.status(201).json(alert);
});

router.patch('/:id/acknowledge', (req, res) => {
  const updated = db.acknowledgeAlert(req.params.id);
  if (!updated) return res.status(404).json({ error: 'Alert not found' });
  req.app.get('io').emit('alert_acknowledged', updated);
  res.json(updated);
});

module.exports = router;
