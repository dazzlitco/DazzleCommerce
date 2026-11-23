"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesLinks, industriesLinks } from "./nav";

const companyLinks = [
  { label: "About Us", href: "/about-us/" },
  { label: "How We Work", href: "/how-we-work/" },
  { label: "Technology Stack", href: "/our-technology-stack/" },
  { label: "Free eCommerce Audit", href: "/ecommerce-audit/" },
  { label: "Growth Assessment", href: "/ecommerce-growth-assessment/" },
  { label: "Book a Strategy Call", href: "/book-a-strategy-call/" },
  { label: "Request a Proposal", href: "/request-a-proposal/" },
  { label: "Resources", href: "/resources/" },
];

const resourcesLinks = [
  { label: "Insights", href: "/blog/" },
  { label: "Guides", href: "/guides/" },
  { label: "Comparisons", href: "/guides/comparisons/" },
  { label: "Checklists", href: "/resources/checklists/" },
  { label: "Templates", href: "/resources/templates/" },
  { label: "Glossary", href: "/resources/glossary/" },
  { label: "Statistics", href: "/resources/statistics/" },
  { label: "Tools & Calculators", href: "/tools/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Portfolio", href: "/portfolio/" },
];

const footerLocationsLinks = [
  { label: "United States", href: "/ecommerce-agency-usa/" },
  { label: "United Kingdom", href: "/ecommerce-agency-uk/" },
  { label: "London", href: "/ecommerce-agency-london/" },
  { label: "Canada", href: "/ecommerce-agency-canada/" },
  { label: "Australia", href: "/ecommerce-agency-australia/" },
  { label: "India", href: "/ecommerce-agency-india/" },
  { label: "Europe", href: "/international-ecommerce-expansion/" },
  { label: "Dubai & UAE", href: "/ecommerce-agency-dubai/" },
  { label: "Middle East & North Africa", href: "/international-ecommerce-expansion/" },
  { label: "Asia Pacific", href: "/international-ecommerce-expansion/" },
  { label: "Southeast Asia", href: "/international-ecommerce-expansion/" },
  { label: "Latin America", href: "/international-ecommerce-expansion/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookies Policy", href: "/cookies-policy/" },
  { label: "GDPR Compliance", href: "/gdpr-compliance/" },
  { label: "Affiliate Disclaimer", href: "/affiliate-disclaimer/" },
  { label: "Site Map", href: "/site-map/" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ ok: false, text: "Please enter a valid email address." });
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("dazzle-newsletter") || "[]");
      existing.push({ email: email.trim(), at: new Date().toISOString() });
      localStorage.setItem("dazzle-newsletter", JSON.stringify(existing));
    } catch {
      // storage unavailable — still confirm
    }
    setMessage({ ok: true, text: `Thanks — ${email.trim()} is subscribed to The Margin Memo.` });
    setEmail("");
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" aria-label="Dazzle Commerce — home">
              <Image src="/images/logo-footer.svg" alt="Dazzle Commerce" width={220} height={48} />
            </Link>
            <p className="footer-tagline" style={{ marginTop: "18px" }}>
              Scale. Optimize. Succeed.
            </p>
            <p>
              A full-service eCommerce management and marketing agency helping online brands
              and marketplace sellers grow revenue across Shopify, Amazon, WooCommerce, Walmart,
              TikTok Shop, eBay and Etsy.
            </p>
            <div className="social-row">
              <a href="https://www.linkedin.com/company/dazzlecommerce">LinkedIn</a>
              <a href="https://www.facebook.com/dazzlecommerce">Facebook</a>
              <a href="https://x.com/dazzlecommerce">X</a>
              <a href="https://www.instagram.com/dazzlecommerce">Instagram</a>
              <a href="https://www.youtube.com/@dazzlecommerce">YouTube</a>
            </div>
          </div>

          <div>
            <h2>Company</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {companyLinks.map((l) => (
                <li key={l.href + l.label} style={{ marginBottom: "0.45rem" }}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Resources</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {resourcesLinks.map((l) => (
                <li key={l.href + l.label} style={{ marginBottom: "0.45rem" }}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-cols">
          <div>
            <h2>Locations</h2>
            <ul>
              {footerLocationsLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/locations-we-serve/">All locations</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {servicesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/platforms/">Platforms We Support</Link>
              </li>
              <li>
                <Link href="/services/">All Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Industries</h2>
            <ul>
              {industriesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/industries/">All industries</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Platforms</h2>
            <ul>
              <li>
                <Link href="/shopify-agency/">Shopify</Link>
              </li>
              <li>
                <Link href="/woocommerce-agency/">WooCommerce</Link>
              </li>
              <li>
                <Link href="/wix-agency/">Wix</Link>
              </li>
              <li>
                <Link href="/squarespace-agency/">Squarespace</Link>
              </li>
              <li>
                <Link href="/bigcommerce-agency/">BigCommerce</Link>
              </li>
              <li>
                <Link href="/adobe-commerce-agency/">Adobe Commerce</Link>
              </li>
              <li>
                <Link href="/amazon-agency/">Amazon</Link>
              </li>
              <li>
                <Link href="/walmart-marketplace-management/">Walmart</Link>
              </li>
              <li>
                <Link href="/ebay-store-management/">eBay</Link>
              </li>
              <li>
                <Link href="/etsy-shop-management/">Etsy</Link>
              </li>
              <li>
                <Link href="/tiktok-shop-agency/">TikTok Shop</Link>
              </li>
              <li>
                <Link href="/daraz-seller-management/">Daraz</Link>
              </li>
              <li>
                <Link href="/shopee-seller-management/">Shopee</Link>
              </li>
              <li>
                <Link href="/lazada-seller-management/">Lazada</Link>
              </li>
              <li>
                <Link href="/noon-seller-management/">noon</Link>
              </li>
              <li>
                <Link href="/jumia-seller-management/">Jumia</Link>
              </li>
              <li>
                <Link href="/aliexpress-seller-management/">AliExpress</Link>
              </li>
              <li>
                <Link href="/alibaba-b2b-agency/">Alibaba.com</Link>
              </li>
              <li>
                <Link href="/1688-b2b-agency/">1688</Link>
              </li>
              <li>
                <Link href="/made-in-china-b2b-agency/">Made-in-China</Link>
              </li>
              <li>
                <Link href="/dhgate-b2b-agency/">DHgate</Link>
              </li>
              <li>
                <Link href="/platforms/">All Platforms</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact" style={{ paddingBottom: "8px" }}>
          <h2>Get in Touch</h2>
          <p>1201 Commerce Street, Suite 480 Austin, TX 78701, United States</p>
          <p>
            <a href="tel:+15550102400">+1 (555) 010-2400</a>
          </p>
          <p>
            <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>
          </p>
          <p>Mon–Fri, 9:00–18:00 CT</p>
        </div>

        <div className="newsletter">
          <h4>The Margin Memo</h4>
          <p>
            One email a fortnight: a benchmark, a teardown, one thing to change this week.
          </p>
          <form className="newsletter-form" onSubmit={subscribe} noValidate aria-label="Newsletter">
            <label htmlFor="newsletter-email" style={{ position: "absolute", left: "-9999px" }}>
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@yourbrand.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn" type="submit">
              Subscribe
            </button>
          </form>
          {message && (
            <p className={`form-msg ${message.ok ? "ok" : "err"}`} role="status">
              {message.text}
            </p>
          )}
          <button
            className="benchmark-link"
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-register"))}
          >
            Get the eCommerce benchmarks other agencies charge for
          </button>
        </div>

        <div className="footer-legal">
          <p style={{ margin: 0 }}>© 2022-2026 Dazzle Commerce. All rights reserved.</p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
