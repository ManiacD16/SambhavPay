import React from "react";
import product from "../../data/products/virtualAccounts";
import ProductPageLayout from "./ProductPageLayout";

export default function VirtualAccountsPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
