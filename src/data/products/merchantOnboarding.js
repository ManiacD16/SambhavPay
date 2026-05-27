const merchantOnboarding = {
  slug: "merchant-onboarding",
  navLabel: "Merchant Onboarding",
  icon: "🧑‍💼",
  accentKey: "purple",
  gradientKey: "gradPurple",
  category: "KYC & Verification",
  title: "Merchant Onboarding",
  headline: "Onboard merchants faster with KYC APIs, document checks and verification workflows.",
  shortDescription:
    "A structured onboarding layer for merchant verification, compliance checks and activation workflows.",
  description:
    "SambhavPay Merchant Onboarding helps platforms verify merchants before giving them access to payment, payout or reseller services. It supports KYC API workflows, business verification, document collection, review states and activation steps so operations teams can scale onboarding with more control.",
  highlightTitle: "KYC APIs and verification workflows for merchant activation.",
  highlightText:
    "Build a merchant onboarding journey that captures business data, verifies documents, tracks review status and activates payment capabilities after approval.",
  quickPoints: ["KYC APIs", "Verification", "Activation flow"],
  features: [
    "KYC API integration points for merchant and business verification",
    "Document collection workflow for business and owner records",
    "Verification status tracking for pending, approved, rejected and resubmission states",
    "Risk-review friendly structure for compliance and operations teams",
    "Merchant profile, service eligibility and activation management",
    "Audit-ready onboarding timeline for internal review",
  ],
  stats: [
    { value: "KYC", label: "API workflows" },
    { value: "4", label: "Review states" },
    { value: "Audit", label: "Onboarding trail" },
  ],
  workflow: [
    "Merchant submits business and owner details",
    "Documents and KYC fields are verified",
    "Operations team reviews risk and compliance signals",
    "Merchant receives approved or resubmission status",
    "Payment and payout services are activated after approval",
  ],
  useCases: [
    "Marketplace seller onboarding",
    "Payment merchant activation",
    "Reseller onboarding",
    "Distributor verification",
  ],
  visual: {
    title: "Merchant KYC Flow",
    center: "KYC",
    nodes: ["PAN", "GST", "Bank", "Review"],
    footer: "Submit → Verify → Review → Activate",
  },
  transactions: [
    { label: "KYC Submitted", amount: "Docs", status: "Review" },
    { label: "Bank Verified", amount: "Matched", status: "Success" },
    { label: "Merchant Live", amount: "Active", status: "Success" },
  ],
};

export default merchantOnboarding;
