import React, { useState } from "react";
import { faqs } from "../../utils/data";
import { SectionBadge, SectionTitle, GradientText } from "../UI";

export default function FAQ({ c }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="section" style={{ background: c.surface }} id="faq">
      <div className="container" style={{ maxWidth: 780 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <SectionBadge color={c.accent} bg={c.accent + "18"} border={c.accent + "35"}>FAQ</SectionBadge>
          <SectionTitle style={{ color: c.hTag }}>
            Common <GradientText gradient={c.grad1}>Questions</GradientText>
          </SectionTitle>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            border: `1px solid ${open === i ? c.accent + "50" : c.border}`,
            borderRadius: 16, marginBottom: 12, overflow: "hidden",
            transition: "border-color 0.3s",
          }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{
              width: "100%", textAlign: "left", padding: "22px 28px",
              background: open === i ? c.accent + "10" : c.faqButton,
              border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between",
              alignItems: "center", fontFamily: "inherit", transition: "background 0.25s",
            }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: c.text, paddingRight: 20 }}>{faq.q}</span>
              <span style={{ fontSize: 24, color: c.accent, transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0 }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: "0 28px 22px", borderTop: `1px solid ${c.border}`, paddingTop: 18 }}>
                <p style={{ fontSize: 15, color: c.muted, lineHeight: 1.82 }}>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
