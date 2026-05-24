import React, { useState } from "react";
import { products } from "../../utils/data";
import { SectionBadge, SectionTitle, GradientText, CheckItem, PrimaryButton } from "../UI";
import { getIllustration } from "../Illustrations";

export default function Products({ c }) {
  const [activeTab, setActiveTab] = useState("payin");
  const p = products[activeTab];
  const color = c[p.colorKey] || c.accent;
  const grad = c[p.gradKey] || c.grad1;
  const Illu = getIllustration(p.illu);

  return (
    <section id="products" className="section" style={{ background: c.productsBg }}>
      <div className="container">
        <SectionBadge color={c.accent} bg={c.accent + "18"} border={c.accent + "35"}>Products</SectionBadge>
        <SectionTitle style={{ color: c.hTag }}>
          Three Products.<br /><GradientText gradient={c.grad1}>One Platform.</GradientText>
        </SectionTitle>
        <p style={{ fontSize: 17, color: c.muted, lineHeight: 1.78, maxWidth: 560, marginBottom: 44, fontWeight: 300 }}>
          Whether you collect INR, send payouts, or go cross-border with crypto — unified infrastructure that scales with you.
        </p>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: 4, background: c.tabBg, border: `1px solid ${c.border}`,
          borderRadius: 16, padding: 4, marginBottom: 52, width: "fit-content", flexWrap: "wrap",
        }}>
          {[["payin","💳  PayIn"],["payout","🏦  PayOut"],["crypto","₿  Crypto"]].map(([k, label]) => {
            const pc = c[products[k].colorKey];
            const pg = c[products[k].gradKey];
            return (
              <button key={k} onClick={() => setActiveTab(k)} style={{
                padding: "12px clamp(18px,3vw,32px)", borderRadius: 12, fontSize: 15, fontWeight: 600,
                border: "none", cursor: "pointer", fontFamily: "inherit",
                transition: "all 0.3s cubic-bezier(.22,.68,0,1.2)",
                background: activeTab === k ? pg : "transparent",
                color: activeTab === k ? "#fff" : c.muted,
                boxShadow: activeTab === k ? `0 4px 20px ${pc}35` : "none",
              }}>{label}</button>
            );
          })}
        </div>

        {/* Panel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="product-panel">
          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: color + "1E", borderRadius: 100, padding: "6px 18px", marginBottom: 20,
            }}>
              <span style={{ fontSize: 14, fontWeight: 700, color }}>{p.emoji} {p.subtitle}</span>
            </div>
            <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 38, fontWeight: 700, letterSpacing: -1, marginBottom: 16, color: c.hTag }}>{p.title}</h3>
            <p style={{ fontSize: 16, color: c.muted, lineHeight: 1.82, marginBottom: 32, fontWeight: 300 }}>{p.desc}</p>
            <div style={{ marginBottom: 32 }}>
              {p.features.map((f, i) => <CheckItem key={i} color={color}>{f}</CheckItem>)}
            </div>
            {/* Mini stats */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
              {p.stats.map((s, i) => (
                <div key={i} style={{
                  background: color + "12", border: `1px solid ${color}30`,
                  borderRadius: 12, padding: "14px 20px", textAlign: "center",
                }}>
                  <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22, fontWeight: 700, color }}>{s.v}{s.s}</div>
                  <div style={{ fontSize: 12, color: c.muted, marginTop: 2, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <PrimaryButton gradient={grad} style={{ boxShadow: `0 8px 30px ${color}35` }}>Get API Keys →</PrimaryButton>
          </div>

          {/* Right — glass card */}
          <div style={{
            background: c.glassCard, border: `1px solid ${color}28`,
            borderRadius: 24, padding: 32,
            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 20px 60px ${color}1E`,
            animation: "float2 7s ease-in-out infinite",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: c.muted, textTransform: "uppercase" }}>Live Preview</span>
              <span style={{ fontSize: 11, fontWeight: 700, background: c.green + "22", color: c.green, padding: "4px 12px", borderRadius: 100 }}>● LIVE</span>
            </div>
            <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${c.border}`, background: c.surface + "60" }}>
              <Illu c={c} />
            </div>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              {p.txns.map((tx, i) => {
                const isSuccess = tx.status === "Success";
                return (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 14px", background: c.surface + "90", borderRadius: 10,
                    border: `1px solid ${c.border}`,
                  }}>
                    <div>
                      <div style={{ fontSize: 13, color: c.text, fontWeight: 600 }}>{tx.label}</div>
                      <div style={{ fontSize: 11, color: c.muted }}>{tx.sub}</div>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 14, fontWeight: 700, color: isSuccess ? c.green : c.gold }}>{tx.amount}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, background: (isSuccess ? c.green : c.gold) + "22", color: isSuccess ? c.green : c.gold, padding: "3px 9px", borderRadius: 100 }}>{tx.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.product-panel{grid-template-columns:1fr!important}} @media(max-width:560px){.product-panel h3{font-size:32px!important}}`}</style>
    </section>
  );
}
