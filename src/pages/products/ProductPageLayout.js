import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { site } from "../../config/site";
import { productPages } from "../../data/products";
import ProductGraphic from "../../components/ProductGraphic";

function ProductPill({ children, color }) {
  return (
    <span className="product-pill" style={{ "--product-accent": color }}>
      {children}
    </span>
  );
}

export default function ProductPageLayout({ product, c }) {
  const color = c[product.accentKey] || c.accent;
  const gradient = c[product.gradientKey] || c.grad1;
  const pageUrl = `${site.url.replace(/\/$/, "")}/products/${product.slug}`;
  const relatedProducts = productPages.filter((item) => item.slug !== product.slug).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${site.name} ${product.title}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "IN",
    serviceType: product.category,
    description: product.description,
    url: pageUrl,
  };

  return (
    <>
      <Helmet>
        <title>{product.title} — SambhavPay Products</title>
        <meta name="description" content={product.shortDescription} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="product-detail-page" style={{ background: c.bg, color: c.text }}>
        <section className="product-detail-hero">
          <div className="container product-detail-hero-grid">
            <div>
              <Link to="/products" className="product-back-link" style={{ color: color }}>
                ← Back to Products
              </Link>

              <div className="product-detail-badge" style={{ borderColor: `${color}40`, background: `${color}18`, color }}>
                {product.icon} {product.category}
              </div>

              <h1 className="product-detail-title" style={{ color: c.hTag }}>
                {product.title}
              </h1>

              <p className="product-detail-headline" style={{ color: c.text }}>
                {product.headline}
              </p>

              <p className="product-detail-description" style={{ color: c.muted }}>
                {product.description}
              </p>

              <div className="product-pill-row">
                {product.quickPoints.map((item) => (
                  <ProductPill key={item} color={color}>{item}</ProductPill>
                ))}
              </div>

              <div className="product-detail-actions">
                <Link className="product-primary-link" to="/#contact" style={{ background: gradient }}>
                  Request Integration →
                </Link>
                <Link className="product-secondary-link" to="/#docs" style={{ borderColor: `${color}45`, color }}>
                  View API Docs
                </Link>
              </div>
            </div>

            <ProductGraphic product={product} c={c} />
          </div>
        </section>

        <section className="product-detail-section">
          <div className="container product-highlight-grid">
            <div className="product-highlight-card" style={{ borderColor: `${color}30`, background: c.glassCard }}>
              <span style={{ color }}>{product.icon} Product Highlight</span>
              <h2 style={{ color: c.hTag }}>{product.highlightTitle}</h2>
              <p style={{ color: c.muted }}>{product.highlightText}</p>
            </div>

            <div className="product-stats-panel">
              {product.stats.map((stat) => (
                <div key={stat.label} className="product-stat-box" style={{ borderColor: `${color}28`, background: `${color}10` }}>
                  <strong style={{ color }}>{stat.value}</strong>
                  <span style={{ color: c.muted }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="product-detail-section product-detail-section-tight">
          <div className="container product-info-grid">
            <div className="product-info-card" style={{ background: c.cardSoft, borderColor: c.border }}>
              <h2 style={{ color: c.hTag }}>What this product includes</h2>
              <div className="product-feature-list">
                {product.features.map((feature) => (
                  <div key={feature} className="product-feature-item">
                    <span style={{ background: `${color}22`, color }}>✓</span>
                    <p style={{ color: c.muted }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-info-card" style={{ background: c.cardSoft, borderColor: c.border }}>
              <h2 style={{ color: c.hTag }}>How it works</h2>
              <ol className="product-workflow-list">
                {product.workflow.map((step, index) => (
                  <li key={step}>
                    <span style={{ borderColor: `${color}45`, color }}>{index + 1}</span>
                    <p style={{ color: c.muted }}>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="product-detail-section product-detail-section-tight">
          <div className="container product-info-grid product-bottom-grid">
            <div className="product-info-card" style={{ background: c.cardSoft, borderColor: c.border }}>
              <h2 style={{ color: c.hTag }}>Best use cases</h2>
              <div className="product-usecase-grid">
                {product.useCases.map((useCase) => (
                  <span key={useCase} style={{ borderColor: `${color}28`, background: `${color}10`, color: c.text }}>
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-info-card" style={{ background: c.cardSoft, borderColor: c.border }}>
              <h2 style={{ color: c.hTag }}>Sample activity</h2>
              <div className="product-activity-list">
                {product.transactions.map((transaction) => (
                  <div key={`${transaction.label}-${transaction.amount}`} className="product-activity-row" style={{ borderColor: c.border, background: c.surface }}>
                    <div>
                      <strong style={{ color: c.text }}>{transaction.label}</strong>
                      <span style={{ color: c.muted }}>{transaction.status}</span>
                    </div>
                    <b style={{ color }}>{transaction.amount}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-detail-section product-related-section">
          <div className="container">
            <div className="product-section-heading">
              <span style={{ color }}>Explore more SambhavPay products</span>
              <h2 style={{ color: c.hTag }}>Build more payment workflows from the same platform.</h2>
            </div>

            <div className="product-related-grid">
              {relatedProducts.map((item) => (
                <Link key={item.slug} to={`/products/${item.slug}`} className="product-related-card" style={{ background: c.cardSoft, borderColor: c.border }}>
                  <span style={{ color: c[item.accentKey] || c.accent }}>{item.icon}</span>
                  <h3 style={{ color: c.hTag }}>{item.title}</h3>
                  <p style={{ color: c.muted }}>{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
