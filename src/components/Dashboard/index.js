import React from "react";
import { CheckItem, SectionBadge, SectionTitle, GradientText } from "../UI";
import { DashboardIllustration } from "../Illustrations";

export default function Dashboard({ c }) {
  const items = [
    "Revenue trends & forecasting",
    "Cohort & funnel analysis",
    "Success rate optimization",
    "Custom report builder",
    "CSV / Excel export",
    "Slack & email alerts",
  ];
  return (
    <section className="section" style={{ background: c.bg }} id="analytics">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="dash-grid">
          <div>
            <SectionBadge color={c.purple} bg={c.purple + "18"} border={c.purple + "35"}>Analytics</SectionBadge>
            <SectionTitle style={{ color: c.hTag }}>
              Real-Time Insights<br />
              <GradientText gradient={c.gradPurple}>at Your Fingertips</GradientText>
            </SectionTitle>
            <p style={{ fontSize: 17, color: c.muted, lineHeight: 1.78, marginBottom: 32, fontWeight: 300 }}>
              Live dashboards, cohort analysis, custom reports, and revenue forecasting — all in one unified analytics suite.
            </p>
            {items.map((f, i) => <CheckItem key={i} color={c.purple}>{f}</CheckItem>)}
          </div>
          <div style={{
            borderRadius: 24, overflow: "hidden",
            border: `1px solid ${c.border}`,
            background: c.surface,
            boxShadow: `0 24px 70px ${c.purple}18`,
            animation: "float 7s ease-in-out infinite",
          }}>
            <DashboardIllustration c={c} />
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.dash-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
