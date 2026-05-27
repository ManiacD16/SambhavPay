import React from "react";
import product from "../../data/products/whiteLabelPlatform";
import ProductPageLayout from "./ProductPageLayout";

export default function WhiteLabelPlatformPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
