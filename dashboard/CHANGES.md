# NagarSetu Admin v3 — PWA + Map Enhancements

## What's New in v3

### 🗺️ Map Page — Major Upgrade
| Feature | Details |
|---------|---------|
| **Indore-centred** | Map defaults to 22.7196°N 75.8577°E (Indore city centre) |
| **leaflet.heat** | Real heat layer from `/api/risk/heatmap`; falls back to incident-derived heatmap |
| **Ward overlays** | Dashed circle overlays per ward, colour-coded by incident density |
| **Emoji markers** | Custom `L.divIcon` per incident type: 🚧🌊💡⚠️📍 |
| **Pulsing SOS icon** | Animated `@keyframes siren` radial pulse (was missing — now fixed) |
| **Live stat pills** | Floating overlay showing active SOS / incident / resolved counts |
| **Coordinate display** | Live lat/lng display on mousemove |
| **Map search** | Search bar filters markers by ward name or incident type |
| **Fly to Ward** | Quick-select dropdown animates map to any Indore ward |
| **📡 Locate Me** | Geolocation button flies to user's GPS position, drops marker for 10s |
| **Ward summary panel** | Progress bars per ward showing incident load + active SOS count |
| **Mode switcher** | 4 modes: Incidents / SOS Live / Risk Heat / All Layers |
| **Theme-aware tiles** | CartoDB Light ↔ Dark tiles swap on theme toggle via `syncMapTiles()` |

### 📱 PWA Improvements
| Feature | Details |
|---------|---------|
| **`manifest.json`** | Added richer metadata: `lang`, `dir`, `display_override`, `related_applications` |
| **Shortcut icons** | SVG inline icons for SOS, Map, Notifications shortcuts |
| **3 app shortcuts** | SOS Monitor, Live Map, Notifications — accessible from home screen long-press |
| **`background_color`** | Set to `#F0F4FB` (light mode bg) — correct splash screen colour |
| **Offline bar** | Orange banner on network loss, auto-hides on reconnect |
| **SW update toast** | Notifies when a new version is available |
| **Push notifications** | Service worker handles Web Push for SOS alerts (requires VAPID key) |
| **Background sync** | Queues PATCH actions while offline, replays on reconnect |

### 🔧 Bug Fixes
- **`@keyframes siren`** was referenced in SOS icon CSS but never defined — now defined
- `renderWardSummary` upgraded from plain text to progress-bar cards with SOS counts
- Map search clears properly when input is empty (restores all markers)

### 📁 Project Structure
```
nagarsetu-admin-v3/
├── public/
│   ├── index.html      ← Full dashboard (1,465 lines)
│   ├── manifest.json   ← PWA manifest (updated)
│   ├── sw.js           ← Service worker (cache + push + sync)
│   └── offline.html    ← Offline fallback page
├── server/
│   ├── index.js        ← Express + Socket.IO
│   └── routes/         ← sos, incidents, alerts, risk, users, analytics
├── python/ai_verifier.py
├── cpp/risk_calculator.cpp
└── package.json
```

### 🚀 Quick Start
```bash
npm install
node server/index.js
# Open http://localhost:3000
```
