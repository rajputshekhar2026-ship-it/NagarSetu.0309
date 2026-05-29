// server/services/aiVerifier.js
const { spawn } = require('child_process');
const path = require('path');
const logger = require('../utils/logger');

/**
 * Run Python AI verifier on an incident.
 * Returns a Promise that resolves with the AI analysis result.
 */
function verifyIncident(incident) {
  return new Promise((resolve) => {
    const pyProcess = spawn('python3', [
      path.join(__dirname, '../../python/ai_verifier.py'),
      JSON.stringify(incident)
    ]);

    let output = '';
    let errorOutput = '';

    pyProcess.stdout.on('data', d => { output += d.toString(); });
    pyProcess.stderr.on('data', d => { errorOutput += d.toString(); });

    pyProcess.on('close', (code) => {
      if (errorOutput) logger.warn('AI verifier stderr:', { error: errorOutput });
      try {
        const result = JSON.parse(output.trim());
        logger.info('AI verification complete', { incidentId: incident.id, score: result.score, level: result.risk_level });
        resolve(result);
      } catch (e) {
        logger.error('AI verifier parse error', { error: e.message, output });
        // Graceful fallback
        resolve({
          score: 0.5,
          risk_level: 'MODERATE',
          feedback: 'AI analysis unavailable - manual review required',
          tags: ['manual-review'],
          recommended_action: 'manual_review',
          breakdown: { text_credibility: 0.5, severity_weight: 0.5, recency_weight: 0.5 }
        });
      }
    });

    pyProcess.on('error', (err) => {
      logger.error('AI verifier spawn error', { error: err.message });
      resolve({
        score: 0.5,
        risk_level: 'MODERATE',
        feedback: 'Python AI not available - check installation',
        tags: ['error'],
        recommended_action: 'manual_review',
        breakdown: {}
      });
    });

    // Timeout safety: kill after 10s
    setTimeout(() => {
      pyProcess.kill();
      resolve({ score: 0.5, risk_level: 'MODERATE', feedback: 'AI timeout', tags: ['timeout'], recommended_action: 'manual_review', breakdown: {} });
    }, 10000);
  });
}

module.exports = { verifyIncident };
