import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const authBenefits = [
  "Secure merchant dashboard access",
  "Sandbox-ready payment workspace",
  "Fast onboarding for PayIn, PayOut and APIs",
];

export default function LoginSignupPage({ c, type = "login" }) {
  const navigate = useNavigate();
  const isSignup = type === "signup";

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      className="auth-page"
      style={{
        background: `radial-gradient(circle at 12% 12%, ${c.accent}18, transparent 28%), radial-gradient(circle at 88% 18%, ${c.purple}18, transparent 30%), ${c.bg}`,
      }}
    >
      <div className="auth-shell">
        <div
          className="auth-hero-card"
          style={{
            background: c.grad1,
            boxShadow: c.shadow,
          }}
        >
          <div className="auth-glow auth-glow-one" />
          <div className="auth-glow auth-glow-two" />

          <div className="auth-badge">
            <Sparkles size={16} /> SambhavPay Business Access
          </div>

          <h1>
            {isSignup
              ? "Start your payment workspace."
              : "Welcome back to SambhavPay."}
          </h1>

          <p>
            {isSignup
              ? "Create your merchant account and prepare your business for modern collections, payouts, verification and payment orchestration."
              : "Login to manage payment operations, monitor transactions, access API tools and keep your business workflows moving."}
          </p>

          <div className="auth-benefit-list">
            {authBenefits.map((item) => (
              <div key={item} className="auth-benefit-item">
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="auth-security-card">
            <ShieldCheck size={26} />
            <div>
              <strong>Security-first infrastructure</strong>
              <span>
                Designed for trusted fintech, merchant and enterprise payment
                workflows.
              </span>
            </div>
          </div>
        </div>

        <div
          className="auth-form-card"
          style={{
            background: c.glassCard,
            borderColor: c.border,
            boxShadow: c.shadow,
          }}
        >
          <div className="auth-form-header">
            <span style={{ color: c.accent }}>
              {isSignup ? "Create Account" : "Account Login"}
            </span>

            <h2 style={{ color: c.text }}>
              {isSignup ? "Sign up to continue" : "Login to your account"}
            </h2>

            <p style={{ color: c.muted }}>
              {isSignup
                ? "Enter your business details to create your SambhavPay access request."
                : "Enter your registered email and password to access your dashboard."}
            </p>
          </div>

          <div
            className="auth-switch"
            style={{ background: c.tabBg, borderColor: c.border }}
          >
            <button
              type="button"
              onClick={() => navigate("/login")}
              className={!isSignup ? "is-active" : ""}
              style={
                !isSignup
                  ? { background: c.grad1, color: "#fff" }
                  : { color: c.muted }
              }
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className={isSignup ? "is-active" : ""}
              style={
                isSignup
                  ? { background: c.grad1, color: "#fff" }
                  : { color: c.muted }
              }
            >
              Signup
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {isSignup && (
              <div
                className="auth-field"
                style={{ background: c.inputBg, borderColor: c.border }}
              >
                <UserRound size={19} color={c.accent} />
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  style={{ color: c.text }}
                />
              </div>
            )}

            <div
              className="auth-field"
              style={{ background: c.inputBg, borderColor: c.border }}
            >
              <Mail size={19} color={c.accent} />
              <input
                type="email"
                placeholder="Business email"
                required
                style={{ color: c.text }}
              />
            </div>

            {isSignup && (
              <div
                className="auth-field"
                style={{ background: c.inputBg, borderColor: c.border }}
              >
                <Phone size={19} color={c.accent} />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  style={{ color: c.text }}
                />
              </div>
            )}

            <div
              className="auth-field"
              style={{ background: c.inputBg, borderColor: c.border }}
            >
              <LockKeyhole size={19} color={c.accent} />
              <input
                type="password"
                placeholder="Password"
                required
                style={{ color: c.text }}
              />
            </div>

            <div className="auth-form-row">
              <label style={{ color: c.muted }}>
                <input type="checkbox" />
                {isSignup ? "I agree to the onboarding terms" : "Remember me"}
              </label>

              {!isSignup && (
                <button type="button" style={{ color: c.accent }}>
                  Forgot password?
                </button>
              )}
            </div>

            <button
              type="submit"
              className="auth-submit"
              style={{ background: c.grad1 }}
            >
              {isSignup ? "Create Account" : "Login Now"}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-bottom-text" style={{ color: c.muted }}>
            {isSignup ? "Already have an account?" : "New to SambhavPay?"}{" "}
            <button
              type="button"
              onClick={() => navigate(isSignup ? "/login" : "/signup")}
              style={{ color: c.accent }}
            >
              {isSignup ? "Login" : "Create an account"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}