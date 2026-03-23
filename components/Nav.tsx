"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

interface DropdownGroup {
  label: string;
  items: { href: string; label: string }[];
}

const dropdowns: DropdownGroup[] = [
  {
    label: "The Firm",
    items: [
      { href: "/about", label: "About" },
      { href: "/team", label: "People" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    label: "What We Do",
    items: [
      { href: "/wealth-management", label: "Private Wealth" },
      { href: "/strategies", label: "Investment Strategies" },
      { href: "/activism-special-situations", label: "Shareholder Engagement" },
    ],
  },
];

const topLevelLinks = [
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

/* flat list for mobile menu */
const allNavItems = [
  ...dropdowns.flatMap((g) => g.items),
  ...topLevelLinks,
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* close dropdown when clicking outside */
  useEffect(() => {
    const handleClick = () => setActiveDropdown(null);
    if (activeDropdown) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [activeDropdown]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.inner} container`}>
          <Link href="/" className={styles.navLogo} aria-label="Ewing Morris home" onClick={() => setOpen(false)}>
            <Image src="/logo-white.png" alt="Ewing Morris" width={220} height={22} className={styles.wordmark} priority />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {dropdowns.map((group) => (
              <div
                key={group.label}
                className={styles.dropdownWrapper}
                onMouseEnter={() => openDropdown(group.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`${styles.navLink} ${styles.dropdownTrigger}`}
                  aria-expanded={activeDropdown === group.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(activeDropdown === group.label ? null : group.label);
                  }}
                >
                  {group.label}
                  <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={`${styles.dropdown} ${activeDropdown === group.label ? styles.dropdownOpen : ""}`}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={styles.dropdownLink}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {topLevelLinks.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className={styles.cta}>
            Request a Consultation
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}>
        <div className={styles.overlayPanel}>
          <nav className={styles.mobileNav} aria-label="Mobile">
            {allNavItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
              Request a Consultation
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
