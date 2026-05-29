// server/services/riskEngine.js
const { spawn } = require('child_process');
const path = require('path');
const logger = require('../utils/logger');

// Cache the last risk result (refreshed every 5 minutes)
let riskCache = { data: null, lastUpdated: 0 };
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Run C++ risk calculator with incident data.
 * Returns risk zone grid + heatmap data.
 */
function computeRisk(incidents) {
  return new Promise((resolve) => {
    const isWindows = process.platform === 'win32';
    const binaryName = isWindows ? 'risk_calc.exe' : 'risk_calc';
    const binaryPath = path.join(__dirname, '../../cpp', binaryName);
    const cppProcess = spawn(binaryPath, [JSON.stringify(incidents)], {
      timeout: 8000
    });

    let output = '';
    cppProcess.stdout.on('data', d => { output += d.toString(); });

    cppProcess.on('close', () => {
      try {
        const result = JSON.parse(output.trim());
        logger.info('Risk engine computed', { zones: result.zones?.length });
        resolve(result);
      } catch (e) {
        logger.warn('Risk engine parse error, using fallback heatmap', { error: e.message });
        resolve(generateFallbackHeatmap(incidents));
      }
    });

    cppProcess.on('error', () => {
      logger.warn('C++ risk engine not available, using JS fallback');
      resolve(generateFallbackHeatmap(incidents));
    });
  });
}

/**
 * JS fallback heatmap when C++ binary isn't compiled.
 * Generates grid risk scores around Bhopal.
 */
function generateFallbackHeatmap(incidents) {
  const zones = [];
  const gridStep = 0.008; // ~900m
  const latMin = 23.24, latMax = 23.30;
  const lngMin = 77.39, lngMax = 77.46;

  for (let lat = latMin; lat <= latMax; lat += gridStep) {
    for (let lng = lngMin; lng <= lngMax; lng += gridStep) {
      let risk = 0;
      for (const inc of incidents) {
        if (inc.status === 'rejected') continue;
        const dist = Math.sqrt(Math.pow(lat - inc.lat, 2) + Math.pow(lng - inc.lng, 2));
        if (dist < 0.015) {
          const weight = Math.exp(-(dist * dist) / (2 * 0.005 * 0.005));
          const ageFactor = Math.exp(-(Date.now() - inc.timestamp) / (24 * 3600000));
          const typeBoost = inc.type === 'HARASSMENT' ? 1.4 : inc.type === 'UNSAFE_SPOT' ? 1.2 : 1.0;
          risk += weight * ageFactor * (inc.severity / 5.0) * typeBoost;
        }
      }
      const normalizedRisk = Math.min(1.0, risk);
      if (normalizedRisk > 0.05) {
        zones.push({
          lat: parseFloat(lat.toFixed(4)),
          lng: parseFloat(lng.toFixed(4)),
          riskScore: parseFloat(normalizedRisk.toFixed(3)),
          level: normalizedRisk >= 0.75 ? 'CRITICAL' : normalizedRisk >= 0.5 ? 'HIGH' : normalizedRisk >= 0.25 ? 'MODERATE' : 'LOW'
        });
      }
    }
  }

  return {
    zones,
    generatedAt: Date.now(),
    totalZones: zones.length,
    criticalZones: zones.filter(z => z.level === 'CRITICAL').length,
    source: 'js-fallback'
  };
}

async function getCachedRisk(incidents) {
  const now = Date.now();
  if (riskCache.data && (now - riskCache.lastUpdated) < CACHE_TTL) {
    return { ...riskCache.data, cached: true };
  }
  const result = await computeRisk(incidents);
  riskCache = { data: result, lastUpdated: now };
  return result;
}

function invalidateCache() {
  riskCache = { data: null, lastUpdated: 0 };
}

module.exports = { computeRisk, getCachedRisk, invalidateCache };
