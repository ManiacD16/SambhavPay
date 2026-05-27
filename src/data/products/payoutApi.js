const payoutApi = {
  slug: "payout-api",
  navLabel: "Payout API",
  icon: "🏦",
  accentKey: "green",
  gradientKey: "gradGreen",
  category: "Fund Transfer API",
  title: "Payout API",
  headline: "Send instant transfers, bulk payouts and bank settlements from one API.",
  shortDescription:
    "Automate vendor payments, refunds, salary batches, commissions and partner settlements using UPI, IMPS, NEFT and RTGS workflows.",
  description:
    "SambhavPay Payout API helps platforms move money to vendors, employees, customers, partners and beneficiaries. It supports instant and scheduled payout flows, bulk batches, payout status tracking, failure handling and finance-ready reporting for operational control.",
  highlightTitle: "Instant transfers and bulk payout automation.",
  highlightText:
    "Use payout APIs for real-time transfers, high-volume payout batches and settlement workflows across UPI, IMPS, NEFT and RTGS rails.",
  quickPoints: ["Instant transfers", "Bulk payouts", "UPI / IMPS / NEFT / RTGS"],
  features: [
    "Instant transfer workflows for urgent beneficiary payments",
    "Bulk payout batches for vendor, employee, refund and commission use cases",
    "UPI, IMPS, NEFT and RTGS-ready transfer architecture",
    "Payout status API for success, pending, failed and reversed tracking",
    "Approval-friendly payout structure for finance teams",
    "Failure handling, retry support and clear transaction references",
  ],
  stats: [
    { value: "Bulk", label: "Batch payouts" },
    { value: "4", label: "Transfer rails" },
    { value: "Live", label: "Status tracking" },
  ],
  workflow: [
    "Create beneficiary or use saved beneficiary details",
    "Trigger single payout or upload payout batch",
    "Select UPI, IMPS, NEFT or RTGS based on transfer need",
    "Track payout reference and bank status",
    "Export records for finance reconciliation",
  ],
  useCases: [
    "Vendor payouts",
    "Customer refunds",
    "Salary disbursement",
    "Marketplace settlements",
  ],
  visual: {
    title: "Payout Rail Map",
    center: "PAYOUT",
    nodes: ["UPI", "IMPS", "NEFT", "RTGS"],
    footer: "Approve → Transfer → Track → Reconcile",
  },
  transactions: [
    { label: "Vendor Payout", amount: "₹2,50,000", status: "Success" },
    { label: "Salary Batch", amount: "₹42,00,000", status: "Success" },
    { label: "Refund Transfer", amount: "₹18,750", status: "Pending" },
  ],
};

export default payoutApi;
