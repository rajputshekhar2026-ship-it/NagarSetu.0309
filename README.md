<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NagarSetu — Smart City Civic Platform</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #060810;
  --bg2: #0c0f1a;
  --bg3: #111525;
  --card: #0d1120;
  --card2: #121828;
  --border: rgba(255,255,255,0.06);
  --border2: rgba(255,255,255,0.11);
  --text: #dde3f5;
  --muted: #6b7799;
  --accent: #4f8ef7;
  --accent2: #8b5cf6;
  --green: #22d3a0;
  --orange: #fb923c;
  --red: #f43f5e;
  --teal: #38bdf8;
  --yellow: #fbbf24;
  --pink: #e879f9;
  --font-head: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --r: 10px;
  --r2: 16px;
  --max: 900px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--font-body);font-size:15px;line-height:1.72;overflow-x:hidden}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:rgba(79,142,247,0.3);border-radius:3px}
body::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(ellipse 60% 40% at 15% 10%,rgba(79,142,247,0.05) 0%,transparent 60%),
    radial-gradient(ellipse 50% 35% at 85% 85%,rgba(139,92,246,0.05) 0%,transparent 60%),
    radial-gradient(ellipse 40% 30% at 50% 50%,rgba(34,211,160,0.02) 0%,transparent 70%);
}
.wrap{max-width:var(--max);margin:0 auto;padding:0 28px;position:relative;z-index:1}

/* ─── KEYFRAMES ─── */
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.75)}}
@keyframes orbit{from{transform:rotate(0deg) translateX(28px) rotate(0deg)}to{transform:rotate(360deg) translateX(28px) rotate(-360deg)}}
@keyframes flowDash{to{stroke-dashoffset:-30}}
@keyframes drawPath{from{stroke-dashoffset:800}to{stroke-dashoffset:0}}
@keyframes shimmerX{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes scanLine{0%{top:0}100%{top:100%}}
@keyframes ping{0%{transform:scale(1);opacity:.8}80%,100%{transform:scale(2.4);opacity:0}}
@keyframes typeIn{from{width:0}to{width:100%}}
@keyframes blink{50%{opacity:0}}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

/* ─── HERO ─── */
.hero{padding:90px 0 64px;text-align:center;position:relative;overflow:hidden}
.hero-glow{position:absolute;top:-40px;left:50%;transform:translateX(-50%);width:600px;height:300px;
  background:radial-gradient(ellipse,rgba(79,142,247,0.12) 0%,transparent 70%);pointer-events:none}

.hero-badge{display:inline-flex;align-items:center;gap:7px;
  background:rgba(79,142,247,0.08);border:1px solid rgba(79,142,247,0.22);
  border-radius:100px;padding:5px 16px;font-size:11.5px;font-family:var(--font-mono);
  color:var(--accent);letter-spacing:.05em;margin-bottom:32px;
  animation:fadeUp .55s ease both}
.hero-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--green);animation:pulse 2s ease-in-out infinite}

.hero-title{font-family:var(--font-head);font-size:clamp(52px,10vw,92px);font-weight:800;
  letter-spacing:-.035em;line-height:1.02;
  background:linear-gradient(145deg,#fff 0%,rgba(200,215,255,.75) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:fadeUp .6s .08s ease both}
.hero-title .hl{
  background:linear-gradient(135deg,var(--accent) 0%,var(--accent2) 50%,var(--pink) 100%);
  background-size:200% 200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:gradShift 4s ease-in-out infinite}
.hero-sub{font-size:17px;color:var(--muted);max-width:600px;margin:22px auto 0;
  font-weight:300;line-height:1.7;animation:fadeUp .6s .16s ease both}

/* pill badges */
.pill-row{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:34px 0;animation:fadeUp .6s .24s ease both}
.pill{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:6px;
  font-size:11px;font-family:var(--font-mono);border:1px solid transparent;
  transition:transform .18s,box-shadow .18s}
.pill:hover{transform:translateY(-2px);box-shadow:0 4px 18px rgba(0,0,0,.3)}
.p-k{background:rgba(139,92,246,.12);border-color:rgba(139,92,246,.28);color:#b48cfc}
.p-a{background:rgba(34,211,160,.1);border-color:rgba(34,211,160,.25);color:var(--green)}
.p-f{background:rgba(251,191,36,.1);border-color:rgba(251,191,36,.25);color:var(--yellow)}
.p-s{background:rgba(56,189,248,.1);border-color:rgba(56,189,248,.25);color:var(--teal)}
.p-h{background:rgba(244,63,94,.1);border-color:rgba(244,63,94,.25);color:var(--red)}
.p-b{background:rgba(79,142,247,.1);border-color:rgba(79,142,247,.25);color:var(--accent)}
.p-w{background:rgba(232,121,249,.1);border-color:rgba(232,121,249,.25);color:var(--pink)}

/* ─── SECTION ─── */
.sec{padding:72px 0;border-top:1px solid var(--border)}
.sec-tag{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;color:var(--accent);
  text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.sec-tag::before{content:'';width:18px;height:1px;background:var(--accent)}
h2{font-family:var(--font-head);font-size:clamp(24px,4.5vw,38px);font-weight:700;
  letter-spacing:-.025em;color:#fff;margin-bottom:8px}
.sec-sub{color:var(--muted);font-size:14.5px;max-width:560px;margin-bottom:42px;line-height:1.65}

/* ─── CARD WRAPPER ─── */
.card-wrap{background:var(--card);border:1px solid var(--border);border-radius:var(--r2);
  padding:32px 28px;position:relative;overflow:hidden}
.card-wrap::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent 0%,var(--accent) 30%,var(--accent2) 70%,transparent 100%);
  opacity:.45}

/* ─── STATS ─── */
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:14px;margin:40px 0}
.stat{background:var(--card);border:1px solid var(--border);border-radius:var(--r);
  padding:22px 18px;text-align:center;transition:border-color .22s,transform .22s;cursor:default}
.stat:hover{border-color:var(--border2);transform:translateY(-3px)}
.stat-n{font-family:var(--font-head);font-size:38px;font-weight:800;letter-spacing:-.03em;
  line-height:1;margin-bottom:6px}
.stat-n.g{background:linear-gradient(135deg,var(--green),#0fa372);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-n.b{background:linear-gradient(135deg,var(--accent),#2563c8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-n.p{background:linear-gradient(135deg,#b48cfc,var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-n.o{background:linear-gradient(135deg,var(--orange),#e07320);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-n.t{background:linear-gradient(135deg,var(--teal),#0ea5e9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-l{font-size:11.5px;color:var(--muted);font-weight:400;line-height:1.45}

/* ─── MODULES GRID ─── */
.mods{display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:14px;margin-top:32px}
.mod{background:var(--card);border:1px solid var(--border);border-radius:var(--r);
  padding:20px 18px;position:relative;overflow:hidden;
  transition:border-color .22s,transform .22s}
.mod::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;opacity:0;transition:opacity .22s}
.mod:hover{border-color:var(--border2);transform:translateY(-2px)}
.mod:hover::after{opacity:1}
.m1::after{background:linear-gradient(90deg,var(--red),var(--orange))}
.m2::after{background:linear-gradient(90deg,var(--accent2),var(--pink))}
.m3::after{background:linear-gradient(90deg,var(--teal),var(--green))}
.m4::after{background:linear-gradient(90deg,var(--yellow),var(--orange))}
.m5::after{background:linear-gradient(90deg,var(--green),var(--teal))}
.m6::after{background:linear-gradient(90deg,var(--red),var(--pink))}
.m7::after{background:linear-gradient(90deg,var(--accent),var(--teal))}
.m8::after{background:linear-gradient(90deg,var(--orange),var(--yellow))}
.m9::after{background:linear-gradient(90deg,#b48cfc,var(--accent))}
.m10::after{background:linear-gradient(90deg,var(--green),#4ade80)}
.m11::after{background:linear-gradient(90deg,var(--pink),var(--accent2))}
.m12::after{background:linear-gradient(90deg,var(--teal),var(--accent))}
.mod-ico{font-size:25px;margin-bottom:11px;display:block}
.mod-name{font-family:var(--font-head);font-size:14.5px;font-weight:700;color:#fff;margin-bottom:5px}
.mod-desc{font-size:12.5px;color:var(--muted);line-height:1.58}

/* ─── SVG ─── */
.svg-wrap{width:100%;overflow-x:auto;border-radius:var(--r)}
.svg-wrap svg{min-width:680px;display:block}

/* ─── STACK ─── */
.stack{display:grid;grid-template-columns:repeat(auto-fill,minmax(195px,1fr));gap:10px;margin-top:28px}
.st-row{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:13px 15px}
.st-lbl{font-family:var(--font-mono);font-size:10.5px;color:var(--accent);letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px}
.st-tags{display:flex;flex-wrap:wrap;gap:5px}
.st-tag{background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:4px;
  padding:2px 7px;font-size:11.5px;color:var(--text);font-family:var(--font-mono)}

/* ─── CODE ─── */
.code{background:rgba(0,0,0,.45);border:1px solid var(--border);border-radius:var(--r);
  padding:18px 20px;font-family:var(--font-mono);font-size:12.5px;line-height:1.75;
  overflow-x:auto;margin:14px 0;position:relative}
.code::before{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.025),transparent);
  animation:shimmerX 3s ease-in-out infinite}
.cc{color:#3d4a62}.ck{color:var(--accent)}.cv{color:var(--green)}.cs{color:var(--yellow)}.co{color:var(--muted)}

/* ─── TREE ─── */
.tree{font-family:var(--font-mono);font-size:12.5px;line-height:2;color:var(--muted);
  background:rgba(0,0,0,.35);border:1px solid var(--border);border-radius:var(--r);
  padding:20px 22px;overflow-x:auto}
.td{color:var(--accent)}.tf{color:var(--text)}.tm{color:#2d3a52;font-size:11px}

/* ─── API TABLE ─── */
.tbl{width:100%;border-collapse:collapse;margin-top:22px;font-size:13px}
.tbl th{text-align:left;padding:9px 13px;font-family:var(--font-mono);font-size:10.5px;
  letter-spacing:.06em;color:var(--muted);text-transform:uppercase;border-bottom:1px solid var(--border)}
.tbl td{padding:10px 13px;border-bottom:1px solid var(--border);vertical-align:middle}
.tbl tr:last-child td{border-bottom:none}
.tbl tr:hover td{background:rgba(255,255,255,.02)}
.mth{font-family:var(--font-mono);font-size:10.5px;font-weight:500;padding:2px 7px;border-radius:4px;border:1px solid transparent}
.get{background:rgba(34,211,160,.1);color:var(--green);border-color:rgba(34,211,160,.25)}
.post{background:rgba(79,142,247,.1);color:var(--accent);border-color:rgba(79,142,247,.25)}
.patch{background:rgba(251,191,36,.1);color:var(--yellow);border-color:rgba(251,191,36,.25)}
.ep{font-family:var(--font-mono);font-size:12px}

/* ─── STEPS ─── */
.steps{display:grid;gap:11px;margin-top:22px}
.step{display:grid;grid-template-columns:38px 1fr;gap:14px;align-items:start;
  background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:15px 17px}
.snum{width:38px;height:38px;background:rgba(79,142,247,.12);border:1px solid rgba(79,142,247,.25);
  border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-family:var(--font-mono);font-size:12.5px;color:var(--accent);flex-shrink:0}
.sc h4{font-family:var(--font-head);font-size:14px;font-weight:600;color:#fff;margin-bottom:7px}

/* ─── NATIONS ─── */
.nations{display:grid;grid-template-columns:repeat(auto-fill,minmax(195px,1fr));gap:10px;margin-top:22px}
.nat{background:var(--card);border:1px solid var(--border);border-radius:var(--r);
  padding:14px 16px;display:flex;align-items:center;gap:11px;transition:border-color .2s,transform .2s}
.nat:hover{border-color:var(--border2);transform:translateX(3px)}
.nf{font-size:27px;flex-shrink:0}
.ni h4{font-family:var(--font-head);font-size:13.5px;font-weight:600;color:#fff;margin-bottom:2px}
.ni p{font-size:11.5px;color:var(--muted);font-family:var(--font-mono)}

/* ─── SCROLL ANIM ─── */
.aos{opacity:0;transform:translateY(22px);transition:opacity .52s ease,transform .52s ease}
.aos.in{opacity:1;transform:translateY(0)}

/* ─── DASHBOARD CALLOUT ─── */
.callout{background:linear-gradient(135deg,rgba(79,142,247,.07) 0%,rgba(139,92,246,.07) 100%);
  border:1px solid rgba(79,142,247,.18);border-radius:var(--r2);padding:28px 26px;
  margin-top:32px;position:relative;overflow:hidden}
.callout::before{content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(79,142,247,.04),rgba(139,92,246,.04));
  border-radius:inherit}
.callout-head{font-family:var(--font-head);font-size:18px;font-weight:700;color:#fff;margin-bottom:10px;
  display:flex;align-items:center;gap:9px}
.callout-body{color:var(--muted);font-size:13.5px;line-height:1.68;position:relative}

/* ─── WATCH CALLOUT ─── */
.watch-box{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px}
@media(max-width:580px){.watch-box{grid-template-columns:1fr}}
.wc{background:var(--card2);border:1px solid var(--border);border-radius:var(--r);
  padding:16px 18px;position:relative;overflow:hidden}
.wc::before{content:'';position:absolute;top:0;left:0;bottom:0;width:2px;
  background:var(--grad)}
.wc[data-g="blue"]::before{background:linear-gradient(180deg,var(--accent),var(--teal))}
.wc[data-g="pink"]::before{background:linear-gradient(180deg,var(--pink),var(--accent2))}
.wc[data-g="green"]::before{background:linear-gradient(180deg,var(--green),var(--teal))}
.wc[data-g="orange"]::before{background:linear-gradient(180deg,var(--orange),var(--yellow))}
.wc-head{font-family:var(--font-head);font-size:14px;font-weight:600;color:#fff;
  margin-bottom:6px;display:flex;align-items:center;gap:7px}
.wc-body{font-size:12.5px;color:var(--muted);line-height:1.6}

/* ─── FOOTER ─── */
.footer{border-top:1px solid var(--border);padding:52px 0 38px;text-align:center}
.ft{font-family:var(--font-head);font-size:24px;font-weight:800;
  background:linear-gradient(135deg,#fff,rgba(180,200,255,.7));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  margin-bottom:8px}
.fs{color:var(--muted);font-size:13px}
.fl{display:flex;gap:24px;justify-content:center;margin-top:28px;flex-wrap:wrap}
.fl a{font-size:12.5px;color:var(--muted);text-decoration:none;font-family:var(--font-mono);transition:color .2s}
.fl a:hover{color:var(--accent)}

/* ─── SVG ANIM HELPERS ─── */
.flow-line{stroke-dasharray:6 4;animation:flowDash .9s linear infinite}
.draw-path{stroke-dasharray:800;animation:drawPath 2s ease forwards}

/* ─── PLATFORM ECOSYSTEM SECTION ─── */
.platform-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px}
@media(max-width:620px){.platform-grid{grid-template-columns:1fr 1fr}}
.pg{background:var(--card);border:1px solid var(--border);border-radius:var(--r);
  padding:18px 16px;text-align:center;transition:border-color .22s,transform .22s}
.pg:hover{border-color:var(--border2);transform:translateY(-3px)}
.pg-ico{font-size:30px;margin-bottom:10px;display:block}
.pg-name{font-family:var(--font-head);font-size:13.5px;font-weight:700;color:#fff;margin-bottom:4px}
.pg-desc{font-size:11.5px;color:var(--muted);line-height:1.5}
</style>
</head>
<body>

<!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
<div class="hero">
  <div class="hero-glow"></div>
  <div class="wrap">
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      v1.0.0 · Smart City Platform · Bhopal / Indore · India
    </div>

    <h1 class="hero-title">Nagar<span class="hl">Setu</span></h1>
    <p class="hero-sub">
      A unified civic-tech platform bridging citizens and city services — Android app, Admin Command Center, and Wear OS integration — from emergency SOS to EV charging, AI challan bots to eco-routing, all powered by Gemini AI.
    </p>

    <div class="pill-row">
      <span class="pill p-k">Kotlin</span>
      <span class="pill p-a">Jetpack Compose</span>
      <span class="pill p-f">Firebase</span>
      <span class="pill p-s">Supabase</span>
      <span class="pill p-h">Hilt DI</span>
      <span class="pill p-b">MVVM · Clean Arch</span>
      <span class="pill p-k">Coroutines · Flow</span>
      <span class="pill p-s">OSRM · GTFS</span>
      <span class="pill p-f">Gemini Flash</span>
      <span class="pill p-w">Wear OS</span>
      <span class="pill p-h">Twilio OTP</span>
      <span class="pill p-b">Socket.IO Dashboard</span>
      <span class="pill p-a">MIT License</span>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ IMPACT STATS ═══════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Impact</div>
    <h2>Built for real civic challenges</h2>
    <p class="sec-sub">218 Kotlin source files, 13 independent modules, 3 deployment targets — all serving Bhopal & Indore citizens with AI-powered intelligence.</p>

    <div class="stats-grid">
      <div class="stat"><div class="stat-n g">13+</div><div class="stat-l">Independent Gradle modules in clean architecture</div></div>
      <div class="stat"><div class="stat-n b">218</div><div class="stat-l">Kotlin source files across frontend & backend</div></div>
      <div class="stat"><div class="stat-n p">7</div><div class="stat-l">BIMSTEC nations with verified traffic violation data</div></div>
      <div class="stat"><div class="stat-n o">4×</div><div class="stat-l">Repeat-offence penalty multiplier in DriveLegal</div></div>
      <div class="stat"><div class="stat-n t">6</div><div class="stat-l">Built-in colour themes, persisted via DataStore</div></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ PLATFORM ECOSYSTEM ════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Platform</div>
    <h2>Three deployment targets</h2>
    <p class="sec-sub">NagarSetu is not just an app — it's a full civic ecosystem spanning Android, Web, and Wrist.</p>

    <div class="platform-grid">
      <div class="pg">
        <span class="pg-ico">📱</span>
        <div class="pg-name">Android App</div>
        <div class="pg-desc">Kotlin + Jetpack Compose. 13 modules, 6 themes, AI FAB on every screen. Citizens' primary interface.</div>
      </div>
      <div class="pg">
        <span class="pg-ico">🖥️</span>
        <div class="pg-name">Admin Dashboard</div>
        <div class="pg-desc">Node.js + Socket.IO PWA. Real-time SOS monitoring, Leaflet map, ward analytics, AI verifier, C++ risk engine.</div>
      </div>
      <div class="pg">
        <span class="pg-ico">⌚</span>
        <div class="pg-name">Wear OS Companion</div>
        <div class="pg-desc">WatchSosManager via Wearable Data Layer API. Wrist-tap SOS, heart-rate monitoring, haptic confirmation.</div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ SYSTEM FLOW DIAGRAM ═══════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Architecture</div>
    <h2>Full system flow</h2>
    <p class="sec-sub">How a citizen action flows from device to cloud, through the AI layer, and back to the municipal command centre.</p>

    <div class="card-wrap">
      <div class="svg-wrap">
        <svg viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg" style="min-width:680px">
          <defs>
            <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
              <path d="M2 1.5L7.5 5L2 8.5" fill="none" stroke="context-stroke" stroke-width="1.6" stroke-linecap="round"/>
            </marker>
            <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>

          <!-- ── LAYER LABELS ── -->
          <text x="12" y="64" fill="rgba(79,142,247,.55)" font-family="JetBrains Mono" font-size="9" letter-spacing=".1em">DEVICES</text>
          <text x="12" y="192" fill="rgba(34,211,160,.55)" font-family="JetBrains Mono" font-size="9" letter-spacing=".1em">AI CORE</text>
          <text x="12" y="322" fill="rgba(139,92,246,.55)" font-family="JetBrains Mono" font-size="9" letter-spacing=".1em">DATA INFRA</text>
          <text x="12" y="452" fill="rgba(251,191,36,.55)" font-family="JetBrains Mono" font-size="9" letter-spacing=".1em">COMMAND</text>

          <!-- ── ROW 1: DEVICES ── -->
          <rect x="62" y="30" width="706" height="82" rx="10" fill="rgba(79,142,247,.04)" stroke="rgba(79,142,247,.14)" stroke-width=".7"/>

          <!-- Android App -->
          <rect x="78" y="42" width="120" height="58" rx="7" fill="rgba(79,142,247,.1)" stroke="rgba(79,142,247,.3)" stroke-width=".7"/>
          <text x="138" y="65" text-anchor="middle" fill="#93b8f8" font-size="11" font-family="DM Sans" font-weight="600">📱 Android</text>
          <text x="138" y="80" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Compose · MVVM</text>
          <text x="138" y="92" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Clean Architecture</text>

          <!-- Wear OS -->
          <rect x="214" y="42" width="110" height="58" rx="7" fill="rgba(232,121,249,.08)" stroke="rgba(232,121,249,.28)" stroke-width=".7"/>
          <text x="269" y="65" text-anchor="middle" fill="#f0acf7" font-size="11" font-family="DM Sans" font-weight="600">⌚ Wear OS</text>
          <text x="269" y="80" text-anchor="middle" fill="#e879f9" font-size="9.5" font-family="DM Sans">WatchSosManager</text>
          <text x="269" y="92" text-anchor="middle" fill="#e879f9" font-size="9.5" font-family="DM Sans">Heartbeat · SOS</text>

          <!-- PWA Dashboard -->
          <rect x="340" y="42" width="120" height="58" rx="7" fill="rgba(34,211,160,.08)" stroke="rgba(34,211,160,.25)" stroke-width=".7"/>
          <text x="400" y="65" text-anchor="middle" fill="#7eecd4" font-size="11" font-family="DM Sans" font-weight="600">🖥️ Admin PWA</text>
          <text x="400" y="80" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">Node.js · Socket.IO</text>
          <text x="400" y="92" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">Leaflet · Chart.js</text>

          <!-- Citizen Browser -->
          <rect x="476" y="42" width="110" height="58" rx="7" fill="rgba(251,191,36,.08)" stroke="rgba(251,191,36,.22)" stroke-width=".7"/>
          <text x="531" y="65" text-anchor="middle" fill="#fde68a" font-size="11" font-family="DM Sans" font-weight="600">🌐 Reports</text>
          <text x="531" y="80" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-family="DM Sans">GPS-tagged Issues</text>
          <text x="531" y="92" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-family="DM Sans">Community Voting</text>

          <!-- Emergency -->
          <rect x="602" y="42" width="120" height="58" rx="7" fill="rgba(244,63,94,.08)" stroke="rgba(244,63,94,.25)" stroke-width=".7"/>
          <text x="662" y="65" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="DM Sans" font-weight="600">🚨 SOS Trigger</text>
          <text x="662" y="80" text-anchor="middle" fill="#f43f5e" font-size="9.5" font-family="DM Sans">Shake Detect · GPS</text>
          <text x="662" y="92" text-anchor="middle" fill="#f43f5e" font-size="9.5" font-family="DM Sans">Twilio SMS · FCM</text>

          <!-- down arrows row1→row2 -->
          <line x1="250" y1="100" x2="250" y2="158" stroke="rgba(79,142,247,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>
          <line x1="400" y1="100" x2="400" y2="158" stroke="rgba(34,211,160,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>
          <line x1="540" y1="100" x2="540" y2="158" stroke="rgba(244,63,94,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>

          <!-- ── ROW 2: AI CORE ── -->
          <rect x="62" y="162" width="706" height="82" rx="10" fill="rgba(34,211,160,.04)" stroke="rgba(34,211,160,.13)" stroke-width=".7"/>

          <!-- NagarSetu AI -->
          <rect x="78" y="174" width="140" height="58" rx="7" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.25)" stroke-width=".7"/>
          <text x="148" y="197" text-anchor="middle" fill="#7eecd4" font-size="11" font-family="DM Sans" font-weight="600">🤖 NagarSetu AI</text>
          <text x="148" y="211" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">TF-IDF Intent Engine</text>
          <text x="148" y="223" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">CivicIntent · RAG</text>

          <!-- Gemini Flash -->
          <rect x="232" y="174" width="120" height="58" rx="7" fill="rgba(251,191,36,.08)" stroke="rgba(251,191,36,.22)" stroke-width=".7"/>
          <text x="292" y="197" text-anchor="middle" fill="#fde68a" font-size="11" font-family="DM Sans" font-weight="600">✨ Gemini Flash</text>
          <text x="292" y="211" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-family="DM Sans">Complex query LLM</text>
          <text x="292" y="223" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-family="DM Sans">conf &lt; 0.55 escalate</text>

          <!-- Triage Engine -->
          <rect x="366" y="174" width="120" height="58" rx="7" fill="rgba(244,63,94,.08)" stroke="rgba(244,63,94,.22)" stroke-width=".7"/>
          <text x="426" y="197" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="DM Sans" font-weight="600">🏥 Triage Engine</text>
          <text x="426" y="211" text-anchor="middle" fill="#f43f5e" font-size="9.5" font-family="DM Sans">Golden-hour AI</text>
          <text x="426" y="223" text-anchor="middle" fill="#f43f5e" font-size="9.5" font-family="DM Sans">Emergency dispatch</text>

          <!-- DriveLegal Bot -->
          <rect x="500" y="174" width="120" height="58" rx="7" fill="rgba(139,92,246,.09)" stroke="rgba(139,92,246,.25)" stroke-width=".7"/>
          <text x="560" y="197" text-anchor="middle" fill="#c4b5fd" font-size="11" font-family="DM Sans" font-weight="600">⚖️ DriveLegal Bot</text>
          <text x="560" y="211" text-anchor="middle" fill="#8b5cf6" font-size="9.5" font-family="DM Sans">154 violations × 7 nations</text>
          <text x="560" y="223" text-anchor="middle" fill="#8b5cf6" font-size="9.5" font-family="DM Sans">Hinglish support</text>

          <!-- Predictive / RAG -->
          <rect x="634" y="174" width="118" height="58" rx="7" fill="rgba(56,189,248,.08)" stroke="rgba(56,189,248,.22)" stroke-width=".7"/>
          <text x="693" y="197" text-anchor="middle" fill="#93d8f8" font-size="11" font-family="DM Sans" font-weight="600">🔮 Predictive AI</text>
          <text x="693" y="211" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-family="DM Sans">Flood · Crime · Risk</text>
          <text x="693" y="223" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-family="DM Sans">RAG query box</text>

          <!-- down arrows row2→row3 -->
          <line x1="250" y1="242" x2="250" y2="290" stroke="rgba(34,211,160,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>
          <line x1="450" y1="242" x2="450" y2="290" stroke="rgba(244,63,94,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>
          <line x1="650" y1="242" x2="650" y2="290" stroke="rgba(56,189,248,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>

          <!-- ── ROW 3: DATA INFRA ── -->
          <rect x="62" y="294" width="706" height="82" rx="10" fill="rgba(139,92,246,.04)" stroke="rgba(139,92,246,.13)" stroke-width=".7"/>

          <rect x="78" y="306" width="110" height="58" rx="7" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.25)" stroke-width=".7"/>
          <text x="133" y="328" text-anchor="middle" fill="#c4b5fd" font-size="11" font-family="DM Sans" font-weight="600">Supabase</text>
          <text x="133" y="342" text-anchor="middle" fill="#8b5cf6" font-size="9.5" font-family="DM Sans">Auth · DB · RT</text>
          <text x="133" y="354" text-anchor="middle" fill="#8b5cf6" font-size="9.5" font-family="DM Sans">PostgreSQL</text>

          <rect x="200" y="306" width="110" height="58" rx="7" fill="rgba(251,191,36,.08)" stroke="rgba(251,191,36,.22)" stroke-width=".7"/>
          <text x="255" y="328" text-anchor="middle" fill="#fde68a" font-size="11" font-family="DM Sans" font-weight="600">Firebase</text>
          <text x="255" y="342" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-family="DM Sans">RTDB · FCM</text>
          <text x="255" y="354" text-anchor="middle" fill="#fbbf24" font-size="9.5" font-family="DM Sans">Auth · Analytics</text>

          <rect x="322" y="306" width="110" height="58" rx="7" fill="rgba(34,211,160,.08)" stroke="rgba(34,211,160,.22)" stroke-width=".7"/>
          <text x="377" y="328" text-anchor="middle" fill="#7eecd4" font-size="11" font-family="DM Sans" font-weight="600">Room / DS</text>
          <text x="377" y="342" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">Local cache</text>
          <text x="377" y="354" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">DataStore prefs</text>

          <rect x="444" y="306" width="110" height="58" rx="7" fill="rgba(56,189,248,.08)" stroke="rgba(56,189,248,.22)" stroke-width=".7"/>
          <text x="499" y="328" text-anchor="middle" fill="#93d8f8" font-size="11" font-family="DM Sans" font-weight="600">OSM / OSRM</text>
          <text x="499" y="342" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-family="DM Sans">Eco routing</text>
          <text x="499" y="354" text-anchor="middle" fill="#38bdf8" font-size="9.5" font-family="DM Sans">GTFS · Overpass</text>

          <rect x="566" y="306" width="110" height="58" rx="7" fill="rgba(79,142,247,.08)" stroke="rgba(79,142,247,.22)" stroke-width=".7"/>
          <text x="621" y="328" text-anchor="middle" fill="#93b8f8" font-size="11" font-family="DM Sans" font-weight="600">Retrofit / OkHttp</text>
          <text x="621" y="342" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">REST APIs</text>
          <text x="621" y="354" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Twilio · OCM</text>

          <!-- down arrows row3→row4 -->
          <line x1="300" y1="376" x2="300" y2="422" stroke="rgba(139,92,246,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>
          <line x1="530" y1="376" x2="530" y2="422" stroke="rgba(79,142,247,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>

          <!-- ── ROW 4: COMMAND ── -->
          <rect x="62" y="426" width="706" height="52" rx="10" fill="rgba(251,191,36,.04)" stroke="rgba(251,191,36,.13)" stroke-width=".7"/>
          <text x="415" y="446" text-anchor="middle" fill="#fde68a" font-family="JetBrains Mono" font-size="9" letter-spacing=".07em">ADMIN DASHBOARD</text>
          <text x="415" y="462" text-anchor="middle" fill="rgba(251,191,36,.5)" font-family="DM Sans" font-size="9.5">
            Live SOS Monitor  ·  Ward Heatmap  ·  Incident AI Verifier  ·  C++ Risk Engine  ·  Socket.IO Push  ·  PWA Offline
          </text>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ ANDROID APP ARCHITECTURE ══════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Android Architecture</div>
    <h2>Clean Architecture layers</h2>
    <p class="sec-sub">Every feature module follows UI → ViewModel → UseCase → Repository → Data Source with Hilt wiring throughout.</p>

    <div class="card-wrap">
      <div class="svg-wrap">
        <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
          <!-- ── UI Layer ── -->
          <rect x="62" y="20" width="700" height="72" rx="9" fill="rgba(79,142,247,.05)" stroke="rgba(79,142,247,.16)" stroke-width=".7"/>
          <text x="75" y="38" fill="rgba(79,142,247,.6)" font-family="JetBrains Mono" font-size="8.5" letter-spacing=".08em">UI LAYER — Jetpack Compose Screens</text>

          <rect x="78" y="44" width="88" height="38" rx="6" fill="rgba(79,142,247,.12)" stroke="rgba(79,142,247,.3)" stroke-width=".65"/>
          <text x="122" y="63" text-anchor="middle" fill="#93b8f8" font-size="9.5" font-family="DM Sans" font-weight="600">HomeScreen</text>
          <text x="122" y="74" text-anchor="middle" fill="#4f8ef7" font-size="8.5" font-family="DM Sans">Navigation</text>

          <rect x="178" y="44" width="88" height="38" rx="6" fill="rgba(79,142,247,.12)" stroke="rgba(79,142,247,.3)" stroke-width=".65"/>
          <text x="222" y="63" text-anchor="middle" fill="#93b8f8" font-size="9.5" font-family="DM Sans" font-weight="600">RakshaScreen</text>
          <text x="222" y="74" text-anchor="middle" fill="#4f8ef7" font-size="8.5" font-family="DM Sans">SOS · Watch</text>

          <rect x="278" y="44" width="88" height="38" rx="6" fill="rgba(79,142,247,.12)" stroke="rgba(79,142,247,.3)" stroke-width=".65"/>
          <text x="322" y="63" text-anchor="middle" fill="#93b8f8" font-size="9.5" font-family="DM Sans" font-weight="600">DriveScreen</text>
          <text x="322" y="74" text-anchor="middle" fill="#4f8ef7" font-size="8.5" font-family="DM Sans">Challan Bot</text>

          <rect x="378" y="44" width="88" height="38" rx="6" fill="rgba(79,142,247,.12)" stroke="rgba(79,142,247,.3)" stroke-width=".65"/>
          <text x="422" y="63" text-anchor="middle" fill="#93b8f8" font-size="9.5" font-family="DM Sans" font-weight="600">GreenRoute</text>
          <text x="422" y="74" text-anchor="middle" fill="#4f8ef7" font-size="8.5" font-family="DM Sans">OSRM Map</text>

          <rect x="478" y="44" width="88" height="38" rx="6" fill="rgba(79,142,247,.12)" stroke="rgba(79,142,247,.3)" stroke-width=".65"/>
          <text x="522" y="63" text-anchor="middle" fill="#93b8f8" font-size="9.5" font-family="DM Sans" font-weight="600">ChargeUp</text>
          <text x="522" y="74" text-anchor="middle" fill="#4f8ef7" font-size="8.5" font-family="DM Sans">EV Stations</text>

          <rect x="578" y="44" width="88" height="38" rx="6" fill="rgba(79,142,247,.12)" stroke="rgba(79,142,247,.3)" stroke-width=".65"/>
          <text x="622" y="63" text-anchor="middle" fill="#93b8f8" font-size="9.5" font-family="DM Sans" font-weight="600">Assistant</text>
          <text x="622" y="74" text-anchor="middle" fill="#4f8ef7" font-size="8.5" font-family="DM Sans">AI Chat FAB</text>

          <!-- UI → Domain arrow -->
          <line x1="392" y1="92" x2="392" y2="128" stroke="rgba(79,142,247,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>

          <!-- ── Domain Layer ── -->
          <rect x="62" y="132" width="700" height="72" rx="9" fill="rgba(34,211,160,.04)" stroke="rgba(34,211,160,.14)" stroke-width=".7"/>
          <text x="75" y="150" fill="rgba(34,211,160,.6)" font-family="JetBrains Mono" font-size="8.5" letter-spacing=".08em">DOMAIN LAYER — ViewModels · UseCases · Repository Interfaces</text>

          <rect x="78" y="156" width="108" height="38" rx="6" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.22)" stroke-width=".65"/>
          <text x="132" y="175" text-anchor="middle" fill="#7eecd4" font-size="9.5" font-family="DM Sans" font-weight="600">ViewModels</text>
          <text x="132" y="186" text-anchor="middle" fill="#22d3a0" font-size="8.5" font-family="DM Sans">StateFlow</text>

          <rect x="198" y="156" width="108" height="38" rx="6" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.22)" stroke-width=".65"/>
          <text x="252" y="175" text-anchor="middle" fill="#7eecd4" font-size="9.5" font-family="DM Sans" font-weight="600">UseCases</text>
          <text x="252" y="186" text-anchor="middle" fill="#22d3a0" font-size="8.5" font-family="DM Sans">Business logic</text>

          <rect x="318" y="156" width="108" height="38" rx="6" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.22)" stroke-width=".65"/>
          <text x="372" y="175" text-anchor="middle" fill="#7eecd4" font-size="9.5" font-family="DM Sans" font-weight="600">Repositories</text>
          <text x="372" y="186" text-anchor="middle" fill="#22d3a0" font-size="8.5" font-family="DM Sans">Interfaces</text>

          <rect x="438" y="156" width="108" height="38" rx="6" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.22)" stroke-width=".65"/>
          <text x="492" y="175" text-anchor="middle" fill="#7eecd4" font-size="9.5" font-family="DM Sans" font-weight="600">Domain Models</text>
          <text x="492" y="186" text-anchor="middle" fill="#22d3a0" font-size="8.5" font-family="DM Sans">Entities</text>

          <rect x="558" y="156" width="138" height="38" rx="6" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.22)" stroke-width=".65"/>
          <text x="627" y="175" text-anchor="middle" fill="#7eecd4" font-size="9.5" font-family="DM Sans" font-weight="600">Hilt DI</text>
          <text x="627" y="186" text-anchor="middle" fill="#22d3a0" font-size="8.5" font-family="DM Sans">Dependency Injection</text>

          <!-- Domain → Data arrow -->
          <line x1="392" y1="204" x2="392" y2="240" stroke="rgba(34,211,160,.3)" stroke-width="1" marker-end="url(#a1)" stroke-dasharray="5 3"/>

          <!-- ── Data Layer ── -->
          <rect x="62" y="244" width="700" height="72" rx="9" fill="rgba(139,92,246,.04)" stroke="rgba(139,92,246,.14)" stroke-width=".7"/>
          <text x="75" y="262" fill="rgba(139,92,246,.6)" font-family="JetBrains Mono" font-size="8.5" letter-spacing=".08em">DATA LAYER — Repository Implementations · Remote · Local</text>

          <rect x="78" y="268" width="108" height="38" rx="6" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.25)" stroke-width=".65"/>
          <text x="132" y="287" text-anchor="middle" fill="#c4b5fd" font-size="9.5" font-family="DM Sans" font-weight="600">Supabase</text>
          <text x="132" y="298" text-anchor="middle" fill="#8b5cf6" font-size="8.5" font-family="DM Sans">Auth + DB</text>

          <rect x="198" y="268" width="108" height="38" rx="6" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.25)" stroke-width=".65"/>
          <text x="252" y="287" text-anchor="middle" fill="#c4b5fd" font-size="9.5" font-family="DM Sans" font-weight="600">Firebase</text>
          <text x="252" y="298" text-anchor="middle" fill="#8b5cf6" font-size="8.5" font-family="DM Sans">RTDB · FCM</text>

          <rect x="318" y="268" width="108" height="38" rx="6" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.25)" stroke-width=".65"/>
          <text x="372" y="287" text-anchor="middle" fill="#c4b5fd" font-size="9.5" font-family="DM Sans" font-weight="600">Retrofit</text>
          <text x="372" y="298" text-anchor="middle" fill="#8b5cf6" font-size="8.5" font-family="DM Sans">REST · OkHttp</text>

          <rect x="438" y="268" width="108" height="38" rx="6" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.25)" stroke-width=".65"/>
          <text x="492" y="287" text-anchor="middle" fill="#c4b5fd" font-size="9.5" font-family="DM Sans" font-weight="600">Room</text>
          <text x="492" y="298" text-anchor="middle" fill="#8b5cf6" font-size="8.5" font-family="DM Sans">Local cache</text>

          <rect x="558" y="268" width="138" height="38" rx="6" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.25)" stroke-width=".65"/>
          <text x="627" y="287" text-anchor="middle" fill="#c4b5fd" font-size="9.5" font-family="DM Sans" font-weight="600">Twilio · Gemini</text>
          <text x="627" y="298" text-anchor="middle" fill="#8b5cf6" font-size="8.5" font-family="DM Sans">OTP · AI LLM</text>

          <!-- Infra strip -->
          <rect x="62" y="330" width="700" height="24" rx="7" fill="rgba(107,119,153,.05)" stroke="rgba(107,119,153,.18)" stroke-width=".7"/>
          <text x="412" y="346" text-anchor="middle" fill="rgba(107,119,153,.8)" font-family="JetBrains Mono" font-size="8.5">
            OSRM · GTFS · OpenStreetMap · OpenWeatherMap · Open Charge Map · Overpass API · WAQI AQI
          </text>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ AI PIPELINE ════════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">AI Pipeline</div>
    <h2>Intent → response flow</h2>
    <p class="sec-sub">Every civic query is classified, retrieved from a TF-IDF knowledge base, and escalated to Gemini Flash only when local confidence drops below threshold.</p>

    <div class="card-wrap">
      <div class="svg-wrap">
        <svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
          <!-- Step 1 -->
          <rect x="18" y="75" width="108" height="68" rx="8" fill="rgba(79,142,247,.1)" stroke="rgba(79,142,247,.3)" stroke-width=".7"/>
          <text x="72" y="99" text-anchor="middle" fill="#93b8f8" font-size="11" font-family="DM Sans" font-weight="600">User Query</text>
          <text x="72" y="113" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Natural language</text>
          <text x="72" y="125" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Hindi / Hinglish / EN</text>
          <text x="72" y="162" text-anchor="middle" fill="#3d4a62" font-size="8.5" font-family="JetBrains Mono">String input</text>

          <!-- Arrow 1→2 -->
          <line x1="126" y1="109" x2="150" y2="109" stroke="rgba(79,142,247,.45)" stroke-width="1.1" marker-end="url(#a1)" class="flow-line"/>

          <!-- Step 2 -->
          <rect x="150" y="75" width="118" height="68" rx="8" fill="rgba(139,92,246,.1)" stroke="rgba(139,92,246,.3)" stroke-width=".7"/>
          <text x="209" y="99" text-anchor="middle" fill="#c4b5fd" font-size="11" font-family="DM Sans" font-weight="600">Keyword Detect</text>
          <text x="209" y="113" text-anchor="middle" fill="#8b5cf6" font-size="9.5" font-family="DM Sans">Intent classifier</text>
          <text x="209" y="125" text-anchor="middle" fill="#8b5cf6" font-size="9.5" font-family="DM Sans">Normalise tokens</text>
          <text x="209" y="162" text-anchor="middle" fill="#3d4a62" font-size="8.5" font-family="JetBrains Mono">CivicIntent enum</text>

          <!-- Arrow 2→3 -->
          <line x1="268" y1="109" x2="292" y2="109" stroke="rgba(139,92,246,.45)" stroke-width="1.1" marker-end="url(#a1)" class="flow-line"/>

          <!-- Step 3 -->
          <rect x="292" y="75" width="118" height="68" rx="8" fill="rgba(34,211,160,.09)" stroke="rgba(34,211,160,.28)" stroke-width=".7"/>
          <text x="351" y="99" text-anchor="middle" fill="#7eecd4" font-size="11" font-family="DM Sans" font-weight="600">TF-IDF RAG</text>
          <text x="351" y="113" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">Knowledge search</text>
          <text x="351" y="125" text-anchor="middle" fill="#22d3a0" font-size="9.5" font-family="DM Sans">Cosine similarity</text>
          <text x="351" y="162" text-anchor="middle" fill="#3d4a62" font-size="8.5" font-family="JetBrains Mono">conf: Float</text>

          <!-- confidence fork -->
          <text x="432" y="68" text-anchor="middle" fill="#fb923c" font-size="9" font-family="JetBrains Mono">conf ≥ 0.55?</text>
          <line x1="410" y1="109" x2="434" y2="109" stroke="rgba(34,211,160,.4)" stroke-width="1.1" marker-end="url(#a1)"/>

          <!-- 4a: Direct answer (above) -->
          <rect x="434" y="52" width="118" height="46" rx="8" fill="rgba(34,211,160,.08)" stroke="rgba(34,211,160,.2)" stroke-width=".7"/>
          <text x="493" y="72" text-anchor="middle" fill="#7eecd4" font-size="10.5" font-family="DM Sans" font-weight="600">Direct Answer</text>
          <text x="493" y="85" text-anchor="middle" fill="#22d3a0" font-size="9" font-family="DM Sans">RAG match ✓ high conf</text>

          <!-- 4b: Gemini (below) -->
          <rect x="434" y="120" width="118" height="46" rx="8" fill="rgba(251,191,36,.08)" stroke="rgba(251,191,36,.2)" stroke-width=".7"/>
          <text x="493" y="140" text-anchor="middle" fill="#fde68a" font-size="10.5" font-family="DM Sans" font-weight="600">Gemini Flash</text>
          <text x="493" y="153" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="DM Sans">Escalated · cloud LLM</text>

          <!-- fork lines -->
          <line x1="434" y1="109" x2="434" y2="75" stroke="rgba(34,211,160,.25)" stroke-width=".8"/>
          <line x1="434" y1="109" x2="434" y2="143" stroke="rgba(251,191,36,.25)" stroke-width=".8"/>

          <!-- Arrows to response -->
          <line x1="552" y1="75" x2="574" y2="104" stroke="rgba(34,211,160,.4)" stroke-width="1.1" marker-end="url(#a1)"/>
          <line x1="552" y1="143" x2="574" y2="113" stroke="rgba(251,191,36,.4)" stroke-width="1.1" marker-end="url(#a1)"/>

          <!-- Step 5: Response -->
          <rect x="574" y="75" width="118" height="68" rx="8" fill="rgba(79,142,247,.1)" stroke="rgba(79,142,247,.3)" stroke-width=".7"/>
          <text x="633" y="99" text-anchor="middle" fill="#93b8f8" font-size="11" font-family="DM Sans" font-weight="600">AssistantReply</text>
          <text x="633" y="113" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Answer + route hint</text>
          <text x="633" y="125" text-anchor="middle" fill="#4f8ef7" font-size="9.5" font-family="DM Sans">Navigate suggestion</text>
          <text x="633" y="162" text-anchor="middle" fill="#3d4a62" font-size="8.5" font-family="JetBrains Mono">confidence: Float</text>

          <!-- Arrow to Room -->
          <line x1="692" y1="109" x2="716" y2="109" stroke="rgba(79,142,247,.4)" stroke-width="1.1" marker-end="url(#a1)" class="flow-line"/>

          <!-- Step 6: Room -->
          <rect x="716" y="75" width="70" height="68" rx="8" fill="rgba(56,189,248,.08)" stroke="rgba(56,189,248,.22)" stroke-width=".7"/>
          <text x="751" y="99" text-anchor="middle" fill="#93d8f8" font-size="10" font-family="DM Sans" font-weight="600">Room DB</text>
          <text x="751" y="112" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-family="DM Sans">Chat history</text>
          <text x="751" y="124" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-family="DM Sans">Persistent</text>
          <text x="751" y="136" text-anchor="middle" fill="#38bdf8" font-size="8.5" font-family="DM Sans">Messages</text>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ MODULES ════════════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Modules</div>
    <h2>13 independent components</h2>
    <p class="sec-sub">Each is a standalone Gradle module with its own data, domain, and DI layers. Frontend UI modules mirror backend logic modules.</p>

    <div class="mods">
      <div class="mod m1"><span class="mod-ico">🚨</span><div class="mod-name">Emergency AI</div><div class="mod-desc">Shake-to-SOS accelerometer detection, GPS broadcast to trusted contacts, Twilio emergency SMS, TriageEngine with golden-hour guidance.</div></div>
      <div class="mod m2"><span class="mod-ico">⚖️</span><div class="mod-name">DriveLegal</div><div class="mod-desc">154 verified violations × 7 BIMSTEC nations. TF-IDF chatbot, Hinglish support, repeat-offence multipliers (1× → 2× → 4×), MV Act citations.</div></div>
      <div class="mod m3"><span class="mod-ico">🗺️</span><div class="mod-name">RoadWatch</div><div class="mod-desc">GPS-tagged civic issue reporting — potholes, drains, streetlights. TFLite PotholeDetector, community upvoting, SLA breach alerts, heatmap view.</div></div>
      <div class="mod m4"><span class="mod-ico">🏛️</span><div class="mod-name">Dashboard</div><div class="mod-desc">Ward-level KPI analytics, HybridAlertBridge merging Firebase RT + local data into unified StateFlow, contractor accountability, CrisisManager.</div></div>
      <div class="mod m5"><span class="mod-ico">🌿</span><div class="mod-name">GreenRoute</div><div class="mod-desc">OSRM + GTFS multi-modal routing. CO₂-aware path scoring for cyclists, walkers, bus, and auto. Bhopal City Link Ltd data integration.</div></div>
      <div class="mod m6"><span class="mod-ico">🛡️</span><div class="mod-name">Raksha</div><div class="mod-desc">Women's safety — fake call trigger, trusted contact location sharing, shake-activated SOS beacon, Wear OS watch SOS via Wearable Data Layer API.</div></div>
      <div class="mod m7"><span class="mod-ico">⚡</span><div class="mod-name">ChargeUp</div><div class="mod-desc">EV station locator via Open Charge Map API. Real-time slot availability, SoC-aware trip planning, kWh pricing display, Bhopal radius.</div></div>
      <div class="mod m8"><span class="mod-ico">🅿️</span><div class="mod-name">ParkEase</div><div class="mod-desc">Smart parking — OSM lot locations + Supabase real-time slots, QR ticket generation, 30-min hold reservation, ₹/hr dynamic pricing.</div></div>
      <div class="mod m9"><span class="mod-ico">🔮</span><div class="mod-name">Predictive</div><div class="mod-desc">AI hazard forecasting — flood risk, crime hotspots, infrastructure risk. RAG query box with BimstecCard, ProactiveAlertCard, RiskGridMap.</div></div>
      <div class="mod m10"><span class="mod-ico">🏥</span><div class="mod-name">HealthWatch</div><div class="mod-desc">Telemedicine via Jitsi SDK, epidemic early-warning (dengue, malaria), nearby clinic finder via Overpass API, epidemic alert system.</div></div>
      <div class="mod m11"><span class="mod-ico">📊</span><div class="mod-name">Report It</div><div class="mod-desc">Citizen issue reporting from Dashboard → Report an Issue. Multi-media attachments, category tags, GPS auto-tagging, admin feed.</div></div>
      <div class="mod m12"><span class="mod-ico">🔥</span><div class="mod-name">Firebase Core</div><div class="mod-desc">FCM push, real-time GPS tracking to Firebase RTDB, NagarSetuAnalytics event tracking, FirebaseAuthManager, HybridAlertBridge.</div></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ ADMIN DASHBOARD ═══════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Admin Dashboard</div>
    <h2>Municipal Command Center</h2>
    <p class="sec-sub">A production-grade PWA built with Node.js, Express, Socket.IO, and Leaflet — with AI-powered incident verification and a C++ spatial risk engine.</p>

    <div class="callout">
      <div class="callout-head">🖥️ NagarSetu Admin v3 — PWA</div>
      <div class="callout-body">
        The admin dashboard is a standalone Node.js app that receives real-time events from the Android app via Socket.IO, processes them through an AI verifier (Python NLP) and risk engine (C++), and surfaces everything in a live operations interface with a Leaflet map centred on Indore (22.7196°N 75.8577°E).
      </div>
    </div>

    <div class="watch-box" style="margin-top:20px">
      <div class="wc" data-g="blue">
        <div class="wc-head">📡 Live SOS Monitor</div>
        <div class="wc-body">Real-time SOS cards with triage levels (CRITICAL / HIGH / MODERATE). Battery level, GPS coords, network type. One-click Acknowledge + Resolve with notes. Auto-alert creation on new SOS. Socket events: <code style="font-family:var(--font-mono);font-size:11px;background:rgba(255,255,255,.05);padding:1px 5px;border-radius:3px">new_sos · sos_location_update</code></div>
      </div>
      <div class="wc" data-g="green">
        <div class="wc-head">🗺️ Live Bhopal / Indore Map</div>
        <div class="wc-body">Leaflet.js with color-coded severity markers, SOS pulse-animated icons, ward overlay circles, mode switcher (Incidents / SOS Live / Risk Heat / All), emoji markers (🚧🌊💡⚠️), fly-to-ward dropdown, and a C++ heatmap overlay.</div>
      </div>
      <div class="wc" data-g="pink">
        <div class="wc-head">🤖 AI Incident Verifier</div>
        <div class="wc-body">Python NLP auto-verifier runs on every new incident. Auto-reject below threshold, auto-verify above. AI Score column with visual progress bar. Bulk verify / reject / assign with multi-select. Configurable threshold slider in Settings.</div>
      </div>
      <div class="wc" data-g="orange">
        <div class="wc-head">⚙️ C++ Risk Engine</div>
        <div class="wc-body">Spatial risk computation compiled from <code style="font-family:var(--font-mono);font-size:11px;background:rgba(255,255,255,.05);padding:1px 5px;border-radius:3px">cpp/risk_calculator.cpp</code>. Auto-refreshes every 5 min. JavaScript fallback when binary not compiled. Risk zone stats: total, critical, high zones.</div>
      </div>
    </div>

    <h3 style="font-family:var(--font-head);color:#fff;margin:36px 0 14px;font-size:18px;font-weight:700">Admin Socket.IO API</h3>

    <table class="tbl">
      <thead><tr><th>Event</th><th>Direction</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--green)">new_incident</td><td style="color:var(--muted)">Server→Admin</td><td style="color:var(--muted)">New incident arrived from Android</td></tr>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--green)">new_sos</td><td style="color:var(--muted)">Server→Admin</td><td style="color:var(--muted)">New SOS triggered by citizen</td></tr>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--green)">sos_location_update</td><td style="color:var(--muted)">Server→Admin</td><td style="color:var(--muted)">Live GPS ping from active SOS</td></tr>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--accent)">android_new_report</td><td style="color:var(--muted)">Android→Server</td><td style="color:var(--muted)">New report submitted from mobile app</td></tr>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--accent)">sos_ping</td><td style="color:var(--muted)">Android→Server</td><td style="color:var(--muted)">Live GPS coordinate update</td></tr>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--yellow)">civic_broadcast</td><td style="color:var(--muted)">Server→All</td><td style="color:var(--muted)">Area-wide alert from admin to all citizens</td></tr>
        <tr><td style="font-family:var(--font-mono);font-size:12px;color:var(--yellow)">broadcast_alert</td><td style="color:var(--muted)">Admin→Server</td><td style="color:var(--muted)">Admin sends ward-level emergency broadcast</td></tr>
      </tbody>
    </table>

    <h3 style="font-family:var(--font-head);color:#fff;margin:32px 0 14px;font-size:18px;font-weight:700">REST Endpoints</h3>
    <table class="tbl">
      <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td><span class="mth get">GET</span></td><td class="ep">/api/stats</td><td style="color:var(--muted)">Dashboard overview KPIs</td></tr>
        <tr><td><span class="mth post">POST</span></td><td class="ep">/api/sos</td><td style="color:var(--muted)">New SOS from Android (Raksha module)</td></tr>
        <tr><td><span class="mth patch">PATCH</span></td><td class="ep">/api/sos/:id/acknowledge</td><td style="color:var(--muted)">Acknowledge + notify citizen</td></tr>
        <tr><td><span class="mth get">GET</span></td><td class="ep">/api/incidents</td><td style="color:var(--muted)">List with 5-dimension filters</td></tr>
        <tr><td><span class="mth post">POST</span></td><td class="ep">/api/incidents/:id/verify-ai</td><td style="color:var(--muted)">Run Python NLP verifier on incident</td></tr>
        <tr><td><span class="mth post">POST</span></td><td class="ep">/api/incidents/bulk</td><td style="color:var(--muted)">Bulk verify / reject / assign</td></tr>
        <tr><td><span class="mth get">GET</span></td><td class="ep">/api/risk/heatmap</td><td style="color:var(--muted)">C++ spatial risk zone data</td></tr>
        <tr><td><span class="mth get">GET</span></td><td class="ep">/api/analytics/trends</td><td style="color:var(--muted)">7-day Reported vs Resolved chart data</td></tr>
        <tr><td><span class="mth patch">PATCH</span></td><td class="ep">/api/users/:id/status</td><td style="color:var(--muted)">Flag / Ban / Restore citizen user</td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ═══════════════════════════════ WEAR OS ════════════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Wear OS Integration</div>
    <h2>Wrist-to-city SOS</h2>
    <p class="sec-sub">The Raksha module integrates with paired Wear OS devices via the Wearable Data Layer API, enabling SOS triggers and heart-rate monitoring from a smartwatch.</p>

    <div class="card-wrap">
      <div class="svg-wrap">
        <svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Watch -->
          <rect x="22" y="60" width="120" height="80" rx="18" fill="rgba(232,121,249,.08)" stroke="rgba(232,121,249,.3)" stroke-width=".8"/>
          <rect x="40" y="74" width="84" height="52" rx="10" fill="rgba(232,121,249,.12)" stroke="rgba(232,121,249,.2)" stroke-width=".7"/>
          <text x="82" y="94" text-anchor="middle" fill="#f0acf7" font-size="10.5" font-family="DM Sans" font-weight="600">⌚ Wear OS</text>
          <text x="82" y="108" text-anchor="middle" fill="#e879f9" font-size="9" font-family="DM Sans">Tap SOS</text>
          <text x="82" y="119" text-anchor="middle" fill="#e879f9" font-size="9" font-family="DM Sans">Heart rate</text>
          <!-- watch band -->
          <rect x="55" y="44" width="54" height="18" rx="5" fill="rgba(232,121,249,.08)" stroke="rgba(232,121,249,.18)" stroke-width=".6"/>
          <rect x="55" y="138" width="54" height="18" rx="5" fill="rgba(232,121,249,.08)" stroke="rgba(232,121,249,.18)" stroke-width=".6"/>

          <!-- Arrow: Watch → Phone -->
          <line x1="142" y1="100" x2="186" y2="100" stroke="rgba(232,121,249,.5)" stroke-width="1.2" marker-end="url(#a1)" class="flow-line"/>
          <text x="164" y="90" text-anchor="middle" fill="rgba(232,121,249,.5)" font-size="8.5" font-family="JetBrains Mono">/raksha/sos</text>

          <!-- Phone -->
          <rect x="186" y="55" width="100" height="90" rx="12" fill="rgba(79,142,247,.08)" stroke="rgba(79,142,247,.28)" stroke-width=".8"/>
          <text x="236" y="85" text-anchor="middle" fill="#93b8f8" font-size="10.5" font-family="DM Sans" font-weight="600">📱 Android</text>
          <text x="236" y="100" text-anchor="middle" fill="#4f8ef7" font-size="9" font-family="DM Sans">WatchSosManager</text>
          <text x="236" y="112" text-anchor="middle" fill="#4f8ef7" font-size="9" font-family="DM Sans">simulateWatchSos()</text>
          <text x="236" y="124" text-anchor="middle" fill="#4f8ef7" font-size="9" font-family="DM Sans">onHeartRateUpdate()</text>

          <!-- Phone → Raksha Backend -->
          <line x1="286" y1="100" x2="320" y2="100" stroke="rgba(244,63,94,.5)" stroke-width="1.2" marker-end="url(#a1)" class="flow-line"/>

          <!-- Raksha Backend -->
          <rect x="320" y="60" width="120" height="80" rx="9" fill="rgba(244,63,94,.08)" stroke="rgba(244,63,94,.25)" stroke-width=".8"/>
          <text x="380" y="85" text-anchor="middle" fill="#fca5a5" font-size="10.5" font-family="DM Sans" font-weight="600">🛡️ Raksha</text>
          <text x="380" y="100" text-anchor="middle" fill="#f43f5e" font-size="9" font-family="DM Sans">RakshaViewModel</text>
          <text x="380" y="112" text-anchor="middle" fill="#f43f5e" font-size="9" font-family="DM Sans">watchSosReceived</text>
          <text x="380" y="124" text-anchor="middle" fill="#f43f5e" font-size="9" font-family="DM Sans">StateFlow dispatch</text>

          <!-- Parallel arrows to Firebase + Twilio -->
          <line x1="440" y1="85" x2="476" y2="70" stroke="rgba(251,191,36,.4)" stroke-width="1" marker-end="url(#a1)"/>
          <line x1="440" y1="115" x2="476" y2="130" stroke="rgba(34,211,160,.4)" stroke-width="1" marker-end="url(#a1)"/>

          <!-- Firebase -->
          <rect x="476" y="48" width="120" height="46" rx="8" fill="rgba(251,191,36,.07)" stroke="rgba(251,191,36,.2)" stroke-width=".7"/>
          <text x="536" y="68" text-anchor="middle" fill="#fde68a" font-size="10.5" font-family="DM Sans" font-weight="600">🔥 Firebase RTDB</text>
          <text x="536" y="82" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="DM Sans">GPS broadcast → Admin</text>

          <!-- Twilio -->
          <rect x="476" y="108" width="120" height="46" rx="8" fill="rgba(34,211,160,.07)" stroke="rgba(34,211,160,.2)" stroke-width=".7"/>
          <text x="536" y="128" text-anchor="middle" fill="#7eecd4" font-size="10.5" font-family="DM Sans" font-weight="600">📲 Twilio SMS</text>
          <text x="536" y="142" text-anchor="middle" fill="#22d3a0" font-size="9" font-family="DM Sans">Alert trusted contacts</text>

          <!-- Both → Admin -->
          <line x1="596" y1="71" x2="626" y2="95" stroke="rgba(251,191,36,.4)" stroke-width="1" marker-end="url(#a1)"/>
          <line x1="596" y1="131" x2="626" y2="107" stroke="rgba(34,211,160,.4)" stroke-width="1" marker-end="url(#a1)"/>

          <!-- Admin -->
          <rect x="626" y="68" width="110" height="64" rx="9" fill="rgba(139,92,246,.09)" stroke="rgba(139,92,246,.25)" stroke-width=".8"/>
          <text x="681" y="90" text-anchor="middle" fill="#c4b5fd" font-size="10.5" font-family="DM Sans" font-weight="600">🖥️ Admin PWA</text>
          <text x="681" y="104" text-anchor="middle" fill="#8b5cf6" font-size="9" font-family="DM Sans">new_sos socket event</text>
          <text x="681" y="117" text-anchor="middle" fill="#8b5cf6" font-size="9" font-family="DM Sans">SOS card + map pin</text>
          <text x="681" y="130" text-anchor="middle" fill="#8b5cf6" font-size="9" font-family="DM Sans">Triage + dispatch</text>
        </svg>
      </div>
    </div>

    <div class="code">
<span class="cc">// WatchSosManager.kt — Raksha module</span>
<span class="ck">const val</span> SOS_PATH = <span class="cs">"/raksha/sos"</span>
<span class="ck">const val</span> HEARTBEAT_PATH = <span class="cs">"/raksha/heartbeat"</span>

<span class="cc">// Real WearOS production steps:</span>
<span class="cc">// 1. Add play-services-wearable dependency</span>
<span class="cc">// 2. Register WearableListenerService in manifest</span>
<span class="cc">// 3. Send SOS via Wearable.getMessageClient:</span>
Wearable.getMessageClient(ctx)
    .sendMessage(nodeId, SOS_PATH, <span class="ck">null</span>)
    .addOnSuccessListener { <span class="cc">/* confirm vibration */</span> }
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ BIMSTEC ════════════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Coverage</div>
    <h2>7 BIMSTEC nations</h2>
    <p class="sec-sub">Traffic violation data sourced from official motor vehicle acts, verified against gazette notifications. Currency-aware fine calculation with native law citations.</p>
    <div class="nations">
      <div class="nat"><span class="nf">🇮🇳</span><div class="ni"><h4>India</h4><p>Motor Vehicles Act 1988 · ₹</p></div></div>
      <div class="nat"><span class="nf">🇧🇩</span><div class="ni"><h4>Bangladesh</h4><p>MV Ordinance 1983 · ৳</p></div></div>
      <div class="nat"><span class="nf">🇧🇹</span><div class="ni"><h4>Bhutan</h4><p>Road Safety Act 1999 · Nu</p></div></div>
      <div class="nat"><span class="nf">🇲🇲</span><div class="ni"><h4>Myanmar</h4><p>Motor Vehicles Law 2011 · K</p></div></div>
      <div class="nat"><span class="nf">🇳🇵</span><div class="ni"><h4>Nepal</h4><p>MV Act 2049 BS · Rs</p></div></div>
      <div class="nat"><span class="nf">🇱🇰</span><div class="ni"><h4>Sri Lanka</h4><p>Motor Traffic Act 1951 · Rs</p></div></div>
      <div class="nat"><span class="nf">🇹🇭</span><div class="ni"><h4>Thailand</h4><p>Land Traffic Act · ฿</p></div></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ TECH STACK ════════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Tech Stack</div>
    <h2>Built with modern Android</h2>
    <p class="sec-sub">218 Kotlin files, 6 themes, MVVM + Clean Architecture, modular Gradle multi-project build with 13+ independent modules.</p>
    <div class="stack">
      <div class="st-row"><div class="st-lbl">Language</div><div class="st-tags"><span class="st-tag">Kotlin</span><span class="st-tag">Coroutines</span><span class="st-tag">Flow</span></div></div>
      <div class="st-row"><div class="st-lbl">UI</div><div class="st-tags"><span class="st-tag">Jetpack Compose</span><span class="st-tag">Navigation</span><span class="st-tag">Coil</span></div></div>
      <div class="st-row"><div class="st-lbl">DI</div><div class="st-tags"><span class="st-tag">Hilt</span><span class="st-tag">Dagger</span></div></div>
      <div class="st-row"><div class="st-lbl">Network</div><div class="st-tags"><span class="st-tag">Retrofit</span><span class="st-tag">OkHttp</span><span class="st-tag">Gson</span></div></div>
      <div class="st-row"><div class="st-lbl">Backend</div><div class="st-tags"><span class="st-tag">Firebase RTDB</span><span class="st-tag">Supabase</span><span class="st-tag">FCM</span></div></div>
      <div class="st-row"><div class="st-lbl">AI / ML</div><div class="st-tags"><span class="st-tag">Gemini Flash</span><span class="st-tag">TF-IDF Bot</span><span class="st-tag">TFLite</span></div></div>
      <div class="st-row"><div class="st-lbl">Maps</div><div class="st-tags"><span class="st-tag">OSM / OSRM</span><span class="st-tag">GTFS</span><span class="st-tag">Overpass</span></div></div>
      <div class="st-row"><div class="st-lbl">Auth / Comms</div><div class="st-tags"><span class="st-tag">Twilio OTP</span><span class="st-tag">Firebase Auth</span></div></div>
      <div class="st-row"><div class="st-lbl">Local</div><div class="st-tags"><span class="st-tag">Room</span><span class="st-tag">DataStore</span></div></div>
      <div class="st-row"><div class="st-lbl">Wearable</div><div class="st-tags"><span class="st-tag">Wear OS</span><span class="st-tag">Wearable DataLayer</span></div></div>
      <div class="st-row"><div class="st-lbl">Admin Server</div><div class="st-tags"><span class="st-tag">Node.js</span><span class="st-tag">Socket.IO</span><span class="st-tag">Express</span></div></div>
      <div class="st-row"><div class="st-lbl">Admin AI</div><div class="st-tags"><span class="st-tag">Python NLP</span><span class="st-tag">C++ Risk Engine</span></div></div>
      <div class="st-row"><div class="st-lbl">Admin UI</div><div class="st-tags"><span class="st-tag">Leaflet.js</span><span class="st-tag">Chart.js</span><span class="st-tag">PWA SW</span></div></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ PROJECT STRUCTURE ════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Structure</div>
    <h2>Project layout</h2>
    <p class="sec-sub">Three repos, one ecosystem. The Android app is a modular Gradle multi-project build; the admin server is a standalone Node.js service.</p>

    <div class="tree">
<span class="td">NagarSetu/</span>                             <span class="tm"># Android App (218 .kt files)</span>
├── <span class="td">frontend/</span>
│   ├── <span class="td">app/</span>                           <span class="tm"># NavHost, themes, AI FAB</span>
│   ├── <span class="td">common-ui/</span>                    <span class="tm"># Themes, Room, OSM, ThemeViewModel</span>
│   └── <span class="td">components/</span>
│       ├── <span class="td">auth/</span>                      <span class="tm"># Login, Profile, Settings, SafetyInfo</span>
│       ├── <span class="td">predictive/</span>                <span class="tm"># BimstecCard, RAGQueryBox, RiskGridMap</span>
│       ├── <span class="td">charge-up/</span>                 <span class="tm"># ChargeUpScreen, ChargeUpViewModel</span>
│       ├── <span class="td">road-watch/</span>                <span class="tm"># HeatmapTab, TrackTab, ReportTab</span>
│       ├── <span class="td">health-watch/</span>              <span class="tm"># Telemedicine, epidemic alerts</span>
│       ├── <span class="td">raksha/</span>                    <span class="tm"># RakshaScreen, RakshaSettings</span>
│       └── <span class="td">report-it/</span>                 <span class="tm"># Issue reporting from Dashboard</span>
│
└── <span class="td">backend/</span>
    └── <span class="td">components/</span>
        ├── <span class="td">core/</span>                      <span class="tm"># NagarSetuAssistant, CivicDataHub</span>
        ├── <span class="td">auth/</span>                      <span class="tm"># Supabase + Twilio OTP</span>
        ├── <span class="td">emergency-ai/</span>              <span class="tm"># ShakeDetector, TriageEngine</span>
        ├── <span class="td">drive-legal/</span>               <span class="tm"># TfIdfBot, DriveLegalConfig</span>
        ├── <span class="td">road-watch/</span>                <span class="tm"># PotholeDetector (TFLite)</span>
        ├── <span class="td">dashboard/</span>                 <span class="tm"># HybridAlertBridge, CrisisManager</span>
        ├── <span class="td">green-route/</span>               <span class="tm"># OSRM + GTFS routing</span>
        ├── <span class="td">charge-up/</span>                 <span class="tm"># Open Charge Map API</span>
        ├── <span class="td">park-ease/</span>                 <span class="tm"># OSM lots + Supabase slots + QR</span>
        ├── <span class="td">health-watch/</span>              <span class="tm"># Jitsi telemedicine, Overpass clinics</span>
        ├── <span class="td">raksha/</span>                    <span class="tm"># WatchSosManager (Wear OS)</span>
        ├── <span class="td">predictive/</span>                <span class="tm"># Hazard forecasting, RAG</span>
        └── <span class="td">firebase/</span>                  <span class="tm"># FCM, GPS tracking, NagarSetuAnalytics</span>

<span class="td">nagarsetu-admin-v3/</span>                    <span class="tm"># Admin Dashboard (Node.js PWA)</span>
├── <span class="td">server/</span>
│   ├── <span class="tf">index.js</span>                       <span class="tm"># Express + Socket.IO hub</span>
│   ├── <span class="td">routes/</span>                        <span class="tm"># sos, incidents, alerts, risk, users, analytics</span>
│   └── <span class="td">services/</span>                      <span class="tm"># dataStore, aiVerifier, riskEngine</span>
├── <span class="td">public/</span>
│   ├── <span class="tf">index.html</span>                     <span class="tm"># Full SPA dashboard (1465 lines)</span>
│   ├── <span class="tf">sw.js</span>                          <span class="tm"># Service worker — cache + push + sync</span>
│   └── <span class="tf">offline.html</span>                   <span class="tm"># Offline fallback</span>
├── <span class="td">python/</span>
│   └── <span class="tf">ai_verifier.py</span>                 <span class="tm"># NLP incident verifier</span>
└── <span class="td">cpp/</span>
    └── <span class="tf">risk_calculator.cpp</span>            <span class="tm"># Spatial risk computation</span>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ QUICK START ════════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Quick Start</div>
    <h2>Get running in minutes</h2>
    <p class="sec-sub">Requires Android Studio Ladybug or newer, JDK 17, Android SDK 34.</p>

    <div class="steps">
      <div class="step">
        <div class="snum">1</div>
        <div class="sc">
          <h4>Clone & open in Android Studio</h4>
          <div class="code"><span class="co">$</span> git clone https://github.com/your-org/NagarSetu.git<br><span class="co">$</span> cd NagarSetu<br><span class="co"># Open in Android Studio Ladybug → Sync Gradle</span></div>
        </div>
      </div>
      <div class="step">
        <div class="snum">2</div>
        <div class="sc">
          <h4>Configure credentials in local.properties</h4>
          <div class="code"><span class="cc"># local.properties</span>
<span class="ck">SUPABASE_URL</span>=<span class="cs">https://your-project.supabase.co</span>
<span class="ck">SUPABASE_KEY</span>=<span class="cs">your-anon-key</span>
<span class="ck">TWILIO_ACCOUNT_SID</span>=<span class="cs">ACxxxxxxxx</span>
<span class="ck">GEMINI_API_KEY</span>=<span class="cs">AIzaSy...</span>
<span class="ck">MAPS_API_KEY</span>=<span class="cs">AIzaSy...</span></div>
        </div>
      </div>
      <div class="step">
        <div class="snum">3</div>
        <div class="sc">
          <h4>Add google-services.json</h4>
          <div class="code"><span class="cc"># Place Firebase config at app/google-services.json</span>
<span class="cc"># Download from Firebase Console → Project Settings → Android</span></div>
        </div>
      </div>
      <div class="step">
        <div class="snum">4</div>
        <div class="sc">
          <h4>Build & run the Android app</h4>
          <div class="code"><span class="co">$</span> ./gradlew :frontend:app:assembleDebug
<span class="cc"># or Run ▶ in Android Studio</span></div>
        </div>
      </div>
      <div class="step">
        <div class="snum">5</div>
        <div class="sc">
          <h4>Start the Admin Dashboard</h4>
          <div class="code"><span class="co">$</span> cd nagarsetu-admin-v3
<span class="co">$</span> cp .env.example .env  <span class="cc"># fill Firebase + Supabase creds</span>
<span class="co">$</span> npm install
<span class="co">$</span> npm run build:cpp    <span class="cc"># Optional: compile C++ risk engine</span>
<span class="co">$</span> npm run dev          <span class="cc"># → http://localhost:3000</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ FEATURE TABLE ════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Features</div>
    <h2>What makes NagarSetu different</h2>

    <table class="tbl">
      <thead><tr><th>Feature</th><th>Detail</th><th>Module</th></tr></thead>
      <tbody>
        <tr><td style="color:#fff;font-weight:500">Shake-to-SOS</td><td style="color:var(--muted)">Accelerometer detection triggers emergency dispatch, GPS broadcast to trusted contacts via Twilio + FCM</td><td><span class="mth get">emergency-ai</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">Watch SOS</td><td style="color:var(--muted)">Wear OS wrist-tap triggers WatchSosManager via Wearable Data Layer API, heart-rate monitoring</td><td><span class="mth get">raksha</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">AI Challan Bot</td><td style="color:var(--muted)">TF-IDF chatbot understands Hinglish queries, 154 violations × 7 nations, repeat-offence multipliers</td><td><span class="mth post">drive-legal</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">Live Dashboard SOS</td><td style="color:var(--muted)">Real-time SOS cards with GPS, battery, triage level (CRITICAL/HIGH/MODERATE), one-click acknowledge</td><td><span class="mth get">admin</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">GTFS Eco Routing</td><td style="color:var(--muted)">OSRM + GTFS combine to score routes by CO₂ emission, cycling lanes, and transit time</td><td><span class="mth get">green-route</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">AI Incident Verifier</td><td style="color:var(--muted)">Python NLP auto-verifier with configurable threshold, auto-accept/reject, bulk actions</td><td><span class="mth post">admin</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">C++ Risk Engine</td><td style="color:var(--muted)">Spatial risk heatmap compiled from C++, JS fallback, 5-min cache, risk zone dashboard</td><td><span class="mth get">admin</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">Hazard Prediction</td><td style="color:var(--muted)">RAG query box + predictive models for flood zones, crime hotspots, ProactiveAlertCard</td><td><span class="mth get">predictive</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">6 App Themes</td><td style="color:var(--muted)">Civic Light/Dark, Eco Green, Sunset Amber, High Contrast, Royal Purple — persisted via DataStore</td><td><span class="mth get">common-ui</span></td></tr>
        <tr><td style="color:#fff;font-weight:500">PWA Offline</td><td style="color:var(--muted)">Service worker caches the admin dashboard, handles push notifications, background sync</td><td><span class="mth get">admin</span></td></tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ═══════════════════════════════ CONTRIBUTING ═════════════════════ -->
<div class="sec aos">
  <div class="wrap">
    <div class="sec-tag">Contributing</div>
    <h2>Join the project</h2>
    <p class="sec-sub">NagarSetu is open-source under the MIT license. All civic-tech contributions welcome — Android, Node.js, Python, or C++.</p>

    <div class="code">
<span class="cc"># 1. Fork the repository</span>
<span class="co">$</span> git checkout -b <span class="cs">feature/your-module</span>

<span class="cc"># 2. Follow MVVM + Clean Arch patterns per existing modules</span>
<span class="cc"># 3. Write tests for use cases</span>
<span class="co">$</span> ./gradlew test

<span class="cc"># 4. Push and open a Pull Request</span>
<span class="co">$</span> git push origin <span class="cs">feature/your-module</span>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ FOOTER ════════════════════════════ -->
<div class="footer">
  <div class="wrap">
    <div class="ft">NagarSetu</div>
    <div class="fs">Smart City Civic Platform · Bhopal &amp; Indore, India · Built with Kotlin &amp; ❤️</div>
    <div class="fl">
      <a href="#">Documentation</a>
      <a href="#">Issues</a>
      <a href="#">Pull Requests</a>
      <a href="#">Admin Dashboard</a>
      <a href="#">MIT License</a>
    </div>
  </div>
</div>

<script>
// Scroll-triggered animations
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.aos').forEach(el => obs.observe(el));

// Module card stagger
document.querySelectorAll('.mod').forEach((c,i) => {
  c.style.opacity = '0'; c.style.transform = 'translateY(16px)';
  c.style.transition = `opacity .38s ${i*0.055}s ease, transform .38s ${i*0.055}s ease, border-color .22s, translateY .22s`;
});
const modObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.mod').forEach(c => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; });
      modObs.unobserve(e.target);
    }
  });
}, { threshold: 0.04 });
const mg = document.querySelector('.mods');
if (mg) modObs.observe(mg.parentElement.parentElement);

// Animated stat counters
function animCount(el, target, suf='') {
  const dur = 1300, start = performance.now();
  const isInt = Number.isInteger(target);
  (function step(now) {
    const t = Math.min((now-start)/dur,1);
    const e = 1-Math.pow(1-t,3);
    el.textContent = (isInt ? Math.round(target*e) : (target*e).toFixed(1)) + suf;
    if (t<1) requestAnimationFrame(step);
  })(start);
}
const numObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-n').forEach(n => {
        const m = n.textContent.trim().match(/^([\d.]+)(.*)/);
        if (m) animCount(n, parseFloat(m[1]), m[2]);
      });
      numObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stats-grid').forEach(g => numObs.observe(g));

// Platform card stagger
document.querySelectorAll('.pg').forEach((c,i) => {
  c.style.opacity = '0'; c.style.transform = 'translateY(14px)';
  c.style.transition = `opacity .38s ${i*0.1}s ease, transform .38s ${i*0.1}s ease`;
});
const pgObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.pg').forEach(c => { c.style.opacity='1'; c.style.transform='translateY(0)'; });
      pgObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
const pgg = document.querySelector('.platform-grid');
if (pgg) pgObs.observe(pgg.parentElement.parentElement);
</script>
</body>
</html>
