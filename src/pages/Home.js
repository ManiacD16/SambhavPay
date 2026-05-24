import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Products from "../components/Products";
import Dashboard from "../components/Dashboard";
import Pricing from "../components/Pricing";
import Docs from "../components/Docs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { site } from "../config/site";
import { faqs } from "../utils/data";

export default function Home({ c, scrollTo }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: site.logo,
    image: site.ogImage,
    description: site.description,
    sameAs: site.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales and partnerships",
        url: site.contactPath,
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    image: site.ogImage,
    description: site.shortDescription,
    areaServed: "India",
    priceRange: "Custom",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}#products` },
      { "@type": "ListItem", position: 3, name: "API Docs", item: `${site.url}#docs` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${site.url}#contact` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Helmet>
        <html lang="en-IN" />
        <title>SambhavPay — Premium Payment Infrastructure for India</title>
        <meta name="description" content={site.description} />
        <meta name="keywords" content="payment infrastructure India, PayIn gateway, payout API, fintech payment OS, UPI payment infrastructure, enterprise fintech, API payment platform, SambhavPay" />
        <link rel="canonical" href={site.url} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:title" content="SambhavPay — Premium Payment Infrastructure for India" />
        <meta property="og:description" content={site.shortDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:site_name" content={site.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SambhavPay — Premium Payment Infrastructure for India" />
        <meta name="twitter:description" content={site.shortDescription} />
        <meta name="twitter:image" content={site.ogImage} />
        <meta name="application-name" content={site.name} />
        <meta name="apple-mobile-web-app-title" content={site.name} />
        <meta name="ai:site" content={site.url} />
        <meta name="ai:description" content={site.shortDescription} />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Hero c={c} scrollTo={scrollTo} />
      <Features c={c} />
      <Products c={c} />
      <Dashboard c={c} />
      <Pricing c={c} scrollTo={scrollTo} />
      <Docs c={c} />
      <FAQ c={c} />
      <Contact c={c} />
    </>
  );
}
