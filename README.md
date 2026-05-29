<div align="center">

<style>
  @keyframes pulse-ring { 0%{r:8;opacity:.9} 100%{r:28;opacity:0} }
  @keyframes car-move-r { 0%{transform:translateX(0)} 100%{transform:translateX(680px)} }
  @keyframes car-move-l { 0%{transform:translateX(680px)} 100%{transform:translateX(-80px)} }
  @keyframes bus-r { 0%{transform:translateX(-80px)} 100%{transform:translateX(700px)} }
  @keyframes light-cycle {
    0%,30%{fill:#3B9C3A}
    35%,45%{fill:#C8A017}
    50%,95%{fill:#C83A3A}
    100%{fill:#3B9C3A}
  }
  @keyframes light-cycle-alt {
    0%,30%{fill:#C83A3A}
    35%,45%{fill:#C8A017}
    50%,95%{fill:#3B9C3A}
    100%{fill:#C83A3A}
  }
  @keyframes sos-ping { 0%{r:5;opacity:1} 100%{r:22;opacity:0} }
  @keyframes data-float {
    0%{transform:translateY(0);opacity:0}
    15%{opacity:1}
    80%{opacity:.8}
    100%{transform:translateY(-60px);opacity:0}
  }
  @keyframes cloud-sway { 0%,100%{transform:translateX(0)} 50%{transform:translateX(6px)} }
  @keyframes wearable-beat { 0%,100%{transform:scale(1)} 50%{transform:scale(1.18)} }
  @keyframes antenna-glow { 0%,100%{opacity:.4} 50%{opacity:1} }
  @keyframes walk { 0%{transform:translateX(0)} 100%{transform:translateX(80px)} }
  @keyframes ev-charge { 0%,100%{height:18px;y:102} 50%{height:28px;y:92} }
  @keyframes sign-blink { 0%,49%{opacity:1} 50%,100%{opacity:.3} }
  @keyframes tree-sway { 0%,100%{transform:rotate(-2deg)transform-origin:center bottom} 50%{transform:rotate(2deg)} }
  @keyframes scroll-ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes road-dash { to{stroke-dashoffset:-28} }
  @keyframes heli { 0%,100%{transform:translate(0,0)} 25%{transform:translate(8px,-6px)} 75%{transform:translate(-6px,4px)} }
  @keyframes signal-wave {
    0%{r:3;opacity:.8} 100%{r:14;opacity:0}
  }
  @keyframes blink-cursor { 50%{opacity:0} }
</style>
<svg width="100%" viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>NagarSetu smart city hero illustration</title>
  <desc>Animated smart city scene showing roads, buildings, EV station, SOS beacon, Wear OS wrist device, data flowing to a cloud, and AI signals — representing the NagarSetu civic platform.</desc>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0d1a2e"/>
      <stop offset="100%" stop-color="#112240"/>
    </linearGradient>
    <linearGradient id="road-v" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c2230"/>
      <stop offset="100%" stop-color="#232b3a"/>
    </linearGradient>
    <linearGradient id="bldg1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#162a45"/>
    </linearGradient>
    <linearGradient id="bldg2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a3354"/>
      <stop offset="100%" stop-color="#111f35"/>
    </linearGradient>
    <linearGradient id="ev-glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#22D3A0" stop-opacity=".9"/>
      <stop offset="100%" stop-color="#0fa372" stop-opacity=".4"/>
    </linearGradient>
    <linearGradient id="cloud-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e3a6a"/>
      <stop offset="100%" stop-color="#0f2040"/>
    </linearGradient>
    <filter id="glow-soft">
      <feGaussianBlur stdDeviation="2" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="ticker-clip"><rect x="0" y="398" width="680" height="22"/></clipPath>
  </defs>

  <!-- ── sky background ── -->
  <rect width="680" height="420" fill="url(#sky)"/>

  <!-- ── stars ── -->
  <g opacity=".5">
    <circle cx="42" cy="18" r="1" fill="#fff"/><circle cx="120" cy="28" r=".8" fill="#aac4ff"/>
    <circle cx="200" cy="12" r="1" fill="#fff"/><circle cx="300" cy="22" r=".7" fill="#aac4ff"/>
    <circle cx="420" cy="10" r="1" fill="#fff"/><circle cx="540" cy="26" r=".8" fill="#fff"/>
    <circle cx="620" cy="14" r="1" fill="#aac4ff"/><circle cx="72" cy="40" r=".6" fill="#fff"/>
    <circle cx="480" cy="34" r=".7" fill="#fff"/><circle cx="340" cy="8" r=".9" fill="#aac4ff"/>
    <circle cx="580" cy="48" r=".6" fill="#fff"/><circle cx="160" cy="46" r=".8" fill="#fff"/>
  </g>

  <!-- ══════════════ GROUND PLANE ══════════════ -->
  <rect x="0" y="270" width="680" height="150" fill="#0e1820"/>

  <!-- ── Main horizontal road ── -->
  <rect x="0" y="280" width="680" height="50" fill="url(#road-v)"/>
  <!-- road dashes -->
  <line x1="0" y1="305" x2="680" y2="305" stroke="#c8a420" stroke-width="1.5" stroke-dasharray="18 10"
        style="animation:road-dash 1.2s linear infinite"/>
  <!-- sidewalks -->
  <rect x="0" y="270" width="680" height="10" fill="#1a2535"/>
  <rect x="0" y="330" width="680" height="10" fill="#1a2535"/>

  <!-- ── Vertical road (crossroad) ── -->
  <rect x="310" y="150" width="50" height="280" fill="url(#road-v)"/>
  <line x1="335" y1="150" x2="335" y2="430" stroke="#c8a420" stroke-width="1.5" stroke-dasharray="12 8"
        style="animation:road-dash 1.5s linear infinite"/>

  <!-- ── Zebra crossing ── -->
  <g fill="#2a3548" opacity=".9">
    <rect x="310" y="274" width="50" height="6"/><rect x="310" y="285" width="50" height="6"/>
    <rect x="310" y="296" width="50" height="6"/><rect x="310" y="307" width="50" height="6"/>
    <rect x="310" y="318" width="50" height="6"/>
  </g>

  <!-- ══════════════ BUILDINGS LEFT ══════════════ -->
  <!-- Tall tower left -->
  <rect x="30" y="100" width="70" height="175" rx="3" fill="url(#bldg1)"/>
  <rect x="30" y="100" width="70" height="175" rx="3" fill="none" stroke="#1e4a80" stroke-width=".8"/>
  <!-- windows -->
  <g fill="#4f8ef7" opacity=".35">
    <rect x="38" y="110" width="10" height="8" rx="1"/><rect x="56" y="110" width="10" height="8" rx="1"/><rect x="74" y="110" width="10" height="8" rx="1"/>
    <rect x="38" y="126" width="10" height="8" rx="1"/><rect x="56" y="126" width="10" height="8" rx="1"/><rect x="74" y="126" width="10" height="8" rx="1"/>
    <rect x="38" y="142" width="10" height="8" rx="1"/><rect x="74" y="142" width="10" height="8" rx="1"/>
    <rect x="38" y="158" width="10" height="8" rx="1"/><rect x="56" y="158" width="10" height="8" rx="1"/><rect x="74" y="158" width="10" height="8" rx="1"/>
    <rect x="38" y="174" width="10" height="8" rx="1"/><rect x="56" y="174" width="10" height="8" rx="1"/>
    <rect x="38" y="190" width="10" height="8" rx="1"/><rect x="56" y="190" width="10" height="8" rx="1"/><rect x="74" y="190" width="10" height="8" rx="1"/>
    <rect x="38" y="206" width="10" height="8" rx="1"/><rect x="74" y="206" width="10" height="8" rx="1"/>
    <rect x="38" y="222" width="10" height="8" rx="1"/><rect x="56" y="222" width="10" height="8" rx="1"/>
    <rect x="38" y="238" width="10" height="8" rx="1"/><rect x="56" y="238" width="10" height="8" rx="1"/><rect x="74" y="238" width="10" height="8" rx="1"/>
  </g>
  <!-- lit windows -->
  <g fill="#fbbf24" opacity=".8">
    <rect x="56" y="126" width="10" height="8" rx="1"/><rect x="74" y="142" width="10" height="8" rx="1"/>
    <rect x="38" y="174" width="10" height="8" rx="1"/>
    <rect x="74" y="206" width="10" height="8" rx="1"/>
  </g>
  <!-- antenna -->
  <line x1="65" y1="100" x2="65" y2="72" stroke="#4f8ef7" stroke-width="1.2" style="animation:antenna-glow 2s ease-in-out infinite"/>
  <circle cx="65" cy="72" r="3" fill="#4f8ef7" style="animation:antenna-glow 2s ease-in-out infinite"/>
  <!-- antenna signal rings -->
  <circle cx="65" cy="72" r="6" fill="none" stroke="#4f8ef7" stroke-width=".8" opacity=".3" style="animation:signal-wave 2s ease-out infinite"/>
  <circle cx="65" cy="72" r="6" fill="none" stroke="#4f8ef7" stroke-width=".8" opacity=".3" style="animation:signal-wave 2s ease-out infinite .7s"/>
  <circle cx="65" cy="72" r="6" fill="none" stroke="#4f8ef7" stroke-width=".8" opacity=".3" style="animation:signal-wave 2s ease-out infinite 1.4s"/>

  <!-- Mid building left -->
  <rect x="112" y="150" width="55" height="125" rx="2" fill="url(#bldg2)"/>
  <g fill="#38bdf8" opacity=".3">
    <rect x="118" y="158" width="9" height="8" rx="1"/><rect x="134" y="158" width="9" height="8" rx="1"/><rect x="150" y="158" width="9" height="8" rx="1"/>
    <rect x="118" y="174" width="9" height="8" rx="1"/><rect x="150" y="174" width="9" height="8" rx="1"/>
    <rect x="118" y="190" width="9" height="8" rx="1"/><rect x="134" y="190" width="9" height="8" rx="1"/>
    <rect x="118" y="206" width="9" height="8" rx="1"/><rect x="150" y="206" width="9" height="8" rx="1"/>
    <rect x="118" y="222" width="9" height="8" rx="1"/><rect x="134" y="222" width="9" height="8" rx="1"/>
    <rect x="134" y="238" width="9" height="8" rx="1"/><rect x="150" y="238" width="9" height="8" rx="1"/>
  </g>
  <!-- NagarSetu label on building -->
  <rect x="112" y="126" width="55" height="18" rx="3" fill="#4f8ef7" opacity=".15"/>
  <text x="139" y="139" text-anchor="middle" font-family="monospace" font-size="9" fill="#93b8f8" font-weight="600" opacity=".9">NagarSetu</text>

  <!-- Small shop -->
  <rect x="180" y="220" width="50" height="55" rx="2" fill="#16253a"/>
  <rect x="183" y="250" width="44" height="25" rx="1" fill="#1e3a5f" opacity=".6"/>
  <rect x="187" y="228" width="16" height="14" rx="1" fill="#4f8ef7" opacity=".5"/>
  <rect x="210" y="228" width="16" height="14" rx="1" fill="#fbbf24" opacity=".5"/>
  <text x="205" y="244" text-anchor="middle" font-family="monospace" font-size="8" fill="#38bdf8" opacity=".8">SHOP</text>

  <!-- ══════════════ BUILDINGS RIGHT ══════════════ -->
  <!-- Tall right tower -->
  <rect x="500" y="90" width="80" height="185" rx="3" fill="url(#bldg1)"/>
  <rect x="500" y="90" width="80" height="185" rx="3" fill="none" stroke="#1e4a80" stroke-width=".8"/>
  <g fill="#8b5cf6" opacity=".3">
    <rect x="508" y="100" width="11" height="9" rx="1"/><rect x="526" y="100" width="11" height="9" rx="1"/><rect x="544" y="100" width="11" height="9" rx="1"/><rect x="562" y="100" width="11" height="9" rx="1"/>
    <rect x="508" y="118" width="11" height="9" rx="1"/><rect x="544" y="118" width="11" height="9" rx="1"/>
    <rect x="508" y="136" width="11" height="9" rx="1"/><rect x="526" y="136" width="11" height="9" rx="1"/><rect x="562" y="136" width="11" height="9" rx="1"/>
    <rect x="526" y="154" width="11" height="9" rx="1"/><rect x="544" y="154" width="11" height="9" rx="1"/>
    <rect x="508" y="172" width="11" height="9" rx="1"/><rect x="562" y="172" width="11" height="9" rx="1"/>
    <rect x="508" y="190" width="11" height="9" rx="1"/><rect x="526" y="190" width="11" height="9" rx="1"/><rect x="544" y="190" width="11" height="9" rx="1"/>
    <rect x="508" y="208" width="11" height="9" rx="1"/><rect x="562" y="208" width="11" height="9" rx="1"/>
    <rect x="526" y="226" width="11" height="9" rx="1"/><rect x="544" y="226" width="11" height="9" rx="1"/>
    <rect x="508" y="244" width="11" height="9" rx="1"/><rect x="526" y="244" width="11" height="9" rx="1"/>
  </g>
  <g fill="#e879f9" opacity=".8">
    <rect x="544" y="118" width="11" height="9" rx="1"/>
    <rect x="508" y="154" width="11" height="9" rx="1" opacity=".7"/>
    <rect x="562" y="190" width="11" height="9" rx="1"/>
  </g>
  <line x1="540" y1="90" x2="540" y2="60" stroke="#e879f9" stroke-width="1.2" style="animation:antenna-glow 2.4s ease-in-out infinite .5s"/>
  <circle cx="540" cy="60" r="3" fill="#e879f9" style="animation:antenna-glow 2.4s ease-in-out infinite .5s"/>
  <circle cx="540" cy="60" r="5" fill="none" stroke="#e879f9" stroke-width=".8" opacity=".3" style="animation:signal-wave 2s ease-out infinite .3s"/>
  <circle cx="540" cy="60" r="5" fill="none" stroke="#e879f9" stroke-width=".8" opacity=".3" style="animation:signal-wave 2s ease-out infinite 1.1s"/>

  <!-- Mid right -->
  <rect x="600" y="160" width="62" height="115" rx="2" fill="url(#bldg2)"/>
  <g fill="#22d3a0" opacity=".3">
    <rect x="606" y="168" width="10" height="9" rx="1"/><rect x="622" y="168" width="10" height="9" rx="1"/><rect x="638" y="168" width="10" height="9" rx="1"/>
    <rect x="606" y="185" width="10" height="9" rx="1"/><rect x="638" y="185" width="10" height="9" rx="1"/>
    <rect x="606" y="202" width="10" height="9" rx="1"/><rect x="622" y="202" width="10" height="9" rx="1"/>
    <rect x="622" y="219" width="10" height="9" rx="1"/><rect x="638" y="219" width="10" height="9" rx="1"/>
    <rect x="606" y="236" width="10" height="9" rx="1"/><rect x="622" y="236" width="10" height="9" rx="1"/>
    <rect x="638" y="253" width="10" height="9" rx="1"/>
  </g>

  <!-- ══════════════ TRAFFIC LIGHT ══════════════ -->
  <rect x="302" y="240" width="6" height="35" rx="1" fill="#1a2535"/>
  <rect x="296" y="210" width="18" height="32" rx="3" fill="#111c2a"/>
  <rect x="296" y="210" width="18" height="32" rx="3" fill="none" stroke="#1e3a5f" stroke-width=".8"/>
  <circle cx="305" cy="218" r="4" style="animation:light-cycle 6s ease-in-out infinite"/>
  <circle cx="305" cy="228" r="4" style="animation:light-cycle 6s ease-in-out infinite 2s"/>
  <circle cx="305" cy="238" r="4" style="animation:light-cycle-alt 6s ease-in-out infinite"/>

  <!-- ══════════════ EV CHARGING STATION ══════════════ -->
  <rect x="246" y="198" width="26" height="72" rx="4" fill="#0f1e2a"/>
  <rect x="246" y="198" width="26" height="72" rx="4" fill="none" stroke="#22d3a0" stroke-width=".8"/>
  <rect x="250" y="202" width="18" height="12" rx="2" fill="#0a1e18"/>
  <text x="259" y="212" text-anchor="middle" font-family="monospace" font-size="7" fill="#22d3a0" font-weight="700">EV</text>
  <!-- charge bolt -->
  <path d="M256 220 L262 228 L258 228 L264 238 L258 232 L262 232 Z" fill="url(#ev-glow)" style="animation:antenna-glow 1.5s ease-in-out infinite"/>
  <!-- plug cable -->
  <path d="M259 270 Q255 280 250 285" fill="none" stroke="#22d3a0" stroke-width="1.5" stroke-linecap="round" opacity=".6"/>

  <!-- parked EV car at station -->
  <g transform="translate(222,285)">
    <rect x="0" y="0" width="48" height="18" rx="5" fill="#0e3a2e"/>
    <rect x="6" y="-8" width="34" height="12" rx="4" fill="#0d3028"/>
    <circle cx="10" cy="18" r="5" fill="#1a2535" stroke="#22d3a0" stroke-width="1"/>
    <circle cx="38" cy="18" r="5" fill="#1a2535" stroke="#22d3a0" stroke-width="1"/>
    <rect x="6" y="-5" width="14" height="8" rx="2" fill="#22d3a0" opacity=".25"/>
    <rect x="26" y="-5" width="14" height="8" rx="2" fill="#22d3a0" opacity=".25"/>
    <!-- charge bolt on car -->
    <text x="24" y="12" text-anchor="middle" font-family="monospace" font-size="7" fill="#22d3a0" opacity=".9">⚡</text>
  </g>

  <!-- ══════════════ MOVING VEHICLES ══════════════ -->
  <!-- Car going right (lane 1) -->
  <g style="animation:car-move-r 8s linear infinite">
    <g transform="translate(-80,288)">
      <rect x="0" y="0" width="44" height="16" rx="4" fill="#1e3a7a"/>
      <rect x="5" y="-7" width="30" height="11" rx="3" fill="#162d60"/>
      <circle cx="8" cy="16" r="5" fill="#111c2a"/><circle cx="36" cy="16" r="5" fill="#111c2a"/>
      <rect x="5" y="-4" width="11" height="7" rx="1" fill="#4f8ef7" opacity=".3"/>
      <rect x="20" y="-4" width="11" height="7" rx="1" fill="#4f8ef7" opacity=".3"/>
      <circle cx="2" cy="8" r="2" fill="#f97316" opacity=".9"/>
    </g>
  </g>
  <!-- Car going right (lane 1, offset) -->
  <g style="animation:car-move-r 8s linear infinite 4s">
    <g transform="translate(-80,288)">
      <rect x="0" y="0" width="44" height="16" rx="4" fill="#3a1e7a"/>
      <rect x="5" y="-7" width="30" height="11" rx="3" fill="#2d1660"/>
      <circle cx="8" cy="16" r="5" fill="#111c2a"/><circle cx="36" cy="16" r="5" fill="#111c2a"/>
      <rect x="5" y="-4" width="11" height="7" rx="1" fill="#8b5cf6" opacity=".3"/>
      <rect x="20" y="-4" width="11" height="7" rx="1" fill="#8b5cf6" opacity=".3"/>
      <circle cx="2" cy="8" r="2" fill="#f97316" opacity=".9"/>
    </g>
  </g>

  <!-- Bus going right -->
  <g style="animation:bus-r 13s linear infinite 2s">
    <g transform="translate(-80,286)">
      <rect x="0" y="0" width="68" height="20" rx="3" fill="#1a3a2a"/>
      <rect x="4" y="-2" width="60" height="14" rx="2" fill="#12301f"/>
      <g fill="#22d3a0" opacity=".25">
        <rect x="6" y="0" width="8" height="9" rx="1"/><rect x="18" y="0" width="8" height="9" rx="1"/>
        <rect x="30" y="0" width="8" height="9" rx="1"/><rect x="42" y="0" width="8" height="9" rx="1"/>
        <rect x="54" y="0" width="8" height="9" rx="1"/>
      </g>
      <circle cx="14" cy="20" r="5" fill="#111c2a"/><circle cx="54" cy="20" r="5" fill="#111c2a"/>
      <text x="34" y="12" text-anchor="middle" font-family="monospace" font-size="6" fill="#22d3a0" opacity=".9">CITY BUS</text>
      <circle cx="2" cy="10" r="2" fill="#f97316" opacity=".9"/>
    </g>
  </g>

  <!-- Car going left (oncoming) -->
  <g style="animation:car-move-l 9s linear infinite 1s">
    <g transform="translate(0,308)">
      <rect x="0" y="0" width="44" height="15" rx="4" fill="#2a1a0e"/>
      <rect x="5" y="-6" width="30" height="10" rx="3" fill="#231508"/>
      <circle cx="8" cy="15" r="5" fill="#111c2a"/><circle cx="36" cy="15" r="5" fill="#111c2a"/>
      <rect x="5" y="-3" width="11" height="6" rx="1" fill="#fbbf24" opacity=".25"/>
      <rect x="20" y="-3" width="11" height="6" rx="1" fill="#fbbf24" opacity=".25"/>
      <circle cx="42" cy="7" r="3" fill="#fbbf24" opacity=".7"/>
    </g>
  </g>
  <g style="animation:car-move-l 9s linear infinite 5.5s">
    <g transform="translate(0,308)">
      <rect x="0" y="0" width="44" height="15" rx="4" fill="#1a1a2a"/>
      <rect x="5" y="-6" width="30" height="10" rx="3" fill="#131320"/>
      <circle cx="8" cy="15" r="5" fill="#111c2a"/><circle cx="36" cy="15" r="5" fill="#111c2a"/>
      <rect x="5" y="-3" width="11" height="6" rx="1" fill="#38bdf8" opacity=".2"/>
      <rect x="20" y="-3" width="11" height="6" rx="1" fill="#38bdf8" opacity=".2"/>
      <circle cx="42" cy="7" r="3" fill="#fbbf24" opacity=".7"/>
    </g>
  </g>

  <!-- ══════════════ TREES ══════════════ -->
  <g transform="translate(195,248)" style="transform-origin:5px 28px;animation:tree-sway 4s ease-in-out infinite">
    <rect x="3" y="20" width="4" height="12" rx="1" fill="#2a3a2a"/>
    <ellipse cx="5" cy="18" rx="9" ry="10" fill="#1a4a2a"/>
    <ellipse cx="5" cy="14" rx="6" ry="7" fill="#22633a"/>
  </g>
  <g transform="translate(462,245)" style="transform-origin:5px 28px;animation:tree-sway 5s ease-in-out infinite .8s">
    <rect x="3" y="20" width="4" height="14" rx="1" fill="#2a3a2a"/>
    <ellipse cx="5" cy="18" rx="8" ry="9" fill="#1a4a2a"/>
    <ellipse cx="5" cy="14" rx="5" ry="6" fill="#22633a"/>
  </g>

  <!-- ══════════════ PEDESTRIAN (walking) ══════════════ -->
  <g transform="translate(360,255)">
    <g style="animation:walk 6s linear infinite">
      <circle cx="0" cy="-14" r="4" fill="#e2c8a4"/>
      <rect x="-3" y="-9" width="6" height="10" rx="2" fill="#4f8ef7"/>
      <line x1="-3" y1="-5" x2="-7" y2="2" stroke="#e2c8a4" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="3" y1="-5" x2="7" y2="2" stroke="#e2c8a4" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="-2" y1="1" x2="-4" y2="8" stroke="#334" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="2" y1="1" x2="4" y2="8" stroke="#334" stroke-width="1.5" stroke-linecap="round"/>
    </g>
  </g>

  <!-- ══════════════ SOS BEACON ══════════════ -->
  <!-- person with SOS -->
  <g transform="translate(392,255)">
    <circle cx="0" cy="-14" r="4" fill="#fca5a5"/>
    <rect x="-3" y="-9" width="6" height="10" rx="2" fill="#f43f5e"/>
    <line x1="-3" y1="-5" x2="-7" y2="2" stroke="#fca5a5" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="3" y1="-5" x2="7" y2="2" stroke="#fca5a5" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="-2" y1="1" x2="-3" y2="8" stroke="#334" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="2" y1="1" x2="3" y2="8" stroke="#334" stroke-width="1.5" stroke-linecap="round"/>
    <!-- SOS rings -->
    <circle cx="0" cy="-14" r="8" fill="none" stroke="#f43f5e" stroke-width="1.5" style="animation:sos-ping 1.8s ease-out infinite" opacity=".8"/>
    <circle cx="0" cy="-14" r="8" fill="none" stroke="#f43f5e" stroke-width="1.5" style="animation:sos-ping 1.8s ease-out infinite .9s" opacity=".8"/>
    <!-- SOS label -->
    <rect x="-11" y="-34" width="22" height="11" rx="3" fill="#f43f5e"/>
    <text x="0" y="-26" text-anchor="middle" font-family="monospace" font-size="8" fill="#fff" font-weight="700">SOS</text>
    <line x1="0" y1="-23" x2="0" y2="-18" stroke="#f43f5e" stroke-width="1" opacity=".6"/>
  </g>

  <!-- ══════════════ WEAR OS WATCH ══════════════ -->
  <g transform="translate(440,215)">
    <!-- watch body -->
    <rect x="-15" y="-18" width="30" height="36" rx="6" fill="#111c2a" stroke="#8b5cf6" stroke-width="1"/>
    <!-- straps -->
    <rect x="-10" y="-26" width="20" height="10" rx="3" fill="#1a2535"/>
    <rect x="-10" y="18" width="20" height="10" rx="3" fill="#1a2535"/>
    <!-- screen -->
    <rect x="-12" y="-15" width="24" height="30" rx="4" fill="#0a0e18"/>
    <!-- heart icon pulsing -->
    <g style="transform-origin:0px -2px;animation:wearable-beat 1.2s ease-in-out infinite">
      <path d="M0,-8 C-5,-13 -12,-13 -12,-7 C-12,-1 -6,5 0,10 C6,5 12,-1 12,-7 C12,-13 5,-13 0,-8Z" fill="#f43f5e" transform="scale(0.45) translate(0,5)"/>
    </g>
    <!-- hr value -->
    <text x="0" y="6" text-anchor="middle" font-family="monospace" font-size="8" fill="#f43f5e" font-weight="700">♥ 88</text>
    <text x="0" y="15" text-anchor="middle" font-family="monospace" font-size="6" fill="#8b5cf6">Raksha</text>
    <!-- signal dot -->
    <circle cx="8" cy="-12" r="2.5" fill="#22d3a0" style="animation:antenna-glow 1.5s ease-in-out infinite"/>
  </g>

  <!-- ══════════════ CLOUD (Admin / AI) ══════════════ -->
  <g transform="translate(335,55)" style="animation:cloud-sway 6s ease-in-out infinite">
    <!-- cloud shape -->
    <ellipse cx="0" cy="0" rx="52" ry="28" fill="#0e2040"/>
    <ellipse cx="-28" cy="6" rx="26" ry="20" fill="#0e2040"/>
    <ellipse cx="28" cy="6" rx="26" ry="20" fill="#0e2040"/>
    <rect x="-52" y="5" width="104" height="22" fill="#0e2040"/>
    <!-- cloud border -->
    <ellipse cx="0" cy="0" rx="52" ry="28" fill="none" stroke="#1e4a8a" stroke-width=".8" opacity=".8"/>
    <ellipse cx="-28" cy="6" rx="26" ry="20" fill="none" stroke="#1e4a8a" stroke-width=".8" opacity=".5"/>
    <ellipse cx="28" cy="6" rx="26" ry="20" fill="none" stroke="#1e4a8a" stroke-width=".8" opacity=".5"/>
    <!-- cloud label -->
    <text x="0" y="-5" text-anchor="middle" font-family="monospace" font-size="9" fill="#4f8ef7" font-weight="700">AI CORE</text>
    <text x="0" y="8" text-anchor="middle" font-family="monospace" font-size="7.5" fill="#6b7799">Gemini · TF-IDF · RAG</text>
    <text x="0" y="20" text-anchor="middle" font-family="monospace" font-size="7" fill="#4f8ef7" opacity=".7">NagarSetu Cloud</text>
  </g>

  <!-- ══════════════ DATA PACKETS FLOATING UP ══════════════ -->
  <!-- from SOS to cloud -->
  <g style="animation:data-float 3s ease-out infinite">
    <rect x="392" y="200" width="22" height="12" rx="3" fill="#f43f5e" opacity=".85"/>
    <text x="403" y="210" text-anchor="middle" font-family="monospace" font-size="7" fill="#fff">SOS</text>
  </g>
  <g style="animation:data-float 3s ease-out infinite 1.5s">
    <rect x="388" y="200" width="30" height="12" rx="3" fill="#f43f5e" opacity=".75"/>
    <text x="403" y="210" text-anchor="middle" font-family="monospace" font-size="7" fill="#fff">📍GPS</text>
  </g>
  <!-- from EV to cloud -->
  <g style="animation:data-float 4s ease-out infinite .8s">
    <rect x="248" y="185" width="26" height="12" rx="3" fill="#22d3a0" opacity=".8"/>
    <text x="261" y="195" text-anchor="middle" font-family="monospace" font-size="7" fill="#fff">⚡EV</text>
  </g>
  <!-- from watch to cloud -->
  <g style="animation:data-float 3.5s ease-out infinite 1.2s">
    <rect x="430" y="190" width="28" height="12" rx="3" fill="#8b5cf6" opacity=".8"/>
    <text x="444" y="200" text-anchor="middle" font-family="monospace" font-size="7" fill="#fff">♥ HR</text>
  </g>
  <!-- from buildings to cloud -->
  <g style="animation:data-float 5s ease-out infinite .4s">
    <rect x="55" y="130" width="36" height="12" rx="3" fill="#4f8ef7" opacity=".75"/>
    <text x="73" y="140" text-anchor="middle" font-family="monospace" font-size="7" fill="#fff">REPORT</text>
  </g>
  <g style="animation:data-float 5s ease-out infinite 2.5s">
    <rect x="502" y="128" width="34" height="12" rx="3" fill="#fbbf24" opacity=".75"/>
    <text x="519" y="138" text-anchor="middle" font-family="monospace" font-size="7" fill="#111">ALERT</text>
  </g>

  <!-- ══════════════ DASHBOARD SCREEN (small) ══════════════ -->
  <g transform="translate(600,50)">
    <rect x="-32" y="-24" width="64" height="50" rx="5" fill="#0d1420" stroke="#4f8ef7" stroke-width=".8"/>
    <text x="0" y="-12" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#4f8ef7" font-weight="700">ADMIN</text>
    <!-- mini chart bars -->
    <rect x="-24" y="0" width="6" height="16" rx="1" fill="#f43f5e" opacity=".7"/>
    <rect x="-14" y="-6" width="6" height="22" rx="1" fill="#22d3a0" opacity=".7"/>
    <rect x="-4" y="-2" width="6" height="18" rx="1" fill="#4f8ef7" opacity=".7"/>
    <rect x="6" y="-8" width="6" height="24" rx="1" fill="#fbbf24" opacity=".7"/>
    <rect x="16" y="-4" width="6" height="20" rx="1" fill="#8b5cf6" opacity=".7"/>
    <!-- blink indicator -->
    <circle cx="24" cy="-14" r="3" fill="#22d3a0" style="animation:sign-blink 1.2s ease-in-out infinite"/>
  </g>

  <!-- ══════════════ TICKER BAR ══════════════ -->
  <rect x="0" y="396" width="680" height="24" fill="#0a1020" opacity=".95"/>
  <line x1="0" y1="396" x2="680" y2="396" stroke="#4f8ef7" stroke-width=".6" opacity=".4"/>
  <g clip-path="url(#ticker-clip)">
    <text font-family="monospace" font-size="9" fill="#6b7799" style="animation:scroll-ticker 22s linear infinite">
      <tspan x="0" y="413">
        ⬤ 13+ Modules  ·  ⬤ 218 Kotlin files  ·  ⬤ Gemini Flash AI  ·  ⬤ Wear OS SOS  ·  ⬤ 7 BIMSTEC Nations  ·  ⬤ Socket.IO Realtime  ·  ⬤ C++ Risk Engine  ·  ⬤ PWA Offline  ·  ⬤ 6 Themes  ·  ⬤ OSRM Eco Routing  ·
        ⬤ 13+ Modules  ·  ⬤ 218 Kotlin files  ·  ⬤ Gemini Flash AI  ·  ⬤ Wear OS SOS  ·  ⬤ 7 BIMSTEC Nations  ·  ⬤ Socket.IO Realtime  ·  ⬤ C++ Risk Engine  ·  ⬤ PWA Offline  ·  ⬤ 6 Themes  ·  ⬤ OSRM Eco Routing  ·
      </tspan>
    </text>
  </g>

  <!-- ══════════════ HERO TITLE overlay ══════════════ -->
  <rect x="0" y="340" width="680" height="56" fill="url(#sky)" opacity=".92"/>
  <text x="340" y="364" text-anchor="middle" font-family="monospace" font-size="22" fill="#ffffff" font-weight="700" letter-spacing="1">Nagar<tspan fill="#4f8ef7">Setu</tspan></text>
  <text x="340" y="384" text-anchor="middle" font-family="monospace" font-size="10" fill="#6b7799">Smart City Civic Platform · Bhopal &amp; Indore · v1.0.0</text>
</svg>


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
