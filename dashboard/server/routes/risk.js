// server/routes/risk.js
const express = require('express');
const router = express.Router();
const db = require('../services/dataStore');
const { getCachedRisk } = require('../services/riskEngine');

router.get('/heatmap', async (req, res) => {
  const incidents = db.getIncidents();
  const result = await getCachedRisk(incidents);
  res.json(result);
});

// ADD THIS — matches Android's RiskApiRepository endpoint
router.get('/risk-grid', async (req, res) => {
  const incidents = db.getIncidents();
  const result = await getCachedRisk(incidents);
  // Transform admin format → Android RiskCell format
  const cells = (result.zones || []).map(z => ({
    lat: z.lat,
    lng: z.lng,
    score: z.riskScore
  }));
  res.json({ cells });
});

// Also add single-point risk (used by RakshaViewModel.updateCurrentRisk)
router.get('/', async (req, res) => {
  const { lat, lng } = req.query;
  const incidents = db.getIncidents();
  const result = await getCachedRisk(incidents);

  const pLat = parseFloat(lat);
  const pLng = parseFloat(lng);
  let nearestScore = 0;

  if (result.zones) {
    const nearest = result.zones.reduce((best, z) => {
      const dist = Math.sqrt(Math.pow(z.lat - pLat, 2) + Math.pow(z.lng - pLng, 2));
      return (!best || dist < best.dist) ? { ...z, dist } : best;
    }, null);
    nearestScore = nearest?.riskScore ?? 0;
  }

  res.json({ score: nearestScore, lat: pLat, lng: pLng });
});

module.exports = router;
