import React from "react";

export function SectionBadge({ children, color, bg, border }) {
  return (
    <div className="section-badge" style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: bg || "rgba(47, 128, 237, 0.10)",
      border: `1px solid ${border || "rgba(47, 128, 237, 0.24)"}`,
      borderRadius: 100, padding: "7px 18px",
      fontSize: 12, fontWeight: 800, letterSpacing: "1.5px",
      textTransform: "uppercase", color: color || "#2F80ED",
      marginBottom: 20,
      boxShadow: "0 8px 22px rgba(7, 24, 47, 0.04)",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color || "#2F80ED", boxShadow: `0 0 16px ${color || "#2F80ED"}` }} />
      {children}
    </div>
  );
}

export function SectionTitle({ children, style = {} }) {
  return (
    <h2 style={{
      fontFamily: "'Clash Display', system-ui, sans-serif",
      fontSize: "clamp(32px, 5vw, 58px)",
      fontWeight: 700, lineHeight: 1.06,
      letterSpacing: "-1.7px", marginBottom: 18,
      textWrap: "balance",
      ...style,
    }}>
      {children}
    </h2>
  );
}

export function SectionSub({ children, style = {} }) {
  return (
    <p style={{
      fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.78, fontWeight: 400,
      maxWidth: 600, ...style,
    }}>
      {children}
    </p>
  );
}

export function GradientText({ children, gradient }) {
  return (
    <span style={{
      background: gradient || "linear-gradient(135deg, #56CCF2, #2F80ED)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {children}
    </span>
  );
}

export function CheckItem({ children, color }) {
  // Kept the checkmark green (#14865D) for positive UX association, but it can be overridden via the 'color' prop
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 11 }}>
      <div style={{
        width: 23, height: 23, borderRadius: "50%",
        background: (color || "#14865D") + "16",
        border: `1px solid ${(color || "#14865D")}22`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, color: color || "#14865D", fontWeight: 800, flexShrink: 0, marginTop: 1,
      }}>✓</div>
      <span style={{ fontSize: 15, lineHeight: 1.55 }}>{children}</span>
    </div>
  );
}

export function StatBadge({ value, suffix, label, color, decimals = 0 }) {
  return (
    <div style={{
      background: (color || "#2F80ED") + "10",
      border: `1px solid ${(color || "#2F80ED")}24`,
      borderRadius: 14, padding: "14px 20px", textAlign: "center",
    }}>
      <div style={{
        fontFamily: "'Clash Display', sans-serif",
        fontSize: 24, fontWeight: 700, color: color || "#2F80ED",
      }}>
        {typeof value === "number" ? value.toLocaleString(undefined, { maximumFractionDigits: decimals }) : value}{suffix}
      </div>
      <div style={{ fontSize: 12, marginTop: 2, fontWeight: 600, opacity: 0.72 }}>{label}</div>
    </div>
  );
}

export function GlassCard({ children, color, c, style = {} }) {
  return (
    <div style={{
      background: c?.glassCard || "rgba(255,255,255,0.82)",
      border: `1px solid ${(color || "#2F80ED")}20`,
      borderRadius: 24,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      boxShadow: `0 22px 65px ${(color || "#2F80ED")}14`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export function PrimaryButton({ children, onClick, style = {}, gradient, className, type = "button", ...rest }) {
  return (
    <button type={type} onClick={onClick} className={className} style={{
      background: gradient || "linear-gradient(135deg, #56CCF2, #2F80ED)",
      border: "none", color: "#fff", borderRadius: 14,
      padding: "8px 10px", fontSize: 15, fontWeight: 750,
      cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.2px",
      boxShadow: "0 12px 34px rgba(47, 128, 237, 0.26)",
      transition: "transform 0.25s, box-shadow 0.25s, filter 0.25s", willChange: "transform",
      ...style,
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 18px 44px rgba(47, 128, 237, 0.34)"; e.currentTarget.style.filter = "saturate(1.04)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = style.boxShadow || "0 12px 34px rgba(47, 128, 237, 0.26)"; e.currentTarget.style.filter = "none"; }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ children, onClick, c, style = {}, className, type = "button", ...rest }) {
  return (
    <button type={type} onClick={onClick} className={className} style={{
      background: c?.outlineBg || "rgba(255,255,255,0.68)",
      border: `1px solid ${c?.border || "rgba(7,24,47,0.12)"}`,
      color: c?.text || "#07182F", borderRadius: 14,
      padding: "14px 28px", fontSize: 15, fontWeight: 700,
      cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s",
      boxShadow: "0 6px 20px rgba(7,24,47,0.04)",
      ...style,
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = (c?.accent || "#2F80ED"); e.currentTarget.style.color = (c?.accent || "#2F80ED"); e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = (c?.border || "rgba(7,24,47,0.12)"); e.currentTarget.style.color = (c?.text || "#07182F"); e.currentTarget.style.transform = "translateY(0)"; }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ThemeToggle({ mode, onToggle, c }) {
  const isDark = mode === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={onToggle}
      className="theme-toggle"
      style={{
        width: 68,
        height: 38,
        borderRadius: 999,
        border: `1px solid ${isDark ? "rgba(96,165,250,0.34)" : c?.border || "rgba(7,24,47,0.12)"}`,
        background: isDark
          ? "linear-gradient(135deg, rgba(37,99,255,0.28), rgba(124,58,237,0.20))"
          : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(234,245,255,0.90))",
        boxShadow: isDark
          ? "0 12px 32px rgba(37,99,255,0.22), inset 0 0 18px rgba(0,183,255,0.10)"
          : "0 10px 28px rgba(7,24,47,0.08)",
        position: "relative",
        padding: 4,
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(.22,.68,0,1)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "radial-gradient(circle at 72% 28%, rgba(0,183,255,0.34), transparent 28%), radial-gradient(circle at 20% 80%, rgba(124,58,237,0.28), transparent 26%)"
            : "radial-gradient(circle at 22% 28%, rgba(86,204,242,0.35), transparent 28%)",
          opacity: 0.95,
        }}
      />
      <span
        aria-hidden="true"
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          transform: isDark ? "translateX(30px)" : "translateX(0)",
          background: isDark
            ? "linear-gradient(135deg,#0B1633,#1D4ED8)"
            : "linear-gradient(135deg,#FFFFFF,#EAF5FF)",
          boxShadow: isDark
            ? "0 0 24px rgba(37,99,255,0.62), inset -5px -5px 12px rgba(0,0,0,0.35)"
            : "0 5px 16px rgba(47,128,237,0.22), inset -4px -4px 10px rgba(47,128,237,0.10)",
          position: "relative",
          zIndex: 1,
          display: "grid",
          placeItems: "center",
          transition: "transform 0.42s cubic-bezier(.22,.68,0,1), background 0.35s, box-shadow 0.35s",
        }}
      >
        <span style={{ fontSize: 14, lineHeight: 1 }}>{isDark ? "☾" : "☀"}</span>
      </span>
    </button>
  );
}
