<div align="center">


# 🏙️ NagarSetu
### Smart City Civic Platform

[![Kotlin](https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=flat-square&logo=kotlin&logoColor=white)](https://kotlinlang.org)
[![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-latest-4285F4?style=flat-square&logo=android&logoColor=white)](https://developer.android.com/jetpack/compose)
[![Firebase](https://img.shields.io/badge/Firebase-RTDB_·_FCM-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_·_DB-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Gemini](https://img.shields.io/badge/Gemini_Flash-AI_Core-4285F4?style=flat-square&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini)
[![Wear OS](https://img.shields.io/badge/Wear_OS-Companion-4285F4?style=flat-square&logo=wearos&logoColor=white)](https://wearos.google.com)
[![BIMSTEC](https://img.shields.io/badge/Coverage-7_BIMSTEC_Nations-FF2D2D?style=flat-square)](#-7-bimstec-nations)
[![License](https://img.shields.io/badge/License-MIT-22D3A0?style=flat-square)](LICENSE)
[![Modules](https://img.shields.io/badge/Gradle_Modules-13+-8B5CF6?style=flat-square)](#-13-independent-modules)
[![Version](https://img.shields.io/badge/Version-1.0.0-4F8EF7?style=flat-square)](#)

</div>

---

## 🧭 Overview

NagarSetu is a **unified civic-tech platform** bridging citizens and city services — spanning an Android app, a real-time Admin Command Center, and a Wear OS wrist companion — all powered by Gemini AI and a locally-running TF-IDF intent engine.

> *218 Kotlin source files. 13 independent Gradle modules. 3 deployment targets. One mission: make Indian cities smarter, safer, and more accountable — starting with Bhopal & Indore.*

---

## 📊 Impact at a Glance

| Metric | Value |
|--------|-------|
| 🧩 Independent Gradle modules | **13+** |
| 📄 Kotlin source files | **218** |
| 🌏 BIMSTEC nations covered | **7** |
| ⚖️ Repeat-offence penalty multiplier | **4×** |
| 🎨 Built-in colour themes (DataStore) | **6** |
| 🚨 SOS triage levels | **3** (CRITICAL / HIGH / MODERATE) |

---

## 🖥️ Three Deployment Targets

| Target | Stack | Role |
|--------|-------|------|
| 📱 **Android App** | Kotlin · Jetpack Compose · MVVM · Clean Arch | Citizens' primary interface — 13 modules, 6 themes, AI FAB on every screen |
| 🖥️ **Admin Dashboard** | Node.js · Socket.IO · Express · Leaflet · PWA | Real-time SOS monitoring, ward analytics, AI verifier, C++ risk engine |
| ⌚ **Wear OS Companion** | WatchSosManager · Wearable Data Layer API | Wrist-tap SOS, heart-rate monitoring, haptic confirmation |

---

## 🗺️ Full System Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  DEVICES                                                        │
│  📱 Android (Compose · MVVM)  ⌚ Wear OS (SOS · HR)            │
│  🖥️ Admin PWA (Socket.IO)     🌐 Reports (GPS-tagged)          │
│  🚨 SOS Trigger (Shake · Twilio · FCM)                         │
└────────────────────────┬────────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  AI CORE                                                        │
│  🤖 NagarSetu AI (TF-IDF · CivicIntent · RAG)                  │
│  ✨ Gemini Flash (conf < 0.55 → escalate)                       │
│  🏥 Triage Engine (Golden-hour · Emergency dispatch)            │
│  ⚖️ DriveLegal Bot (154 violations × 7 nations · Hinglish)     │
│  🔮 Predictive AI (Flood · Crime · Risk · RAG query)           │
└────────────────────────┬────────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  DATA INFRA                                                     │
│  Supabase (Auth · DB · PostgreSQL)   Firebase (RTDB · FCM)     │
│  Room / DataStore (local cache)      OSM / OSRM (eco routing)  │
│  Retrofit / OkHttp (REST)            Twilio · OCM              │
└────────────────────────┬────────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│  COMMAND — ADMIN DASHBOARD                                      │
│  Live SOS Monitor · Ward Heatmap · AI Verifier                 │
│  C++ Risk Engine · Socket.IO Push · PWA Offline                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🧠 AI Intent → Response Pipeline

Every civic query is classified, retrieved from a TF-IDF knowledge base, and escalated to Gemini Flash only when local confidence drops below the threshold.

```
User Query (Hindi / Hinglish / EN)
        │
        ▼
 Keyword Detect ──► Intent Classifier ──► Normalise tokens
        │                                        │
        ▼                                        ▼
   TF-IDF RAG ──────────────────────────  conf: Float
        │
        ├── conf ≥ 0.55 ──► Direct Answer (RAG match)
        │
        └── conf < 0.55 ──► Gemini Flash (cloud escalation)
                                    │
                                    ▼
                           AssistantReply ──► Room DB (chat history)
                           (answer + route hint + navigate suggestion)
```

| Layer | Component | Role |
|-------|-----------|------|
| 1 | Keyword Classifier | Offline intent detection |
| 2 | TF-IDF RAG | Cosine-similarity search over civic knowledge base |
| 3 | CivicIntent enum | Structured intent dispatching |
| 4 | Gemini Flash | Complex LLM reasoning (conf < 0.55) |
| 5 | Room DB | Persistent chat history |

---

## 🧩 13 Independent Modules

| # | Module | Description |
|---|--------|-------------|
| 1 | 🚨 **Emergency AI** | Shake-to-SOS accelerometer detection, GPS broadcast to trusted contacts, Twilio emergency SMS, TriageEngine with golden-hour guidance |
| 2 | ⚖️ **DriveLegal** | 154 verified violations × 7 BIMSTEC nations, TF-IDF chatbot, Hinglish support, repeat-offence multipliers (1× → 2× → 4×), MV Act citations |
| 3 | 🗺️ **RoadWatch** | GPS-tagged civic issue reporting (potholes, drains, streetlights), TFLite PotholeDetector, community upvoting, SLA breach alerts, heatmap view |
| 4 | 🏛️ **Dashboard** | Ward-level KPI analytics, HybridAlertBridge (Firebase RT + local → unified StateFlow), contractor accountability, CrisisManager |
| 5 | 🌿 **GreenRoute** | OSRM + GTFS multi-modal routing, CO₂-aware path scoring for cyclists / walkers / bus / auto, Bhopal City Link Ltd data |
| 6 | 🛡️ **Raksha** | Women's safety — fake call trigger, trusted contact location sharing, shake-activated SOS beacon, Wear OS SOS via Wearable Data Layer API |
| 7 | ⚡ **ChargeUp** | EV station locator via Open Charge Map API, real-time slot availability, SoC-aware trip planning, kWh pricing, Bhopal radius |
| 8 | 🅿️ **ParkEase** | Smart parking — OSM lot locations + Supabase real-time slots, QR ticket generation, 30-min hold reservation, ₹/hr dynamic pricing |
| 9 | 🔮 **Predictive** | AI hazard forecasting — flood risk, crime hotspots, infrastructure risk, RAG query box, BimstecCard, ProactiveAlertCard, RiskGridMap |
| 10 | 🏥 **HealthWatch** | Telemedicine via Jitsi SDK, epidemic early-warning (dengue, malaria), nearby clinic finder via Overpass API |
| 11 | 📊 **Report It** | Citizen issue reporting, multi-media attachments, category tags, GPS auto-tagging, admin feed |
| 12 | 🔥 **Firebase Core** | FCM push, real-time GPS tracking to Firebase RTDB, NagarSetuAnalytics event tracking, FirebaseAuthManager, HybridAlertBridge |
| 13 | 🎨 **Common UI** | 6 app themes (Civic Light/Dark, Eco Green, Sunset Amber, High Contrast, Royal Purple) persisted via DataStore, ThemeViewModel |

---

## 🏛️ Android Clean Architecture

Every feature module follows a strict layered pattern with Hilt wiring throughout.

```
┌──────────────────────────────────────────────────────────────┐
│  UI LAYER — Jetpack Compose Screens                          │
│  HomeScreen  RakshaScreen  DriveScreen  GreenRoute           │
│  ChargeUp    Assistant(AI FAB)  RoadWatch  Dashboard         │
└────────────────────────┬─────────────────────────────────────┘
                         │  StateFlow / collectAsState
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  DOMAIN LAYER — ViewModels · UseCases · Repository Interfaces│
│  ViewModels (StateFlow)    UseCases (business logic)         │
│  Repository Interfaces     Domain Models / Entities          │
│  Hilt DI (dependency injection)                              │
└────────────────────────┬─────────────────────────────────────┘
                         │  Repository implementations
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  DATA LAYER — Repository Implementations · Remote · Local    │
│  Supabase (Auth + DB)   Firebase (RTDB · FCM)                │
│  Retrofit (REST · OkHttp)  Room (local cache)                │
│  Twilio (OTP · SMS)     Gemini Flash (AI LLM)                │
└──────────────────────────────────────────────────────────────┘
        │ OSRM · GTFS · OSM · OpenWeatherMap · OCM · Overpass · WAQI
```

---

## 🖥️ Admin Dashboard — Municipal Command Center

A production-grade PWA built with Node.js, Express, Socket.IO, and Leaflet — with AI-powered incident verification and a C++ spatial risk engine. Centre coordinates: **Indore (22.7196°N, 75.8577°E)**.

### Socket.IO Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `new_incident` | Server → Admin | New incident arrived from Android |
| `new_sos` | Server → Admin | New SOS triggered by citizen |
| `sos_location_update` | Server → Admin | Live GPS ping from active SOS |
| `android_new_report` | Android → Server | New report submitted from mobile app |
| `sos_ping` | Android → Server | Live GPS coordinate update |
| `civic_broadcast` | Server → All | Area-wide alert from admin to all citizens |
| `broadcast_alert` | Admin → Server | Admin sends ward-level emergency broadcast |

### REST Endpoints

| Method | Endpoint | Description | 
|--------|----------|-------------|
| `GET` | `/api/stats` | Dashboard overview KPIs |
| `POST` | `/api/sos` | New SOS from Android (Raksha module) |
| `PATCH` | `/api/sos/:id/acknowledge` | Acknowledge + notify citizen |
| `GET` | `/api/incidents` | List with 5-dimension filters |
| `POST` | `/api/incidents/:id/verify-ai` | Run Python NLP verifier on incident |
| `POST` | `/api/incidents/bulk` | Bulk verify / reject / assign |
| `GET` | `/api/risk/heatmap` | C++ spatial risk zone data |
| `GET` | `/api/analytics/trends` | 7-day Reported vs Resolved chart data |
| `PATCH` | `/api/users/:id/status` | Flag / Ban / Restore citizen user |

---

## ⌚ Wear OS — Wrist-to-City SOS

The Raksha module integrates with paired Wear OS devices via the **Wearable Data Layer API**, enabling SOS triggers and heart-rate monitoring from a smartwatch.

```
⌚ Wear OS tap
      │  /raksha/sos (MessageClient)
      ▼
📱 Android — WatchSosManager
      │  simulateWatchSos() / onHeartRateUpdate()
      ▼
🛡️ Raksha — RakshaViewModel (StateFlow dispatch)
      ├──► 🔥 Firebase RTDB ──► GPS broadcast → Admin PWA
      └──► 📲 Twilio SMS    ──► Alert trusted contacts
                                      │
                                      ▼
                             🖥️ Admin PWA
                             new_sos event · SOS card + map pin · Triage + dispatch
```

```kotlin
// WatchSosManager.kt — Raksha module
const val SOS_PATH = "/raksha/sos"
const val HEARTBEAT_PATH = "/raksha/heartbeat"

// Real WearOS production steps:
// 1. Add play-services-wearable dependency
// 2. Register WearableListenerService in manifest
// 3. Send SOS via Wearable.getMessageClient:
Wearable.getMessageClient(ctx)
    .sendMessage(nodeId, SOS_PATH, null)
    .addOnSuccessListener { /* confirm vibration */ }
```

---

## 🌏 7 BIMSTEC Nations

Traffic violation data sourced from official motor vehicle acts, verified against gazette notifications. Currency-aware fine calculation with native law citations.

| Flag | Nation | Act | Currency |
|------|--------|-----|----------|
| 🇮🇳 | **India** | Motor Vehicles Act 1988 | ₹ INR |
| 🇧🇩 | **Bangladesh** | MV Ordinance 1983 | ৳ BDT |
| 🇧🇹 | **Bhutan** | Road Safety Act 1999 | Nu NGU |
| 🇲🇲 | **Myanmar** | Motor Vehicles Law 2011 | K MMK |
| 🇳🇵 | **Nepal** | MV Act 2049 BS | Rs NPR |
| 🇱🇰 | **Sri Lanka** | Motor Traffic Act 1951 | Rs LKR |
| 🇹🇭 | **Thailand** | Land Traffic Act | ฿ THB |

---

## ✨ What Makes NagarSetu Different

| Feature | Detail | Module |
|---------|--------|--------|
| **Shake-to-SOS** | Accelerometer detection triggers emergency dispatch, GPS broadcast to trusted contacts via Twilio + FCM | `emergency-ai` |
| **Watch SOS** | Wear OS wrist-tap triggers WatchSosManager via Wearable Data Layer API, heart-rate monitoring | `raksha` |
| **AI Challan Bot** | TF-IDF chatbot understands Hinglish queries, 154 violations × 7 nations, repeat-offence multipliers | `drive-legal` |
| **Live Dashboard SOS** | Real-time SOS cards with GPS, battery, triage level (CRITICAL/HIGH/MODERATE), one-click acknowledge | `admin` |
| **GTFS Eco Routing** | OSRM + GTFS combine to score routes by CO₂ emission, cycling lanes, and transit time | `green-route` |
| **AI Incident Verifier** | Python NLP auto-verifier with configurable threshold, auto-accept/reject, bulk actions | `admin` |
| **C++ Risk Engine** | Spatial risk heatmap compiled from C++, JS fallback, 5-min cache, risk zone dashboard | `admin` |
| **Hazard Prediction** | RAG query box + predictive models for flood zones, crime hotspots, ProactiveAlertCard | `predictive` |
| **6 App Themes** | Civic Light/Dark, Eco Green, Sunset Amber, High Contrast, Royal Purple — persisted via DataStore | `common-ui` |
| **PWA Offline** | Service worker caches the admin dashboard, handles push notifications, background sync | `admin` |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Language** | Kotlin · Coroutines · Flow |
| **UI** | Jetpack Compose · Navigation · Coil |
| **DI** | Hilt · Dagger |
| **Network** | Retrofit · OkHttp · Gson |
| **Backend** | Firebase RTDB · Supabase · FCM |
| **AI / ML** | Gemini Flash · TF-IDF Bot · TFLite (PotholeDetector) |
| **Maps** | OSM / OSRM · GTFS · Overpass API |
| **Auth / Comms** | Twilio OTP & SMS · Firebase Auth |
| **Local** | Room · DataStore |
| **Wearable** | Wear OS · Wearable Data Layer API |
| **Admin Server** | Node.js · Socket.IO · Express |
| **Admin AI** | Python NLP verifier · C++ Risk Engine |
| **Admin UI** | Leaflet.js · Chart.js · PWA Service Worker |

---

## 📁 Project Structure

```
NagarSetu/                              # Android App (218 .kt files)
├── frontend/
│   ├── app/                            # NavHost, themes, AI FAB
│   ├── common-ui/                      # Themes, Room, OSM, ThemeViewModel
│   └── components/
│       ├── auth/                       # Login, Profile, Settings, SafetyInfo
│       ├── predictive/                 # BimstecCard, RAGQueryBox, RiskGridMap
│       ├── charge-up/                  # ChargeUpScreen, ChargeUpViewModel
│       ├── road-watch/                 # HeatmapTab, TrackTab, ReportTab
│       ├── health-watch/               # Telemedicine, epidemic alerts
│       ├── raksha/                     # RakshaScreen, RakshaSettings
│       └── report-it/                  # Issue reporting from Dashboard
│
└── backend/
    └── components/
        ├── core/                       # NagarSetuAssistant, CivicDataHub
        ├── auth/                       # Supabase + Twilio OTP
        ├── emergency-ai/               # ShakeDetector, TriageEngine
        ├── drive-legal/                # TfIdfBot, DriveLegalConfig
        ├── road-watch/                 # PotholeDetector (TFLite)
        ├── dashboard/                  # HybridAlertBridge, CrisisManager
        ├── green-route/                # OSRM + GTFS routing
        ├── charge-up/                  # Open Charge Map API
        ├── park-ease/                  # OSM lots + Supabase slots + QR
        ├── health-watch/               # Jitsi telemedicine, Overpass clinics
        ├── raksha/                     # WatchSosManager (Wear OS)
        ├── predictive/                 # Hazard forecasting, RAG
        └── firebase/                   # FCM, GPS tracking, NagarSetuAnalytics

nagarsetu-admin-v3/                     # Admin Dashboard (Node.js PWA)
├── server/
│   ├── index.js                        # Express + Socket.IO hub
│   ├── routes/                         # sos, incidents, alerts, risk, users, analytics
│   └── services/                       # dataStore, aiVerifier, riskEngine
├── public/
│   ├── index.html                      # Full SPA dashboard (1465 lines)
│   ├── sw.js                           # Service worker — cache + push + sync
│   └── offline.html                    # Offline fallback
├── python/
│   └── ai_verifier.py                  # NLP incident verifier
└── cpp/
    └── risk_calculator.cpp             # Spatial risk computation
```

---

## 🚀 Quick Start

> **Requirements:** Android Studio Ladybug or newer · JDK 17 · Android SDK 34

### Android App

```bash
git clone https://github.com/your-org/NagarSetu.git
cd NagarSetu
# Open in Android Studio Ladybug → Sync Gradle
```

Configure `local.properties`:

```properties
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
TWILIO_ACCOUNT_SID=ACxxxxxxxx
GEMINI_API_KEY=AIzaSy...
MAPS_API_KEY=AIzaSy...
```

Place Firebase config at `app/google-services.json`, then:

```bash
./gradlew :frontend:app:assembleDebug
# or Run ▶ in Android Studio
```

### Admin Dashboard

```bash
cd nagarsetu-admin-v3
cp .env.example .env          # fill Firebase + Supabase creds
npm install
npm run build:cpp             # Optional: compile C++ risk engine
npm run dev                   # → http://localhost:3000
```

---

## 🤝 Contributing

NagarSetu is open-source under the MIT license. All civic-tech contributions welcome — Android, Node.js, Python, or C++.

```bash
# 1. Fork the repository
git checkout -b feature/your-module

# 2. Follow MVVM + Clean Arch patterns per existing modules
# 3. Write tests for use cases
./gradlew test

# 4. Push and open a Pull Request
git push origin feature/your-module
```

---

<div align="center">

**Built with ❤️ for Bhopal & Indore, India**

*Kotlin · Jetpack Compose · Firebase · Supabase · Gemini Flash · Wear OS · Node.js · Socket.IO*

</div>
