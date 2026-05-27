import React from "react";
import product from "../../data/products/payoutApi";
import ProductPageLayout from "./ProductPageLayout";

export default function PayoutApiPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
