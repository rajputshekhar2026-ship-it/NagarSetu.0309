// server/routes/sos.js
const express = require('express');
const router = express.Router();
const db = require('../services/dataStore');
const logger = require('../utils/logger');

// GET all SOS events (optionally filter by status)
router.get('/', (req, res) => {
  const { status } = req.query;
  let events = db.getSosEvents();
  if (status) events = events.filter(s => s.status === status);
  res.json(events);
});

// GET single SOS event
router.get('/:id', (req, res) => {
  const sos = db.getSosById(req.params.id);
  if (!sos) return res.status(404).json({ error: 'SOS not found' });
  res.json(sos);
});

// POST new SOS from Android (Raksha module webhook)
router.post('/', (req, res) => {
  const { userId, userName, phone, lat, lng, ward, triageLevel, trustedContacts, batteryLevel, heartRate, networkType, address, fcmToken } = req.body;
  if (!userId || !lat || !lng) {
    return res.status(400).json({ error: 'userId, lat, lng required' });
  }
  const sos = db.addSosEvent({ userId, userName, phone, lat, lng, ward, triageLevel: triageLevel || 'HIGH', trustedContacts: trustedContacts || [], batteryLevel, heartRate: heartRate || 0, networkType, address, fcmToken, notes: '' });

  // Add system alert
  db.addAlert({ title: 'New SOS Alert', message: `${userName || 'Unknown user'} triggered SOS in ${ward || 'unknown ward'}`, type: 'SOS', ward: ward || 'Unknown', severity: 'CRITICAL' });

  // Emit to all admin sockets
  req.app.get('io').emit('new_sos', sos);
  req.app.get('io').emit('new_alert', db.getAlerts()[0]);

  logger.warn('NEW SOS EVENT', { id: sos.id, user: userName, ward, triageLevel });
  res.status(201).json(sos);
});

// PATCH acknowledge SOS + optionally send FCM
router.patch('/:id/acknowledge', (req, res) => {
  const { notes, acknowledgedBy } = req.body;
  const updated = db.updateSos(req.params.id, {
    status: 'acknowledged',
    acknowledged: true,
    acknowledgedBy: acknowledgedBy || 'admin',
    notes: notes || '',
    acknowledgedAt: Date.now()
  });
  if (!updated) return res.status(404).json({ error: 'SOS not found' });

  req.app.get('io').emit('sos_acknowledged', updated);
  logger.info('SOS acknowledged', { id: req.params.id, by: acknowledgedBy });

  // In production: send FCM push to user.fcmToken
  res.json({ ...updated, fcmSent: false, message: 'Acknowledged. FCM push requires Firebase Admin SDK.' });
});

// PATCH resolve SOS
router.patch('/:id/resolve', (req, res) => {
  const updated = db.updateSos(req.params.id, { status: 'resolved', resolvedAt: Date.now() });
  if (!updated) return res.status(404).json({ error: 'SOS not found' });
  req.app.get('io').emit('sos_updated', updated);
  res.json(updated);
});

// PATCH update location (live tracking from Android)
router.patch('/:id/location', (req, res) => {
  const { lat, lng, batteryLevel, heartRate } = req.body;
  const updated = db.updateSos(req.params.id, { lat, lng, batteryLevel, heartRate: heartRate || 0, lastLocationUpdate: Date.now() });
  if (!updated) return res.status(404).json({ error: 'SOS not found' });
  req.app.get('io').emit('sos_location_update', { id: req.params.id, lat, lng, batteryLevel, heartRate: heartRate || 0 });
  res.json(updated);
});

module.exports = router;
