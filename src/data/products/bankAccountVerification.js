const bankAccountVerification = {
  slug: "bank-account-verification-api",
  navLabel: "Bank Account Verification API",
  icon: "✅",
  accentKey: "red",
  gradientKey: "gradRed",
  category: "Verification API",
  title: "Bank Account Verification API",
  headline: "Verify beneficiary bank accounts instantly with high accuracy.",
  shortDescription:
    "Verify beneficiary bank accounts instantly using penny drop or penny-less methods with high accuracy.",
  description:
    "SambhavPay Bank Account Verification API helps businesses validate beneficiary account details before sending money. It reduces payout failures, manual verification effort and wrong-account risk by confirming account ownership through penny drop or penny-less verification methods.",
  highlightTitle: "Reduce wrong-account payouts before money moves.",
  highlightText:
    "Use bank account verification before vendor onboarding, payout creation, refund processing or beneficiary activation to improve accuracy and reduce operational risk.",
  quickPoints: ["Penny drop", "Penny-less", "High accuracy"],
  features: [
    "Instant beneficiary bank account verification using account number and IFSC",
    "Penny drop verification flow for account-name confirmation",
    "Penny-less verification method where supported for faster validation",
    "Beneficiary name match support for payout risk reduction",
    "Verification status API for approved, failed and review states",
    "Useful before vendor onboarding, payouts, refunds and marketplace settlements",
  ],
  stats: [
    { value: "Instant", label: "Verification" },
    { value: "2", label: "Methods" },
    { value: "Risk↓", label: "Payout errors" },
  ],
  workflow: [
    "Submit account number and IFSC",
    "Choose penny drop or penny-less verification method",
    "Receive verified account holder name and status",
    "Match beneficiary details with your records",
    "Allow payout only after verification rules pass",
  ],
  useCases: [
    "Vendor onboarding",
    "Beneficiary validation",
    "Refund verification",
    "Marketplace seller verification",
  ],
  visual: {
    title: "Verification Flow",
    center: "VERIFY",
    nodes: ["Account", "IFSC", "Name Match", "Status"],
    footer: "Input → Verify → Match → Approve",
  },
  transactions: [
    { label: "Account Check", amount: "Matched", status: "Success" },
    { label: "IFSC Validation", amount: "Valid", status: "Success" },
    { label: "Name Match", amount: "92%", status: "Review" },
  ],
};

export default bankAccountVerification;
