// server/services/dataStore.js
// Production: replace with Firebase Admin SDK + Supabase client

const { v4: uuidv4 } = require('uuid');

// ─── SOS Events ───────────────────────────────────────────────────────────────
let sosEvents = [];

// ─── Incidents ─────────────────────────────────────────────────────────────────
let incidents = [];

// ─── Alerts ────────────────────────────────────────────────────────────────────
let alerts = [];

// ─── Ward Stats ────────────────────────────────────────────────────────────────
let wardStats = [
  { id: 'w1', wardName: 'Ward 3 - MP Nagar', authorityName: 'Rajesh Kumar', complaintCount: 45, resolvedCount: 38, budgetSanctioned: 2500000, budgetSpent: 1800000, slaBreaches: 2, zone: 'Zone A', avgResolutionHrs: 18, activeOfficers: 3 },
  { id: 'w2', wardName: 'Ward 7 - Arera Colony', authorityName: 'Priya Sharma', complaintCount: 62, resolvedCount: 51, budgetSanctioned: 3200000, budgetSpent: 2900000, slaBreaches: 5, zone: 'Zone B', avgResolutionHrs: 24, activeOfficers: 5 },
  { id: 'w3', wardName: 'Ward 9 - Habibganj', authorityName: 'Amit Singh', complaintCount: 28, resolvedCount: 24, budgetSanctioned: 1800000, budgetSpent: 1200000, slaBreaches: 1, zone: 'Zone A', avgResolutionHrs: 12, activeOfficers: 2 },
  { id: 'w4', wardName: 'Ward 12 - Kolar', authorityName: 'Sunita Verma', complaintCount: 71, resolvedCount: 49, budgetSanctioned: 4100000, budgetSpent: 3600000, slaBreaches: 8, zone: 'Zone C', avgResolutionHrs: 36, activeOfficers: 4 },
  { id: 'w5', wardName: 'Ward 15 - Bairasia', authorityName: 'Dinesh Patel', complaintCount: 33, resolvedCount: 30, budgetSanctioned: 2100000, budgetSpent: 1500000, slaBreaches: 0, zone: 'Zone B', avgResolutionHrs: 8, activeOfficers: 3 },
  { id: 'w6', wardName: 'Ward 5 - TT Nagar', authorityName: 'Geeta Nair', complaintCount: 55, resolvedCount: 40, budgetSanctioned: 2800000, budgetSpent: 2100000, slaBreaches: 4, zone: 'Zone A', avgResolutionHrs: 20, activeOfficers: 4 },
];

// ─── Users ─────────────────────────────────────────────────────────────────────
let users = [
  { id: 'usr001', name: 'Rahul Mishra', phone: '+91-9876543210', ward: 'Ward 3', reportCount: 12, sosCount: 1, joinedAt: Date.now() - 86400000 * 30, status: 'active', trustScore: 88, lastActive: Date.now() - 3600000, falseReports: 0 },
  { id: 'usr002', name: 'Kavya Rao', phone: '+91-9123456789', ward: 'Ward 7', reportCount: 5, sosCount: 0, joinedAt: Date.now() - 86400000 * 15, status: 'active', trustScore: 76, lastActive: Date.now() - 7200000, falseReports: 1 },
  { id: 'usr003', name: 'Anon_User_X42', phone: '+91-XXXXXXXXXX', ward: 'Ward 12', reportCount: 47, sosCount: 3, joinedAt: Date.now() - 86400000 * 2, status: 'flagged', trustScore: 23, lastActive: Date.now() - 1800000, falseReports: 12 },
  { id: 'usr004', name: 'Meera Joshi', phone: '+91-9988776655', ward: 'Ward 9', reportCount: 8, sosCount: 0, joinedAt: Date.now() - 86400000 * 60, status: 'active', trustScore: 91, lastActive: Date.now() - 86400000, falseReports: 0 },
  { id: 'usr005', name: 'Ananya Singh', phone: '+91-9345678901', ward: 'Ward 3', reportCount: 3, sosCount: 1, joinedAt: Date.now() - 86400000 * 5, status: 'active', trustScore: 82, lastActive: Date.now() - 60000, falseReports: 0 },
];

// ─── Officers ──────────────────────────────────────────────────────────────────
let officers = [
  { id: 'off001', name: 'Ravi Kumar', ward: 'Ward 7', assignedCount: 8, resolvedCount: 7, avgResponseMin: 18, status: 'on-duty', badge: 'MP-041' },
  { id: 'off002', name: 'Sunita Kamble', ward: 'Ward 9', assignedCount: 5, resolvedCount: 5, avgResponseMin: 12, status: 'on-duty', badge: 'MP-038' },
  { id: 'off003', name: 'Pradeep Yadav', ward: 'Ward 12', assignedCount: 11, resolvedCount: 7, avgResponseMin: 34, status: 'busy', badge: 'MP-052' },
  { id: 'off004', name: 'Anita Thakur', ward: 'Ward 3', assignedCount: 4, resolvedCount: 4, avgResponseMin: 9, status: 'on-duty', badge: 'MP-029' },
  { id: 'off005', name: 'Mohit Sahu', ward: 'Ward 5', assignedCount: 6, resolvedCount: 3, avgResponseMin: 45, status: 'off-duty', badge: 'MP-063' },
];

// ─── CRUD helpers ──────────────────────────────────────────────────────────────
module.exports = {
  // SOS
  getSosEvents: () => sosEvents,
  getSosById: (id) => sosEvents.find(s => s.id === id),
  addSosEvent: (data) => {
    const sos = { id: 'sos' + Date.now(), ...data, triggeredAt: Date.now(), status: 'active', acknowledged: false };
    sosEvents.unshift(sos);
    return sos;
  },
  updateSos: (id, patch) => {
    const idx = sosEvents.findIndex(s => s.id === id);
    if (idx === -1) return null;
    sosEvents[idx] = { ...sosEvents[idx], ...patch };
    return sosEvents[idx];
  },

  // Incidents
  getIncidents: (filters = {}) => {
    let list = [...incidents];
    if (filters.status) list = list.filter(i => i.status === filters.status);
    if (filters.ward) list = list.filter(i => i.ward === filters.ward);
    if (filters.type) list = list.filter(i => i.type === filters.type);
    if (filters.severity) list = list.filter(i => i.severity >= parseInt(filters.severity));
    return list.sort((a, b) => b.timestamp - a.timestamp);
  },
  getIncidentById: (id) => incidents.find(i => i.id === id),
  addIncident: (data) => {
    const inc = { id: 'inc' + Date.now(), ...data, timestamp: Date.now(), status: 'pending' };
    incidents.unshift(inc);
    return inc;
  },
  updateIncident: (id, patch) => {
    const idx = incidents.findIndex(i => i.id === id);
    if (idx === -1) return null;
    incidents[idx] = { ...incidents[idx], ...patch };
    return incidents[idx];
  },

  // Alerts
  getAlerts: () => alerts.sort((a, b) => b.timestamp - a.timestamp),
  addAlert: (data) => {
    const alert = { id: 'alrt' + Date.now(), ...data, timestamp: Date.now(), acknowledged: false };
    alerts.unshift(alert);
    return alert;
  },
  acknowledgeAlert: (id) => {
    const idx = alerts.findIndex(a => a.id === id);
    if (idx === -1) return null;
    alerts[idx].acknowledged = true;
    return alerts[idx];
  },

  // Wards
  getWardStats: () => wardStats,

  // Users
  getUsers: (filters = {}) => {
    let list = [...users];
    if (filters.status) list = list.filter(u => u.status === filters.status);
    return list;
  },
  updateUser: (id, patch) => {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...patch };
    return users[idx];
  },

  // Officers
  getOfficers: () => officers,

  // Stats summary
  getStats: () => {
    const pending = incidents.filter(i => i.status === 'pending').length;
    const verified = incidents.filter(i => i.status === 'verified').length;
    const rejected = incidents.filter(i => i.status === 'rejected').length;
    const activeSos = sosEvents.filter(s => s.status === 'active').length;
    const criticalAlerts = alerts.filter(a => a.severity === 'CRITICAL' && !a.acknowledged).length;
    return {
      incidents: { total: incidents.length, pending, verified, rejected },
      sos: { total: sosEvents.length, active: activeSos },
      alerts: { total: alerts.length, critical: criticalAlerts, unacknowledged: alerts.filter(a => !a.acknowledged).length },
      users: { total: users.length, flagged: users.filter(u => u.status === 'flagged').length, active: users.filter(u => u.status === 'active').length },
      wards: { total: wardStats.length, avgResolution: Math.round(wardStats.reduce((s, w) => s + (w.resolvedCount / w.complaintCount), 0) / wardStats.length * 100) }
    };
  }
};
