import React from "react";
import { SectionBadge, SectionTitle, GradientText, CheckItem, PrimaryButton, OutlineButton } from "../UI";
import { APIIllustration } from "../Illustrations";
import { site } from "../../config/site";

export default function Docs({ c }) {
  const docItems = [
    "REST API structure with JSON-first contracts",
    "SDK-friendly examples for Node.js, Python, PHP, Java, and Go",
    "Webhook events with HMAC-SHA256 signing pattern",
    "Sandbox-ready flows and test payment states",
    "Postman and Insomnia collection architecture",
    "Guided integration checklist for production teams",
  ];
  return (
    <section id="docs" className="section" style={{ background: c.bg }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }} className="docs-grid">
          <div>
            <SectionBadge color={c.gold} bg={c.gold + "14"} border={c.gold + "30"}>API Docs</SectionBadge>
            <SectionTitle style={{ color: c.hTag }}>
              Integrate in<br /><GradientText gradient={c.grad1}>Under an Hour</GradientText>
            </SectionTitle>
            <p style={{ fontSize: 17, color: c.muted, lineHeight: 1.78, marginBottom: 32, fontWeight: 400 }}>
              Clear APIs, signed webhooks, predictable statuses, and a developer journey built for fast evaluation and clean handoff to production teams.
            </p>
            {docItems.map((f, i) => <CheckItem key={i} color={c.gold}>{f}</CheckItem>)}
            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              <PrimaryButton gradient={c.grad1} style={{ boxShadow: `0 10px 34px ${c.gold}28` }} onClick={() => window.open(site.docsPath, "_self")}>Read Full Docs</PrimaryButton>
              <OutlineButton c={c} onClick={() => window.open(`${site.url}llms.txt`, "_blank", "noopener,noreferrer")}>AI Discovery →</OutlineButton>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: 22, overflow: "hidden", border: `1px solid ${c.border}`, boxShadow: `0 22px 65px ${c.gold}14`, marginBottom: 20, animation: "float 6s ease-in-out infinite", background: c.surface }}>
              <APIIllustration c={c} />
            </div>
            <div className="code-card" style={{ background: c.codeBg, borderRadius: 18, padding: 24, border: `1px solid rgba(255,255,255,.08)`, boxShadow: "0 22px 70px rgba(7,24,47,0.16)" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 16, alignItems: "center" }}>
                {["#FF5F57","#FFBD2E","#28CA41"].map((col, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: col }} />)}
                <span style={{ marginLeft: 8, fontSize: 11, color: "#94A3B8", fontFamily: "monospace" }}>sambhavpay-sdk.js</span>
              </div>
              <pre style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, lineHeight: 1.9, overflowX: "auto", color: "#D8E6F8", margin: 0 }}>
                <span style={{color:"#7dd3fc"}}>const</span>{" "}sambhavpay = <span style={{color:"#7dd3fc"}}>new</span>{" "}
                <span style={{color:"#fdba74"}}>SambhavPay</span>({"{"} apiKey {"}"});{"\n\n"}
                <span style={{color:"#94a3b8"}}>{"// Create a payment order"}</span>{"\n"}
                <span style={{color:"#7dd3fc"}}>const</span> order = <span style={{color:"#7dd3fc"}}>await</span> sambhavpay{"\n"}
                {"  "}.payments.<span style={{color:"#fdba74"}}>create</span>({"{"}{"\n"}
                {"    "}amount: <span style={{color:"#86efac"}}>50000</span>,{"\n"}
                {"    "}currency: <span style={{color:"#fca5a5"}}>"INR"</span>,{"\n"}
                {"    "}method: <span style={{color:"#fca5a5"}}>"upi"</span>,{"\n"}
                {"    "}webhook: <span style={{color:"#fca5a5"}}>"{site.url}webhooks/payments"</span>{"\n"}
                {"  "}{"}"});{"\n\n"}
                <span style={{color:"#94a3b8"}}>{"// ✓ 200 · id: \"pay_8xGf3k...\""}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.docs-grid{grid-template-columns:1fr!important}.code-card{padding:18px!important}}
      `}</style>
    </section>
  );
}
