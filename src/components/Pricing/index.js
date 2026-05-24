import React from "react";
import { pricing } from "../../utils/data";
import { SectionBadge, SectionTitle, GradientText } from "../UI";

export default function Pricing({ c, scrollTo }) {
  return (
    <section id="pricing" className="section" style={{ background: c.surface }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionBadge color={c.accent} bg={c.accent + "18"} border={c.accent + "35"}>Pricing</SectionBadge>
          <SectionTitle style={{ color: c.hTag }}>
            Transparent.<br /><GradientText gradient={c.grad1}>No Hidden Fees.</GradientText>
          </SectionTitle>
          <p style={{ fontSize: 17, color: c.muted, lineHeight: 1.78, fontWeight: 300, margin: "0 auto", maxWidth: 480 }}>
            Start free, scale as you grow. No contracts. Cancel anytime.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24 }} className="pricing-grid">
          {pricing.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? c.glassCard : c.cardSoft,
              border: `${plan.highlight ? "2px" : "1px"} solid ${plan.highlight ? c.accent : c.border}`,
              borderRadius: 24, padding: "40px 32px",
              position: "relative",
              boxShadow: plan.highlight ? c.shadow : "0 14px 40px rgba(7,24,47,0.04)",
              backdropFilter: plan.highlight ? "blur(20px)" : "none",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { if (!plan.highlight) { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${c.accent}15`; } }}
              onMouseLeave={e => { if (!plan.highlight) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(7,24,47,0.04)"; } }}
            >
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
                  background: c.grad1, color: "#fff", fontSize: 11, fontWeight: 700,
                  padding: "6px 24px", borderRadius: "0 0 12px 12px",
                  letterSpacing: "1.5px", textTransform: "uppercase", whiteSpace: "nowrap",
                }}>Most Popular</div>
              )}
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: c.muted, marginBottom: 12 }}>{plan.name}</div>
              <div style={{
                fontFamily: "'Clash Display', sans-serif", fontSize: 50, fontWeight: 700, letterSpacing: -2,
                background: plan.highlight ? c.grad1 : "none",
                WebkitBackgroundClip: plan.highlight ? "text" : "none",
                WebkitTextFillColor: plan.highlight ? "transparent" : c.hTag,
                marginBottom: 4,
              }}>{plan.price}</div>
              <div style={{ fontSize: 14, color: c.muted, marginBottom: 32 }}>{plan.period}</div>
              <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 28, marginBottom: 32, display: "flex", flexDirection: "column", gap: 13 }}>
                {plan.perks.map((p2, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: c.green, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: c.text }}>{p2}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo("contact")} style={{
                width: "100%", padding: "14px", borderRadius: 12, fontWeight: 600, fontSize: 15,
                fontFamily: "inherit", cursor: "pointer", transition: "all 0.3s",
                background: plan.highlight ? c.grad1 : "transparent",
                border: plan.highlight ? "none" : `1.5px solid ${c.border}`,
                color: plan.highlight ? "#fff" : c.text,
                boxShadow: plan.highlight ? `0 8px 30px ${c.accent}30` : "none",
              }}
                onMouseEnter={e => { if (!plan.highlight) { e.currentTarget.style.borderColor = c.accent; e.currentTarget.style.color = c.accent; } }}
                onMouseLeave={e => { if (!plan.highlight) { e.currentTarget.style.borderColor = c.border; e.currentTarget.style.color = c.text; } }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:980px){.pricing-grid{grid-template-columns:1fr!important;max-width:560px;margin:0 auto}}`}</style>
    </section>
  );
}
