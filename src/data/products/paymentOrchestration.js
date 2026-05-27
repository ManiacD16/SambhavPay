const paymentOrchestration = {
  slug: "payment-orchestration",
  navLabel: "Payment Orchestration",
  icon: "🔀",
  accentKey: "purple",
  gradientKey: "gradPurple",
  category: "Smart Routing Layer",
  title: "Payment Orchestration",
  headline: "Smart Routing. Higher Success Rates.",
  shortDescription:
    "Route every payment through the best available bank or payment provider to improve reliability and reduce payment failures.",
  description:
    "SambhavPay Payment Orchestration gives businesses a smart routing layer above multiple banks, payment processors and payment methods. Instead of depending on one payment path, payments can be routed, retried and recovered intelligently based on provider health, payment method availability, failure reason and business priority.",
  highlightTitle: "Smart Routing. Higher Success Rates.",
  highlightText:
    "Multi-bank routing, automatic failover and optimization rules help you keep payment collection stable even when one rail or provider is facing downtime, latency or lower approval rates.",
  quickPoints: ["Multi-bank routing", "Failover", "Optimization"],
  features: [
    "Multi-bank routing to distribute traffic across available payment partners",
    "Automatic failover when a provider is down, slow or returning high failure rates",
    "Smart retries for recoverable payment failures without creating a poor user experience",
    "Rule-based optimization by payment method, volume, provider health and priority",
    "Real-time routing visibility for operations and finance teams",
    "Higher payment success strategy without changing the customer-facing checkout every time",
  ],
  stats: [
    { value: "Multi", label: "Bank routing" },
    { value: "Auto", label: "Failover logic" },
    { value: "Smart", label: "Retry engine" },
  ],
  workflow: [
    "Payment request enters SambhavPay orchestration layer",
    "Routing rules check bank availability and success health",
    "Best payment provider is selected automatically",
    "Failed recoverable attempts move to fallback route",
    "Analytics reveal success rate and provider performance",
  ],
  useCases: [
    "High-volume checkout",
    "Enterprise payment collection",
    "Marketplace routing",
    "Uptime-sensitive payment flows",
  ],
  visual: {
    title: "Smart Routing Engine",
    center: "ROUTER",
    nodes: ["Bank A", "Bank B", "Fallback", "Retry"],
    footer: "Route → Monitor → Failover → Optimize",
  },
  transactions: [
    { label: "UPI via Bank A", amount: "98.4%", status: "Healthy" },
    { label: "Card via Bank B", amount: "96.8%", status: "Healthy" },
    { label: "Fallback Route", amount: "Active", status: "Live" },
  ],
};

export default paymentOrchestration;
