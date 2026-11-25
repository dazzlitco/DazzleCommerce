"use client";

import { useEffect, useRef, useState } from "react";
import PlatformLogo, { type PlatformLogoKey } from "./PlatformLogo";

/* Dynamic hero dashboard — a living recreation of the hero image Alif
   supplied (dashboard overview: revenue, orders, ROAS, growth chart,
   top products, marketing performance, platform tiles). Motion: count-up
   numbers, drawing charts, animated bars, floating cards, mouse tilt.
   Interactive: sidebar nav, selectable top products, hover lifts.
   Owner-requested deviation from the static live image (2026-11-24). */

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

const fmtInt = (v: number) => Math.round(v).toLocaleString("en-US");

const SIDEBAR = [
  { label: "Overview", icon: "fa-solid fa-table-cells-large" },
  { label: "Orders", icon: "fa-solid fa-bag-shopping" },
  { label: "Products", icon: "fa-solid fa-box-open" },
  { label: "Customers", icon: "fa-solid fa-users" },
  { label: "Marketing", icon: "fa-solid fa-bullhorn" },
  { label: "Reports", icon: "fa-solid fa-chart-column" },
  { label: "Settings", icon: "fa-solid fa-gear" },
];

const PRODUCTS = [
  { name: "Wireless Headphones", price: "$24,850", share: 44, icon: "fa-solid fa-headphones" },
  { name: "Smart Watch Series 8", price: "$18,420", share: 33, icon: "fa-solid fa-clock" },
  { name: "Portable Bluetooth Speaker", price: "$12,980", share: 23, icon: "fa-brands fa-bluetooth-b" },
];

const MARKETING = [
  { name: "Google Ads", icon: "fa-brands fa-google", color: "#4285f4", spend: "$12,450", delta: "↑ 32%", width: 100 },
  { name: "Meta Ads", icon: null, meta: true, color: "#0082fb", spend: "$9,200", delta: "↑ 28%", width: 74 },
  { name: "TikTok Ads", icon: "fa-brands fa-tiktok", color: "#111827", spend: "$4,870", delta: "↑ 42%", width: 39 },
  { name: "Email Campaigns", icon: "fa-solid fa-envelope", color: "#0b5bf4", spend: "$2,840", delta: "↑ 18%", width: 23 },
];

const PLATFORMS: { name: string; mark: PlatformLogoKey }[] = [
  { name: "Amazon", mark: "amazon" },
  { name: "Shopify", mark: "shopify" },
  { name: "Walmart", mark: "walmart" },
  { name: "eBay", mark: "ebay" },
  { name: "TikTok", mark: "tiktok" },
];

function Sparkline({ points, color, inView }: { points: string; color: string; inView: boolean }) {
  return (
    <svg className={`dash-spark ${inView ? "in" : ""}`} viewBox="0 0 72 28" aria-hidden="true">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroDashboard() {
  const { ref: viewRef, inView } = useInView<HTMLDivElement>(0.2);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [activeNav, setActiveNav] = useState("Overview");
  const [activeProduct, setActiveProduct] = useState(0);

  const revenue = useCountUp(82635, inView);
  const orders = useCountUp(2457, inView);
  const roas = useCountUp(6.7, inView, 1300);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 5, ry: x * 7 });
  };

  return (
    <div
      className="hero-visual"
      ref={viewRef}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      aria-label="Live dashboard preview: $82,635 total revenue, 2,457 orders, 6.7x ROAS"
    >
      <div
        className="hero-dash-tilt"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        {/* Main dashboard card */}
        <div className="dash-card">
          <div className="dash-chrome">
            <span className="dash-dots" aria-hidden="true">
              <i style={{ background: "#f87171" }} />
              <i style={{ background: "#fbbf24" }} />
              <i style={{ background: "#34d399" }} />
            </span>
            <span className="dash-title">Dashboard Overview</span>
          </div>
          <div className="dash-body">
            <nav className="dash-side" aria-label="Dashboard sections">
              {SIDEBAR.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={activeNav === item.label ? "active" : ""}
                  aria-current={activeNav === item.label ? "true" : undefined}
                  onClick={() => setActiveNav(item.label)}
                >
                  <i className={item.icon} aria-hidden="true" /> {item.label}
                </button>
              ))}
            </nav>
            <div className="dash-main">
              <div className="dash-stats">
                <div className="dash-stat">
                  <span className="dash-stat-label">Total Revenue</span>
                  <strong>${fmtInt(revenue)}</strong>
                  <span className="dash-delta up">↑ 28.5%</span>
                  <Sparkline points="0,22 12,18 24,20 36,12 48,14 60,8 72,4" color="#0b5bf4" inView={inView} />
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-label">Orders</span>
                  <strong>{fmtInt(orders)}</strong>
                  <span className="dash-delta up">↑ 24.8%</span>
                  <Sparkline points="0,20 12,22 24,16 36,18 48,10 60,12 72,5" color="#16a34a" inView={inView} />
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-label">ROAS</span>
                  <strong>{roas.toFixed(1)}x</strong>
                  <span className="dash-delta up">↑ 18.2%</span>
                  <Sparkline points="0,24 12,20 24,21 36,15 48,16 60,9 72,6" color="#d97706" inView={inView} />
                </div>
              </div>
              <div className="dash-mid">
                <div className="dash-chart">
                  <div className="dash-chart-head">
                    <span>Revenue Growth</span>
                    <span>
                      <b>${fmtInt(revenue)}</b>{" "}
                      <span className="dash-delta up">↑ 28.5%</span>
                    </span>
                  </div>
                  <svg className={`dash-line ${inView ? "in" : ""}`} viewBox="0 0 560 170" aria-hidden="true">
                    <defs>
                      <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0b5bf4" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#0b5bf4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      className="dash-area"
                      d="M0,150 C40,138 70,146 110,128 C150,110 180,120 220,100 C260,80 290,92 330,70 C370,48 400,60 440,42 C480,24 520,30 560,14 L560,170 L0,170 Z"
                      fill="url(#dashArea)"
                    />
                    <path
                      className="dash-path"
                      d="M0,150 C40,138 70,146 110,128 C150,110 180,120 220,100 C260,80 290,92 330,70 C370,48 400,60 440,42 C480,24 520,30 560,14"
                      fill="none"
                      stroke="#0b5bf4"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle className="dash-dot" cx="560" cy="14" r="5" fill="#0b5bf4" />
                  </svg>
                  <div className="dash-months" aria-hidden="true">
                    <span>Mar 1</span><span>Mar 8</span><span>Mar 15</span><span>Mar 22</span><span>Mar 29</span>
                  </div>
                </div>
                <div className="dash-products">
                  <span className="dash-products-title">Top Selling Products</span>
                  {PRODUCTS.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      className={`dash-product ${activeProduct === i ? "active" : ""}`}
                      aria-pressed={activeProduct === i}
                      onClick={() => setActiveProduct(i)}
                    >
                      <span className="dash-product-thumb" aria-hidden="true">
                        <i className={p.icon} />
                      </span>
                      <span className="dash-product-name">{p.name}</span>
                      <span className="dash-product-price">{p.price}</span>
                      {activeProduct === i && (
                        <span className="dash-product-share" aria-hidden="true">
                          <span style={{ width: `${p.share}%` }} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="dash-chip chip-rev" style={{ animationDelay: "0s" }}>
          <span className="dash-chip-icon" style={{ background: "#dcfce7", color: "#16a34a" }}>
            <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
          </span>
          <span><small>Revenue</small><strong>+$82K</strong><em className="up">↑ 28.5%</em></span>
        </div>
        <div className="dash-chip chip-roas" style={{ animationDelay: "0.7s" }}>
          <span className="dash-chip-icon" style={{ background: "#dbeafe", color: "#0b5bf4" }}>
            <i className="fa-solid fa-chart-column" aria-hidden="true" />
          </span>
          <span><small>ROAS</small><strong>6.7x</strong><em className="up">↑ 18.2%</em></span>
        </div>
        <div className="dash-chip chip-conv" style={{ animationDelay: "1.2s" }}>
          <span className="dash-chip-icon" style={{ background: "#ede9fe", color: "#7c3aed" }}>
            <i className="fa-solid fa-percent" aria-hidden="true" />
          </span>
          <span><small>Conversion Rate</small><strong>3.85%</strong><em className="up">↑ 38%</em></span>
        </div>
        <div className="dash-chip chip-orders" style={{ animationDelay: "0.4s" }}>
          <span className="dash-chip-icon" style={{ background: "#ffedd5", color: "#ea580c" }}>
            <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
          </span>
          <span><small>Orders</small><strong>2,457</strong><em className="up">↑ 24.8%</em></span>
        </div>
        <div className="dash-chip chip-aov" style={{ animationDelay: "1.6s" }}>
          <span className="dash-chip-icon" style={{ background: "#dbeafe", color: "#0b5bf4" }}>
            <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
          </span>
          <span><small>AOV</small><strong>$67.42</strong><em className="up">↑ 22%</em></span>
        </div>

        {/* Rising arrow */}
        <svg className={`dash-arrow ${inView ? "in" : ""}`} viewBox="0 0 120 90" aria-hidden="true">
          <path
            d="M8,82 C40,70 62,52 88,26"
            fill="none"
            stroke="#0b5bf4"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M76,14 L92,22 L82,38 Z" fill="#0b5bf4" />
        </svg>

        {/* Commerce scene: cart, bags, boxes */}
        <div className="dash-scene" aria-hidden="true">
          <span className="dash-cart">
            <i className="fa-solid fa-cart-shopping" />
          </span>
          <span className="dash-box box-a" />
          <span className="dash-box box-b" />
          <span className="dash-bag bag-a" />
          <span className="dash-bag bag-b" />
        </div>
      </div>

      {/* Marketing performance + platforms */}
      <div className="dash-bottom">
        <div className="dash-marketing">
          <div className="dash-marketing-head">
            <span>Marketing Performance</span>
            <span className="dash-range">Last 30 Days</span>
          </div>
          {MARKETING.map((m) => (
            <div className="dash-mp-row" key={m.name}>
              <span className="dash-mp-icon" style={{ color: m.color }}>
                {m.meta ? (
                  <span className="dash-meta" aria-hidden="true">∞</span>
                ) : (
                  <i className={m.icon ?? ""} aria-hidden="true" />
                )}
              </span>
              <span className="dash-mp-name">{m.name}</span>
              <span className="dash-mp-bar" aria-hidden="true">
                <span className={inView ? "in" : ""} style={{ width: inView ? `${m.width}%` : "0%" }} />
              </span>
              <span className="dash-mp-spend">{m.spend}</span>
              <span className="dash-delta up">{m.delta}</span>
            </div>
          ))}
        </div>
        <div className="dash-platforms">
          {PLATFORMS.map((p) => (
            <span className="dash-platform" key={p.name} title={p.name}>
              <PlatformLogo brand={p.mark} size={34} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
