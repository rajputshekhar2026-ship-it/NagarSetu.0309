# NagarSetu Admin Dashboard v2.0 — Setup & Integration Guide

## 🏙️ What Was Built

A production-ready **Municipal Command Center** for the NagarSetu civic Android app,
replacing the basic v1 dashboard with a full-featured, real-time operations hub.

---

## 📁 Project Structure

```
nagarsetu-admin/
├── server/
│   ├── index.js                  ← Main server + Socket.IO hub
│   ├── routes/
│   │   ├── sos.js                ← SOS event CRUD + acknowledge
│   │   ├── incidents.js          ← Incident management + bulk actions
│   │   ├── alerts.js             ← Alert acknowledge
│   │   ├── risk.js               ← Risk heatmap endpoint
│   │   ├── users.js              ← User flag/ban/trust
│   │   └── analytics.js          ← Chart data endpoints
│   ├── services/
│   │   ├── dataStore.js          ← In-memory store (swap for Firebase/Supabase)
│   │   ├── aiVerifier.js         ← Python AI verifier wrapper
│   │   └── riskEngine.js         ← C++ risk engine + JS fallback
│   └── utils/
│       └── logger.js             ← Winston structured logger
├── public/
│   └── index.html                ← Full SPA dashboard UI
├── python/
│   └── ai_verifier.py            ← NLP-based incident verifier
├── cpp/
│   └── risk_calculator.cpp       ← Spatial risk computation
├── logs/                         ← Auto-created by Winston
├── .env.example                  ← Environment variable template
├── package.json
└── SETUP.md                      ← This file
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Compile C++ risk engine
npm run build:cpp

# 3. Copy and configure environment
cp .env.example .env
# Edit .env with your Firebase/Supabase credentials

# 4. Start server
npm run dev        # development (nodemon auto-reload)
npm start          # production
```

Open: **http://localhost:3000**

---

## ✅ Features Added in v2.0

### 1. Live SOS Monitoring Center
- Dedicated page with real-time SOS cards
- Triage levels (CRITICAL / HIGH / MODERATE)
- Live battery level, GPS coordinates, network type
- Trusted contact notification status
- One-click **Acknowledge** + **Resolve** with notes
- Auto-alert creation on new SOS
- Socket.IO: `new_sos`, `sos_acknowledged`, `sos_location_update`

### 2. Incident Management System
- Full-featured table with search + 5 filter dimensions
- Multi-select with bulk verify / reject / assign
- AI Score column with visual bar (auto-runs on new incidents)
- Per-row actions: verify, reject, assign, notes modal, run AI
- Sort by type, severity, timestamp
- Auto-reject below threshold, auto-verify above threshold

### 3. Live Bhopal Map (Leaflet.js)
- Color-coded markers by severity (Red / Amber / Blue / Green)
- SOS pulse-animated markers with priority z-index
- Toggle layers: Incidents, SOS, Risk Heatmap
- Click marker → incident details popup
- C++ risk engine heatmap overlay via circles

### 4. Risk Intelligence
- C++ risk engine heatmap with JS fallback
- Zone stats: total, critical, high zones
- Auto-refresh every 5 minutes
- Separate risk map with incident overlay

### 5. Ward Performance Dashboard
- KPI row: Total, Resolved, SLA Breaches, Avg Rate
- Ward leaderboard by resolution rate + budget utilization
- Officer leaderboard with response time
- Progress bars with color coding

### 6. Analytics (Chart.js)
- 7-day trend: Reported vs Resolved (line chart)
- Type breakdown (doughnut chart)
- 24h hourly distribution (bar chart)
- Ward performance bar chart

### 7. User & Officer Management
- Trust score visual bar (color-coded)
- Flag / Ban / Restore with one click
- False report count tracking
- Filter by status

### 8. Settings & Integration
- Firebase config fields
- Supabase config fields
- AI threshold sliders
- Toggle switches for auto-AI, risk refresh, Firebase sync
- Android integration code reference

### Technical Improvements
- Separated into `routes/` + `services/` + `utils/`
- Winston structured logging to files
- Proper error handling with 404/500 responses
- Route-level AI auto-run on new incidents
- Risk engine JS fallback when C++ not compiled
- 5-min risk cache to avoid redundant computation
- Socket.IO timeout handling + reconnection
- Mobile-responsive sidebar with overlay
- Dark/light theme toggle

---

## 🔌 Android App Integration

### Retrofit Base URL
```kotlin
const val BASE_URL = "http://YOUR_SERVER_IP:3000"
```

### SOS Trigger (Raksha Module → Admin)
```kotlin
// POST /api/sos
data class SosPayload(
    val userId: String,
    val userName: String,
    val phone: String,
    val lat: Double,
    val lng: Double,
    val ward: String,
    val triageLevel: String,  // CRITICAL / HIGH / MODERATE
    val trustedContacts: List<TrustedContact>,
    val batteryLevel: Int,
    val networkType: String,
    val address: String,
    val fcmToken: String
)
```

### Live Location Updates
```kotlin
// PATCH /api/sos/:id/location
// Or via Socket.IO:
socket.emit("sos_ping", mapOf("sosId" to id, "lat" to lat, "lng" to lng, "battery" to battery))
```

### New Incident Report
```kotlin
// POST /api/incidents
// Or via Socket.IO:
socket.emit("android_new_report", incidentPayload)
```

### Receive Admin Broadcasts
```kotlin
socket.on("civic_broadcast") { args ->
    val data = args[0] as JSONObject
    // Show notification to user
}
```

### Socket.IO (Android) — okhttp3 client
```kotlin
val options = IO.Options().apply { transports = arrayOf(WebSocket.NAME) }
val socket = IO.socket("http://YOUR_SERVER_IP:3000", options)
socket.connect()
```

---

## 🔥 Firebase Integration (Production)

Replace `dataStore.js` with Firebase Admin SDK:

```bash
npm install firebase-admin
```

```javascript
// server/services/firebaseService.js
const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();

// Listen for new incidents
db.collection('incidents').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if (change.type === 'added') {
      io.emit('new_incident', change.doc.data());
    }
  });
});
```

---

## 🐘 Supabase Integration (Production)

```bash
npm install @supabase/supabase-js
```

```javascript
// server/services/supabaseService.js
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Query incidents
const { data, error } = await supabase.from('incidents').select('*').order('created_at', { ascending: false });

// Realtime subscription
supabase.channel('incidents').on('postgres_changes', { event: '*', schema: 'public', table: 'incidents' }, payload => {
  io.emit('incident_updated', payload.new);
}).subscribe();
```

---

## 🚀 Production Deployment

```bash
# With PM2
npm install -g pm2
pm2 start server/index.js --name nagarsetu-admin
pm2 save && pm2 startup

# With Docker
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["node", "server/index.js"]
```

---

## 🧪 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/stats | Dashboard overview stats |
| GET | /api/sos | All SOS events |
| POST | /api/sos | New SOS from Android |
| PATCH | /api/sos/:id/acknowledge | Acknowledge + notify user |
| PATCH | /api/sos/:id/location | Live GPS update |
| GET | /api/incidents | List with filters |
| POST | /api/incidents | New incident |
| PATCH | /api/incidents/:id | Update incident |
| POST | /api/incidents/bulk | Bulk verify/reject/assign |
| POST | /api/incidents/:id/verify-ai | Run AI verifier |
| GET | /api/risk/heatmap | Risk zone data |
| GET | /api/alerts | All alerts |
| PATCH | /api/alerts/:id/acknowledge | Acknowledge alert |
| GET | /api/wards | Ward stats |
| GET | /api/officers | Officer list |
| GET | /api/users | Users with filters |
| PATCH | /api/users/:id/status | Flag/ban/restore |
| GET | /api/analytics/trends | 7-day chart data |
| GET | /api/analytics/types | Type breakdown |
| GET | /api/analytics/hourly | 24h distribution |
| GET | /api/analytics/wards | Ward performance |
| GET | /api/health | Health check |

## Socket.IO Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `init` | Server→Admin | Full data snapshot on connect |
| `new_incident` | Server→Admin | New incident arrived |
| `incident_updated` | Server→Admin | Incident status changed |
| `new_sos` | Server→Admin | New SOS triggered |
| `sos_acknowledged` | Server→Admin | SOS acknowledged |
| `sos_location_update` | Server→Admin | GPS update |
| `new_alert` | Server→Admin | New system alert |
| `alert_acknowledged` | Server→Admin | Alert cleared |
| `user_updated` | Server→Admin | User status changed |
| `civic_broadcast` | Server→All | Area alert broadcast |
| `admin_count` | Server→Admin | Connected admin count |
| `android_new_report` | Android→Server | New report from app |
| `sos_ping` | Android→Server | Live GPS ping |
| `broadcast_alert` | Admin→Server | Send area alert |
