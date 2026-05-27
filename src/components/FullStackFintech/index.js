import React from "react";
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Code2,
    Database,
    GraduationCap,
    Landmark,
    Layers,
    Plane,
    Plug,
    Rocket,
    Server,
    ShieldCheck,
    ShoppingCart,
    Terminal,
    Webhook,
    Zap,
} from "lucide-react";
import { GradientText, PrimaryButton, SectionBadge, SectionTitle } from "../UI";

const developerItems = [
    {
        title: "REST APIs",
        desc: "Clean JSON-first APIs for payments, payouts, verification and settlement workflows.",
        Icon: Code2,
    },
    {
        title: "Sandbox",
        desc: "Test payment journeys safely before moving your integration to production.",
        Icon: Terminal,
    },
    {
        title: "Webhooks",
        desc: "Receive real-time transaction, status and settlement updates in your system.",
        Icon: Webhook,
    },
    {
        title: "Easy Integration",
        desc: "Developer-friendly flows built for fast handoff between business and tech teams.",
        Icon: Plug,
    },
];

const industries = [
    {
        title: "Fintech Startups",
        desc: "Launch payment products faster with ready infrastructure.",
        Icon: Rocket,
    },
    {
        title: "eCommerce",
        desc: "Accept payments and automate order-linked transactions.",
        Icon: ShoppingCart,
    },
    {
        title: "Travel",
        desc: "Power booking payments, refunds and partner payouts.",
        Icon: Plane,
    },
    {
        title: "SaaS Platforms",
        desc: "Embed recurring and platform payment workflows.",
        Icon: Building2,
    },
    {
        title: "Education",
        desc: "Enable fee collection, reminders and reconciliation.",
        Icon: GraduationCap,
    },
    {
        title: "NBFC",
        desc: "Support verification, collections and settlement operations.",
        Icon: Landmark,
    },
];

export default function FullStackFintech({ c, scrollTo }) {
    return (
        <section
            id="fintech-stack"
            className="section fintech-stack-section"
            style={{
                background: c.bg,
                "--fintech-bg": c.bg,
                "--fintech-surface": c.surface,
                "--fintech-card": c.glassCard,
                "--fintech-soft-card": c.cardSoft,
                "--fintech-border": c.border,
                "--fintech-text": c.text,
                "--fintech-muted": c.muted,
                "--fintech-accent": c.accent,
                "--fintech-purple": c.purple,
                "--fintech-green": c.green,
                "--fintech-gold": c.gold,
                "--fintech-gradient": c.grad1,
                "--fintech-shadow": c.shadow,
            }}
        >
            <div className="container">
                <div className="fintech-stack-intro">
                    <SectionBadge
                        color={c.accent}
                        bg={c.accent + "16"}
                        border={c.accent + "34"}
                    >
                        Full-Stack Fintech
                    </SectionBadge>

                    <SectionTitle style={{ color: c.hTag }}>
                        Complete fintech infrastructure{" "}
                        <GradientText gradient={c.grad1}>
                            from onboarding to settlement.
                        </GradientText>
                    </SectionTitle>

                    <p className="fintech-stack-sub" style={{ color: c.muted }}>
                        From onboarding to settlement, SambhavPay provides complete fintech
                        infrastructure for businesses that need reliable payment APIs, faster
                        integration and operational control.
                    </p>

                    <div className="fintech-flow-card">
                        {[
                            "Onboarding",
                            "API Integration",
                            "Transaction Routing",
                            "Settlement",
                        ].map((item, index) => (
                            <React.Fragment key={item}>
                                <div className="fintech-flow-step">
                                    <span>{index + 1}</span>
                                    <strong>{item}</strong>
                                </div>

                                {index !== 3 && <div className="fintech-flow-line" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="fintech-stack-grid">
                    <div className="fintech-developer-card">
                        <div className="fintech-card-header">
                            <div>
                                <span className="fintech-eyebrow">API / Developer Section</span>
                                <h3>Build faster with developer-ready infrastructure.</h3>
                            </div>

                            <div className="fintech-header-icon">
                                <Server size={28} />
                            </div>
                        </div>

                        <div className="fintech-dev-grid">
                            {developerItems.map(({ title, desc, Icon }) => (
                                <div className="fintech-dev-item" key={title}>
                                    <div className="fintech-dev-icon">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <PrimaryButton
                            gradient={c.grad1}
                            onClick={() => scrollTo("docs")}
                            className="fintech-api-btn"
                        >
                            View API Docs <ArrowRight size={18} />
                        </PrimaryButton>
                    </div>

                    <div className="fintech-graphic-wrap">
                        <div className="fintech-orbit-card">
                            <div className="fintech-orbit-grid" />

                            <div className="fintech-core">
                                <div className="fintech-core-ring">
                                    <ShieldCheck size={38} />
                                    <strong>SambhavPay</strong>
                                    <span>Fintech OS</span>
                                </div>
                            </div>

                            <div className="fintech-orbit-node node-one">
                                <Layers size={18} />
                                <span>Onboarding</span>
                            </div>

                            <div className="fintech-orbit-node node-two">
                                <Code2 size={18} />
                                <span>REST APIs</span>
                            </div>

                            <div className="fintech-orbit-node node-three">
                                <Database size={18} />
                                <span>Settlement</span>
                            </div>

                            <div className="fintech-orbit-node node-four">
                                <Webhook size={18} />
                                <span>Webhooks</span>
                            </div>

                            <div className="fintech-metric-card metric-one">
                                <CheckCircle2 size={18} />
                                <div>
                                    <strong>Fast Integration</strong>
                                    <span>API-first setup</span>
                                </div>
                            </div>

                            <div className="fintech-metric-card metric-two">
                                <Zap size={18} />
                                <div>
                                    <strong>Real-time Events</strong>
                                    <span>Status updates</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="industries-block">
                    <div className="industries-head">
                        <div>
                            <SectionBadge
                                color={c.purple}
                                bg={c.purple + "14"}
                                border={c.purple + "32"}
                            >
                                Industries We Serve
                            </SectionBadge>

                            <h3 style={{ color: c.hTag }}>
                                Built for modern businesses across high-volume sectors.
                            </h3>
                        </div>

                        <p style={{ color: c.muted }}>
                            SambhavPay supports fintech, commerce, travel, SaaS, education and
                            NBFC-led payment use cases with scalable infrastructure.
                        </p>
                    </div>

                    <div className="industries-grid">
                        {industries.map(({ title, desc, Icon }) => (
                            <div className="industry-card" key={title}>
                                <div className="industry-icon">
                                    <Icon size={23} />
                                </div>
                                <h4>{title}</h4>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}