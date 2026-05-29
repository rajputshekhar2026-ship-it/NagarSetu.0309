/**
 * NagarSetu Admin Dashboard v2.0 — Municipal Command Center
 * Node.js + Express + Socket.IO backend
 *
 * Architecture:
 *   server/
 *     index.js              ← this file (app bootstrap + Socket.IO)
 *     routes/               ← REST API route handlers
 *     services/             ← business logic (dataStore, aiVerifier, riskEngine)
 *     utils/                ← logger, helpers
 */

require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

// ─── Internal modules ─────────────────────────────────────────────────────────
const logger = require('./utils/logger');
const db = require('./services/dataStore');
const supabaseSync = require('./services/supabaseSync');

// ─── Route handlers ───────────────────────────────────────────────────────────
const sosRoutes = require('./routes/sos');
const incidentRoutes = require('./routes/incidents');
const alertRoutes = require('./routes/alerts');
const riskRoutes = require('./routes/risk');
const userRoutes = require('./routes/users');
const analyticsRoutes = require('./routes/analytics');

// ─── App setup ────────────────────────────────────────────────────────────────
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST', 'PATCH', 'DELETE'] },
  pingTimeout: 30000,
  pingInterval: 15000
});

// Make io available to route handlers via app
app.set('io', io);

// Initialize Supabase Sync
supabaseSync.init(io);

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Request logging (dev)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    logger.info(`${req.method} ${req.path}`, { query: req.query, ip: req.ip });
  }
  next();
});

// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api/sos', sosRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/analytics', analyticsRoutes);

// Dashboard overview stats
app.get('/api/stats', (req, res) => res.json(db.getStats()));

// Wards
app.get('/api/wards', (req, res) => res.json(db.getWardStats()));

// Officers
app.get('/api/officers', (req, res) => res.json(db.getOfficers()));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: '2.0.0', uptime: Math.round(process.uptime()), timestamp: Date.now() });
});

// ─── Socket.IO Real-time Hub ──────────────────────────────────────────────────
const connectedAdmins = new Map();

io.on('connection', (socket) => {
  const adminId = socket.handshake.query.adminId || socket.id;
  connectedAdmins.set(socket.id, { id: adminId, connectedAt: Date.now() });
  logger.info('Admin connected', { socketId: socket.id, adminId, totalAdmins: connectedAdmins.size });

  // Send initial snapshot
  socket.emit('init', {
    incidents: db.getIncidents(),
    sosEvents: db.getSosEvents(),
    alerts: db.getAlerts(),
    wardStats: db.getWardStats(),
    users: db.getUsers(),
    officers: db.getOfficers(),
    stats: db.getStats()
  });

  // Emit admin count to all
  io.emit('admin_count', connectedAdmins.size);

  // ── Simulated live feed (Disabled for Production) ──────────────────────────
  /*
  const liveInterval = setInterval(() => {
    simulateLiveData(socket);
  }, 25000);
  */

  // ── SOS location pings from Android (real-time tracking) ──────────────────
  socket.on('sos_ping', ({ sosId, lat, lng, battery }) => {
    const updated = db.updateSos(sosId, { lat, lng, batteryLevel: battery, lastLocationUpdate: Date.now() });
    if (updated) {
      io.emit('sos_location_update', { id: sosId, lat, lng, battery, ts: Date.now() });
    }
  });

  // ── Android app → admin: new report ───────────────────────────────────────
  socket.on('android_new_report', (data) => {
    const inc = db.addIncident(data);
    io.emit('new_incident', inc);
    logger.info('Android report received via Socket', { id: inc.id });
  });

  // ── Admin → Android: broadcast (e.g. area alert) ──────────────────────────
  socket.on('broadcast_alert', (data) => {
    io.emit('civic_broadcast', { ...data, sentAt: Date.now(), sentBy: adminId });
    logger.info('Civic broadcast sent', { adminId, ward: data.ward });
  });

  socket.on('disconnect', (reason) => {
    // clearInterval(liveInterval);
    connectedAdmins.delete(socket.id);
    io.emit('admin_count', connectedAdmins.size);
    logger.info('Admin disconnected', { socketId: socket.id, reason, totalAdmins: connectedAdmins.size });
  });
});

// ─── Live simulation helper ───────────────────────────────────────────────────
const INCIDENT_TYPES = ['HARASSMENT', 'POOR_LIGHTING', 'UNSAFE_SPOT', 'SUSPICIOUS_ACTIVITY', 'ROAD_HAZARD', 'FLOOD_RISK'];
const BHOPAL_WARDS = ['Ward 3', 'Ward 5', 'Ward 7', 'Ward 9', 'Ward 12', 'Ward 15'];

function simulateLiveData(socket) {
  const rand = Math.random();

  if (rand > 0.6) {
    // Simulate new incident
    const type = INCIDENT_TYPES[Math.floor(Math.random() * INCIDENT_TYPES.length)];
    const ward = BHOPAL_WARDS[Math.floor(Math.random() * BHOPAL_WARDS.length)];
    const newInc = db.addIncident({
      type,
      lat: 23.25 + Math.random() * 0.045,
      lng: 77.40 + Math.random() * 0.055,
      description: `[LIVE] ${type.replace(/_/g, ' ').toLowerCase()} reported`,
      severity: Math.ceil(Math.random() * 5),
      reportedBy: 'user_live_' + Math.floor(Math.random() * 999),
      reporterName: 'App User',
      ward,
      aiScore: Math.round(Math.random() * 100) / 100,
      photos: [],
      assignedTo: null,
      notes: ''
    });
    socket.emit('new_incident', newInc);
    logger.info('Simulated incident', { id: newInc.id, type, ward });

  } else if (rand > 0.4) {
    // Simulate SOS location update for active SOS
    const activeSos = db.getSosEvents().filter(s => s.status === 'active');
    if (activeSos.length > 0) {
      const sos = activeSos[0];
      const updatedLat = sos.lat + (Math.random() - 0.5) * 0.001;
      const updatedLng = sos.lng + (Math.random() - 0.5) * 0.001;
      db.updateSos(sos.id, { lat: updatedLat, lng: updatedLng, lastLocationUpdate: Date.now() });
      socket.emit('sos_location_update', { id: sos.id, lat: updatedLat, lng: updatedLng, battery: sos.batteryLevel - 1 });
    }
  }
}

// ─── Error handler ────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  logger.error('Unhandled error', { message: err.message, stack: err.stack });
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ─── Start server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info(`
╔══════════════════════════════════════════════════════════╗
║   🏙️  NagarSetu Municipal Command Center v2.0           ║
║   📡  http://localhost:${PORT}                              ║
║   🔌  Socket.IO enabled                                  ║
║   🤖  Python AI verifier ready                           ║
║   🚀  C++ risk engine ready                              ║
╚══════════════════════════════════════════════════════════╝
  `);
});

module.exports = { app, server, io };
