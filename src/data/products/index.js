import paymentGateway from "./paymentGateway";
import paymentOrchestration from "./paymentOrchestration";
import payoutApi from "./payoutApi";
import aepsBbpsDmt from "./aepsBbpsDmt";
import bankAccountVerification from "./bankAccountVerification";
import virtualAccounts from "./virtualAccounts";
import merchantOnboarding from "./merchantOnboarding";
import whiteLabelPlatform from "./whiteLabelPlatform";

export const productPages = [
  paymentGateway,
  paymentOrchestration,
  payoutApi,
  aepsBbpsDmt,
  bankAccountVerification,
  virtualAccounts,
  merchantOnboarding,
  whiteLabelPlatform,
];

export const productMap = productPages.reduce((acc, product) => {
  acc[product.slug] = product;
  return acc;
}, {});

export const productNavItems = productPages.map(({ slug, navLabel, icon, shortDescription }) => ({
  slug,
  label: navLabel,
  icon,
  description: shortDescription,
}));
