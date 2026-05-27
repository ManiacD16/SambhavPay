import { site } from "../config/site";

export const navItems = ["home", "features", "products", "pricing", "docs", "contact"];

export const stats = [
  { end: 10000, suffix: "+", label: "Businesses enabled" },
  { end: 2400000, suffix: "+", label: "Daily transaction capacity" },
  { end: 99.99, suffix: "%", label: "Target platform uptime", decimals: 2 },
  { end: 50, suffix: "+", label: "Payment workflows" },
];

export const trustItems = [
  "Security-first architecture",
  "RBI-aligned payment workflows",
  "Enterprise-grade API controls",
  "AES-256-ready data protection",
  "UPI · IMPS · NEFT-ready rails",
  "Audit-friendly operations",
];

export const features = [
  {
    icon: "⚡",
    colorKey: "accent",
    title: "Fast Collection Infrastructure",
    desc: "Unified PayIn flows for UPI, cards, bank transfers, and custom checkout journeys with clear transaction states and webhook visibility.",
    illu: "payin",
  },
  {
    icon: "🛡️",
    colorKey: "green",
    title: "Trust & Risk Controls",
    desc: "A security-first operating layer with role controls, audit trails, encryption-ready patterns, and fraud signal workflows for scale.",
    illu: "security",
  },
  {
    icon: "🌐",
    colorKey: "purple",
    title: "Scale-Ready Payment OS",
    desc: "A modern payments foundation for finance teams, platforms, and operators that need predictable APIs, resilient routing, verification, and dependable infrastructure.",
    illu: "dashboard",
  },
  {
    icon: "🔌",
    colorKey: "gold",
    title: "Developer-First APIs",
    desc: "RESTful JSON APIs, sandbox-ready flows, webhook signing patterns, SDK-friendly examples, and clear integration checklists.",
    illu: "api",
  },
  {
    icon: "📊",
    colorKey: "red",
    title: "Operational Analytics",
    desc: "Real-time dashboards for payment health, success rates, payout status, volume trends, and reconciliation workflows.",
    illu: "dashboard",
  },
  {
    icon: "♨️",
    colorKey: "accent",
    title: "Smart Routing Foundation",
    desc: "Rail-aware orchestration patterns designed to improve payment success, lower operational friction, and support resilient growth.",
    illu: "payin",
  },
];

export const products = {};

export const pricing = [
  {
    name: "Starter",
    price: "₹0",
    period: "Free setup · launch-ready basics",
    highlight: false,
    cta: "Start Free →",
    perks: [
      "Core PayIn workflows",
      "UPI and bank transfer-ready UX",
      "5,000 transaction events/month",
      "REST API access",
      "Sandbox environment",
      "48-hour business support",
    ],
  },
  {
    name: "Growth",
    price: "₹4,999",
    period: "/month · scale-ready controls",
    highlight: true,
    cta: "Start Growth →",
    perks: [
      "Everything in Starter",
      "Payout workflow layer",
      "Unlimited transaction events",
      "Priority smart routing patterns",
      "Priority support coverage",
      "Custom webhook configuration",
      "Advanced analytics dashboard",
      "Dedicated onboarding guidance",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Volume and infrastructure-based",
    highlight: false,
    cta: "Contact Sales →",
    perks: [
      "Dedicated infrastructure planning",
      "Payment orchestration and white-label platform options",
      "Custom settlement and approval flows",
      "Private deployment support",
      "99.99% uptime architecture target",
      "Custom compliance workflow suite",
      "White-label experience options",
      "Executive implementation support",
    ],
  },
];

export const faqs = [
  {
    q: "What does SambhavPay help businesses build?",
    a: "SambhavPay helps businesses launch modern payment collection, payout, reconciliation, analytics, and payment operations workflows through a clean API-led payment infrastructure experience.",
  },
  {
    q: "How quickly can a team start integrating?",
    a: "Most teams can start with the sandbox-style API structure and integration checklist immediately. Production readiness depends on business verification, payment rail access, and compliance requirements.",
  },
  {
    q: "Does the platform support PayIn and PayOut flows?",
    a: "Yes. The website presents PayIn collection journeys, payout orchestration patterns, API webhooks, analytics, and enterprise finance operation workflows.",
  },
  {
    q: "Is the website optimized for AI search and answer engines?",
    a: "Yes. The site includes semantic content, structured data, FAQ schema, organization context, sitemap, robots guidance, llms.txt, and AI-discovery metadata.",
  },
  {
    q: "Can enterprise teams request custom infrastructure?",
    a: "Yes. Enterprise teams can request custom deployment support, approval controls, reporting layers, compliance workflow mapping, and private infrastructure planning.",
  },
  {
    q: "How do I contact SambhavPay?",
    a: `Use the secure enquiry form at ${site.contactPath}. The contact section is designed for sales, partnership, and implementation conversations.`,
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: ["Payment Gateway", "Payment Orchestration", "Payout API", "Virtual Accounts", "Merchant Onboarding"],
  },
  {
    title: "Company",
    links: ["About", "Partnerships", "Integration", "Security", "Contact"],
  },
  {
    title: "Resources",
    links: ["API Docs", "Sitemap", "llms.txt", "AI Discovery", "Manifest"],
  },
];

export const contactInfo = [
  { icon: "🌐", title: "Website", lines: [site.url.replace(/\/$/, ""), "Secure enquiry form available"] },
  { icon: "⚡", title: "Sales & Partnerships", lines: ["Use the contact form below", "Response workflow for enterprise teams"] },
  { icon: "🔐", title: "Security", lines: ["Report security concerns through the form", "Responsible disclosure workflow"] },
  { icon: "📍", title: "Market Focus", lines: ["India-first payment infrastructure", "Built for global-scale fintech teams"] },
];