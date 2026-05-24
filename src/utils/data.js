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
    desc: "A modern payments foundation for finance teams, platforms, and operators that need predictable APIs and dependable infrastructure.",
    illu: "crypto",
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

export const products = {
  payin: {
    colorKey: "accent",
    gradKey: "grad1",
    title: "PayIn Gateway",
    emoji: "💳",
    subtitle: "High-conversion payment collection",
    desc: "Accept Indian payment methods through one premium integration layer. Built for clean checkout UX, reliable callbacks, and real-time transaction visibility.",
    features: [
      "UPI collect, intent, QR, and deep-link flows",
      "IMPS · NEFT · RTGS bank transfer workflows",
      "Card and wallet-ready checkout architecture",
      "Smart retry and failover orchestration patterns",
      "Real-time webhook and payment status API design",
      "Tokenization-ready recurring payment foundation",
      "Reconciliation-friendly transaction lifecycle",
      "Clear sandbox-to-production integration journey",
    ],
    illu: "payin",
    stats: [
      { v: 98.7, s: "%", l: "Target success rate", dec: 1 },
      { v: 800, s: "ms", l: "Low-latency design" },
      { v: 50, s: "+", l: "Payment workflows" },
    ],
    txns: [
      { label: "UPI Transfer", sub: "Intent checkout", amount: "₹12,500", status: "Success" },
      { label: "Card Payment", sub: "Visa •••• 4242", amount: "₹8,999", status: "Success" },
      { label: "NEFT Credit", sub: "Bank transfer", amount: "₹1,25,000", status: "Pending" },
    ],
  },
  payout: {
    colorKey: "purple",
    gradKey: "gradPurple",
    title: "Payout Engine",
    emoji: "🏦",
    subtitle: "Controlled fund movement at scale",
    desc: "Automate vendor payouts, refunds, salary batches, commissions, and marketplace settlements with approval controls and audit visibility.",
    features: [
      "Bulk vendor and supplier payout workflows",
      "Salary, refund, reward, and commission batches",
      "Wallet-to-bank and escrow settlement foundation",
      "Payout status tracking and failure handling",
      "Audit trail exports for finance operations",
      "Approval layers for enterprise finance teams",
      "Deduplication and risk-review checkpoints",
      "Large batch processing architecture",
    ],
    illu: "payout",
    stats: [
      { v: 1000000, s: "+", l: "Batch-ready scale" },
      { v: 99.99, s: "%", l: "Delivery target", dec: 2 },
      { v: 2, s: "s", l: "Status refresh" },
    ],
    txns: [
      { label: "Vendor Payout", sub: "Supplier batch", amount: "₹2,50,000", status: "Success" },
      { label: "Salary Batch", sub: "150 employees", amount: "₹42,00,000", status: "Success" },
      { label: "Commission", sub: "Partner #4421", amount: "₹18,750", status: "Pending" },
    ],
  },
  crypto: {
    colorKey: "gold",
    gradKey: "grad3",
    title: "Treasury & Web3 Gateway",
    emoji: "₿",
    subtitle: "Future-ready digital asset rails",
    desc: "A modern gateway concept for treasury visibility, digital asset payment workflows, compliance review, and cross-border operational clarity.",
    features: [
      "USDT, BTC, ETH, and multi-chain workflow patterns",
      "Digital asset payment intent and status tracking",
      "Conversion-ready treasury operation design",
      "Wallet and approval control architecture",
      "On-chain event observability foundation",
      "AML/KYC workflow integration points",
      "Custom payout and treasury API concepts",
      "Cross-chain settlement visibility patterns",
    ],
    illu: "crypto",
    stats: [
      { v: 50, s: "+", l: "Asset workflows" },
      { v: 30, s: "s", l: "Event refresh" },
      { v: 0, s: "%", l: "Hidden UI fees" },
    ],
    txns: [
      { label: "USDT Received", sub: "Network status", amount: "1,250 USDT", status: "Success" },
      { label: "BTC Deposit", sub: "On-chain event", amount: "₹45,200", status: "Success" },
      { label: "Treasury Convert", sub: "→ INR workflow", amount: "₹1,12,000", status: "Pending" },
    ],
  },
};

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
      "Treasury and Web3 gateway options",
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
    a: "SambhavPay helps businesses launch modern payment collection, payout, reconciliation, analytics, and treasury workflows through a clean API-led payment infrastructure experience.",
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
    links: ["PayIn Gateway", "Payout Engine", "Treasury Gateway", "API & Webhooks", "Analytics Dashboard"],
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
