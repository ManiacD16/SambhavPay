import React from "react";
import product from "../../data/products/paymentOrchestration";
import ProductPageLayout from "./ProductPageLayout";

export default function PaymentOrchestrationPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
