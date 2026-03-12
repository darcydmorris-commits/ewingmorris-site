"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/strategies", label: "Strategies" },
  { href: "/wealth-management", label: "Wealth" },
  { href: "/activism-special-situations", label: "Activism" },
  { href: "/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.inner} container`}>
          <Link href="/" className={styles.brand} aria-label="Ewing Morris home" onClick={() => setOpen(false)}>
            <span className={styles.mark}>EM</span>
            <span className={styles.wordmark}>Ewing Morris</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className={styles.cta}>
            Request a Private Consultation
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
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
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className={styles.mobileCta} onClick={() => setOpen(false)}>
              Request a Private Consultation
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
