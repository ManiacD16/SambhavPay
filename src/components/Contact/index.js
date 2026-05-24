import React, { useState } from "react";
import { contactInfo } from "../../utils/data";
import { site } from "../../config/site";
import { SectionBadge, SectionTitle, GradientText, PrimaryButton } from "../UI";

const inputBase = (c) => ({
  background: c.inputBg,
  border: `1px solid ${c.border}`,
  borderRadius: 12,
  padding: "13px 16px",
  fontSize: 15,
  color: c.text,
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
});

export default function Contact({ c }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", volume: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const focus = (e) => { e.target.style.borderColor = c.accent; e.target.style.boxShadow = `0 0 0 4px ${c.accent}16`; };
  const blur = (e) => { e.target.style.borderColor = c.border; e.target.style.boxShadow = "none"; };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", company: "", volume: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section" style={{ background: c.bg }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="contact-grid">
          <div>
            <SectionBadge color={c.accent} bg={c.accent + "14"} border={c.accent + "30"}>Contact</SectionBadge>
            <SectionTitle style={{ color: c.hTag }}>
              Let's Get<br /><GradientText gradient={c.grad1}>You Started</GradientText>
            </SectionTitle>
            <p style={{ fontSize: 17, color: c.muted, lineHeight: 1.78, marginBottom: 42, fontWeight: 400 }}>
              Tell us what you are building. The contact flow is optimized for sales, partnerships, technical scoping, and implementation conversations.
            </p>

            <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-card" style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: 18, border: `1px solid ${c.border}`, borderRadius: 18, background: c.cardSoft, boxShadow: c.mode === "dark" ? "0 18px 46px rgba(0,0,0,0.22)" : "0 12px 34px rgba(7,24,47,0.04)" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 15,
                    background: i === 0 ? c.grad1 : c.surface,
                    color: i === 0 ? "#fff" : c.text,
                    border: `1px solid ${i === 0 ? "transparent" : c.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: c.text, marginBottom: 5 }}>{item.title}</div>
                    {item.lines.map((l, j) => <div key={j} style={{ fontSize: 14, color: c.muted, lineHeight: 1.6, overflowWrap: "anywhere" }}>{l}</div>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="map-card" aria-label="India market focus map illustration" style={{ position: "relative", overflow: "hidden", minHeight: 176, borderRadius: 22, border: `1px solid ${c.border}`, background: `linear-gradient(135deg,${c.accent}16,${c.blue}12), ${c.surface}`, boxShadow: "0 18px 55px rgba(7,24,47,.07)" }}>
              <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 70% 35%, ${c.accent}28, transparent 28%), radial-gradient(circle at 28% 70%, ${c.blue}22, transparent 30%)` }} />
              <div style={{ position: "relative", padding: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: c.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Market Focus</div>
                <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 26, color: c.hTag, fontWeight: 700, marginBottom: 8 }}>India-first. Globally scalable.</div>
                <p style={{ color: c.muted, fontSize: 14, maxWidth: 430, lineHeight: 1.7 }}>Built around enterprise fintech use cases, operational trust, and API-led payment infrastructure.</p>
              </div>
            </div>
          </div>

          <div style={{
            background: c.glassCard, border: `1px solid ${c.glassBorder}`,
            borderRadius: 26, padding: 44, backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)", boxShadow: c.shadow,
          }} className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 24px" }} role="status" aria-live="polite">
                <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 26, fontWeight: 700, marginBottom: 10, color: c.hTag }}>Message Captured</h3>
                <p style={{ color: c.muted, fontSize: 15 }}>This demo form confirmed the premium UX state. Connect it to your backend or Netlify form handler for production.</p>
              </div>
            ) : (
              <form onSubmit={submit} name="sambhavpay-contact" data-netlify="true">
                <input type="hidden" name="form-name" value="sambhavpay-contact" />
                <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 25, fontWeight: 700, marginBottom: 8, color: c.hTag }}>Send a Message</h3>
                <p style={{ color: c.muted, fontSize: 14, marginBottom: 26 }}>Secure enquiry flow for {site.domain}</p>
                <div className="form-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  {[["name","Full Name","Your name"],["email","Work Email","Work email address"]].map(([k, label, ph]) => (
                    <div key={k}>
                      <label htmlFor={k} style={{ fontSize: 12, fontWeight: 800, color: c.muted, letterSpacing: "0.5px", display: "block", marginBottom: 7, textTransform: "uppercase" }}>{label}</label>
                      <input id={k} name={k} type={k === "email" ? "email" : "text"} placeholder={ph} value={form[k]} onChange={update(k)} required style={inputBase(c)} onFocus={focus} onBlur={blur} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="company" style={{ fontSize: 12, fontWeight: 800, color: c.muted, letterSpacing: "0.5px", display: "block", marginBottom: 7, textTransform: "uppercase" }}>Company</label>
                  <input id="company" name="company" placeholder="Company name" value={form.company} onChange={update("company")} style={inputBase(c)} onFocus={focus} onBlur={blur} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="volume" style={{ fontSize: 12, fontWeight: 800, color: c.muted, letterSpacing: "0.5px", display: "block", marginBottom: 7, textTransform: "uppercase" }}>Monthly Volume</label>
                  <select id="volume" name="volume" value={form.volume} onChange={update("volume")} style={{ ...inputBase(c), color: form.volume ? c.text : c.muted, appearance: "none" }} onFocus={focus} onBlur={blur}>
                    <option value="">Select volume range</option>
                    <option>Under ₹10L/month</option>
                    <option>₹10L – ₹1Cr/month</option>
                    <option>₹1Cr – ₹10Cr/month</option>
                    <option>₹10Cr+/month</option>
                  </select>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label htmlFor="message" style={{ fontSize: 12, fontWeight: 800, color: c.muted, letterSpacing: "0.5px", display: "block", marginBottom: 7, textTransform: "uppercase" }}>Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your payment infrastructure requirement..." value={form.message} onChange={update("message")} required style={{ ...inputBase(c), resize: "vertical", minHeight: 118 }} onFocus={focus} onBlur={blur} />
                </div>
                <PrimaryButton type="submit" gradient={c.grad1} style={{ width: "100%", padding: "16px", fontSize: 16, borderRadius: 14, textAlign: "center" }}>
                  Send Message →
                </PrimaryButton>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}.contact-form-card{padding:30px!important}}
        @media(max-width:580px){.form-two{grid-template-columns:1fr!important}.contact-card{padding:15px!important}}
      `}</style>
    </section>
  );
}
