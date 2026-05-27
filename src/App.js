import React, { useCallback, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { useScrolled } from "./hooks/useScrolled";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { navItems } from "./utils/data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsOverviewPage from "./pages/products/ProductsOverviewPage";
import PaymentGatewayPage from "./pages/products/PaymentGatewayPage";
import PaymentOrchestrationPage from "./pages/products/PaymentOrchestrationPage";
import PayoutApiPage from "./pages/products/PayoutApiPage";
import AepsBbpsDmtPage from "./pages/products/AepsBbpsDmtPage";
import BankAccountVerificationPage from "./pages/products/BankAccountVerificationPage";
import VirtualAccountsPage from "./pages/products/VirtualAccountsPage";
import MerchantOnboardingPage from "./pages/products/MerchantOnboardingPage";
import WhiteLabelPlatformPage from "./pages/products/WhiteLabelPlatformPage";
import LoginSignupPage from "./pages/auth/LoginSignupPage";
import "./styles/global.css";

export default function App() {
  const { mode, toggle, c } = useTheme();
  const scrolled = useScrolled(50);
  const activeSection = useScrollSpy(navItems);
  const navigate = useNavigate();
  const location = useLocation();
  const isProductRoute = location.pathname.startsWith("/products");
  const isAuthRoute = location.pathname === "/login" || location.pathname === "/signup";
  const active = isAuthRoute ? "auth" : isProductRoute ? "products" : activeSection;

  const scrollToElement = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollTo = useCallback((id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    scrollToElement(id);
  }, [location.pathname, navigate, scrollToElement]);

  const navigateToProductsOverview = useCallback(() => {
    navigate("/products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const navigateToProduct = useCallback((slug) => {
    navigate(`/products/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const timer = window.setTimeout(() => {
        scrollToElement(id);
        navigate(location.pathname, { replace: true, state: {} });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [location.pathname, location.state, navigate, scrollToElement]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const timer = window.setTimeout(() => scrollToElement(id), 80);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [location.pathname, location.hash, scrollToElement]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll(".section, .reveal-on-scroll"));

    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (alreadyInView) {
        node.classList.add("is-visible");
        return;
      }

      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <div data-theme={mode} style={{ background: c.bg, color: c.text, minHeight: "100vh", transition: "background 0.35s ease, color 0.35s ease" }}>
        <Navbar
          c={c}
          mode={mode}
          toggleTheme={toggle}
          scrolled={scrolled}
          active={active}
          scrollTo={scrollTo}
          navigateToProductsOverview={navigateToProductsOverview}
          navigateToProduct={navigateToProduct}
        />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home c={c} scrollTo={scrollTo} />} />
            <Route path="/products" element={<ProductsOverviewPage c={c} />} />
            <Route path="/products/payment-gateway" element={<PaymentGatewayPage c={c} />} />
            <Route path="/products/payment-orchestration" element={<PaymentOrchestrationPage c={c} />} />
            <Route path="/products/payout-api" element={<PayoutApiPage c={c} />} />
            <Route path="/products/aeps-bbps-dmt" element={<AepsBbpsDmtPage c={c} />} />
            <Route path="/products/bank-account-verification-api" element={<BankAccountVerificationPage c={c} />} />
            <Route path="/products/virtual-accounts" element={<VirtualAccountsPage c={c} />} />
            <Route path="/products/merchant-onboarding" element={<MerchantOnboardingPage c={c} />} />
            <Route path="/products/white-label-platform" element={<WhiteLabelPlatformPage c={c} />} />
            <Route path="/login" element={<LoginSignupPage c={c} type="login" />} />
            <Route path="/signup" element={<LoginSignupPage c={c} type="signup" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer c={c} scrollTo={scrollTo} />
      </div>
    </HelmetProvider>
  );
}