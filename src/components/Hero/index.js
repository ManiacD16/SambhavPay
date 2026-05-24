import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  Building2,
  Cloud,
  Code2,
  CreditCard,
  Fingerprint,
  Lock,
  ReceiptText,
  Send,
  ShieldCheck,
  Tag,
  Users,
  Zap,
} from "lucide-react";
import { PrimaryButton, OutlineButton } from "../UI";

const PRODUCT_CARDS = [
  {
    icon: Send,
    label: "DMT",
    sub: "Domestic Money Transfer",
    color: "#8B5CF6",
  },
  {
    icon: Fingerprint,
    label: "AEPS",
    sub: "Aadhaar Enabled Payment System",
    color: "#22C985",
  },
  {
    icon: ReceiptText,
    label: "BBPS",
    sub: "Bharat Bill Payment System",
    color: "#A855F7",
  },
  {
    icon: CreditCard,
    label: "Payment Gateway",
    sub: "Secure & Fast Transactions",
    color: "#2563FF",
  },
  {
    icon: Users,
    label: "Vendor Payout",
    sub: "Automated Disbursement",
    color: "#22C985",
  },
  {
    icon: Tag,
    label: "WhiteLabel Solutions",
    sub: "Launch Your Brand in No Time",
    color: "#F59E0B",
  },
];

const NODE_CARDS = [
  {
    icon: Send,
    label: "DMT",
    color: "#8B5CF6",
    className: "node-dmt",
  },
  {
    icon: ReceiptText,
    label: "BBPS",
    color: "#38BDF8",
    className: "node-bbps",
  },
  {
    icon: Fingerprint,
    label: "AEPS",
    color: "#22C985",
    className: "node-aeps",
  },
  {
    icon: CreditCard,
    label: "Payment\nGateway",
    color: "#A855F7",
    className: "node-pay",
  },
  {
    icon: Users,
    label: "Vendor\nPayout",
    color: "#22C985",
    className: "node-vendor",
  },
  {
    icon: Tag,
    label: "WhiteLabel\nSolutions",
    color: "#F59E0B",
    className: "node-white",
  },
];

const HERO_STATS = [
  {
    icon: ShieldCheck,
    end: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime & Reliability",
    color: "#2563FF",
  },
  {
    icon: Zap,
    end: 500,
    suffix: "+",
    label: "APIs & Endpoints",
    color: "#F59E0B",
  },
  // {
  //   icon: Building2,
  //   end: 1000,
  //   suffix: "+",
  //   label: "Partners Pan India",
  //   color: "#A855F7",
  // },
  {
    icon: Users,
    end: 10,
    suffix: "M+",
    label: "Transactions Processed",
    color: "#22C985",
  },
];

const ASSURANCE_ITEMS = [
  {
    icon: ShieldCheck,
    title: "Bank Grade",
    sub: "Security",
  },
  {
    icon: Lock,
    title: "Encrypted",
    sub: "Transactions",
  },
  {
    icon: Cloud,
    title: "Scalable",
    sub: "Infrastructure",
  },
  {
    icon: Code2,
    title: "Developer",
    sub: "Friendly APIs",
  },
];

function ParticleCanvas({ particleColor }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    let id;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    if (reduceMotion) {
      return () => window.removeEventListener("resize", resize);
    }

    const isMobile = window.innerWidth < 700;

    const particles = Array.from({ length: isMobile ? 28 : 58 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random() * 0.7 + 0.18,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor},${p.a * 0.24})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);

          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${particleColor},${
              0.12 * (1 - d / 120)
            })`;
            ctx.lineWidth = 0.45;
            ctx.stroke();
          }
        }
      });

      id = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, [particleColor]);

  return <canvas aria-hidden="true" ref={ref} className="hero-particle-canvas" />;
}

function AnimatedCounter({ end, suffix, decimals = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1600;
        const step = 16;
        let time = 0;

        const id = setInterval(() => {
          time += step;

          const progress = Math.min(time / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);

          el.textContent =
            (ease * end).toLocaleString(undefined, {
              maximumFractionDigits: decimals,
            }) + suffix;

          if (progress >= 1) clearInterval(id);
        }, step);

        obs.disconnect();
      },
      { threshold: 0.3 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [end, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

function HeroBadge() {
  return (
    <div className="hero-badge fade-in">
      <span />
      TSP & FINTECH API COMPANY
    </div>
  );
}

function ProductStrip() {
  return (
    <div className="product-strip fade-in-4">
      {PRODUCT_CARDS.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="product-mini-card"
            key={item.label}
            style={{ "--mini-color": item.color }}
          >
            <Icon size={25} strokeWidth={1.8} />
            <strong>{item.label}</strong>
            <span>{item.sub}</span>
          </div>
        );
      })}
    </div>
  );
}

function HeroStats() {
  return (
    <div className="hero-stats fade-in-4">
      {HERO_STATS.map((item) => {
        const Icon = item.icon;

        return (
          <div
            className="hero-stat"
            key={item.label}
            style={{ "--stat-color": item.color }}
          >
            <div className="hero-stat-icon">
              <Icon size={24} strokeWidth={1.8} />
            </div>

            <div>
              <strong>
                <AnimatedCounter
                  end={item.end}
                  suffix={item.suffix}
                  decimals={item.decimals || 0}
                />
              </strong>
              <span>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceNode({ item }) {
  const Icon = item.icon;

  return (
    <div
      className={`hero-node ${item.className}`}
      style={{ "--node-color": item.color }}
    >
      <div className="hero-node-icon">
        <Icon size={34} strokeWidth={1.7} />
      </div>

      <div className="hero-node-label">
        {item.label.split("\n").map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </div>
  );
}

function ApiCoreVisual() {
  return (
    <div className="api-core">
      <div className="core-shadow" />
      <div className="core-layer core-layer-3" />
      <div className="core-layer core-layer-2" />
      <div className="core-layer core-layer-1" />

      <div className="core-top">
        <div className="core-logo">
          <span />
        </div>
      </div>
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg
      className="connection-lines"
      viewBox="0 0 720 560"
      fill="none"
      aria-hidden="true"
    >
      <path d="M352 252 C305 175 242 145 178 112" />
      <path d="M392 235 C430 158 487 104 545 76" />
      <path d="M462 282 C535 252 590 255 650 292" />
      <path d="M286 307 C215 307 157 319 105 348" />
      <path d="M345 352 C322 407 320 446 318 505" />
      <path d="M458 342 C516 384 564 410 628 428" />
    </svg>
  );
}

function AssurancePanel() {
  return (
    <div className="assurance-panel">
      <h3>Built for Performance. Secured for Trust.</h3>

      <div>
        {ASSURANCE_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <span key={item.title}>
              <Icon size={23} strokeWidth={1.7} />
              <b>{item.title}</b>
              <small>{item.sub}</small>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-api-visual"
      aria-label="SambhavPay API ecosystem illustration"
    >
      <ConnectionLines />
      <ApiCoreVisual />

      {NODE_CARDS.map((node) => (
        <ServiceNode key={node.className} item={node} />
      ))}

      <AssurancePanel />
    </div>
  );
}

export default function Hero({ c, scrollTo }) {
  const isDark = c.mode === "dark";
  const themeClass = isDark ? "is-dark" : "is-light";
  const particleColor = isDark ? c.particleColor || "37,99,255" : "37,99,255";

  return (
    <section id="home" className={`hero-api-section ${themeClass}`}>
      <ParticleCanvas particleColor={particleColor} />

      <div aria-hidden="true" className="hero-grid-glow" />
      <div aria-hidden="true" className="hero-dotted-field" />

      <div className="hero-api-inner">
        <div className="hero-api-copy">
          <HeroBadge />

          <h1 className="hero-api-title fade-in-1">
            One API.
            <br />
            Infinite <span>Possibilities.</span>
          </h1>

          <p className="hero-api-sub fade-in-2">
            SambhavPay empowers businesses with robust, secure & scalable
            fintech APIs to build the next generation financial ecosystem.
          </p>

          <div className="hero-api-actions fade-in-3">
            <PrimaryButton gradient={c.grad1} onClick={() => scrollTo("products")}>
              Explore Products <ArrowRight className="hero-action-icon" size={16} />
            </PrimaryButton>

            <OutlineButton c={c} onClick={() => scrollTo("docs")}>
              Get API Access <Code2 className="hero-action-icon" size={16} />
            </OutlineButton>
          </div>

          <ProductStrip />
          <HeroStats />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}