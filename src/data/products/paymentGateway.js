const paymentGateway = {
  slug: "payment-gateway",
  navLabel: "Payment Gateway",
  icon: "💳",
  accentKey: "accent",
  gradientKey: "grad1",
  category: "PayIn Collection",
  title: "Payment Gateway",
  headline: "Accept payments through UPI, Cards and Net Banking with one clean integration.",
  shortDescription:
    "A conversion-focused payment collection layer for websites, apps, marketplaces and enterprise checkout flows.",
  description:
    "SambhavPay Payment Gateway helps businesses accept Indian digital payments through a reliable API-first checkout experience. It is designed for clean payment creation, real-time status checks, webhook callbacks, reconciliation-friendly transaction states and a smoother payment journey across UPI, cards and net banking.",
  highlightTitle: "Fast checkout. Clear status. Fewer failed collections.",
  highlightText:
    "Create payment orders, present the best payment method to the customer, receive payment confirmation through webhooks and track every transaction from initiated to settled.",
  quickPoints: ["UPI", "Cards", "Net Banking"],
  features: [
    "UPI collect, UPI intent, UPI QR and deep-link ready flows",
    "Card payment flow for debit and credit card checkout journeys",
    "Net banking collection support for bank-led customer payments",
    "Webhook-based payment confirmation and status update handling",
    "Transaction lifecycle visibility from created, pending, success and failed states",
    "Refund-ready structure for customer support and finance operations",
  ],
  stats: [
    { value: "UPI", label: "Primary payment rail" },
    { value: "24/7", label: "Collection-ready flow" },
    { value: "API", label: "Developer-first setup" },
  ],
  workflow: [
    "Create payment order from your backend",
    "Customer selects UPI, card or net banking",
    "SambhavPay processes payment status",
    "Webhook confirms success or failure",
    "Dashboard and API keep reconciliation clean",
  ],
  useCases: [
    "E-commerce checkout",
    "Subscription collection",
    "Marketplace payments",
    "Invoice payment links",
  ],
  visual: {
    title: "Checkout Flow",
    center: "PAY API",
    nodes: ["UPI", "Cards", "Net Banking", "Webhook"],
    footer: "Order → Checkout → Confirmation → Settlement",
  },
  transactions: [
    { label: "UPI Payment", amount: "₹12,500", status: "Success" },
    { label: "Card Checkout", amount: "₹8,999", status: "Success" },
    { label: "Net Banking", amount: "₹1,25,000", status: "Pending" },
  ],
};

export default paymentGateway;
