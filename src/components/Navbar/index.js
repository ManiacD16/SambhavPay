import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navItems } from "../../utils/data";
import { productNavItems } from "../../data/products";
import { PrimaryButton, OutlineButton } from "../UI"; //ThemeToggle

export default function Navbar({
  c,
  // mode,
  // toggleTheme,
  scrolled,
  active,
  scrollTo,
  navigateToProductsOverview,
  navigateToProduct,
}) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(active || "home");
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
const scrollPending = useRef(false);

  // const isDark = mode === "dark";

useEffect(() => {
  if (active && !scrollPending.current) {
    setCurrentActive(active);
  }
}, [active]);

const handleNavClick = (id) => {
  scrollPending.current = true;           // block useEffect from overwriting
  setCurrentActive(id);
  setMenuOpen(false);
  setMobileProductsOpen(false);
  if (location.pathname !== "/") {
    navigate("/");                        // go home first
    setTimeout(() => {
      scrollTo(id);
      scrollPending.current = false;
    }, 120);                              // wait for navigation to settle
  } else {
    scrollTo(id);
    scrollPending.current = false;
  }
};

  const handleProductsOverviewClick = () => {
    setCurrentActive("products");
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setDropdownOpen(false);
    navigateToProductsOverview?.();
  };

  const handleProductClick = (slug) => {
    setCurrentActive("products");
    setMenuOpen(false);
    setMobileProductsOpen(false);
    setDropdownOpen(false);
    navigateToProduct?.(slug);
  };

  const handleAuthClick = () => {
  setCurrentActive("auth");
  setMenuOpen(false);
  navigate("/login");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // const themeClass = isDark ? "is-dark" : "is-light";
  const scrollClass = scrolled ? "is-scrolled" : "";
  const drawerClass = menuOpen ? "is-open" : "";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <nav
        aria-label="Primary navigation"
        className={`site-navbar is-dark ${scrollClass}`} //${themeClass} 
      >
        <div className="nav-shell">
          <button
            type="button"
            aria-label="Go to homepage hero"
            onClick={() => handleNavClick("home")}
            className="brand-lockup"
          >
            <span className="navbar-logo-wrapper">
              <img src="/Logo.png" alt="SambhavPay" className="navbar-logo-img" />
            </span>
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentActive === item;

              if (item === "products") {
                return (
                  <div
  key={item}
  className={`nav-dropdown-wrap ${dropdownOpen ? "is-dropdown-open" : ""}`}
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
                    <button
                      type="button"
                      onClick={handleProductsOverviewClick}
                      aria-current={isActive ? "page" : undefined}
                      aria-haspopup="true"
                      className={`nav-link nav-link-with-arrow ${isActive ? "is-active" : ""}`}
                    >
                      Products
                      <span className="nav-chevron" aria-hidden="true">⌄</span>
                      {isActive && <span className="nav-active-line" aria-hidden="true" />}
                    </button>

                    <div className="products-dropdown" role="menu" aria-label="Products menu">
                      <div className="products-dropdown-highlight">
                        <strong>Payment Orchestration</strong>
                        <span>Smart Routing. Higher Success Rates</span>
                        <small>Multi-bank routing · Failover · Optimization</small>
                      </div>

                      <div className="products-dropdown-list">
                        {productNavItems.map((product) => (
                          <button
                            type="button"
                            key={product.slug}
                            role="menuitem"
                            onClick={() => handleProductClick(product.slug)}
                            className="products-dropdown-item"
                          >
                            <span>{product.icon}</span>
                            <div>
                              <strong>{product.label}</strong>
                              <small>{product.description}</small>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => handleNavClick(item)}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link ${isActive ? "is-active" : ""}`}
                >
                  {item}
                  {isActive && <span className="nav-active-line" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          <div className="nav-actions">
            {/* <ThemeToggle mode={mode} onToggle={toggleTheme} c={c} /> */}

            <PrimaryButton
  gradient={c.grad1}
  className="desktop-action nav-cta"
  onClick={handleAuthClick}
>
  Login / Signup
</PrimaryButton>

            <button
              type="button"
              aria-label="Open mobile menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="hamburger"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Close mobile menu overlay"
        className={`mobile-menu-overlay is-dark ${drawerClass}`}// ${themeClass}
        onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
      />

      <aside
        aria-label="Mobile navigation"
        className={`mobile-drawer is-dark ${drawerClass}`}//${themeClass}
      >
        <div className="mobile-drawer-header">
          <div>
            <strong>SambhavPay</strong>
            <small>Empowering Digital Bharat</small>
          </div>

          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
            className="drawer-close"
          >
            ✕
          </button>
        </div>

        {/* <div className="drawer-theme-toggle">
          <ThemeToggle mode={mode} onToggle={toggleTheme} c={c} />
        </div> */}

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <React.Fragment key={item}>
              <button
  type="button"
  onClick={() =>
    item === "products"
      ? setMobileProductsOpen((prev) => !prev)
      : handleNavClick(item)
  }
  className={currentActive === item ? "is-active" : ""}
  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
>
  {item}
  {item === "products" && (
    <span style={{
      fontSize: "14px",
      transition: "transform 0.2s ease",
      transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
      display: "inline-block",
    }}>
      ⌄
    </span>
  )}
</button>

              {item === "products" && mobileProductsOpen && (
  <div className="mobile-product-links">
                  {productNavItems.map((product) => (
                    <button
                      type="button"
                      key={product.slug}
                      onClick={() => handleProductClick(product.slug)}
                    >
                      <span>{product.icon}</span>
                      {product.label}
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mobile-drawer-actions">
          <OutlineButton
            c={c}
            className="drawer-action-btn"
            onClick={() => handleNavClick("docs")}
          >
            View API Docs
          </OutlineButton>

          <PrimaryButton
  gradient={c.grad1}
  className="drawer-action-btn"
  onClick={handleAuthClick}
>
  Login / Signup
</PrimaryButton>
        </div>
      </aside>
    </>
  );
}