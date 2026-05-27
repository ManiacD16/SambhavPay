import React from "react";
import { Helmet } from "react-helmet-async";
import Products from "../../components/Products";
import { site } from "../../config/site";

export default function ProductsOverviewPage({ c }) {
  return (
    <>
      <Helmet>
        <title>Products — SambhavPay Payment Infrastructure</title>
        <meta name="description" content="Explore SambhavPay products including Payment Gateway, Payment Orchestration, Payout API, AEPS, BBPS, DMT, Bank Account Verification, Virtual Accounts, Merchant Onboarding and White Label Platform." />
        <link rel="canonical" href={`${site.url.replace(/\/$/, "")}/products`} />
      </Helmet>
      <div className="standalone-products-page">
        <Products c={c} isStandalonePage />
      </div>
    </>
  );
}
