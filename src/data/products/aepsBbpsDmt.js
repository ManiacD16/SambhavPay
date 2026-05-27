const aepsBbpsDmt = {
  slug: "aeps-bbps-dmt",
  navLabel: "AEPS / BBPS / DMT",
  icon: "🧾",
  accentKey: "gold",
  gradientKey: "grad3",
  category: "Assisted Digital Services",
  title: "AEPS / BBPS / DMT",
  headline: "Enable Aadhaar services, bill payments and domestic money transfer through one platform.",
  shortDescription:
    "A service layer for assisted commerce, retail counters, agents and distributor-led financial service networks.",
  description:
    "SambhavPay AEPS, BBPS and DMT infrastructure helps businesses build agent-led financial service journeys. It supports Aadhaar-enabled service workflows, Bharat Bill Payment System use cases and domestic money transfer operations for retail and distribution networks.",
  highlightTitle: "Aadhaar services, bill payments and money transfer.",
  highlightText:
    "Build a retail-friendly fintech network where agents can serve customers for cash-assisted payments, utility bills and bank transfer needs.",
  quickPoints: ["Aadhaar services", "Bill payments", "Money transfer"],
  features: [
    "AEPS-ready workflows for Aadhaar-enabled assisted service journeys",
    "BBPS bill payment experience for utility and recurring bill categories",
    "DMT-ready domestic money transfer flows for retail locations",
    "Agent and distributor network support for assisted financial services",
    "Transaction reference, receipt and status management",
    "Operational reporting for service usage, commission and reconciliation",
  ],
  stats: [
    { value: "AEPS", label: "Aadhaar service" },
    { value: "BBPS", label: "Bill payment" },
    { value: "DMT", label: "Money transfer" },
  ],
  workflow: [
    "Agent selects AEPS, BBPS or DMT service",
    "Customer details and required verification are captured",
    "Transaction request is processed through service rail",
    "Receipt and status are generated",
    "Commission and reconciliation records are updated",
  ],
  useCases: [
    "Retail fintech counters",
    "Distributor networks",
    "Assisted bill payments",
    "Rural digital payment services",
  ],
  visual: {
    title: "Service Network",
    center: "AGENT",
    nodes: ["AEPS", "BBPS", "DMT", "Receipt"],
    footer: "Customer → Agent → Service Rail → Confirmation",
  },
  transactions: [
    { label: "Electricity Bill", amount: "₹2,420", status: "Success" },
    { label: "Money Transfer", amount: "₹15,000", status: "Success" },
    { label: "AEPS Service", amount: "Verified", status: "Live" },
  ],
};

export default aepsBbpsDmt;
