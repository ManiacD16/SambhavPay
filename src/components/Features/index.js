import React from "react";
import { features } from "../../utils/data";
import { SectionBadge, SectionTitle, SectionSub, GradientText } from "../UI";
import { getIllustration } from "../Illustrations";

export default function Features({ c }) {
  return (
    <section id="features" className="section" style={{ background: c.bg }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionBadge color={c.accent} bg={c.accent + "18"} border={c.accent + "35"}>Why SambhavPay</SectionBadge>
          <SectionTitle style={{ color: c.hTag }}>
            Every Feature You Need.<br />
            <GradientText gradient={c.grad1}>Nothing You Don't.</GradientText>
          </SectionTitle>
          <SectionSub style={{ color: c.muted, margin: "0 auto" }}>
            Engineered for reliability, speed, and developer happiness at every scale.
          </SectionSub>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 24 }}>
          {features.map((f, i) => {
            const color = c[f.colorKey] || c.accent;
            const Illu = getIllustration(f.illu);
            return (
              <div key={i} style={{
                background: c.cardSoft, border: `1px solid ${c.border}`,
                borderRadius: 20, padding: 32,
                transition: "all 0.35s cubic-bezier(.22,.68,0,1.2)",
                cursor: "pointer", position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color + "55";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 20px 50px ${color}18`;
                  e.currentTarget.style.background = c.cardHover;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = c.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = c.cardSoft;
                }}
              >
                <div style={{ display: "flex", gap: 18, marginBottom: 22, alignItems: "flex-start" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: color + "22", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 24, flexShrink: 0,
                  }}>{f.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 19, fontWeight: 600, marginBottom: 6, color: c.hTag }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: c.muted, lineHeight: 1.72 }}>{f.desc}</p>
                  </div>
                </div>
                <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${c.border}`, background: c.surface + "80" }}>
                  <Illu c={c} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
