import React, { useCallback, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useTheme } from "./hooks/useTheme";
import { useScrolled } from "./hooks/useScrolled";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { navItems } from "./utils/data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/global.css";

export default function App() {
  const { mode, toggle, c } = useTheme();
  const scrolled = useScrolled(50);
  const active = useScrollSpy(navItems);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const nodes = document.querySelectorAll(".section, .reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <div data-theme={mode} style={{ background: c.bg, color: c.text, minHeight: "100vh", transition: "background 0.35s ease, color 0.35s ease" }}>
        <Navbar c={c} mode={mode} toggleTheme={toggle} scrolled={scrolled} active={active} scrollTo={scrollTo} />
        <main id="main-content">
          <Home c={c} scrollTo={scrollTo} />
        </main>
        <Footer c={c} scrollTo={scrollTo} />
      </div>
    </HelmetProvider>
  );
}
