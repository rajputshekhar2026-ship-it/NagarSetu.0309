// server/routes/analytics.js
const express = require('express');
const router = express.Router();
const db = require('../services/dataStore');

// Incident trends - last 7 days by day
router.get('/trends', (req, res) => {
  const incidents = db.getIncidents();
  const now = Date.now();
  const days = 7;
  const labels = [];
  const counts = [];
  const resolved = [];

  for (let i = days - 1; i >= 0; i--) {
    const dayStart = now - (i + 1) * 86400000;
    const dayEnd = now - i * 86400000;
    const label = new Date(dayEnd).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' });
    labels.push(label);
    counts.push(incidents.filter(inc => inc.timestamp >= dayStart && inc.timestamp < dayEnd).length);
    resolved.push(incidents.filter(inc => inc.timestamp >= dayStart && inc.timestamp < dayEnd && inc.status === 'verified').length);
  }

  res.json({ labels, reported: counts, resolved });
});

// Incident type breakdown
router.get('/types', (req, res) => {
  const incidents = db.getIncidents();
  const typeMap = {};
  for (const inc of incidents) {
    typeMap[inc.type] = (typeMap[inc.type] || 0) + 1;
  }
  res.json({ labels: Object.keys(typeMap), values: Object.values(typeMap) });
});

// Ward performance
router.get('/wards', (req, res) => {
  const wards = db.getWardStats();
  res.json(wards.map(w => ({
    name: w.wardName.replace('Ward ', 'W').split(' - ')[0],
    fullName: w.wardName,
    resolutionRate: Math.round((w.resolvedCount / w.complaintCount) * 100),
    slaBreaches: w.slaBreaches,
    load: w.complaintCount
  })));
});

// Hourly distribution (last 24h)
router.get('/hourly', (req, res) => {
  const incidents = db.getIncidents();
  const now = Date.now();
  const labels = [];
  const counts = [];
  for (let h = 23; h >= 0; h--) {
    const hStart = now - (h + 1) * 3600000;
    const hEnd = now - h * 3600000;
    const hour = new Date(hEnd).getHours();
    labels.push(`${hour.toString().padStart(2, '0')}:00`);
    counts.push(incidents.filter(i => i.timestamp >= hStart && i.timestamp < hEnd).length);
  }
  res.json({ labels, counts });
});

module.exports = router;
