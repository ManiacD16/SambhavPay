import React from "react";
import { Link } from "react-router-dom";
import { productPages } from "../../data/products";
import ProductGraphic from "../ProductGraphic";
import { SectionBadge, SectionTitle, GradientText } from "../UI";

function ProductOverviewCard({ product, c }) {
  const color = c[product.accentKey] || c.accent;
  const gradient = c[product.gradientKey] || c.grad1;

  return (
    <article className="product-overview-card" style={{ borderColor: `${color}28`, background: c.cardSoft }}>
      <div className="product-overview-card-top">
        <span className="product-overview-icon" style={{ background: `${color}16`, color }}>
          {product.icon}
        </span>
        <span className="product-overview-category" style={{ color }}>{product.category}</span>
      </div>

      <h3 style={{ color: c.hTag }}>{product.title}</h3>
      <p style={{ color: c.muted }}>{product.shortDescription}</p>

      <div className="product-overview-points">
        {product.quickPoints.slice(0, 3).map((point) => (
          <span key={point} style={{ borderColor: `${color}26`, background: `${color}10`, color: c.text }}>
            {point}
          </span>
        ))}
      </div>

      <div className="product-overview-footer">
        <Link to={`/products/${product.slug}`} className="product-card-link" style={{ background: gradient }}>
          View Details →
        </Link>
      </div>
    </article>
  );
}

function ProductSection({ product, c, index }) {
  const color = c[product.accentKey] || c.accent;

  return (
    <article id={product.slug} className={`product-section-card ${index % 2 ? "is-reversed" : ""}`}>
      <div className="product-section-copy">
        <div className="product-detail-badge" style={{ borderColor: `${color}40`, background: `${color}18`, color }}>
          {product.icon} {product.category}
        </div>
        <h3 style={{ color: c.hTag }}>{product.title}</h3>
        <p style={{ color: c.muted }}>{product.description}</p>

        <div className="product-section-features">
          {product.features.slice(0, 4).map((feature) => (
            <div key={feature}>
              <span style={{ background: `${color}22`, color }}>✓</span>
              <p style={{ color: c.muted }}>{feature}</p>
            </div>
          ))}
        </div>

        <Link to={`/products/${product.slug}`} className="product-inline-link" style={{ color }}>
          Open {product.title} Page →
        </Link>
      </div>

      <ProductGraphic product={product} c={c} />
    </article>
  );
}

export default function Products({ c, isStandalonePage = false }) {
  const orchestration = productPages.find((item) => item.slug === "payment-orchestration");
  const orchestrationColor = c[orchestration.accentKey] || c.purple;

  return (
    <section id="products" className={`section products-modern-section ${isStandalonePage ? "is-standalone" : ""}`} style={{ background: c.productsBg }}>
      <div className="container">
        <div className="products-modern-header">
          <SectionBadge color={c.accent} bg={c.accent + "18"} border={c.accent + "35"}>Products</SectionBadge>
          <SectionTitle style={{ color: c.hTag }}>
            Payment Products.<br />
            <GradientText gradient={c.grad1}>One API-first Platform.</GradientText>
          </SectionTitle>
          <p style={{ color: c.muted }}>
            SambhavPay brings payment collection, orchestration, payouts, verification, virtual accounts,
            merchant onboarding and white-label distribution into one manageable product suite.
          </p>
        </div>

        <div className="orchestration-highlight" style={{ borderColor: `${orchestrationColor}32`, background: c.glassCard }}>
          <div>
            <span style={{ color: orchestrationColor }}>Payment Orchestration Highlight</span>
            <h3 style={{ color: c.hTag }}>Smart Routing. Higher Success Rates</h3>
            <p style={{ color: c.muted }}>
              Multi-bank routing, failover and optimization help route every payment through the best available rail,
              recover from provider downtime and improve payment reliability at scale.
            </p>
          </div>
          <div className="orchestration-chip-grid">
            {orchestration.quickPoints.map((point) => (
              <span key={point} style={{ borderColor: `${orchestrationColor}35`, background: `${orchestrationColor}12`, color: c.text }}>
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="product-overview-grid">
          {productPages.map((product) => (
            <ProductOverviewCard key={product.slug} product={product} c={c} />
          ))}
        </div>

        <div className="product-sections-wrapper">
          {productPages.map((product, index) => (
            <ProductSection key={product.slug} product={product} c={c} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}