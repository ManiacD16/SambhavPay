import React from "react";
import { footerLinks } from "../../utils/data";
import { site } from "../../config/site";

const resolveHref = (label) => {
  const key = label.toLowerCase();
  if (key.includes("payin") || key.includes("payout") || key.includes("treasury")) return "#products";
  if (key.includes("api") || key.includes("docs") || key.includes("webhook")) return "#docs";
  if (key.includes("contact") || key.includes("partnership")) return "#contact";
  if (key.includes("sitemap")) return "/sitemap.xml";
  if (key.includes("llms")) return "/llms.txt";
  if (key.includes("ai discovery")) return "/ai-discovery.json";
  if (key.includes("manifest")) return "/manifest.webmanifest";
  return "#features";
};

export default function Footer({ c, scrollTo }) {
  const navigate = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      scrollTo?.(href.replace("#", ""));
    }
  };

  return (
    <footer style={{ background: c.surface, borderTop: `1px solid ${c.border}`, padding: "70px 24px 32px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: c.sectionDivider }} />
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 52 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ width: 34, height: 34, borderRadius: 12, background: c.grad1, display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: `0 10px 24px ${c.accent}28` }}>
                <span style={{ width: 14, height: 14, borderRadius: 5, background: "rgba(255,255,255,.92)", transform: "rotate(45deg)" }} />
              </span>
              <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 24, fontWeight: 700, color: c.hTag }}>SambhavPay</span>
            </div>
            <p style={{ fontSize: 14, color: c.muted, lineHeight: 1.8, maxWidth: 320, marginBottom: 20 }}>
              Premium payment infrastructure for PayIn, PayOut, API workflows, analytics, and scale-ready fintech operations.
            </p>
            <a href={site.url} style={{ fontSize: 13, color: c.accent, fontWeight: 750, display: "inline-block", marginBottom: 18 }}>{site.domain}</a>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[["Security-first", c.accent], ["API-led", c.blue], ["Enterprise-ready", c.green]].map(([l, col]) => (
                <span key={l} style={{ fontSize: 11, fontWeight: 800, padding: "5px 12px", borderRadius: 100, background: col + "12", color: col, border: `1px solid ${col}24` }}>{l}</span>
              ))}
            </div>
          </div>

          {footerLinks.map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: c.muted, marginBottom: 18 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map((l, j) => {
                  const href = resolveHref(l);
                  return (
                    <a key={j} href={href} onClick={(event) => navigate(event, href)} style={{ fontSize: 14, color: c.muted, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = c.accent}
                      onMouseLeave={e => e.currentTarget.style.color = c.muted}
                    >{l}</a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: c.muted }}>© 2026 {site.legalName}. All rights reserved.</p>
          <p style={{ fontSize: 13, color: c.muted }}>Built for secure fintech operations · Sitemap · llms.txt · AI discovery ready</p>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.footer-grid{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}
