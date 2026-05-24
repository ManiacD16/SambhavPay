import React, { useEffect, useState } from "react";
import { navItems } from "../../utils/data";
import { PrimaryButton, OutlineButton, ThemeToggle } from "../UI";

export default function Navbar({
  c,
  mode,
  toggleTheme,
  scrolled,
  active,
  scrollTo,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(active || "home");

  const isDark = mode === "dark";

  useEffect(() => {
    if (active) {
      setCurrentActive(active);
    }
  }, [active]);

  const handleNavClick = (id) => {
    setCurrentActive(id);
    setMenuOpen(false);
    scrollTo(id);
  };

  const themeClass = isDark ? "is-dark" : "is-light";
  const scrollClass = scrolled ? "is-scrolled" : "";
  const drawerClass = menuOpen ? "is-open" : "";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <nav
        aria-label="Primary navigation"
        className={`site-navbar ${themeClass} ${scrollClass}`}
      >
        <div className="nav-shell">
          <button
            type="button"
            aria-label="Go to homepage hero"
            onClick={() => handleNavClick("home")}
            className="brand-lockup"
          >
            <span className="brand-mark">
              <span />
            </span>

            <span className="brand-text">
              <span>SambhavPay</span>
              <small>Empowering Digital Bharat</small>
            </span>
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => handleNavClick(item)}
                aria-current={currentActive === item ? "page" : undefined}
                className={`nav-link ${
                  currentActive === item ? "is-active" : ""
                }`}
              >
                {item}
                {currentActive === item && <span aria-hidden="true" />}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle mode={mode} onToggle={toggleTheme} c={c} />

            <PrimaryButton
              gradient={c.grad1}
              className="desktop-action nav-cta"
              onClick={() => handleNavClick("contact")}
            >
              Contact Us
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
        className={`mobile-menu-overlay ${themeClass} ${drawerClass}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        aria-label="Mobile navigation"
        className={`mobile-drawer ${themeClass} ${drawerClass}`}
      >
        <div className="mobile-drawer-header">
          <div>
            <strong>SambhavPay</strong>
            <small>Empowering Digital Bharat</small>
          </div>

          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setMenuOpen(false)}
            className="drawer-close"
          >
            ✕
          </button>
        </div>

        <div className="drawer-theme-toggle">
          <ThemeToggle mode={mode} onToggle={toggleTheme} c={c} />
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleNavClick(item)}
              className={currentActive === item ? "is-active" : ""}
            >
              {item}
            </button>
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
            onClick={() => handleNavClick("contact")}
          >
            Partner With Us
          </PrimaryButton>
        </div>
      </aside>
    </>
  );
}