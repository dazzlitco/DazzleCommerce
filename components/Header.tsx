"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  servicesLinks,
  platformsLinks,
  industriesLinks,
  locationsLinks,
  resourcesGroups,
} from "./nav";

function MegaLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="mega-grid">
      {links.map((l) => (
        <Link key={l.href + l.label} href={l.href}>
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link href="/" className="header-logo" aria-label="Dazzle Commerce — home">
          <Image src="/images/logo.svg" alt="Dazzle Commerce" width={220} height={48} priority />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <div className="nav-item">
            <Link className="nav-link" href="/services/">
              Services <span className="caret">▾</span>
            </Link>
            <div className="mega mega-wide">
              <MegaLinks links={servicesLinks} />
              <div className="mega-foot">
                <div className="mega-foot-links">
                  <Link href="/services/">What we do</Link>
                  <Link href="/how-we-work/">See how we work</Link>
                  <Link href="/locations-we-serve/">Where we work</Link>
                </div>
                <div className="mega-card">
                  <p className="mega-card-title">Free growth audit</p>
                  <p>
                    We audit your store, ad accounts and marketplace health, then rank every
                    opportunity by revenue impact. Yours to keep.
                  </p>
                  <Link href="/book-a-strategy-call/">Book a free call</Link>
                </div>
              </div>
              <Link href="/contact/" className="mega-cta">
                Book a free call
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/platforms/">
              Platforms <span className="caret">▾</span>
            </Link>
            <div className="mega mega-wide">
              <MegaLinks links={platformsLinks} />
              <Link href="/platforms/" className="mega-cta">
                See all 21 platforms
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/industries/">
              Industries <span className="caret">▾</span>
            </Link>
            <div className="mega">
              <MegaLinks links={industriesLinks} />
              <Link href="/industries/" className="mega-cta">
                See all industries
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/locations-we-serve/">
              Locations <span className="caret">▾</span>
            </Link>
            <div className="mega">
              <MegaLinks links={locationsLinks} />
              <Link href="/locations-we-serve/" className="mega-cta">
                See all locations
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/resources/">
              Resources <span className="caret">▾</span>
            </Link>
            <div className="mega mega-wide">
              {resourcesGroups.map((g) => (
                <div key={g.title}>
                  <p className="mega-col-title">{g.title}</p>
                  {g.links.map((l) => (
                    <Link key={l.href + l.label} href={l.href}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/resources/" className="mega-cta">
                Open the Resources hub
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/contact/">
              Contact
            </Link>
          </div>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href="tel:+15550102400">
            +1 (555) 010-2400
          </a>
          <a className="btn" href="https://calendly.com/dazzlecommerce/30min">
            Get Free Strategy Call
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      <nav className={`mobile-nav${mobileOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <p className="mobile-group">Services</p>
        {servicesLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <p className="mobile-group">Platforms</p>
        {platformsLinks.map((l) => (
          <Link key={l.href + l.label} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <p className="mobile-group">Industries</p>
        {industriesLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <p className="mobile-group">Locations</p>
        {locationsLinks.map((l) => (
          <Link key={l.href + l.label} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <p className="mobile-group">Resources</p>
        {resourcesGroups.flatMap((g) => g.links).map((l) => (
          <Link key={l.href + l.label} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <p className="mobile-group">Company</p>
        <Link href="/contact/" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
        <Link href="/book-a-strategy-call/" onClick={() => setMobileOpen(false)}>
          Book a Strategy Call
        </Link>
        <Link href="/pricing/" onClick={() => setMobileOpen(false)}>
          Pricing
        </Link>
        <a href="tel:+15550102400">+1 (555) 010-2400</a>
        <a href="https://calendly.com/dazzlecommerce/30min">Get Free Strategy Call</a>
      </nav>
    </header>
  );
}
