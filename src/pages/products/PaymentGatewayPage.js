import React from "react";
import product from "../../data/products/paymentGateway";
import ProductPageLayout from "./ProductPageLayout";

export default function PaymentGatewayPage({ c }) {
  return <ProductPageLayout product={product} c={c} />;
}
