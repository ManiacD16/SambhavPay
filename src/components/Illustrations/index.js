import React from "react";

export function PayInIllustration({ c }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
      <rect x="20" y="16" width="280" height="188" rx="16" fill={c.card} stroke={c.accent} strokeWidth="0.8" strokeOpacity="0.3"/>
      <rect x="20" y="16" width="280" height="52" rx="16" fill={c.accent} fillOpacity="0.1"/>
      <rect x="20" y="52" width="280" height="2" fill={c.accent} fillOpacity="0.1"/>
      <rect x="36" y="32" width="44" height="8" rx="4" fill={c.accent} fillOpacity="0.7"/>
      <rect x="36" y="48" width="64" height="6" rx="3" fill={c.muted} fillOpacity="0.4"/>
      <rect x="238" y="28" width="48" height="26" rx="8" fill={c.accent} fillOpacity="0.18"/>
      <text x="262" y="44" fontSize="11" fill={c.accent} textAnchor="middle" fontWeight="700">UPI</text>
      {[0,1,2,3].map(i => (
        <g key={i} transform={`translate(0,${i * 34})`}>
          <rect x="36" y="74" width="248" height="26" rx="8" fill={c.surface} fillOpacity={0.6 - i * 0.08}/>
          <circle cx="56" cy="87" r="9" fill={[c.accent, c.purple, c.green, c.gold][i]} fillOpacity="0.25"/>
          <text x="56" y="91" fontSize="8" textAnchor="middle" fill={[c.accent, c.purple, c.green, c.gold][i]}>
            {["↑","₹","B","✓"][i]}
          </text>
          <rect x="72" y="81" width={[64, 56, 48, 72][i]} height="6" rx="3" fill={c.text} fillOpacity="0.55"/>
          <rect x="72" y="91" width={[40, 32, 44, 36][i]} height="4" rx="2" fill={c.muted} fillOpacity="0.35"/>
          <rect x="218" y="79" width="54" height="14" rx="7" fill={[c.green, c.green, c.gold, c.green][i]} fillOpacity="0.2"/>
          <rect x="222" y="83" width="46" height="6" rx="3" fill={[c.green, c.green, c.gold, c.green][i]}/>
        </g>
      ))}
    </svg>
  );
}

export function PayOutIllustration({ c }) {
  const nodes = [
    { x: 20, y: 120, label: "Vendors", col: c.accent },
    { x: 120, y: 120, label: "Salary", col: c.green },
    { x: 220, y: 120, label: "Partners", col: c.gold },
  ];
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
      <rect x="110" y="10" width="100" height="72" rx="14" fill={c.purple} fillOpacity="0.14" stroke={c.purple} strokeWidth="0.8" strokeOpacity="0.4"/>
      <rect x="124" y="26" width="72" height="8" rx="4" fill={c.purple} fillOpacity="0.55"/>
      <rect x="124" y="42" width="50" height="6" rx="3" fill={c.muted} fillOpacity="0.35"/>
      <rect x="124" y="56" width="36" height="14" rx="6" fill={c.purple} fillOpacity="0.3"/>
      <text x="142" y="66" fontSize="8" fill={c.purple} fontWeight="700">BATCH</text>
      <circle cx="160" cy="46" r="0" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1={160} y1={82} x2={n.x + 40} y2={n.y} stroke={n.col} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="5,4"/>
          <rect x={n.x} y={n.y} width="80" height="86" rx="14" fill={n.col} fillOpacity="0.1" stroke={n.col} strokeWidth="0.8" strokeOpacity="0.35"/>
          <rect x={n.x + 14} y={n.y + 18} width="52" height="8" rx="4" fill={n.col} fillOpacity="0.45"/>
          <rect x={n.x + 14} y={n.y + 34} width="36" height="6" rx="3" fill={n.col} fillOpacity="0.25"/>
          <rect x={n.x + 8} y={n.y + 56} width="64" height="20" rx="8" fill={n.col} fillOpacity="0.18"/>
          <text x={n.x + 40} y={n.y + 69} fontSize="9" fill={n.col} textAnchor="middle" fontWeight="700">{n.label}</text>
        </g>
      ))}
      <circle cx="160" cy="46" r="18" fill={c.purple} fillOpacity="0.18" stroke={c.purple} strokeWidth="1"/>
      <text x="160" y="51" fontSize="14" textAnchor="middle" fill={c.purple}>⚡</text>
    </svg>
  );
}

export function DashboardIllustration({ c }) {
  const bars = [40, 80, 60, 100, 70, 90, 55, 95, 75, 110, 85, 120];
  return (
    <svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
      <rect width="340" height="240" rx="16" fill={c.card} stroke={c.border} strokeWidth="0.5"/>
      <rect width="340" height="42" rx="16" fill={c.accent} fillOpacity="0.07"/>
      <rect x="14" y="13" width="76" height="8" rx="4" fill={c.accent} fillOpacity="0.55"/>
      <rect x="14" y="27" width="50" height="5" rx="2.5" fill={c.muted} fillOpacity="0.3"/>
      <rect x="266" y="12" width="62" height="20" rx="6" fill={c.accent} fillOpacity="0.18"/>
      <text x="297" y="25" fontSize="9" fill={c.accent} textAnchor="middle" fontWeight="700">LIVE ●</text>
      {[
        { x: 12, w: 73, col: c.accent, val: "₹42L" },
        { x: 93, w: 73, col: c.green, val: "98.7%" },
        { x: 174, w: 73, col: c.purple, val: "12.4K" },
        { x: 255, w: 73, col: c.gold, val: "₹18L" },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={52} width={s.w} height={48} rx="8" fill={s.col} fillOpacity="0.1" stroke={s.col} strokeWidth="0.5" strokeOpacity="0.35"/>
          <rect x={s.x + 8} y={62} width="28" height="5" rx="2.5" fill={s.col} fillOpacity="0.5"/>
          <text x={s.x + s.w / 2} y={87} fontSize="13" textAnchor="middle" fill={s.col} fontWeight="700">{s.val}</text>
        </g>
      ))}
      <rect x="12" y="108" width="200" height="120" rx="8" fill={c.surface} fillOpacity="0.5" stroke={c.border} strokeWidth="0.5"/>
      {bars.map((h, i) => (
        <rect key={i} x={20 + i * 16} y={218 - h} width="10" height={h} rx="3"
          fill={c.accent} fillOpacity={0.25 + i * 0.05}/>
      ))}
      <rect x="220" y="108" width="108" height="58" rx="8" fill={c.surface} fillOpacity="0.5" stroke={c.border} strokeWidth="0.5"/>
      <circle cx="256" cy="137" r="22" fill="none" stroke={c.accent} strokeWidth="7" strokeDasharray="65 103" strokeLinecap="round" transform="rotate(-90 256 137)"/>
      <circle cx="256" cy="137" r="22" fill="none" stroke={c.purple} strokeWidth="7" strokeDasharray="26 103" strokeLinecap="round" transform="rotate(137 256 137)"/>
      <circle cx="256" cy="137" r="22" fill="none" stroke={c.green} strokeWidth="7" strokeDasharray="12 103" strokeLinecap="round" transform="rotate(228 256 137)"/>
      <text x="256" y="141" fontSize="9" textAnchor="middle" fill={c.text} fontWeight="700">98.7%</text>
      <rect x="220" y="174" width="108" height="54" rx="8" fill={c.surface} fillOpacity="0.5" stroke={c.border} strokeWidth="0.5"/>
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x="230" y={182 + i * 16} width="88" height="9" rx="4.5" fill={c.border}/>
          <rect x="230" y={182 + i * 16} width={[70, 50, 84][i]} height="9" rx="4.5" fill={[c.green, c.gold, c.accent][i]} fillOpacity="0.65"/>
        </g>
      ))}
    </svg>
  );
}

export function SecurityIllustration({ c }) {
  const labels = [
    { angle: 20,  label: "PCI-DSS",  col: c.accent  },
    { angle: 80,  label: "SSL/TLS",  col: c.purple  },
    { angle: 140, label: "AML",      col: c.gold    },
    { angle: 200, label: "KYC",      col: c.red     },
    { angle: 260, label: "ISO27001", col: c.green   },
    { angle: 320, label: "3D Secure",col: c.accent  },
  ];
  return (
    <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
      <circle cx="160" cy="110" r="95" fill="none" stroke={c.green} strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="7,5"/>
      <circle cx="160" cy="110" r="68" fill="none" stroke={c.green} strokeWidth="0.5" strokeOpacity="0.28" strokeDasharray="4,7"/>
      <circle cx="160" cy="110" r="38" fill={c.green} fillOpacity="0.08" stroke={c.green} strokeWidth="1" strokeOpacity="0.45"/>
      <path d="M160 82 C160 82 140 91 140 104 L140 116 C140 129 160 144 160 144 C160 144 180 129 180 116 L180 104 C180 91 160 82 160 82Z"
        fill={c.green} fillOpacity="0.22" stroke={c.green} strokeWidth="1.5"/>
      <path d="M150 111 L157 118 L172 103" stroke={c.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {labels.map((item, i) => {
        const rad = (item.angle - 90) * Math.PI / 180;
        const cx2 = 160 + 95 * Math.cos(rad);
        const cy2 = 110 + 95 * Math.sin(rad);
        return (
          <g key={i}>
            <line x1={160 + 40 * Math.cos(rad)} y1={110 + 40 * Math.sin(rad)}
              x2={cx2 - 30 * Math.cos(rad)} y2={cy2 - 30 * Math.sin(rad)}
              stroke={item.col} strokeWidth="0.5" strokeOpacity="0.45" strokeDasharray="3,4"/>
            <rect x={cx2 - 30} y={cy2 - 13} width="60" height="24" rx="7"
              fill={item.col} fillOpacity="0.12" stroke={item.col} strokeWidth="0.5" strokeOpacity="0.55"/>
            <text x={cx2} y={cy2 + 4} fontSize="8.5" textAnchor="middle" fill={item.col} fontWeight="700">{item.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

export function APIIllustration({ c }) {
  const lines = [
    { y: 54, indent: 0,  text: "POST /payments/create", col: c.green },
    { y: 69, indent: 16, text: '"amount": 50000,',       col: c.gold  },
    { y: 84, indent: 16, text: '"currency": "INR",',     col: c.gold  },
    { y: 99, indent: 16, text: '"method": "upi",',       col: c.gold  },
    { y: 116, indent: 0, text: "→ 200 OK",               col: c.green },
    { y: 131, indent: 16, text: '"id": "pay_8xGf3k...",', col: c.accent },
    { y: 146, indent: 16, text: '"status": "created"',   col: c.accent },
  ];
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
      <rect x="0" y="0" width="320" height="200" rx="14" fill={c.card} stroke={c.border} strokeWidth="0.5"/>
      <rect x="0" y="0" width="320" height="32" rx="14" fill={c.surface} fillOpacity="0.6"/>
      <circle cx="18" cy="16" r="5" fill="#FF5F57"/>
      <circle cx="32" cy="16" r="5" fill="#FFBD2E"/>
      <circle cx="46" cy="16" r="5" fill="#28CA41"/>
      <rect x="62" y="9" width="120" height="14" rx="7" fill={c.border}/>
      <text x="122" y="20" fontSize="8" textAnchor="middle" fill={c.muted} fontFamily="monospace">https://api.SambhavPay.in/v1</text>
      {lines.map((l, i) => (
        <text key={i} x={14 + l.indent} y={l.y} fontSize="9" fill={l.col} fontFamily="monospace"
          fontWeight={l.indent === 0 ? "700" : "400"}>{l.text}</text>
      ))}
      <rect x="0" y="162" width="320" height="38" rx="14" fill={c.accent} fillOpacity="0.06"/>
      <rect x="14" y="171" width="70" height="7" rx="3.5" fill={c.accent} fillOpacity="0.45"/>
      <rect x="14" y="183" width="110" height="5" rx="2.5" fill={c.muted} fillOpacity="0.3"/>
      <rect x="224" y="168" width="82" height="26" rx="8" fill={c.accent} fillOpacity="0.18"/>
      <text x="265" y="184" fontSize="9" textAnchor="middle" fill={c.accent} fontWeight="700">RUN →</text>
    </svg>
  );
}

export function getIllustration(key) {
  const map = { payin: PayInIllustration, payout: PayOutIllustration, dashboard: DashboardIllustration, security: SecurityIllustration, api: APIIllustration };
  return map[key] || PayInIllustration;
}