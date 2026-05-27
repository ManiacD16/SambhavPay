const virtualAccounts = {
  slug: "virtual-accounts",
  navLabel: "Virtual Accounts",
  icon: "🏛️",
  accentKey: "accent",
  gradientKey: "grad1",
  category: "Collection & Reconciliation",
  title: "Virtual Accounts",
  headline: "Create dedicated virtual accounts for cleaner collections and auto reconciliation.",
  shortDescription:
    "Assign dedicated account details to customers, merchants or partners and reconcile incoming payments automatically.",
  description:
    "SambhavPay Virtual Accounts help businesses collect bank transfers with better tracking. Every customer, merchant, invoice or partner can receive a dedicated virtual account or collection identifier, making it easier to map incoming credits to the correct payer and reduce manual reconciliation work.",
  highlightTitle: "Dedicated accounts with automatic reconciliation.",
  highlightText:
    "Virtual account collections are ideal when businesses want bank transfer payments to be identified automatically without manual screenshot sharing or finance follow-up.",
  quickPoints: ["Auto reconciliation", "Dedicated account", "Clean collections"],
  features: [
    "Dedicated virtual account creation for customers, merchants or invoices",
    "Auto reconciliation by mapping credits to the correct payer or business entity",
    "Useful for bank transfer collection, deposits, invoice payments and partner settlement",
    "Real-time credit alerts and transaction references",
    "Finance dashboard for unsettled, matched and reviewed entries",
    "Cleaner ledger mapping for accounting and reporting workflows",
  ],
  stats: [
    { value: "Auto", label: "Reconciliation" },
    { value: "1:1", label: "Dedicated mapping" },
    { value: "Live", label: "Credit alerts" },
  ],
  workflow: [
    "Create a virtual account for customer, merchant or invoice",
    "Share account details for bank transfer collection",
    "Incoming credit is mapped to the right entity",
    "Webhook sends payment confirmation",
    "Finance team reviews reconciled entries",
  ],
  useCases: [
    "B2B invoice collections",
    "Merchant deposits",
    "Customer wallet top-up",
    "Partner settlement tracking",
  ],
  visual: {
    title: "Virtual Account Map",
    center: "VA",
    nodes: ["Customer", "Invoice", "Merchant", "Ledger"],
    footer: "Dedicated VA → Credit → Match → Reconcile",
  },
  transactions: [
    { label: "Invoice Credit", amount: "₹84,000", status: "Matched" },
    { label: "Merchant Deposit", amount: "₹2,10,000", status: "Matched" },
    { label: "Unknown Credit", amount: "₹9,500", status: "Review" },
  ],
};

export default virtualAccounts;
