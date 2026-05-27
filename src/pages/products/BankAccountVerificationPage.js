import React from "react";
import product from "../../data/products/bankAccountVerification";
import ProductPageLayout from "./ProductPageLayout";

export default function BankAccountVerificationPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
