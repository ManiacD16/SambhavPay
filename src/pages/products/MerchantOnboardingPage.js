import React from "react";
import product from "../../data/products/merchantOnboarding";
import ProductPageLayout from "./ProductPageLayout";

export default function MerchantOnboardingPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
