"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  servicesLinks,
  platformsLinks,
  platformsGroups,
  platformsFoot,
  industriesLinks,
  industriesFoot,
  locationsLinks,
  locationsFoot,
  resourcesGroups,
  resourcesFoot,
  type MegaFoot,
  type NavGroup,
} from "./nav";

function MegaLinks({ links }: { links: { label: string; href: string; desc?: string }[] }) {
  return (
    <div className="mega-grid">
      {links.map((l) => (
        <Link key={l.href + l.label} href={l.href}>
          <span className="mega-link-label">{l.label}</span>
          {l.desc ? <span className="mega-link-desc">{l.desc}</span> : null}
        </Link>
      ))}
    </div>
  );
}

function MegaGroups({ groups }: { groups: NavGroup[] }) {
  return (
    <>
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mega-col-title">{g.title}</p>
          <MegaLinks links={g.links} />
        </div>
      ))}
    </>
  );
}

function MegaFooter({ foot }: { foot: MegaFoot }) {
  return (
    <div className="mega-foot">
      <p className="mega-foot-title">{foot.title}</p>
      {foot.text ? <p>{foot.text}</p> : null}
      <ul>
        {foot.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Link href={foot.cta.href} className="mega-cta">
        {foot.cta.label}
      </Link>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <div className="header-brand">
          <Link href="/" className="header-logo" aria-label="Dazzle Commerce — home">
            <Image src="/images/logo.svg" alt="Dazzle Commerce" width={140} height={48} priority />
          </Link>
          <p className="header-tagline">
            <strong>Scale. Optimize. Succeed.</strong>
          </p>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <div className="nav-item">
            <Link className="nav-link" href="/services/">
              Services <span className="caret">▾</span>
            </Link>
            <div className="mega mega-wide">
              <p className="mega-col-title">What we do</p>
              <MegaLinks links={servicesLinks} />
              <p className="mega-col-title">See how we work</p>
              <div className="mega-card">
                <p className="mega-card-title">Free growth audit</p>
                <p>
                  We audit your store, ad accounts and marketplace health, then rank every
                  opportunity by revenue impact. Yours to keep.
                </p>
                <Link href="/contact/">Book a free call</Link>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/platforms/">
              Platforms <span className="caret">▾</span>
            </Link>
            <div className="mega mega-wide">
              <p className="mega-col-title">Where we work</p>
              <MegaGroups groups={platformsGroups} />
              <MegaFooter foot={platformsFoot} />
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/industries/">
              Industries <span className="caret">▾</span>
            </Link>
            <div className="mega">
              <p className="mega-col-title">Categories we know properly</p>
              <MegaLinks links={industriesLinks} />
              <MegaFooter foot={industriesFoot} />
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/locations-we-serve/">
              Locations <span className="caret">▾</span>
            </Link>
            <div className="mega">
              <p className="mega-col-title">Markets we serve</p>
              <MegaLinks links={locationsLinks} />
              <MegaFooter foot={locationsFoot} />
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/resources/">
              Resources <span className="caret">▾</span>
            </Link>
            <div className="mega mega-wide">
              <p className="mega-col-title">The library</p>
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
              <MegaFooter foot={resourcesFoot} />
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
            <i className="fa-solid fa-phone" aria-hidden="true" /> +1 (555) 010-2400
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
