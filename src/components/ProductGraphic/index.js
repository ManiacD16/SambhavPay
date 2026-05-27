import React from "react";

const positions = [
  { x: 160, y: 36 },
  { x: 270, y: 110 },
  { x: 160, y: 184 },
  { x: 50, y: 110 },
];

export default function ProductGraphic({ product, c }) {
  const accent = c[product.accentKey] || c.accent;
  const nodes = product.visual?.nodes || [];

  return (
    <div className="product-graphic-card" style={{ "--product-accent": accent }}>
      <div className="product-graphic-header">
        <span>{product.visual?.title || product.title}</span>
        <small>LIVE</small>
      </div>

      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="product-graphic-svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`core-${product.slug}`} x1="84" y1="58" x2="238" y2="164" gradientUnits="userSpaceOnUse">
            <stop stopColor={accent} stopOpacity="0.95" />
            <stop offset="0.55" stopColor={c.accent} stopOpacity="0.85" />
            <stop offset="1" stopColor={c.purple} stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id={`glow-${product.slug}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 112) rotate(90) scale(92 132)">
            <stop stopColor={accent} stopOpacity="0.36" />
            <stop offset="1" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="18" y="10" width="284" height="200" rx="24" fill={`url(#glow-${product.slug})`} />
        <circle cx="160" cy="110" r="76" stroke={accent} strokeOpacity="0.22" strokeDasharray="7 7" />
        <circle cx="160" cy="110" r="48" stroke={c.border} strokeOpacity="0.9" strokeDasharray="4 6" />

        {nodes.slice(0, 4).map((node, index) => {
          const pos = positions[index];
          const color = [accent, c.green, c.gold, c.purple][index] || accent;

          return (
            <g key={node}>
              <line x1="160" y1="110" x2={pos.x} y2={pos.y} stroke={color} strokeOpacity="0.42" strokeDasharray="6 6" />
              <rect x={pos.x - 44} y={pos.y - 20} width="88" height="40" rx="13" fill={c.surface} stroke={color} strokeOpacity="0.5" />
              <rect x={pos.x - 31} y={pos.y - 7} width="62" height="6" rx="3" fill={color} fillOpacity="0.58" />
              <text x={pos.x} y={pos.y + 14} textAnchor="middle" fontSize="9" fontWeight="700" fill={color}>
                {node}
              </text>
            </g>
          );
        })}

        <rect x="111" y="75" width="98" height="70" rx="20" fill={`url(#core-${product.slug})`} filter="drop-shadow(0 20px 36px rgba(37,99,255,.28))" />
        <rect x="128" y="93" width="64" height="10" rx="5" fill="white" fillOpacity="0.78" />
        <rect x="136" y="113" width="48" height="8" rx="4" fill="white" fillOpacity="0.38" />
        <text x="160" y="136" textAnchor="middle" fontSize="11" fontWeight="800" fill="white">
          {product.visual?.center || "API"}
        </text>
      </svg>

      <div className="product-graphic-footer">
        {product.visual?.footer}
      </div>
    </div>
  );
}
